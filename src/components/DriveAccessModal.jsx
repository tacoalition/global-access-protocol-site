const DRIVE_FOLDER_URL = 'https://drive.google.com/drive/u/0/folders/1mgUdy_I3XZij8PHvlx7TEDpIGYCxi-fu'

export default function DriveAccessModal({ open, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-surface border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <div className="font-sans text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-3">
          Thank you
        </div>
        <h3 className="text-xl font-bold mb-3">
          Access the full research materials
        </h3>
        <p className="text-sm text-text-muted mb-6 leading-relaxed">
          We've prepared the complete GAP technical specification, the Model Regulatory Framework, and supporting materials for your review.
        </p>

        <div className="flex gap-3">
          <a
            href={DRIVE_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex-1 font-sans text-sm font-semibold text-bg bg-accent-light hover:bg-accent px-4 py-3 rounded-lg transition-colors text-center no-underline"
          >
            View Materials
          </a>
          <button
            onClick={onClose}
            className="font-sans text-sm text-text-muted hover:text-text px-4 py-3 rounded-lg transition-colors cursor-pointer bg-transparent border border-border"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  )
}
