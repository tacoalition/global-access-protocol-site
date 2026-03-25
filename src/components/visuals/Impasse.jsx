export default function Impasse({ active }) {
  return (
    <div className={`w-full max-w-sm transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="font-sans text-xs font-semibold text-text-muted uppercase tracking-[0.2em] mb-6">
        The Compliance Dilemma
      </div>

      <div className="relative">
        {/* Top: Compliance */}
        <div className={`p-5 bg-surface border border-border rounded-xl mb-4 transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-green/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#10B981" strokeWidth="2">
                <path d="M8 1L2 4v4c0 3.3 2.6 6.4 6 7 3.4-.6 6-3.7 6-7V4L8 1z" />
              </svg>
            </div>
            <span className="font-sans font-semibold text-sm">Compliance</span>
          </div>
          <p className="text-sm text-text-muted font-sans">Requires centralized intermediaries</p>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center my-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2">
            <line x1="12" y1="2" x2="12" y2="18" />
            <path d="M18 12l-6 6-6-6" />
          </svg>
        </div>

        {/* Conflict */}
        <div className={`p-5 bg-red/10 border border-red/30 rounded-xl mb-4 transition-all duration-500 delay-200 ${active ? 'opacity-100' : 'opacity-0'}`}>
          <div className="font-sans font-semibold text-sm text-red mb-1">Conflict</div>
          <p className="text-sm text-text-muted font-sans">
            Intermediaries reintroduce the friction tokenization was designed to eliminate
          </p>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center my-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2">
            <line x1="12" y1="2" x2="12" y2="18" />
            <path d="M18 12l-6 6-6-6" />
          </svg>
        </div>

        {/* Bottom: Decentralization */}
        <div className={`p-5 bg-surface border border-border rounded-xl transition-all duration-500 delay-400 ${active ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#3B82F6" strokeWidth="1.5">
                <circle cx="8" cy="3" r="2" />
                <circle cx="3" cy="13" r="2" />
                <circle cx="13" cy="13" r="2" />
                <line x1="8" y1="5" x2="3" y2="11" />
                <line x1="8" y1="5" x2="13" y2="11" />
                <line x1="3" y1="13" x2="13" y2="13" />
              </svg>
            </div>
            <span className="font-sans font-semibold text-sm">Decentralization</span>
          </div>
          <p className="text-sm text-text-muted font-sans">Permissionless, no gatekeepers needed</p>
        </div>
      </div>
    </div>
  )
}
