import { useEffect, useState } from 'react'

export default function SubscribeModal({ open, onClose, onSubmit }) {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [organization, setOrganization] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      setError(null)
      setSubmitting(false)
    }
  }, [open])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          full_name: fullName.trim(),
          organization: organization.trim(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
      onSubmit?.()
      onClose()
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  if (!open) return null

  const inputClass =
    'bg-bg border border-border rounded-lg px-3 py-2.5 text-text outline-none focus:border-accent-light transition-colors disabled:opacity-50'
  const labelClass =
    'font-mono text-[10px] uppercase tracking-[1.6px] text-text-muted'

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-surface border border-border rounded-2xl overflow-hidden w-full max-w-md shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-surface border border-border text-text-muted hover:text-text transition-colors cursor-pointer"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>

        <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-mono text-[10px] uppercase tracking-[1.92px] text-accent-light">
              Get access
            </div>
            <h2 className="text-2xl leading-tight">
              The Global Access Protocol
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Subscribe for the white paper, regulatory model, and updates as
              the protocol develops.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <label className="flex flex-col gap-1.5">
              <span className={labelClass}>Full name</span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                disabled={submitting}
                autoComplete="name"
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className={labelClass}>Organization</span>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                required
                disabled={submitting}
                autoComplete="organization"
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className={labelClass}>Work email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={submitting}
                autoComplete="email"
                className={inputClass}
              />
            </label>
          </div>

          {error && (
            <p className="text-sm text-red leading-snug">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="text-sm text-bg bg-accent-light hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed px-5 py-3 rounded-lg transition-colors cursor-pointer border-none"
          >
            {submitting ? 'Submitting...' : 'Get access'}
          </button>

          <p className="text-xs text-text-muted leading-relaxed">
            We&rsquo;ll send a confirmation link from research.tacoalition.org.
            Adds you to the TAC research list. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </div>
  )
}
