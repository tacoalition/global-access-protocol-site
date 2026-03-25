export default function VisualPanel({ active, children }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-500 ease-in-out"
      style={{ opacity: active ? 1 : 0, pointerEvents: active ? 'auto' : 'none' }}
    >
      {children}
    </div>
  )
}
