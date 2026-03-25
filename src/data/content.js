// ─────────────────────────────────────────────────────────────────────────────
// Site text content — edit this file to change what appears on the page.
// The markdown source of truth is DSI-Light-Paper-Draft.md in the project root.
// This is a condensed version for the scrollytelling format.
// ─────────────────────────────────────────────────────────────────────────────

export const HEADER = {
  label: 'Digital Securities Initiative & Tokenized Asset Coalition',
  title: 'Compliant DeFi',
  subtitle:
    'A Model Regulatory Framework for Tokenized Securities on Permissionless Blockchains. How the Global Access Protocol embeds compliance directly into the smart contract layer, without sacrificing the openness that makes DeFi valuable.',
  publishedBy: 'The Digital Securities Initiative & The Tokenized Asset Coalition',
  type: 'A lite paper',
}

// Each section has: actLabel (optional), heading, and paragraphs (array of strings).
// Paragraphs can include simple HTML-like markers for bold text:
//   **text** will be rendered as <strong>text</strong>
//   **text**{accent} will be rendered as <strong className="text-accent-light">text</strong>
//   **text**{red} / {amber} / {green} for colored bold

export const SECTIONS = {
  hero: {
    actLabel: 'The Opportunity',
    heading: 'Two financial systems are emerging in parallel.',
    paragraphs: [
      'The first is the **intermediated financial system**: the one most investors know. It runs through brokers, advisors, custodians, and clearing houses. It offers SIPC insurance, rules on custody and settlement, and a thick layer of institutional structure. It works. But it is slow, expensive, and fundamentally built around trusted middlemen.',
      'The second is a **disintermediated financial system**, enabled by blockchain technology. Here, an investor can self-custody their own assets, trade 24/7 on algorithmic markets, borrow against positions instantly, and compose financial products in ways that would take months to negotiate through traditional channels.',
      'We believe both of these systems should exist, and that they should coexist.',
    ],
  },

  opportunity: {
    heading: 'A $250 trillion opportunity.',
    paragraphs: [
      'Today, the onchain tokenized asset market sits at roughly **$25 billion**{accent} against a total global securities market exceeding **$250 trillion**{green}. The gap is enormous, and it represents an equally enormous opportunity.',
      'For the intermediated system, tokenization offers significant cost savings in settlement, clearing, and record-keeping. But the more interesting opportunity lies on the other side: enabling entirely new products and a fundamentally better experience for users who want to custody their own assets, access global liquidity, and transact privately.',
      'This lite paper focuses on the disintermediated financial system, where the greatest innovation is possible and where the need for a new regulatory approach is most acute.',
    ],
  },

  problem: {
    actLabel: 'The Problem',
    heading: 'Compliance vs. decentralization: an impasse.',
    paragraphs: [
      'Traditional financial regulation assumes the existence of intermediaries (brokers, custodians, transfer agents) who identify customers, monitor transactions, and enforce rules. Permissionless blockchains don\'t need such gatekeepers.',
      'This creates an impasse. Tokenized securities need compliance. Compliance has historically required centralized intermediaries. But centralized intermediaries reintroduce the very friction and cost that tokenization was supposed to eliminate.',
      'Consider an investor who holds a tokenized treasury bond on one platform and wants to use it as collateral to purchase a tokenized equity on another. Today, this simple transaction is nearly impossible. Each platform maintains its own whitelist. The investor must complete separate identity verification for both, wait for manual approval, and hope the platforms have established a bilateral integration.',
    ],
  },

  'five-problems': {
    heading: 'Five problems emerge.',
    paragraphs: [
      '**Whitelist Fragmentation.**{red} Every token issuer and platform maintains its own isolated whitelist. Users repeat KYC for every new platform. Liquidity splinters across dozens of incompatible silos rather than pooling into deep, efficient markets.',
      '**Deglobalization Letdown.**{amber} If each jurisdiction forces assets to comply with bespoke technical regimes, capital becomes siloed along political boundaries. Cross-border composability breaks down.',
      '**Surveillance Nightmare.**{red} Without proper protections, blockchains become a mass surveillance tool. Every transaction and identity is visible. Institutional adoption requires confidentiality.',
      '**Doxing Slow Burn.**{amber} Even when PII starts out hidden, poorly designed systems leak clues over time. Pseudonymity erodes, and participants become effectively de-anonymized.',
      '**Regulatory Moats.**{red} When a small group of service providers use regulatory requirements to entrench themselves, competition dies. Regulation should enable markets, not capture them.',
    ],
  },

  'regulated-zones': {
    actLabel: 'The Solution',
    heading: 'Regulated Zones: compliance without gatekeepers.',
    paragraphs: [
      'The Digital Securities Initiative (DSI) and the Tokenized Asset Coalition (TAC) propose a fundamentally different approach. Rather than choosing between compliance and decentralization, the Model Regulatory Framework embeds compliance directly into the smart contract layer of permissionless blockchains, using an open-source protocol called the **Global Access Protocol (GAP)**{accent}.',
      'The core concept is the **Regulated Zone**, a chain-agnostic compliance perimeter for tokenized securities. It is not a separate blockchain. It operates on top of existing permissionless networks like Ethereum or Solana. It is a collection of smart contracts that have all agreed to enforce the same set of rules.',
      'Because all contracts within a Regulated Zone share the same compliance protocol, they can interoperate freely. A tokenized security issued by one entity can be traded on a DEX built by another, collateralized in a lending protocol built by a third, all within the same compliance perimeter.',
    ],
  },

  'trust-anchors': {
    actLabel: 'How It Works',
    heading: 'Trust Anchors set the rules.',
    paragraphs: [
      'Every Regulated Zone needs an administrator: an entity responsible for setting compliance standards, approving and auditing service providers, and enforcing rules. We call this role the **Trust Anchor**{accent}.',
      'Each Trust Anchor administers its own Regulated Zone. It publishes standards that service providers must follow, conducts periodic audits, and maintains the Terms of Service that bind all participants.',
      'The framework supports many Trust Anchors, each governing their own Regulated Zone for different asset classes, jurisdictions, or regulatory regimes. This prevents any single entity from becoming a chokepoint. If a Trust Anchor becomes ineffective or corrupt, another organization can launch a competing Regulated Zone.',
    ],
  },

  'identity-keepers': {
    heading: 'Identity Keepers verify who you are.',
    paragraphs: [
      '**Identity Keepers**{accent} perform customer identification and due diligence, including KYC and sanctions screening, and issue privacy-preserving credentials that reflect the results. A credential might attest that a user has completed KYC and is not sanctioned, or that they qualify as an accredited investor.',
      'These credentials use **Verifiable Credentials** tied to a user\'s onchain **Digital Identity (DID)**, a persistent identifier more stable than a wallet address. The user\'s personal information never appears on the blockchain. Only a cryptographic hash is published.',
      'Data standards called **Attribute Regimes** define what information is collected and how it\'s encoded. Because these standards are shared across Regulated Zones, a user who onboards once can access a wide variety of assets and applications, solving whitelist fragmentation at its root.',
    ],
  },

  'contract-certifiers': {
    heading: 'Contract Certifiers verify the code.',
    paragraphs: [
      '**Contract Certifiers**{accent} verify that smart contracts operating within a Regulated Zone meet the zone\'s compliance standards. They review source code, confirm that required controls are implemented, and verify that real-world obligations have been satisfied.',
      'They issue **Classification Credentials** for certified contracts, which other participants can read onchain. These credentials identify a specific party called the **Contract Sponsor**, the entity deploying and taking responsibility for the contract.',
      'Smart contracts are classified under **Classification Regimes**, which define **Contract Classes**: categories with specific compliance requirements. A regime might define classes for Reg D offerings, decentralized exchanges, lending protocols, and general DeFi applications.',
    ],
  },

  'transaction-monitors': {
    heading: 'Transaction Monitors watch for bad behavior.',
    paragraphs: [
      '**Transaction Monitors**{accent} observe onchain activity within a Regulated Zone and produce signals used to detect non-compliant behavior, including sandwich attacks, structuring, sanctions proximity, and market manipulation.',
      'Unlike Identity Keepers and Contract Certifiers, Transaction Monitors do not issue credentials. Instead, they feed information to Transaction Filters and, where appropriate, to regulators. They operate on pseudonymous data and do not have access to underlying PII.',
      'For each contract they monitor, Transaction Monitors maintain an **Onchain Risk Database**: a smart contract that maps pseudonymous identifiers to **Risk Flags**. These flags express degrees of risk, not just binary blacklisting. Transaction Monitors maintain private, offchain databases of risk profiles; if criminals knew the exact detection criteria, they would adjust their techniques.',
    ],
  },

  'transaction-filters': {
    heading: 'Transaction Filters enforce the rules in real time.',
    paragraphs: [
      'All components converge in the **Transaction Filter**{accent}, the module embedded in each smart contract that enforces compliance at the moment a transaction occurs.',
      'When a user initiates a transaction, the Transaction Filter verifies that all parties and contracts hold the required credentials, that no Risk Flags block the transaction, and that contracts being composed with are themselves certified. If any credential is missing, expired, or revoked, the transaction is rejected.',
      'Users prove they hold the necessary credentials using **zero-knowledge proofs**, which verify facts about their attributes without revealing the underlying data. The smart contract confirms that a user is not sanctioned and has completed KYC, without ever learning who the user actually is.',
    ],
  },

  privacy: {
    actLabel: 'Privacy by Design',
    heading: 'No single actor sees the full picture.',
    paragraphs: [
      'The system creates a fundamental separation between three types of sensitive information: a user\'s **identity**, their **transaction history**, and the **compliance status** of the contracts they interact with. No single actor in the system has access to all three.',
      'Identity Keepers know who users are but cannot see their transactions. Transaction Monitors can see transaction patterns but cannot identify the users behind them. This separation is enforced structurally; the protocol prohibits any entity from serving as both.',
      'Rather than transacting under their real identity, users interact with each smart contract through a unique **Pseudonym**, a cryptographic identifier derived from their DID, a private secret, and the specific contract address. A user\'s pseudonym is different for every contract. These pseudonyms are also **Sybil-resistant**.',
    ],
  },

  'example-trade': {
    actLabel: 'In Practice',
    heading: 'An investor trades on a decentralized exchange.',
    paragraphs: [
      '**Onboarding.** The investor completes KYC with an Identity Keeper and receives credentials attesting that they have completed KYC and are not sanctioned.',
      '**Accessing a protocol.** The investor\'s wallet detects that the DEX and securities are in a Regulated Zone and discovers the necessary credentials. A zero-knowledge proof is generated.',
      '**Executing a trade.** The DEX\'s Transaction Filter verifies the ZK proof. The Transaction Filter also checks that the securities and contracts involved are properly credentialed.',
      '**Settlement.** The transaction executes and settles onchain. The investor holds the new security in self-custody.',
      '**Ongoing monitoring.** Transaction Monitors observe the trade. If a regulator needs to know who made the trade, they follow the referral process to the Identity Keeper. Throughout, the investor\'s personal information remained with the Identity Keeper.',
    ],
  },

  'regulatory-concerns': {
    heading: 'Addressing regulatory concerns.',
    paragraphs: [
      'The SEC and other agencies have identified specific risks associated with digital asset markets. The Model Regulatory Framework addresses each through its layered architecture:',
      '**Offering Restrictions.** Transaction Filters enforce investor eligibility and transfer restrictions. Reg D limits, Reg S geographic restrictions, and holding periods are all programmable.',
      '**Sandwich/MEV Attacks.** Transaction Monitors detect MEV patterns; certified contracts implement execution fairness controls.',
      '**Market Manipulation.** Monitors flag flash loans, oracle manipulation, wash trading. Terms of Service remedies include ejection from the Regulated Zone.',
      '**AML/Sanctions.** Credential-based with automatic revocation for OFAC designations.',
    ],
  },

  'why-it-matters': {
    actLabel: 'Why This Matters',
    heading: 'Trillions in securities, finally onchain.',
    paragraphs: [
      'The Model Regulatory Framework is a blueprint for public infrastructure that enforces key policy objectives (sanctions compliance, KYC, market integrity, investor protection) while preserving the properties that make permissionless blockchains valuable: composability, open access, competitive markets, and privacy.',
      'The vision is a global financial system where a user completes identity verification once and gains access to regulated markets worldwide. Where developers build applications that route seamlessly across jurisdictions. Where investors transact privately without exposing their positions, strategies, or personal information. And where regulators retain the tools they need.',
    ],
    footer:
      'The Global Access Protocol is currently being developed by the Digital Securities Initiative and the Tokenized Asset Coalition.',
  },
}
