const tacLogoWhite = `${import.meta.env.BASE_URL}tac-logo-white.svg`

const primaryLinks = [
  { label: 'Research', url: 'https://tacoalition.org/research' },
  { label: 'Protocol', url: 'https://tacoalition.org/global-access-protocol' },
  { label: 'Membership', url: 'https://tacoalition.org/membership' },
  { label: 'About', url: 'https://tacoalition.org/about' },
]

const socialLinks = [
  { label: 'X / Twitter', url: 'https://x.com/tacoalition' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/tokenized-asset-coalition/' },
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
                src={tacLogoWhite}
                alt="Tokenized Asset Coalition"
                className="h-[47px] lg:h-[60px] w-auto"
              />
            </a>
            <p className="font-sans text-xs lg:text-sm leading-[19px] tracking-[-0.28px] opacity-50 max-w-[334px] lg:max-w-[478px]">
              &copy; {new Date().getFullYear()} Tokenized Asset Coalition. A
              coalition of the leaders building tokenization across technology,
              business, and policy.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-4 md:flex md:gap-16 lg:gap-24 lg:pr-16 w-full md:w-auto order-1 md:order-2">
            <div className="flex flex-col gap-2">
              {primaryLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
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
