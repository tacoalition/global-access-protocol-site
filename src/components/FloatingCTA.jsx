import { useState, useEffect } from 'react'
import { createPopup } from '@typeform/embed'

const TYPEFORM_ID = 'uWyIXRTX'
const DRIVE_FOLDER_URL = 'https://drive.google.com/drive/u/0/folders/1mgUdy_I3XZij8PHvlx7TEDpIGYCxi-fu'

export default function FloatingCTA({ onFormSubmit, formCompleted }) {
  const [pastHero, setPastHero] = useState(false)
  const [atFooter, setAtFooter] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.8)
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
      return
    }
    const { open } = createPopup(TYPEFORM_ID, {
      onSubmit: () => onFormSubmit?.(),
    })
    open()
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-md border-t border-border transition-opacity duration-300">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-sans text-xs text-text-muted hidden sm:block">
          {formCompleted
            ? 'View the full GAP technical specification and supporting materials.'
            : 'Have questions about the Global Access Protocol?'}
        </span>
        <button
          onClick={handleClick}
          className="font-sans text-xs font-semibold text-bg bg-accent-light hover:bg-accent px-4 py-2 rounded-lg transition-colors cursor-pointer border-none"
        >
          {formCompleted ? 'View Materials' : 'Learn More'}
        </button>
      </div>
    </div>
  )
}
