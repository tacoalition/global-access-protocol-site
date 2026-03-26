import { useEffect } from 'react'

const TYPEFORM_URL = 'https://form.typeform.com/to/uWyIXRTX'

export default function TypeformModal({ open, onClose, onSubmit, hiddenFields }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Listen for Typeform submit message
  useEffect(() => {
    if (!open) return

    const handler = (e) => {
      if (e.origin === 'https://form.typeform.com' && e.data?.type === 'form-submit') {
        onSubmit?.()
        onClose()
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [open, onSubmit, onClose])

  if (!open) return null

  // Build URL with hidden fields
  const params = new URLSearchParams()
  if (hiddenFields) {
    Object.entries(hiddenFields).forEach(([k, v]) => {
      if (v) params.set(k, v)
    })
  }
  const src = params.toString()
    ? `${TYPEFORM_URL}#${params.toString()}`
    : TYPEFORM_URL

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-surface border border-border rounded-2xl overflow-hidden w-full max-w-2xl shadow-2xl" style={{ height: '80vh' }}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-surface border border-border text-text-muted hover:text-text transition-colors cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>
        <iframe
          src={src}
          className="w-full h-full border-none"
          title="Contact Form"
        />
      </div>
    </div>
  )
}
