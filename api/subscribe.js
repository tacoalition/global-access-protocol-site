const GHOST_MEMBERS_URL = "https://research.tacoalition.org/members/api";
const ATTIO_BASE = "https://api.attio.com/v2";

const ATTIO_GAP_LIST_ID =
  process.env.ATTIO_GAP_LIST_ID || "1a2a9294-fc3d-4b9b-ad7e-caa789939bfa";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = typeof req.body === "string" ? safeJson(req.body) : req.body || {};
  const email = (body.email || "").trim().toLowerCase();
  const fullName = (body.full_name || "").trim();
  const organization = (body.organization || "").trim();

  if (!email || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }
  if (!fullName) {
    return res.status(400).json({ error: "Please enter your full name." });
  }
  if (!organization) {
    return res.status(400).json({ error: "Please enter your organization." });
  }

  // Primary action: Ghost subscription. Failure surfaces to the user.
  try {
    await subscribeToGhost(email, fullName);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to subscribe. Please try again.";
    return res.status(502).json({ error: message });
  }

  // Secondary action: Attio. Awaited so the call completes before the
  // serverless function exits (Vercel kills the runtime as soon as we
  // return). Failures are logged but stay silent — Ghost already succeeded.
  await addToAttioGapList({ email, fullName, organization }).catch((err) => {
    console.error("Attio GAP list write failed:", err);
  });

  return res.status(200).json({ success: true });
}

function safeJson(s) {
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}

async function subscribeToGhost(email, name) {
  const tokenRes = await fetch(`${GHOST_MEMBERS_URL}/integrity-token/`, {
    method: "GET",
    headers: {
      "app-pragma": "no-cache",
      "x-ghost-version": "6.0",
    },
  });
  if (!tokenRes.ok) {
    throw new Error("Failed to authenticate with Ghost");
  }
  const integrityToken = await tokenRes.text();

  const subRes = await fetch(`${GHOST_MEMBERS_URL}/send-magic-link`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      name,
      emailType: "subscribe",
      integrityToken,
    }),
  });
  if (!subRes.ok) {
    const errorData = await subRes.json().catch(() => ({}));
    throw new Error(
      errorData.errors?.[0]?.message || "Failed to subscribe. Please try again."
    );
  }
}

async function addToAttioGapList({ email, fullName, organization }) {
  const apiKey = process.env.ATTIO_API_KEY;
  if (!apiKey) {
    console.warn("ATTIO_API_KEY missing; skipping Attio write");
    return;
  }

  const personId = await findOrCreatePerson(apiKey, { email, fullName });
  if (!personId) {
    throw new Error("Could not resolve Attio Person record");
  }

  // organization is a list-specific custom field on the GAP Signups
  // list (not a Person attribute), so it goes in entry_values.
  const entryRes = await fetch(
    `${ATTIO_BASE}/lists/${ATTIO_GAP_LIST_ID}/entries`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          parent_record_id: personId,
          parent_object: "people",
          entry_values: organization
            ? { organization: [{ value: organization }] }
            : {},
        },
      }),
    }
  );

  if (!entryRes.ok) {
    const text = await entryRes.text();
    if (entryRes.status === 409 || /already exists/i.test(text)) {
      return;
    }
    throw new Error(`Attio list entry failed: ${entryRes.status} ${text}`);
  }
}

function splitName(full) {
  const parts = full.trim().split(/\s+/);
  if (parts.length === 1) return { first_name: parts[0], last_name: "" };
  return { first_name: parts[0], last_name: parts.slice(1).join(" ") };
}

async function findOrCreatePerson(apiKey, { email, fullName }) {
  const { first_name, last_name } = splitName(fullName);

  const queryRes = await fetch(`${ATTIO_BASE}/objects/people/records/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filter: { email_addresses: { $eq: email } },
      limit: 1,
    }),
  });

  if (queryRes.ok) {
    const data = await queryRes.json();
    const existing = data.data?.[0];
    const existingId = existing?.id?.record_id;
    if (existingId) {
      // Patch only blank fields on the existing Person to avoid clobbering
      // richer data already in Attio.
      const values = {};
      const hasName =
        existing.values?.name?.[0]?.full_name ||
        existing.values?.name?.[0]?.first_name;
      if (!hasName && fullName) {
        values.name = [{ first_name, last_name, full_name: fullName }];
      }
      if (Object.keys(values).length > 0) {
        await fetch(`${ATTIO_BASE}/objects/people/records/${existingId}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: { values } }),
        });
      }
      return existingId;
    }
  }

  const createRes = await fetch(`${ATTIO_BASE}/objects/people/records`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        values: {
          email_addresses: [{ email_address: email }],
          name: [{ first_name, last_name, full_name: fullName }],
        },
      },
    }),
  });

  if (!createRes.ok) {
    const text = await createRes.text();
    throw new Error(`Attio Person create failed: ${createRes.status} ${text}`);
  }

  const created = await createRes.json();
  return created.data?.id?.record_id ?? null;
}
