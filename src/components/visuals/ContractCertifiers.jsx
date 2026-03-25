export default function ContractCertifiers({ active }) {
  return (
    <div className={`w-full max-w-sm transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="font-sans text-xs font-semibold text-text-muted uppercase tracking-[0.2em] mb-6">
        Contract Certification
      </div>

      {/* Smart Contract */}
      <div
        className="p-4 bg-surface border border-border rounded-xl mb-4 transition-all duration-500"
        style={{ opacity: active ? 1 : 0 }}
      >
        <div className="font-mono text-xs text-text-muted mb-2">// Smart Contract</div>
        <div className="font-mono text-xs text-accent-light">
          <span className="text-text-muted">contract</span> TokenizedSecurity {'{'}<br />
          <span className="text-text-muted pl-4">require</span>(certified);<br />
          {'}'}
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center my-3" style={{ opacity: active ? 0.4 : 0, transition: 'opacity 0.5s 0.3s' }}>
        <svg width="24" height="20"><path d="M12 0v16M8 12l4 4 4-4" stroke="#3B82F6" strokeWidth="1.5" fill="none" /></svg>
      </div>

      {/* Certifier review */}
      <div
        className="p-4 bg-accent/10 border border-accent/30 rounded-xl mb-4 transition-all duration-500"
        style={{ opacity: active ? 1 : 0, transitionDelay: '300ms' }}
      >
        <div className="font-sans text-xs font-semibold text-accent-light mb-2">Contract Certifier Review</div>
        <div className="space-y-1.5">
          {['Source code verified', 'Controls implemented', 'Registration confirmed'].map((item, i) => (
            <div key={item} className="flex items-center gap-2 font-sans text-xs text-text-muted">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="#10B981" strokeWidth="1" />
                <path d="M3.5 6l2 2 3-3" stroke="#10B981" strokeWidth="1" fill="none" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center my-3" style={{ opacity: active ? 0.4 : 0, transition: 'opacity 0.5s 0.6s' }}>
        <svg width="24" height="20"><path d="M12 0v16M8 12l4 4 4-4" stroke="#10B981" strokeWidth="1.5" fill="none" /></svg>
      </div>

      {/* Classification Credential */}
      <div
        className="p-4 bg-green/10 border border-green/30 rounded-xl transition-all duration-500"
        style={{ opacity: active ? 1 : 0, transitionDelay: '600ms' }}
      >
        <div className="font-sans text-xs font-semibold text-green-light">Classification Credential</div>
        <div className="font-sans text-[10px] text-text-muted mt-1">Contract class, sponsor, and compliance status readable onchain</div>
      </div>
    </div>
  )
}
