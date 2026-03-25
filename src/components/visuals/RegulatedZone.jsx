export default function RegulatedZone({ active }) {
  return (
    <div className={`w-full max-w-sm transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="font-sans text-xs font-semibold text-text-muted uppercase tracking-[0.2em] mb-6">
        Regulated Zone
      </div>

      {/* Zone perimeter */}
      <div className="relative p-6 border-2 border-dashed border-accent/40 rounded-2xl bg-accent/5">
        <div className="absolute -top-3 left-4 bg-bg px-2 font-sans text-xs font-semibold text-accent">
          COMPLIANCE PERIMETER
        </div>

        {/* Inner nodes */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {['DEX', 'Lending', 'Token A', 'Token B'].map((label, i) => (
            <div
              key={label}
              className="p-3 bg-surface border border-border rounded-lg text-center transition-all duration-500"
              style={{
                transitionDelay: active ? `${(i + 1) * 150}ms` : '0ms',
                opacity: active ? 1 : 0,
                transform: active ? 'scale(1)' : 'scale(0.8)',
              }}
            >
              <div className="font-mono text-xs text-accent-light font-semibold">{label}</div>
            </div>
          ))}
        </div>

        {/* Connecting lines (visual) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: active ? 0.3 : 0, transition: 'opacity 1s' }}>
          <line x1="35%" y1="35%" x2="65%" y2="35%" stroke="#3B82F6" strokeWidth="1" />
          <line x1="35%" y1="65%" x2="65%" y2="65%" stroke="#3B82F6" strokeWidth="1" />
          <line x1="35%" y1="35%" x2="35%" y2="65%" stroke="#3B82F6" strokeWidth="1" />
          <line x1="65%" y1="35%" x2="65%" y2="65%" stroke="#3B82F6" strokeWidth="1" />
          <line x1="35%" y1="35%" x2="65%" y2="65%" stroke="#3B82F6" strokeWidth="1" />
          <line x1="65%" y1="35%" x2="35%" y2="65%" stroke="#3B82F6" strokeWidth="1" />
        </svg>
      </div>

      {/* Properties */}
      <div className="mt-6 space-y-2">
        {['Composable', 'Open', 'Enforceable', 'Privacy-Preserving'].map((prop, i) => (
          <div
            key={prop}
            className="flex items-center gap-2 font-sans text-sm transition-all duration-500"
            style={{
              transitionDelay: active ? `${(i + 1) * 200 + 500}ms` : '0ms',
              opacity: active ? 1 : 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="#10B981" strokeWidth="1.5" />
              <path d="M5 8l2 2 4-4" stroke="#10B981" strokeWidth="1.5" fill="none" />
            </svg>
            <span className="text-green-light">{prop}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
