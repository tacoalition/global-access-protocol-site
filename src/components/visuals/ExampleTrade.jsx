const steps = [
  { label: 'Onboarding', desc: 'Complete KYC with Identity Keeper', icon: '1', color: 'accent' },
  { label: 'Access', desc: 'Wallet discovers required credentials', icon: '2', color: 'accent' },
  { label: 'Execute', desc: 'ZK proof verifies compliance', icon: '3', color: 'green' },
  { label: 'Settle', desc: 'Trade settles on-chain, self-custody', icon: '4', color: 'green' },
  { label: 'Monitor', desc: 'Ongoing surveillance, PII stays private', icon: '5', color: 'amber' },
]

export default function ExampleTrade({ active }) {
  return (
    <div className={`w-full max-w-sm transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="font-sans text-xs font-semibold text-text-muted uppercase tracking-[0.2em] mb-6">
        DEX Trade Flow
      </div>

      <div className="space-y-3">
        {steps.map((step, i) => {
          const colors = {
            accent: { bg: 'bg-accent/15', border: 'border-accent/40', text: 'text-accent-light', numBg: 'bg-accent' },
            green: { bg: 'bg-green/15', border: 'border-green/40', text: 'text-green-light', numBg: 'bg-green' },
            amber: { bg: 'bg-amber/15', border: 'border-amber/40', text: 'text-amber', numBg: 'bg-amber' },
          }[step.color]

          return (
            <div
              key={step.label}
              className={`flex items-center gap-3 p-3 ${colors.bg} border ${colors.border} rounded-xl transition-all duration-500`}
              style={{
                opacity: active ? 1 : 0,
                transform: active ? 'translateX(0)' : 'translateX(20px)',
                transitionDelay: active ? `${i * 150}ms` : '0ms',
              }}
            >
              <div className={`w-7 h-7 ${colors.numBg} rounded-full flex items-center justify-center shrink-0`}>
                <span className="font-mono text-xs font-bold text-bg">{step.icon}</span>
              </div>
              <div>
                <div className={`font-sans text-xs font-semibold ${colors.text}`}>{step.label}</div>
                <div className="font-sans text-[10px] text-text-muted">{step.desc}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
