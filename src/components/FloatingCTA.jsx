import { useState, useEffect } from 'react'

const DRIVE_FOLDER_URL = 'https://drive.google.com/drive/u/0/folders/1mgUdy_I3XZij8PHvlx7TEDpIGYCxi-fu'

export default function FloatingCTA({ openTypeform, formCompleted }) {
  const [pastHero, setPastHero] = useState(false)
  const [atFooter, setAtFooter] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setPastHero(scrollTop > window.innerHeight * 0.8)
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return

    const obs = new IntersectionObserver(
      ([e]) => setAtFooter(e.isIntersecting),
      { threshold: 0.1 }
    )
    obs.observe(footer)
    return () => obs.disconnect()
  }, [])

  if (!pastHero || atFooter) return null

  const handleClick = () => {
    if (formCompleted) {
      window.open(DRIVE_FOLDER_URL, '_blank')
    } else {
      openTypeform()
    }
  }

  return (
    <div
      className="fixed inset-x-0 z-50 bg-surface/90 backdrop-blur-md border-t border-border transition-opacity duration-300"
      style={{ bottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-border/20">
        <div
          className="h-full bg-accent-light transition-all duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <span className="font-sans text-xs text-text-muted hidden sm:block">
          {formCompleted
            ? 'View the full GAP technical specification and supporting materials.'
            : 'Have questions about the Global Access Protocol?'}
        </span>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-text-muted">
            {Math.round(progress * 100)}%
          </span>
          <button
            onClick={handleClick}
            className="font-sans text-xs font-semibold text-bg bg-accent-light hover:bg-accent px-4 py-2 rounded-lg transition-colors cursor-pointer border-none whitespace-nowrap"
          >
            {formCompleted ? 'View Materials' : 'Learn More'}
          </button>
        </div>
      </div>
    </div>
  )
}
