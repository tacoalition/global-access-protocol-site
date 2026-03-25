export default function PrivacyDesign({ active }) {
  return (
    <div className={`w-full max-w-sm transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="font-sans text-xs font-semibold text-text-muted uppercase tracking-[0.2em] mb-6">
        Privacy Architecture
      </div>

      {/* Three separated columns */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div
          className="p-3 bg-surface border border-border rounded-lg text-center transition-all duration-500"
          style={{ opacity: active ? 1 : 0, transitionDelay: '200ms' }}
        >
          <div className="text-lg mb-1">👤</div>
          <div className="font-sans text-[10px] font-semibold">Identity</div>
          <div className="font-sans text-[9px] text-text-muted mt-1">Known to Identity Keepers only</div>
        </div>
        <div
          className="p-3 bg-surface border border-border rounded-lg text-center transition-all duration-500"
          style={{ opacity: active ? 1 : 0, transitionDelay: '400ms' }}
        >
          <div className="text-lg mb-1">🔄</div>
          <div className="font-sans text-[10px] font-semibold">Transactions</div>
          <div className="font-sans text-[9px] text-text-muted mt-1">Seen by Tx Monitors only</div>
        </div>
        <div
          className="p-3 bg-surface border border-border rounded-lg text-center transition-all duration-500"
          style={{ opacity: active ? 1 : 0, transitionDelay: '600ms' }}
        >
          <div className="text-lg mb-1">📋</div>
          <div className="font-sans text-[10px] font-semibold">Compliance</div>
          <div className="font-sans text-[9px] text-text-muted mt-1">Verified via ZK proofs</div>
        </div>
      </div>

      {/* Separation line */}
      <div
        className="flex items-center gap-2 mb-6 transition-all duration-500"
        style={{ opacity: active ? 1 : 0, transitionDelay: '800ms' }}
      >
        <div className="flex-1 h-px bg-red/40" />
        <div className="font-sans text-[10px] text-red font-semibold">NO SINGLE ACTOR SEES ALL THREE</div>
        <div className="flex-1 h-px bg-red/40" />
      </div>

      {/* Pseudonyms */}
      <div
        className="p-4 bg-surface border border-border rounded-xl transition-all duration-500"
        style={{ opacity: active ? 1 : 0, transitionDelay: '1000ms' }}
      >
        <div className="font-sans text-xs font-semibold text-accent-light mb-2">Unique Pseudonyms</div>
        <div className="space-y-1.5 font-mono text-xs">
          <div className="flex justify-between">
            <span className="text-text-muted">DEX contract</span>
            <span className="text-accent-light">0x7a3...f21</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-muted">Lending protocol</span>
            <span className="text-accent-light">0xb91...c44</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-muted">Token contract</span>
            <span className="text-accent-light">0x2d8...e07</span>
          </div>
        </div>
        <div className="font-sans text-[10px] text-text-muted mt-2">Same user, different pseudonym per contract — Sybil-resistant</div>
      </div>
    </div>
  )
}
