export default function IdentityKeepers({ active }) {
  return (
    <div className={`w-full max-w-sm transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="font-sans text-xs font-semibold text-text-muted uppercase tracking-[0.2em] mb-6">
        Identity Verification Flow
      </div>

      <div className="space-y-4">
        {/* Step 1: User */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
              <circle cx="10" cy="7" r="3.5" />
              <path d="M3 18c0-3.9 3.1-7 7-7s7 3.1 7 7" />
            </svg>
          </div>
          <div
            className="flex-1 p-3 bg-surface border border-border rounded-lg transition-all duration-500"
            style={{ opacity: active ? 1 : 0, transitionDelay: '100ms' }}
          >
            <div className="font-sans text-xs font-semibold">User submits KYC</div>
            <div className="font-sans text-[10px] text-text-muted">Government ID, sanctions screening</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center" style={{ opacity: active ? 0.4 : 0, transition: 'opacity 0.5s 0.3s' }}>
          <svg width="24" height="20"><path d="M12 0v16M8 12l4 4 4-4" stroke="#3B82F6" strokeWidth="1.5" fill="none" /></svg>
        </div>

        {/* Step 2: Identity Keeper */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#3B82F6" strokeWidth="1.5">
              <path d="M10 1L3 4.5v5c0 4.4 3 8.5 7 9.5 4-1 7-5.1 7-9.5v-5L10 1z" />
              <path d="M7 10l2 2 4-4" />
            </svg>
          </div>
          <div
            className="flex-1 p-3 bg-accent/10 border border-accent/30 rounded-lg transition-all duration-500"
            style={{ opacity: active ? 1 : 0, transitionDelay: '400ms' }}
          >
            <div className="font-sans text-xs font-semibold text-accent-light">Identity Keeper</div>
            <div className="font-sans text-[10px] text-text-muted">Verifies identity, stores PII privately</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center" style={{ opacity: active ? 0.4 : 0, transition: 'opacity 0.5s 0.6s' }}>
          <svg width="24" height="20"><path d="M12 0v16M8 12l4 4 4-4" stroke="#10B981" strokeWidth="1.5" fill="none" /></svg>
        </div>

        {/* Step 3: Credential */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green/15 border border-green/40 flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#10B981" strokeWidth="1.5">
              <rect x="3" y="5" width="14" height="10" rx="2" />
              <circle cx="10" cy="10" r="2" />
            </svg>
          </div>
          <div
            className="flex-1 p-3 bg-green/10 border border-green/30 rounded-lg transition-all duration-500"
            style={{ opacity: active ? 1 : 0, transitionDelay: '700ms' }}
          >
            <div className="font-sans text-xs font-semibold text-green-light">Verifiable Credential Issued</div>
            <div className="font-sans text-[10px] text-text-muted">Linked to DID, no PII on-chain</div>
          </div>
        </div>
      </div>
    </div>
  )
}
