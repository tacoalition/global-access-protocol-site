export default function MarketGap({ active }) {
  return (
    <div className={`w-full max-w-sm transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="font-sans text-xs font-semibold text-text-muted uppercase tracking-[0.2em] mb-6">
        Global Securities Market
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between font-sans text-sm mb-2">
            <span className="text-text-muted">Tokenized Assets</span>
            <span className="font-mono text-accent-light font-semibold">$25B</span>
          </div>
          <div className="h-3 bg-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
              style={{ width: active ? '0.01%' : '0%', minWidth: active ? '4px' : '0' }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between font-sans text-sm mb-2">
            <span className="text-text-muted">Total Securities Market</span>
            <span className="font-mono text-green-light font-semibold">$250T</span>
          </div>
          <div className="h-3 bg-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-green rounded-full transition-all duration-1000 delay-300 ease-out"
              style={{ width: active ? '100%' : '0%' }}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-surface border border-border rounded-xl">
        <div className="font-mono text-3xl font-bold text-accent-light mb-1">
          10,000x
        </div>
        <div className="font-sans text-sm text-text-muted">
          gap between tokenized and total securities markets
        </div>
      </div>
    </div>
  )
}
