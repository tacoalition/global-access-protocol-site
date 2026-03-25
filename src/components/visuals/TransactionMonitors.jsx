export default function TransactionMonitors({ active }) {
  return (
    <div className={`w-full max-w-sm transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="font-sans text-xs font-semibold text-text-muted uppercase tracking-[0.2em] mb-6">
        Transaction Monitoring
      </div>

      {/* Activity stream */}
      <div className="p-4 bg-surface border border-border rounded-xl mb-4">
        <div className="font-sans text-xs font-semibold text-text-muted mb-3">On-chain Activity</div>
        <div className="space-y-2">
          {[
            { type: 'swap', status: 'normal', delay: 200 },
            { type: 'transfer', status: 'normal', delay: 400 },
            { type: 'swap', status: 'flagged', delay: 600 },
            { type: 'lend', status: 'normal', delay: 800 },
          ].map((tx, i) => (
            <div
              key={i}
              className={`flex items-center justify-between p-2 rounded-lg text-xs font-mono transition-all duration-500 ${
                tx.status === 'flagged' ? 'bg-amber/10 border border-amber/30' : 'bg-bg-light'
              }`}
              style={{
                opacity: active ? 1 : 0,
                transitionDelay: active ? `${tx.delay}ms` : '0ms',
              }}
            >
              <span className="text-text-muted">{tx.type}</span>
              <span className={tx.status === 'flagged' ? 'text-amber' : 'text-green'}>
                {tx.status === 'flagged' ? '⚠ flagged' : '✓ clear'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Database */}
      <div
        className="p-4 bg-surface border border-border rounded-xl transition-all duration-500"
        style={{ opacity: active ? 1 : 0, transitionDelay: '1000ms' }}
      >
        <div className="font-sans text-xs font-semibold text-amber mb-2">On-chain Risk Database</div>
        <div className="grid grid-cols-2 gap-2 text-xs font-sans">
          <div className="text-text-muted">Pseudonym A</div>
          <div className="text-green font-mono">Low Risk</div>
          <div className="text-text-muted">Pseudonym B</div>
          <div className="text-amber font-mono">Medium</div>
          <div className="text-text-muted">Pseudonym C</div>
          <div className="text-green font-mono">Low Risk</div>
        </div>
      </div>
    </div>
  )
}
