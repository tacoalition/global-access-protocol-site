export default function TrustAnchors({ active }) {
  return (
    <div className={`w-full max-w-sm transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="font-sans text-xs font-semibold text-text-muted uppercase tracking-[0.2em] mb-6">
        Trust Anchor Architecture
      </div>

      {/* Trust Anchor at top */}
      <div
        className="p-4 bg-accent/15 border border-accent/40 rounded-xl text-center mb-4 transition-all duration-500"
        style={{ opacity: active ? 1 : 0, transform: active ? 'translateY(0)' : 'translateY(-10px)' }}
      >
        <div className="font-sans text-xs font-semibold text-accent-light uppercase tracking-wider mb-1">Trust Anchor</div>
        <div className="font-sans text-xs text-text-muted">Sets standards, audits providers, enforces rules</div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center mb-4" style={{ opacity: active ? 0.5 : 0, transition: 'opacity 0.5s 0.3s' }}>
        <svg width="120" height="30" viewBox="0 0 120 30">
          <line x1="30" y1="0" x2="30" y2="30" stroke="#3B82F6" strokeWidth="1.5" />
          <line x1="60" y1="0" x2="60" y2="30" stroke="#3B82F6" strokeWidth="1.5" />
          <line x1="90" y1="0" x2="90" y2="30" stroke="#3B82F6" strokeWidth="1.5" />
          <polygon points="26,25 30,30 34,25" fill="#3B82F6" />
          <polygon points="56,25 60,30 64,25" fill="#3B82F6" />
          <polygon points="86,25 90,30 94,25" fill="#3B82F6" />
        </svg>
      </div>

      {/* Service Providers */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {['Identity Keepers', 'Contract Certifiers', 'Tx Monitors'].map((role, i) => (
          <div
            key={role}
            className="p-3 bg-surface border border-border rounded-lg text-center transition-all duration-500"
            style={{
              transitionDelay: active ? `${(i + 1) * 150 + 300}ms` : '0ms',
              opacity: active ? 1 : 0,
            }}
          >
            <div className="font-sans text-[10px] font-semibold text-text-muted leading-tight">{role}</div>
          </div>
        ))}
      </div>

      {/* Bottom: Regulated Zone */}
      <div
        className="p-4 border border-dashed border-green/40 rounded-xl bg-green/5 text-center transition-all duration-500"
        style={{ transitionDelay: active ? '800ms' : '0ms', opacity: active ? 1 : 0 }}
      >
        <div className="font-sans text-xs font-semibold text-green-light">Regulated Zone</div>
        <div className="font-sans text-[10px] text-text-muted mt-1">Participants transact freely within shared compliance rules</div>
      </div>
    </div>
  )
}
