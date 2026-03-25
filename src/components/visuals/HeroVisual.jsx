export default function HeroVisual({ active }) {
  return (
    <div className={`w-full max-w-sm transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Abstract network graphic */}
      <div className="relative w-full aspect-square max-w-[300px] mx-auto">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          {/* Outer ring */}
          <circle
            cx="150" cy="150" r="130"
            fill="none" stroke="#3B82F6" strokeWidth="1" strokeDasharray="8 4"
            className="transition-all duration-1000"
            style={{ opacity: active ? 0.3 : 0 }}
          />
          {/* Inner ring */}
          <circle
            cx="150" cy="150" r="80"
            fill="none" stroke="#10B981" strokeWidth="1.5"
            className="transition-all duration-1000"
            style={{ opacity: active ? 0.5 : 0, strokeDasharray: '820', strokeDashoffset: active ? 0 : 820 }}
          />
          {/* Center node */}
          <circle
            cx="150" cy="150" r="12"
            fill="#3B82F6"
            className="transition-all duration-500"
            style={{ opacity: active ? 1 : 0, transform: active ? 'scale(1)' : 'scale(0)', transformOrigin: '150px 150px' }}
          />
          {/* Satellite nodes */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180
            const x = 150 + 80 * Math.cos(rad)
            const y = 150 + 80 * Math.sin(rad)
            return (
              <g key={angle}>
                <line
                  x1="150" y1="150" x2={x} y2={y}
                  stroke="#3B82F6" strokeWidth="0.5"
                  className="transition-all duration-700"
                  style={{ opacity: active ? 0.3 : 0, transitionDelay: `${i * 100 + 300}ms` }}
                />
                <circle
                  cx={x} cy={y} r="6" fill="#1F2937" stroke="#3B82F6" strokeWidth="1.5"
                  className="transition-all duration-500"
                  style={{ opacity: active ? 1 : 0, transitionDelay: `${i * 100 + 300}ms` }}
                />
              </g>
            )
          })}
          {/* Outer satellite nodes */}
          {[30, 90, 150, 210, 270, 330].map((angle, i) => {
            const rad = (angle * Math.PI) / 180
            const x = 150 + 130 * Math.cos(rad)
            const y = 150 + 130 * Math.sin(rad)
            const ix = 150 + 80 * Math.cos(((angle - 30) * Math.PI) / 180)
            const iy = 150 + 80 * Math.sin(((angle - 30) * Math.PI) / 180)
            return (
              <g key={`outer-${angle}`}>
                <line
                  x1={ix} y1={iy} x2={x} y2={y}
                  stroke="#10B981" strokeWidth="0.5"
                  className="transition-all duration-700"
                  style={{ opacity: active ? 0.2 : 0, transitionDelay: `${i * 100 + 600}ms` }}
                />
                <circle
                  cx={x} cy={y} r="4" fill="#1F2937" stroke="#10B981" strokeWidth="1"
                  className="transition-all duration-500"
                  style={{ opacity: active ? 0.7 : 0, transitionDelay: `${i * 100 + 600}ms` }}
                />
              </g>
            )
          })}
        </svg>
      </div>

      <div
        className="text-center mt-4 transition-all duration-500"
        style={{ opacity: active ? 1 : 0, transitionDelay: '1000ms' }}
      >
        <div className="font-mono text-xs text-accent-light">Global Access Protocol</div>
        <div className="font-sans text-[10px] text-text-muted mt-1">Compliant DeFi infrastructure for tokenized securities</div>
      </div>
    </div>
  )
}
