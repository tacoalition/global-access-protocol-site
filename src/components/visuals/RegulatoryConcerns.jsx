const concerns = [
  { concern: 'Offering Restrictions', solution: 'Transaction Filters enforce eligibility' },
  { concern: 'MEV/Sandwich Attacks', solution: 'Monitors detect, contracts enforce fairness' },
  { concern: 'Market Manipulation', solution: 'Pattern detection + zone ejection' },
  { concern: 'AML/Sanctions', solution: 'Credential-based with auto-revocation' },
  { concern: 'Cybersecurity', solution: 'Certifier audits + immutable logs' },
  { concern: 'Pseudonymity', solution: 'PII referral process under due process' },
]

export default function RegulatoryConcerns({ active }) {
  return (
    <div className={`w-full max-w-sm transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="font-sans text-xs font-semibold text-text-muted uppercase tracking-[0.2em] mb-6">
        Regulatory Coverage
      </div>

      <div className="space-y-2">
        {concerns.map((c, i) => (
          <div
            key={c.concern}
            className="p-3 bg-surface border border-border rounded-lg transition-all duration-500"
            style={{
              opacity: active ? 1 : 0,
              transitionDelay: active ? `${i * 100}ms` : '0ms',
            }}
          >
            <div className="flex items-start gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0">
                <circle cx="7" cy="7" r="6" stroke="#10B981" strokeWidth="1.5" />
                <path d="M4 7l2 2 4-4" stroke="#10B981" strokeWidth="1.5" />
              </svg>
              <div>
                <div className="font-sans text-xs font-semibold">{c.concern}</div>
                <div className="font-sans text-[10px] text-text-muted">{c.solution}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
