import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? scrollTop / docHeight : 0

      setProgress(Math.min(pct, 1))
      setVisible(scrollTop > window.innerHeight * 0.5)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed right-3 top-1/2 -translate-y-1/2 z-40 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
    >
      <div className="relative h-48 w-1 bg-border/30 rounded-full overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-full bg-accent-light rounded-full transition-all duration-150"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
      <div className="mt-2 font-mono text-[9px] text-text-muted text-center">
        {Math.round(progress * 100)}%
      </div>
    </div>
  )
}
