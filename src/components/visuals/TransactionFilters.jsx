export default function TransactionFilters({ active }) {
  return (
    <div className={`w-full max-w-sm transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="font-sans text-xs font-semibold text-text-muted uppercase tracking-[0.2em] mb-6">
        Transaction Filter
      </div>

      {/* Incoming transaction */}
      <div
        className="p-3 bg-surface border border-border rounded-xl mb-3 transition-all duration-500"
        style={{ opacity: active ? 1 : 0, transitionDelay: '100ms' }}
      >
        <div className="font-mono text-xs text-text-muted">Incoming Transaction</div>
        <div className="font-mono text-xs text-accent-light mt-1">swap(tokenA, tokenB, amount)</div>
      </div>

      {/* Filter checks */}
      <div className="p-4 bg-accent/10 border border-accent/30 rounded-xl mb-3">
        <div className="font-sans text-xs font-semibold text-accent-light mb-3">Verification Checks</div>
        <div className="space-y-2">
          {[
            { check: 'Valid credentials (ZK proof)', delay: 300 },
            { check: 'No risk flags', delay: 500 },
            { check: 'Contracts certified', delay: 700 },
            { check: 'Classification regime match', delay: 900 },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 transition-all duration-500"
              style={{
                opacity: active ? 1 : 0,
                transitionDelay: active ? `${item.delay}ms` : '0ms',
              }}
            >
              <div className="w-4 h-4 rounded-full bg-green/20 flex items-center justify-center shrink-0">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4l2 2 3-3" stroke="#10B981" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="font-sans text-xs text-text-muted">{item.check}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Result */}
      <div
        className="p-3 bg-green/10 border border-green/30 rounded-xl text-center transition-all duration-500"
        style={{ opacity: active ? 1 : 0, transitionDelay: '1100ms' }}
      >
        <div className="font-sans text-sm font-semibold text-green-light">Transaction Approved</div>
        <div className="font-sans text-[10px] text-text-muted mt-1">Enforced at smart contract level — cannot be bypassed</div>
      </div>
    </div>
  )
}
