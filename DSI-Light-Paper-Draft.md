# Compliant DeFi: A Model Regulatory Framework for Tokenized Securities on Permissionless Blockchains

**The Digital Securities Initiative & The Tokenized Asset Coalition**

*A lite paper*

---

## The Opportunity

Two financial systems are emerging in parallel.

The first is the **intermediated financial system**, the one most investors know. It runs through brokers, advisors, custodians, and clearing houses. It offers SIPC insurance, rules on custody and settlement, and a thick layer of institutional structure designed to preserve investor protection and mitigate systemic risk. It works. But it is slow, expensive, and fundamentally built around trusted middlemen.

The second is a **disintermediated financial system**, enabled by blockchain technology. Here, an investor can self-custody their own assets, trade 24/7 on algorithmic markets, borrow against positions instantly, and compose financial products in ways that would take months to negotiate through traditional channels. It is hyper-efficient, globally accessible, and radically open.

We believe both of these systems should exist, and that they should coexist. There are good reasons to use one or the other, or both. An institution managing retirement assets may want the full protections of the intermediated system. A sophisticated investor seeking capital efficiency and privacy may prefer to self-custody and interact directly with onchain markets. Many participants will move between the two depending on the context.

Yet today, the onchain tokenized asset market sits at roughly $25 billion against a total global securities market exceeding $250 trillion. The gap is enormous, and it represents an equally enormous opportunity. For the intermediated system, tokenization offers significant cost savings in settlement, clearing, and record-keeping. But the more interesting opportunity lies on the other side: enabling entirely new products and a fundamentally better experience for users who want to custody their own assets, access global liquidity, and transact privately.

This lite paper focuses on the latter: the disintermediated financial system, where the greatest innovation is possible and where the need for a new regulatory approach is most acute. What follows is a framework for making it work.

---

## The Problem

Traditional financial regulation assumes the existence of intermediaries (brokers, custodians, transfer agents) who identify customers, monitor transactions, and enforce rules. Permissionless blockchains don't need such gatekeepers. Anyone can deploy a smart contract, execute a transaction, or build an application without seeking approval, as long as they follow the rules encoded in software.

This creates an impasse. Tokenized securities need compliance. Compliance has historically required centralized intermediaries. But centralized intermediaries reintroduce the very friction and cost that tokenization was supposed to eliminate.

Consider a concrete example. An investor holds a tokenized treasury bond on one platform and wants to use it as collateral to purchase a tokenized equity on another. Today, this simple transaction is nearly impossible. Each platform maintains its own whitelist. The investor must complete separate identity verification for both, wait for manual approval, and hope the platforms have established a bilateral integration. Even then, the assets likely cannot interact with DeFi protocols. No lending against the bond, no automated market making, no composable strategies. The investor faces the worst of both worlds: the operational friction of traditional finance without the liquidity and flexibility of decentralized markets.

Five specific problems emerge when you look at this landscape closely.

**Whitelist Fragmentation.** Every token issuer and platform maintains its own isolated whitelist of eligible addresses. Users repeat KYC processes for every new platform. Developers write bespoke integration code for every issuer's whitelist. Liquidity splinters across dozens of incompatible silos rather than pooling into deep, efficient markets.

**Deglobalization Letdown.** If each regulatory jurisdiction forces assets to comply with bespoke technical regimes, capital becomes siloed along political boundaries. Cross-border composability, the great promise of blockchain-based finance, breaks down. Instead of a unified global market, you get a fragmented patchwork.

**Surveillance Nightmare.** Without proper protections, blockchains become a mass surveillance tool. Every transaction and identity is visible. This isn't just a civil liberties concern. It prevents investors from protecting their trading strategies, positions, and exposure. Institutional adoption requires confidentiality.

**Doxing Slow Burn.** Even when personally identifiable information starts out hidden, poorly designed systems leak clues over time. Each transaction can link wallet addresses to real identities. Over months and years, pseudonymity erodes, and a large percentage of participants become effectively de-anonymized.

**Regulatory Moats.** When a small group of service providers use regulatory requirements to entrench themselves, competition dies. If the barrier to entry for mandated compliance services is too high, the system becomes an oligopoly, and the quality of service suffers. Regulation should enable markets, not capture them.

Current tokenization efforts fail to address these problems comprehensively. They either sacrifice the openness that makes DeFi valuable or they ignore compliance entirely, leaving participants exposed to legal risk.

---

## The Solution: Regulated Zones

The Digital Securities Initiative (DSI) and the Tokenized Asset Coalition (TAC) propose a fundamentally different approach. Rather than choosing between compliance and decentralization, the Model Regulatory Framework embeds compliance directly into the smart contract layer of permissionless blockchains, using an open-source protocol called the **Global Access Protocol (GAP)**.

The core concept is the **Regulated Zone**, a chain-agnostic compliance perimeter for tokenized securities. A Regulated Zone is not a separate blockchain. It operates on top of existing permissionless networks like Ethereum or Solana. It is a collection of smart contracts that have all agreed to enforce the same set of rules, under the administration of a common governance body.

Here's what makes a Regulated Zone different from a traditional whitelist:

**It's composable.** Because all contracts within a Regulated Zone share the same compliance protocol, they can interoperate freely. A tokenized security issued by one entity can be traded on a decentralized exchange built by another, collateralized in a lending protocol built by a third, all within the same compliance perimeter, without bilateral integrations.

**It's open.** Anyone can deploy a Regulated Zone. Anyone can build applications that participate in one. The protocol doesn't pick winners among blockchains, platforms, or service providers. Even the governance layer is contestable. If one administrator becomes ineffective, another can stand up a competing Regulated Zone.

**It's enforceable.** Compliance is enforced at the smart contract level, not at the user interface. Digital asset transfers within a Regulated Zone are restricted programmatically. You can't bypass compliance by using a different front-end because the rules are baked into the code itself.

**It's privacy-preserving.** The architecture is designed so that no single actor accumulates a honeypot of sensitive data. Personal information stays with the entity that collected it. Transaction monitoring is local to individual contracts. Zero-knowledge proofs allow users to demonstrate compliance without revealing underlying data.

Participants opt into a Regulated Zone by agreeing to its Terms of Service and obtaining credentials from approved service providers. Once inside, they transact freely with other credentialed participants, knowing that all counterparties have satisfied the compliance requirements relevant to that activity. Participants who violate the rules or lose their credentials are ejected and can no longer transact within the zone.

---

## How It Works

The Model Regulatory Framework consists of both technology and people. GAP provides the smart contract infrastructure. A competitive layer of service providers supplies the human judgment that regulations require. Governance bodies called Trust Anchors set standards and maintain accountability across the system.

### Trust Anchors: Setting the Rules

Every Regulated Zone needs an administrator, an entity responsible for setting compliance standards, approving and auditing service providers, and enforcing rules. This administrator bridges the gap between rules that can be enforced by code and rules that require human input. We call this role the **Trust Anchor**.

Each Trust Anchor administers its own Regulated Zone. It publishes the standards that service providers must follow, conducts periodic audits to enforce those standards, and maintains the Terms of Service that bind all participants. All other market participants freely choose which Regulated Zones to participate in, and transactions can involve assets across multiple zones.

The framework is designed to support many Trust Anchors, each governing their own Regulated Zone for different asset classes, jurisdictions, or regulatory regimes. This prevents any single entity from becoming a chokepoint. If a Trust Anchor becomes ineffective or corrupt, another organization can launch a competing Regulated Zone, in the same way that a blockchain itself can be forked.

### Identity Keepers: Verifying Who You Are

**Identity Keepers** verify the identity of individuals and entities seeking to participate in a Regulated Zone. They perform customer identification and due diligence, including KYC and sanctions screening, and issue privacy-preserving credentials that reflect the results. A credential might attest that a user has completed KYC and is not on a sanctions list, or that they qualify as an accredited investor.

These credentials use a technology called **Verifiable Credentials**, which are tied to a user's onchain **Digital Identity (DID)**, a persistent identifier that is more stable than a wallet address. The user's personal information never appears on the blockchain. Only a cryptographic hash of that information is published, allowing credentials to be verified without exposing sensitive data.

Identity Keepers are responsible for keeping credentials current and revoking them when circumstances change, such as a user being added to a sanctions list. They also maintain custody of participants' personally identifiable information and are obligated to furnish it to regulators upon lawful request, but only to the extent required for compliance purposes.

Data standards called **Attribute Regimes** define what information is collected and how it's encoded. A Standard Verified Identity Attribute Regime, for instance, covers basic CIP data: name, date of birth, nationality, and sanctions status. An Investor Status Attribute Regime captures classifications like accredited investor or qualified purchaser. Because these standards are shared across Regulated Zones, a user who onboards once can access a wide variety of assets and applications, solving the whitelist fragmentation problem at its root.

Identity Keepers register with **Identity Trust Anchors** who set standards for how PII is collected, stored, and handled. Trust Anchors periodically audit Identity Keepers to ensure they're following proper procedures. This layered accountability structure means that the quality of credentials depends on verifiable standards, not on blind trust.

### Contract Certifiers: Verifying the Code

**Contract Certifiers** verify that smart contracts operating within a Regulated Zone meet the zone's compliance standards. They review source code, confirm that required controls are implemented, and verify that real-world obligations have been satisfied, such as confirming that a registration statement has been filed for a tokenized security.

Contract Certifiers issue **Classification Credentials** for certified contracts, which other participants can read onchain to assess whether a protocol is safe to interact with. These credentials identify a specific party called the **Contract Sponsor**, the entity deploying and taking responsibility for the contract.

Smart contracts are classified under standards called **Classification Regimes**, which define **Contract Classes**, categories with specific compliance requirements. For example, a Tokenized Securities Classification Regime might define classes for Reg D offerings, decentralized exchanges, lending protocols, and general DeFi applications, each with different requirements around transaction monitoring, investor eligibility checks, and registration obligations.

Contract Certifiers register with **Contract Trust Anchors** who adopt Classification Regimes and set rules of conduct. Because Contract Trust Anchors are completely permissionless (anyone can deploy their own), different Regulated Zones can emerge for different jurisdictions and asset classes, each with their own interpretation of regulatory requirements.

### Transaction Monitors: Watching for Bad Behavior

**Transaction Monitors** observe onchain activity within a Regulated Zone and produce signals used to detect non-compliant behavior. They monitor for patterns such as sandwich attacks, structuring, sanctions proximity, and market manipulation.

Unlike Identity Keepers and Contract Certifiers, Transaction Monitors do not issue credentials. Instead, they feed information to **Transaction Filters** and, where appropriate, to regulators. They operate on pseudonymous data and do not have access to underlying PII.

For each contract they monitor, Transaction Monitors maintain an **Onchain Risk Database**, a smart contract that maps pseudonymous identifiers to **Risk Flags**. These flags can express degrees of risk, not just binary blacklisting, and a Transaction Filter can decide the appropriate threshold for action based on the flags and the user's attributes together.

Transaction Monitors maintain private, offchain databases of risk profiles and have flexibility in deciding the specific patterns they look for. This secrecy is intentional. If criminals knew the exact detection criteria, they would simply adjust their techniques.

### Transaction Filters: Enforcing the Rules in Real Time

All of these components converge in the **Transaction Filter**, the module embedded in each smart contract that actually enforces compliance at the moment a transaction occurs.

When a user initiates a transaction, the Transaction Filter verifies that all parties and contracts involved hold the required credentials, that no relevant Risk Flags block the transaction, and that the contracts being composed with are themselves certified under acceptable Classification Regimes. If any credential is missing, expired, or revoked, the transaction is rejected. This enforcement happens at the smart contract level and cannot be bypassed.

Users prove they hold the necessary credentials using **zero-knowledge proofs**, which verify facts about their attributes without revealing the underlying data. The smart contract confirms, for example, that a user is not sanctioned and has completed KYC, without ever learning who the user actually is.

---

## Privacy by Design

The Model Regulatory Framework's privacy architecture is not an afterthought. It is a core design principle. The system creates a fundamental separation between three types of sensitive information: a user's identity, their transaction history, and the compliance status of the contracts they interact with. No single actor in the system has access to all three.

**Identity Keepers** know who users are but cannot see their transactions. **Transaction Monitors** can see transaction patterns but cannot identify the users behind them. This separation is enforced structurally: the protocol prohibits any entity from serving as both an Identity Keeper and a Transaction Monitor.

**Pseudonyms** are the mechanism that makes this work. Rather than transacting under their real identity or even their DID, users interact with each smart contract through a unique **Pseudonym**, a cryptographic identifier derived from their DID, a private secret, and the specific contract address. This means a user's pseudonym is different for every contract they interact with. Even if a Transaction Monitor's data leaks, it reveals very little because every other Transaction Monitor uses a different set of pseudonyms for the same users.

These pseudonyms are also **Sybil-resistant**: because each user can only receive one credential of each type per Identity Trust Anchor, their pseudonyms are tied to verified identities. An attacker can't create unlimited pseudonyms to evade risk flags.

When regulators need to identify a user, for example in response to suspicious activity, the system supports **PII Referrals**. A Transaction Monitor can refer a regulator to the relevant Identity Keeper, who can then furnish the necessary PII under appropriate due process. The key distinction is that this access requires active, authorized requests. It doesn't happen passively or at scale.

Because GAP does not directly link any two transactions, it is composable with privacy chains and privacy tools. It can be deployed on privacy-preserving networks without granting any single actor access to the entire shielded state. This approach represents a pragmatic middle ground: compliance without a panopticon.

---

## An Investor Trades on a Decentralized Exchange

To see how these components work together in practice, consider an investor who wants to trade tokenized securities on a decentralized exchange operating within a Regulated Zone.

**Onboarding.** The investor completes KYC with an Identity Keeper, providing government-issued identification. The Identity Keeper verifies their identity, screens them against sanctions lists, and issues credentials to the investor's onchain digital identity attesting that they have completed KYC and are not sanctioned.

**Accessing a protocol.** The investor's wallet detects that the DEX and the tokenized securities are in a Regulated Zone and discovers the necessary credentials needed to call these contracts. A zero-knowledge proof is generated proving the user holds the necessary credentials.

**Executing a trade.** The investor submits a transaction to swap one tokenized security for another. Before the transaction executes, the DEX's Transaction Filter verifies the zero-knowledge proof, confirming the investor holds valid credentials without accessing their underlying PII. The Transaction Filter also checks that the securities involved are issued by credentialed issuers and that the contracts are certified under the appropriate Classification Regime.

**Settlement.** The credentials are valid, so the transaction executes and settles onchain. The investor now holds the new security in self-custody.

**Ongoing monitoring.** Transaction Monitors observe the trade as part of their surveillance of activity within the Regulated Zone. If the trade exhibited patterns suggesting manipulation or sanctions evasion, it would be flagged for review. If a regulator needs to know who made the trade, they follow the referral process to the Identity Keeper.

Throughout this process, the investor's personal information remained with the Identity Keeper. The onchain record shows only that a credentialed participant executed a compliant trade.

---

## Addressing Regulatory Concerns

The SEC and other agencies have identified specific risks associated with digital asset markets. The Model Regulatory Framework is designed to address each of these concerns through its layered architecture:

**Offering Restrictions.** Transaction Filters automatically enforce investor eligibility and transfer restrictions at the smart contract level, based on credentials issued by Identity Keepers. Reg D accredited investor limits, Reg S geographic restrictions, and holding periods are all programmable.

**Sandwich/MEV Attacks.** Transaction Monitors detect MEV patterns; certified smart contracts implement execution fairness controls.

**Market Manipulation.** Transaction Monitors flag abnormal patterns including flash loans, oracle manipulation, wash trading, and coordinated onchain abuse. Terms of Service remedies include ejection from the Regulated Zone.

**AML/Sanctions.** Identity Keeper credentials are tied to identity verification and sanctions checks, with automatic credential revocation for OFAC designations. Transaction Monitors detect laundering patterns.

**Cybersecurity.** Contract Certifier audit requirements include formal security reviews. Immutable onchain logs support forensic analysis.

**Pseudonymity.** Although Transaction Monitors do not hold user PII, they can refer law enforcement to the correct Identity Keeper to retrieve PII under lawful request. Periodic audits and regulator access protocols are provided for in Terms of Service.

---

## Why This Matters

The Model Regulatory Framework does not enable regulatory arbitrage, nor does it enable participants to profit off of regulatory capture. It is a blueprint for public infrastructure that enforces key policy objectives (sanctions compliance, KYC, market integrity, investor protection) while preserving the properties that make permissionless blockchains valuable: composability, open access, competitive markets, and privacy.

The vision is a global financial system where a user completes identity verification once and gains access to regulated markets worldwide. Where developers build applications that route seamlessly across jurisdictions without bespoke integrations for each regime. Where investors transact privately without exposing their positions, strategies, or personal information. And where regulators retain the tools they need to enforce sanctions, monitor for abuse, and identify bad actors through proper legal process.

This is how tokenization reaches its full potential and trillions in securities finally migrate onchain.

---

*The Global Access Protocol is currently being developed by the Digital Securities Initiative and the Tokenized Asset Coalition. For a full technical specification, see the [GAP White Paper]. For the complete regulatory model, see [A Model Regulatory Framework for Tokenized Securities on Permissionless Blockchains].*
