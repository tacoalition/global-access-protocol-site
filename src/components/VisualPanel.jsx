export default function VisualPanel({ active, children }) {
  return (
    <div
      className="w-full transition-opacity duration-500 ease-in-out"
      style={{ opacity: active ? 1 : 0, pointerEvents: active ? 'auto' : 'none' }}
    >
      {children}
    </div>
  )
}
