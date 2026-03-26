const primaryLinks = [
  { label: 'TAC Pulse', url: 'https://pulse.tacoalition.org/' },
  { label: 'Research Hub', url: 'https://research.tacoalition.org/' },
  { label: 'Membership', url: 'https://form.typeform.com/to/Vtp7qXAX' },
  { label: 'About TAC', url: 'https://tacoalition.org/about' },
]

const socialLinks = [
  { label: 'x.com', url: 'https://x.com/tacoalition' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/tacoalition/' },
  { label: 'Telegram', url: 'https://t.me/TACoalition' },
]

export default function Footer() {
  return (
    <footer className="bg-surface text-text-muted">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-0">
          {/* Logo and Copyright */}
          <div className="flex flex-col justify-between gap-8 md:gap-16 w-full md:w-auto order-2 md:order-1">
            <a href="https://tacoalition.org" className="block">
              <img
                src="/tac-logo-white.svg"
                alt="Tokenized Asset Coalition"
                className="h-[47px] lg:h-[60px] w-auto"
              />
            </a>
            <p className="font-sans text-xs lg:text-sm leading-[19px] tracking-[-0.28px] opacity-50 max-w-[334px] lg:max-w-[478px]">
              2026 &copy; Tokenized Asset Coalition, Inc. is a member funded non profit corporation
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-4 md:flex md:gap-16 lg:gap-24 lg:pr-16 w-full md:w-auto order-1 md:order-2">
            <div className="flex flex-col gap-2">
              {primaryLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest hover:text-accent-light transition-colors py-1.5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest hover:text-accent-light transition-colors py-1.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
