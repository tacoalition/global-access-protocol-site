const visions = [
  { text: 'Verify once, access global markets', icon: '🌍' },
  { text: 'Build apps across jurisdictions seamlessly', icon: '🔗' },
  { text: 'Transact privately, protect strategies', icon: '🔒' },
  { text: 'Regulators retain enforcement tools', icon: '⚖️' },
]

export default function WhyItMatters({ active }) {
  return (
    <div className={`w-full max-w-sm transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="font-sans text-xs font-semibold text-text-muted uppercase tracking-[0.2em] mb-6">
        The Vision
      </div>

      <div className="space-y-4 mb-8">
        {visions.map((v, i) => (
          <div
            key={v.text}
            className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl transition-all duration-500"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? 'translateX(0)' : 'translateX(20px)',
              transitionDelay: active ? `${i * 150}ms` : '0ms',
            }}
          >
            <span className="text-xl">{v.icon}</span>
            <span className="font-sans text-sm">{v.text}</span>
          </div>
        ))}
      </div>

      <div
        className="p-5 bg-accent/10 border border-accent/30 rounded-xl text-center transition-all duration-500"
        style={{ opacity: active ? 1 : 0, transitionDelay: '800ms' }}
      >
        <div className="font-serif text-lg font-semibold text-accent-light mb-2">
          Trillions in securities, finally onchain.
        </div>
        <div className="font-sans text-xs text-text-muted">
          The Global Access Protocol is the bridge.
        </div>
      </div>
    </div>
  )
}
