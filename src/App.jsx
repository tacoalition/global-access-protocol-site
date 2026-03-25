import { useScrollObserver } from './hooks/useScrollObserver'
import { SECTION_IDS } from './data/sections'
import VisualPanel from './components/VisualPanel'

import HeroVisual from './components/visuals/HeroVisual'
import MarketGap from './components/visuals/MarketGap'
import Impasse from './components/visuals/Impasse'
import FiveProblems from './components/visuals/FiveProblems'
import RegulatedZone from './components/visuals/RegulatedZone'
import TrustAnchors from './components/visuals/TrustAnchors'
import IdentityKeepers from './components/visuals/IdentityKeepers'
import ContractCertifiers from './components/visuals/ContractCertifiers'
import TransactionMonitors from './components/visuals/TransactionMonitors'
import TransactionFilters from './components/visuals/TransactionFilters'
import PrivacyDesign from './components/visuals/PrivacyDesign'
import ExampleTrade from './components/visuals/ExampleTrade'
import RegulatoryConcerns from './components/visuals/RegulatoryConcerns'
import WhyItMatters from './components/visuals/WhyItMatters'

function Section({ id, registerRef, children }) {
  return (
    <section
      ref={registerRef(id)}
      data-section={id}
      className="mb-40 scroll-mt-20"
      id={id}
    >
      {children}
    </section>
  )
}

function ActLabel({ children }) {
  return (
    <div className="font-sans text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">
      {children}
    </div>
  )
}

function SectionHeading({ children }) {
  return <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">{children}</h2>
}

function MobileVisual({ children }) {
  return (
    <div className="lg:hidden my-10">
      {children}
    </div>
  )
}

function App() {
  const { activeSection, registerRef } = useScrollObserver(SECTION_IDS)

  const visualMap = {
    'hero': <HeroVisual active={activeSection === 'hero'} />,
    'opportunity': <MarketGap active={activeSection === 'opportunity'} />,
    'problem': <Impasse active={activeSection === 'problem'} />,
    'five-problems': <FiveProblems active={activeSection === 'five-problems'} />,
    'regulated-zones': <RegulatedZone active={activeSection === 'regulated-zones'} />,
    'trust-anchors': <TrustAnchors active={activeSection === 'trust-anchors'} />,
    'identity-keepers': <IdentityKeepers active={activeSection === 'identity-keepers'} />,
    'contract-certifiers': <ContractCertifiers active={activeSection === 'contract-certifiers'} />,
    'transaction-monitors': <TransactionMonitors active={activeSection === 'transaction-monitors'} />,
    'transaction-filters': <TransactionFilters active={activeSection === 'transaction-filters'} />,
    'privacy': <PrivacyDesign active={activeSection === 'privacy'} />,
    'example-trade': <ExampleTrade active={activeSection === 'example-trade'} />,
    'regulatory-concerns': <RegulatoryConcerns active={activeSection === 'regulatory-concerns'} />,
    'why-it-matters': <WhyItMatters active={activeSection === 'why-it-matters'} />,
  }

  return (
    <div className="min-h-screen bg-bg text-text">

      {/* ===== HERO HEADER ===== */}
      <header className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 min-h-screen flex flex-col">
        <div className="font-sans text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">
          Digital Securities Initiative
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
          Compliant DeFi
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed mb-5">
          A Model Regulatory Framework for Tokenized Securities on Permissionless Blockchains. How the Global Access Protocol embeds compliance directly into the smart contract layer—without sacrificing the openness that makes DeFi valuable.
        </p>

        <div className="font-sans text-sm mb-8 space-y-1">
          <div className="text-[10px] font-semibold text-text-muted uppercase tracking-[0.2em] mb-2">Published by</div>
          <div className="text-text-muted">
            <span className="text-text font-semibold">The Digital Securities Initiative</span>
          </div>
          <div className="text-text-muted text-xs pt-1">A light paper</div>
        </div>

        <div className="flex-[2]" />

        <div className="flex-[1]" />

        <div className="pb-10 flex justify-center">
          <div className="animate-bounce text-text-muted">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </header>

      {/* ===== STORY GRID ===== */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_42%] gap-x-12">

        {/* LEFT: scrolling text */}
        <article className="py-12">

          {/* Section 1: Hero */}
          <Section id="hero" registerRef={registerRef}>
            <ActLabel>The Opportunity</ActLabel>
            <SectionHeading>Two financial systems are emerging in parallel.</SectionHeading>
            <p>
              The first is the <strong>intermediated financial system</strong>—the one most investors know. It runs through brokers, advisors, custodians, and clearing houses. It offers SIPC insurance, rules on custody and settlement, and a thick layer of institutional structure. It works. But it is slow, expensive, and fundamentally built around trusted middlemen.
            </p>
            <p className="mt-4">
              The second is a <strong>disintermediated financial system</strong>, enabled by blockchain technology. Here, an investor can self-custody their own assets, trade 24/7 on algorithmic markets, borrow against positions instantly, and compose financial products in ways that would take months to negotiate through traditional channels.
            </p>
            <p className="mt-4">
              We believe both of these systems should exist, and that they should coexist.
            </p>
            <MobileVisual><HeroVisual active={true} /></MobileVisual>
          </Section>

          {/* Section 2: The Market Gap */}
          <Section id="opportunity" registerRef={registerRef}>
            <SectionHeading>A $250 trillion opportunity.</SectionHeading>
            <p>
              Today, the onchain tokenized asset market sits at roughly <strong className="text-accent-light font-mono">$25 billion</strong> against a total global securities market exceeding <strong className="text-green-light font-mono">$250 trillion</strong>. The gap is enormous, and it represents an equally enormous opportunity.
            </p>
            <p className="mt-4">
              For the intermediated system, tokenization offers significant cost savings in settlement, clearing, and record-keeping. But the more interesting opportunity lies on the other side: enabling entirely new products and a fundamentally better experience for users who want to custody their own assets, access global liquidity, and transact privately.
            </p>
            <p className="mt-4">
              This light paper focuses on the disintermediated financial system, where the greatest innovation is possible and where the need for a new regulatory approach is most acute.
            </p>
            <MobileVisual><MarketGap active={true} /></MobileVisual>
          </Section>

          {/* Section 3: The Problem */}
          <Section id="problem" registerRef={registerRef}>
            <ActLabel>The Problem</ActLabel>
            <SectionHeading>Compliance vs. decentralization: an impasse.</SectionHeading>
            <p>
              Traditional financial regulation assumes the existence of intermediaries—brokers, custodians, transfer agents—who identify customers, monitor transactions, and enforce rules. Permissionless blockchains don't need such gatekeepers.
            </p>
            <p className="mt-4">
              This creates an impasse. Tokenized securities need compliance. Compliance has historically required centralized intermediaries. But centralized intermediaries reintroduce the very friction and cost that tokenization was supposed to eliminate.
            </p>
            <p className="mt-4">
              Consider an investor who holds a tokenized treasury bond on one platform and wants to use it as collateral to purchase a tokenized equity on another. Today, this simple transaction is nearly impossible. Each platform maintains its own whitelist. The investor must complete separate identity verification for both, wait for manual approval, and hope the platforms have established a bilateral integration.
            </p>
            <MobileVisual><Impasse active={true} /></MobileVisual>
          </Section>

          {/* Section 4: Five Problems */}
          <Section id="five-problems" registerRef={registerRef}>
            <SectionHeading>Five problems emerge.</SectionHeading>
            <p>
              <strong className="text-red">Whitelist Fragmentation.</strong> Every token issuer and platform maintains its own isolated whitelist. Users repeat KYC for every new platform. Liquidity splinters across dozens of incompatible silos rather than pooling into deep, efficient markets.
            </p>
            <p className="mt-4">
              <strong className="text-amber">Deglobalization Letdown.</strong> If each jurisdiction forces assets to comply with bespoke technical regimes, capital becomes siloed along political boundaries. Cross-border composability breaks down.
            </p>
            <p className="mt-4">
              <strong className="text-red">Surveillance Nightmare.</strong> Without proper protections, blockchains become a mass surveillance tool. Every transaction and identity is visible. Institutional adoption requires confidentiality.
            </p>
            <p className="mt-4">
              <strong className="text-amber">Doxing Slow Burn.</strong> Even when PII starts out hidden, poorly designed systems leak clues over time. Pseudonymity erodes, and participants become effectively de-anonymized.
            </p>
            <p className="mt-4">
              <strong className="text-red">Regulatory Moats.</strong> When a small group of service providers use regulatory requirements to entrench themselves, competition dies. Regulation should enable markets, not capture them.
            </p>
            <MobileVisual><FiveProblems active={true} /></MobileVisual>
          </Section>

          {/* Section 5: Regulated Zones */}
          <Section id="regulated-zones" registerRef={registerRef}>
            <ActLabel>The Solution</ActLabel>
            <SectionHeading>Regulated Zones: compliance without gatekeepers.</SectionHeading>
            <p>
              The Digital Securities Initiative (DSI) proposes a fundamentally different approach. Rather than choosing between compliance and decentralization, DSI's Model Regulatory Framework embeds compliance directly into the smart contract layer of permissionless blockchains, using an open-source protocol called the <strong className="text-accent-light">Global Access Protocol (GAP)</strong>.
            </p>
            <p className="mt-4">
              The core concept is the <strong>Regulated Zone</strong>—a chain-agnostic compliance perimeter for tokenized securities. It is not a separate blockchain. It operates on top of existing permissionless networks like Ethereum or Solana. It is a collection of smart contracts that have all agreed to enforce the same set of rules.
            </p>
            <p className="mt-4">
              Because all contracts within a Regulated Zone share the same compliance protocol, they can interoperate freely. A tokenized security issued by one entity can be traded on a DEX built by another, collateralized in a lending protocol built by a third—all within the same compliance perimeter.
            </p>
            <MobileVisual><RegulatedZone active={true} /></MobileVisual>
          </Section>

          {/* Section 6: Trust Anchors */}
          <Section id="trust-anchors" registerRef={registerRef}>
            <ActLabel>How It Works</ActLabel>
            <SectionHeading>Trust Anchors set the rules.</SectionHeading>
            <p>
              Every Regulated Zone needs an administrator—an entity responsible for setting compliance standards, approving and auditing service providers, and enforcing rules. DSI calls this role the <strong className="text-accent-light">Trust Anchor</strong>.
            </p>
            <p className="mt-4">
              Each Trust Anchor administers its own Regulated Zone. It publishes standards that service providers must follow, conducts periodic audits, and maintains the Terms of Service that bind all participants.
            </p>
            <p className="mt-4">
              The framework supports many Trust Anchors, each governing their own Regulated Zone for different asset classes, jurisdictions, or regulatory regimes. This prevents any single entity from becoming a chokepoint. If a Trust Anchor becomes ineffective or corrupt, another organization can launch a competing Regulated Zone.
            </p>
            <MobileVisual><TrustAnchors active={true} /></MobileVisual>
          </Section>

          {/* Section 7: Identity Keepers */}
          <Section id="identity-keepers" registerRef={registerRef}>
            <SectionHeading>Identity Keepers verify who you are.</SectionHeading>
            <p>
              <strong className="text-accent-light">Identity Keepers</strong> perform customer identification and due diligence—KYC, sanctions screening—and issue privacy-preserving credentials that reflect the results. A credential might attest that a user has completed KYC and is not sanctioned, or that they qualify as an accredited investor.
            </p>
            <p className="mt-4">
              These credentials use <strong>Verifiable Credentials</strong> tied to a user's onchain <strong>Digital Identity (DID)</strong>—a persistent identifier more stable than a wallet address. The user's personal information never appears on the blockchain. Only a cryptographic hash is published.
            </p>
            <p className="mt-4">
              Data standards called <strong>Attribute Regimes</strong> define what information is collected and how it's encoded. Because these standards are shared across Regulated Zones, a user who onboards once can access a wide variety of assets and applications—solving whitelist fragmentation at its root.
            </p>
            <MobileVisual><IdentityKeepers active={true} /></MobileVisual>
          </Section>

          {/* Section 8: Contract Certifiers */}
          <Section id="contract-certifiers" registerRef={registerRef}>
            <SectionHeading>Contract Certifiers verify the code.</SectionHeading>
            <p>
              <strong className="text-accent-light">Contract Certifiers</strong> verify that smart contracts operating within a Regulated Zone meet the zone's compliance standards. They review source code, confirm that required controls are implemented, and verify that real-world obligations have been satisfied.
            </p>
            <p className="mt-4">
              They issue <strong>Classification Credentials</strong> for certified contracts, which other participants can read onchain. These credentials identify a specific party called the <strong>Contract Sponsor</strong>—the entity deploying and taking responsibility for the contract.
            </p>
            <p className="mt-4">
              Smart contracts are classified under <strong>Classification Regimes</strong>, which define <strong>Contract Classes</strong>—categories with specific compliance requirements. A regime might define classes for Reg D offerings, decentralized exchanges, lending protocols, and general DeFi applications.
            </p>
            <MobileVisual><ContractCertifiers active={true} /></MobileVisual>
          </Section>

          {/* Section 9: Transaction Monitors */}
          <Section id="transaction-monitors" registerRef={registerRef}>
            <SectionHeading>Transaction Monitors watch for bad behavior.</SectionHeading>
            <p>
              <strong className="text-accent-light">Transaction Monitors</strong> observe onchain activity within a Regulated Zone and produce signals used to detect non-compliant behavior—sandwich attacks, structuring, sanctions proximity, and market manipulation.
            </p>
            <p className="mt-4">
              They do not issue credentials. Instead, they feed information to Transaction Filters and, where appropriate, to regulators. They operate on pseudonymous data and do not have access to underlying PII.
            </p>
            <p className="mt-4">
              For each contract they monitor, Transaction Monitors maintain an <strong>Onchain Risk Database</strong>—a smart contract that maps pseudonymous identifiers to <strong>Risk Flags</strong>. These flags express degrees of risk, not just binary blacklisting. Transaction Monitors maintain private, offchain databases of risk profiles—if criminals knew the exact detection criteria, they would adjust their techniques.
            </p>
            <MobileVisual><TransactionMonitors active={true} /></MobileVisual>
          </Section>

          {/* Section 10: Transaction Filters */}
          <Section id="transaction-filters" registerRef={registerRef}>
            <SectionHeading>Transaction Filters enforce the rules in real time.</SectionHeading>
            <p>
              All components converge in the <strong className="text-accent-light">Transaction Filter</strong>—the module embedded in each smart contract that enforces compliance at the moment a transaction occurs.
            </p>
            <p className="mt-4">
              When a user initiates a transaction, the Transaction Filter verifies that all parties and contracts hold the required credentials, that no Risk Flags block the transaction, and that contracts being composed with are themselves certified. If any credential is missing, expired, or revoked, the transaction is rejected.
            </p>
            <p className="mt-4">
              Users prove they hold the necessary credentials using <strong>zero-knowledge proofs</strong>, which verify facts about their attributes without revealing the underlying data. The smart contract confirms that a user is not sanctioned and has completed KYC, without ever learning who the user actually is.
            </p>
            <MobileVisual><TransactionFilters active={true} /></MobileVisual>
          </Section>

          {/* Section 11: Privacy */}
          <Section id="privacy" registerRef={registerRef}>
            <ActLabel>Privacy by Design</ActLabel>
            <SectionHeading>No single actor sees the full picture.</SectionHeading>
            <p>
              The system creates a fundamental separation between three types of sensitive information: a user's <strong>identity</strong>, their <strong>transaction history</strong>, and the <strong>compliance status</strong> of the contracts they interact with. No single actor in the system has access to all three.
            </p>
            <p className="mt-4">
              Identity Keepers know who users are but cannot see their transactions. Transaction Monitors can see transaction patterns but cannot identify the users behind them. This separation is enforced structurally: the protocol prohibits any entity from serving as both.
            </p>
            <p className="mt-4">
              Rather than transacting under their real identity, users interact with each smart contract through a unique <strong>Pseudonym</strong>—a cryptographic identifier derived from their DID, a private secret, and the specific contract address. A user's pseudonym is different for every contract. These pseudonyms are also <strong>Sybil-resistant</strong>.
            </p>
            <MobileVisual><PrivacyDesign active={true} /></MobileVisual>
          </Section>

          {/* Section 12: Example Trade */}
          <Section id="example-trade" registerRef={registerRef}>
            <ActLabel>In Practice</ActLabel>
            <SectionHeading>An investor trades on a decentralized exchange.</SectionHeading>
            <p>
              <strong>Onboarding.</strong> The investor completes KYC with an Identity Keeper and receives credentials attesting that they have completed KYC and are not sanctioned.
            </p>
            <p className="mt-4">
              <strong>Accessing a protocol.</strong> The investor's wallet detects that the DEX and securities are in a Regulated Zone and discovers the necessary credentials. A zero-knowledge proof is generated.
            </p>
            <p className="mt-4">
              <strong>Executing a trade.</strong> The DEX's Transaction Filter verifies the ZK proof. The Transaction Filter also checks that the securities and contracts involved are properly credentialed.
            </p>
            <p className="mt-4">
              <strong>Settlement.</strong> The transaction executes and settles onchain. The investor holds the new security in self-custody.
            </p>
            <p className="mt-4">
              <strong>Ongoing monitoring.</strong> Transaction Monitors observe the trade. If a regulator needs to know who made the trade, they follow the referral process to the Identity Keeper. Throughout, the investor's personal information remained with the Identity Keeper.
            </p>
            <MobileVisual><ExampleTrade active={true} /></MobileVisual>
          </Section>

          {/* Section 13: Regulatory Concerns */}
          <Section id="regulatory-concerns" registerRef={registerRef}>
            <SectionHeading>Addressing regulatory concerns.</SectionHeading>
            <p>
              The SEC and other agencies have identified specific risks associated with digital asset markets. The Model Regulatory Framework addresses each through its layered architecture:
            </p>
            <p className="mt-4">
              <strong>Offering Restrictions</strong>—Transaction Filters enforce investor eligibility and transfer restrictions. Reg D limits, Reg S geographic restrictions, and holding periods are all programmable.
            </p>
            <p className="mt-4">
              <strong>MEV Attacks</strong>—Transaction Monitors detect patterns; certified contracts implement execution fairness controls.
            </p>
            <p className="mt-4">
              <strong>Market Manipulation</strong>—Monitors flag flash loans, oracle manipulation, wash trading. Terms of Service remedies include ejection from the Regulated Zone.
            </p>
            <p className="mt-4">
              <strong>AML/Sanctions</strong>—Credential-based with automatic revocation for OFAC designations.
            </p>
            <MobileVisual><RegulatoryConcerns active={true} /></MobileVisual>
          </Section>

          {/* Section 14: Why It Matters */}
          <Section id="why-it-matters" registerRef={registerRef}>
            <ActLabel>Why This Matters</ActLabel>
            <SectionHeading>Trillions in securities, finally on-chain.</SectionHeading>
            <p>
              The Model Regulatory Framework is a blueprint for public infrastructure that enforces key policy objectives—sanctions compliance, KYC, market integrity, investor protection—while preserving the properties that make permissionless blockchains valuable: composability, open access, competitive markets, and privacy.
            </p>
            <p className="mt-4">
              The vision is a global financial system where a user completes identity verification once and gains access to regulated markets worldwide. Where developers build applications that route seamlessly across jurisdictions. Where investors transact privately without exposing their positions, strategies, or personal information. And where regulators retain the tools they need.
            </p>
            <p className="mt-4 text-sm text-text-muted italic">
              The Global Access Protocol is currently being developed by the Digital Securities Initiative.
            </p>
            <MobileVisual><WhyItMatters active={true} /></MobileVisual>
          </Section>

        </article>

        {/* RIGHT: sticky visual panel */}
        <aside className="hidden lg:block">
          <div className="sticky top-0 h-screen relative">
            {Object.entries(visualMap).map(([id, visual]) => (
              <VisualPanel key={id} active={activeSection === id}>
                {visual}
              </VisualPanel>
            ))}
          </div>
        </aside>

      </div>
    </div>
  )
}

export default App
