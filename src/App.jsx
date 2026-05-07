import { useState } from 'react'
import { useScrollObserver } from './hooks/useScrollObserver'
import { SECTION_IDS } from './data/sections'
import { HEADER, SECTIONS } from './data/content'
import VisualPanel from './components/VisualPanel'
import StickyNav from './components/StickyNav'
import Footer from './components/Footer'
import HighlightComment from './components/HighlightComment'
import FloatingCTA from './components/FloatingCTA'
import DriveAccessModal from './components/DriveAccessModal'
import SubscribeModal from './components/SubscribeModal'

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

const COLOR_MAP = {
  accent: 'text-accent-light',
  red: 'text-red',
  amber: 'text-amber',
  green: 'text-green-light',
}

const MONO_COLORS = ['accent', 'green']

// Renders paragraph text with **bold**{color} markers
function RichText({ text }) {
  const parts = []
  // Match **text**{color} or **text**
  const regex = /\*\*(.+?)\*\*(?:\{(\w+)\})?/g
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const content = match[1]
    const color = match[2]
    const colorClass = color ? COLOR_MAP[color] || '' : ''
    const monoClass = color && MONO_COLORS.includes(color) ? ' font-mono' : ''
    parts.push(
      <strong key={match.index} className={colorClass + monoClass || undefined}>
        {content}
      </strong>
    )
    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return <>{parts}</>
}

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

function ContentSection({ id, registerRef, mobileVisual }) {
  const section = SECTIONS[id]
  if (!section) return null

  return (
    <Section id={id} registerRef={registerRef}>
      {section.actLabel && <ActLabel>{section.actLabel}</ActLabel>}
      <SectionHeading>{section.heading}</SectionHeading>
      {section.paragraphs.map((p, i) => (
        <p key={i} className={i > 0 ? 'mt-4' : undefined}>
          <RichText text={p} />
        </p>
      ))}
      {section.footer && (
        <p className="mt-4 text-sm text-text-muted italic">
          <RichText text={section.footer} />
        </p>
      )}
      {mobileVisual && <MobileVisual>{mobileVisual}</MobileVisual>}
    </Section>
  )
}

function App() {
  const [showDriveModal, setShowDriveModal] = useState(false)
  const [showSubscribe, setShowSubscribe] = useState(false)
  const [formCompleted, setFormCompleted] = useState(() => localStorage.getItem('gap_form_completed') === 'true')

  const handleFormSubmit = () => {
    localStorage.setItem('gap_form_completed', 'true')
    setFormCompleted(true)
    setShowSubscribe(false)
    setShowDriveModal(true)
  }

  const openSubscribe = () => {
    setShowSubscribe(true)
  }
  const { activeSection, registerRef } = useScrollObserver(SECTION_IDS)

  const visualComponents = {
    'hero': HeroVisual,
    'opportunity': MarketGap,
    'problem': Impasse,
    'five-problems': FiveProblems,
    'regulated-zones': RegulatedZone,
    'trust-anchors': TrustAnchors,
    'identity-keepers': IdentityKeepers,
    'contract-certifiers': ContractCertifiers,
    'transaction-monitors': TransactionMonitors,
    'transaction-filters': TransactionFilters,
    'privacy': PrivacyDesign,
    'example-trade': ExampleTrade,
    'regulatory-concerns': RegulatoryConcerns,
    'why-it-matters': WhyItMatters,
  }

  const ActiveVisualComponent = activeSection ? visualComponents[activeSection] : null
  const activeVisual = ActiveVisualComponent ? <ActiveVisualComponent active={true} /> : null

  const mobileVisuals = {
    'hero': <HeroVisual active={true} />,
    'opportunity': <MarketGap active={true} />,
    'problem': <Impasse active={true} />,
    'five-problems': <FiveProblems active={true} />,
    'regulated-zones': <RegulatedZone active={true} />,
    'trust-anchors': <TrustAnchors active={true} />,
    'identity-keepers': <IdentityKeepers active={true} />,
    'contract-certifiers': <ContractCertifiers active={true} />,
    'transaction-monitors': <TransactionMonitors active={true} />,
    'transaction-filters': <TransactionFilters active={true} />,
    'privacy': <PrivacyDesign active={true} />,
    'example-trade': <ExampleTrade active={true} />,
    'regulatory-concerns': <RegulatoryConcerns active={true} />,
    'why-it-matters': <WhyItMatters active={true} />,
  }

  return (
    <div className="min-h-screen bg-bg text-text">

      <StickyNav />

      {/* ===== HERO HEADER ===== */}
      <header className="max-w-4xl mx-auto px-6 pt-28 md:pt-36 min-h-screen flex flex-col">
        <div className="font-sans text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">
          {HEADER.label}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
          {HEADER.title}
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed mb-5">
          {HEADER.subtitle}
        </p>

        <div className="font-sans text-sm mb-4">
          <div className="text-text-muted text-xs">{HEADER.type}</div>
        </div>

        <p className="font-sans text-sm text-text-muted max-w-lg leading-relaxed mb-5">
          This is a summary of the Global Access Protocol. To access the full white paper, regulatory model, and get involved:
        </p>

        <div className="mb-8">
          {formCompleted ? (
            <a
              href="https://drive.google.com/drive/u/0/folders/1mgUdy_I3XZij8PHvlx7TEDpIGYCxi-fu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs font-semibold text-bg bg-accent-light hover:bg-accent px-4 py-2 rounded-lg transition-colors no-underline"
            >
              View Materials
            </a>
          ) : (
            <button
              onClick={openSubscribe}
              className="font-sans text-xs font-semibold text-bg bg-accent-light hover:bg-accent px-4 py-2 rounded-lg transition-colors cursor-pointer border-none"
            >
              Learn More
            </button>
          )}
        </div>

        <div className="flex-[2]" />

        {/* Logo lockup */}
        <div className="border-t border-border pt-6 mb-8">
          <div className="font-sans text-[10px] font-semibold text-text-muted uppercase tracking-[0.2em] mb-4">
            Published by
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="https://digitalsecuritiesinitiative.xyz" target="_blank" rel="noopener noreferrer">
              <img src="/DSI logo transparent dark mode.png" alt="Digital Securities Initiative" className="h-[48px]" />
            </a>
            <span className="text-border font-sans">&times;</span>
            <a href="https://tacoalition.org" target="_blank" rel="noopener noreferrer">
              <img src="/TAC logo.png" alt="Tokenized Asset Coalition" className="h-[36px]" />
            </a>
          </div>
        </div>

        <div className="flex-[1]" />

        <button
          onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
          className="pb-10 flex flex-col items-center gap-2 cursor-pointer bg-transparent border-none group"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-light group-hover:text-accent transition-colors">
            Scroll to read
          </span>
          <div className="animate-bounce text-accent-light group-hover:text-accent transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </button>
      </header>

      {/* ===== STORY GRID ===== */}
      <div
        className="max-w-[1200px] mx-auto px-6 pt-24 lg:grid lg:gap-16"
        style={{ gridTemplateColumns: '1fr 42%' }}
      >

        {/* LEFT: scrolling text */}
        <article className="min-w-0">
          {SECTION_IDS.map((id) => (
            <ContentSection
              key={id}
              id={id}
              registerRef={registerRef}
              mobileVisual={mobileVisuals[id]}
            />
          ))}
        </article>

        {/* RIGHT: sticky visual panel */}
        <aside className="hidden lg:block" style={{ height: 'calc(100% - 16rem)' }}>
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
            <VisualPanel active={!!activeVisual}>
              {activeVisual}
            </VisualPanel>
          </div>
        </aside>

      </div>

      <Footer />
      <HighlightComment openSubscribe={openSubscribe} formCompleted={formCompleted} />
      <FloatingCTA openSubscribe={openSubscribe} formCompleted={formCompleted} />
      <SubscribeModal
        open={showSubscribe}
        onClose={() => setShowSubscribe(false)}
        onSubmit={handleFormSubmit}
      />
      <DriveAccessModal open={showDriveModal} onClose={() => setShowDriveModal(false)} />
    </div>
  )
}

export default App
