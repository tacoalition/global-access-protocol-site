import { useState, useEffect } from 'react'
import { PopupButton } from '@typeform/embed-react'

const TYPEFORM_ID = 'uWyIXRTX'
const DRIVE_FOLDER_URL = 'https://drive.google.com/drive/u/0/folders/1mgUdy_I3XZij8PHvlx7TEDpIGYCxi-fu'

export default function FloatingCTA({ onFormSubmit, formCompleted }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return

    const obs = new IntersectionObserver(
      ([e]) => setVisible(!e.isIntersecting),
      { threshold: 0.1 }
    )
    obs.observe(footer)
    return () => obs.disconnect()
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-md border-t border-border transition-opacity duration-300">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-sans text-xs text-text-muted hidden sm:block">
          {formCompleted
            ? 'View the full GAP technical specification and supporting materials.'
            : 'Have questions about the Global Access Protocol?'}
        </span>
        {formCompleted ? (
          <a
            href={DRIVE_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs font-semibold text-bg bg-accent-light hover:bg-accent px-4 py-2 rounded-lg transition-colors cursor-pointer no-underline"
          >
            View Materials
          </a>
        ) : (
          <PopupButton
            id={TYPEFORM_ID}
            onSubmit={() => onFormSubmit?.()}
            className="font-sans text-xs font-semibold text-bg bg-accent-light hover:bg-accent px-4 py-2 rounded-lg transition-colors cursor-pointer border-none"
          >
            Learn More
          </PopupButton>
        )}
      </div>
    </div>
  )
}
