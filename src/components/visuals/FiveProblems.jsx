const problems = [
  { label: 'Whitelist Fragmentation', icon: '⊞', color: 'text-red' },
  { label: 'Deglobalization Letdown', icon: '⊘', color: 'text-amber' },
  { label: 'Surveillance Nightmare', icon: '◉', color: 'text-red' },
  { label: 'Doxing Slow Burn', icon: '◎', color: 'text-amber' },
  { label: 'Regulatory Moats', icon: '⊗', color: 'text-red' },
]

export default function FiveProblems({ active }) {
  return (
    <div className={`w-full max-w-sm transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="font-sans text-xs font-semibold text-text-muted uppercase tracking-[0.2em] mb-6">
        Five Core Problems
      </div>

      <div className="space-y-3">
        {problems.map((p, i) => (
          <div
            key={p.label}
            className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl transition-all duration-500"
            style={{
              transitionDelay: active ? `${i * 100}ms` : '0ms',
              opacity: active ? 1 : 0,
              transform: active ? 'translateX(0)' : 'translateX(20px)',
            }}
          >
            <div className={`font-mono text-xl ${p.color}`}>{p.icon}</div>
            <span className="font-sans text-sm font-medium">{p.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
