import { useState, useEffect, useRef } from 'react'

const tacLogoWhite = `${import.meta.env.BASE_URL}tac-logo-white.svg`

const navLinks = [
  { label: 'Research', url: 'https://tacoalition.org/research' },
  { label: 'Protocol', url: 'https://tacoalition.org/global-access-protocol' },
  { label: 'Membership', url: 'https://tacoalition.org/membership' },
  { label: 'About', url: 'https://tacoalition.org/about' },
]

export default function StickyNav() {
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      // Show when scrolling up or at the top
      if (y < 100 || y < lastScrollY.current) {
        setVisible(true)
      } else {
        setVisible(false)
      }
      lastScrollY.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onMouseEnter = () => setVisible(true)

  return (
    <>
      {/* Invisible hover zone at top of screen */}
      <div
        className="fixed top-0 left-0 right-0 h-4 z-[60]"
        onMouseEnter={onMouseEnter}
      />
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[25px] bg-bg/50 border-b border-border transition-transform duration-300"
        style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
        onMouseEnter={onMouseEnter}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-[62px] md:h-auto md:py-6 flex items-center justify-between">
          {/* Logo */}
          <a href="https://tacoalition.org" className="flex items-center">
            <img
              src={tacLogoWhite}
              alt="Tokenized Asset Coalition"
              className="h-[33.858px] md:h-[45px] w-auto object-contain"
            />
          </a>

          {/* Nav Links — all four, responsive, matching the main site nav */}
          <div className="flex items-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="font-mono text-[10px] md:text-xs leading-[12px] uppercase tracking-[0.8px] md:tracking-widest text-text hover:text-accent-light transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
