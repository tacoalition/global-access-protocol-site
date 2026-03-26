import { useEffect } from 'react'

const DRIVE_FOLDER_URL = 'https://drive.google.com/drive/u/0/folders/1mgUdy_I3XZij8PHvlx7TEDpIGYCxi-fu'

export default function DriveAccessModal({ open, onClose }) {
  useEffect(() => {
    if (!open) {
      // Clean up any leftover overflow:hidden from Typeform
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  const handleClose = () => {
    document.body.style.overflow = ''
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-surface border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <div className="font-sans text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-3">
          Thank you
        </div>
        <h3 className="text-xl font-bold mb-3">
          Access the full research materials
        </h3>
        <p className="text-sm text-text-muted mb-6 leading-relaxed">
          Review and comment on the White Paper, Model Regulatory Framework and Lite Paper.
        </p>

        <div className="flex gap-3">
          <a
            href={DRIVE_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="flex-1 font-sans text-sm font-semibold text-bg bg-accent-light hover:bg-accent px-4 py-3 rounded-lg transition-colors text-center no-underline"
          >
            View Materials
          </a>
          <button
            onClick={handleClose}
            className="font-sans text-sm text-text-muted hover:text-text px-4 py-3 rounded-lg transition-colors cursor-pointer bg-transparent border border-border"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  )
}
