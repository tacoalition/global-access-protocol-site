import { useState, useEffect, useRef } from 'react'

export function useScrollObserver(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0])
  const sectionRefs = useRef({})

  const registerRef = (id) => (el) => {
    if (el) sectionRefs.current[id] = el
  }

  useEffect(() => {
    // Trigger when the section heading reaches roughly the middle of the
    // viewport, but clamp so the trigger line is never above the sticky
    // panel top (6rem / 96px).
    const STICKY_TOP = 96

    const onScroll = () => {
      const triggerLine = Math.max(STICKY_TOP, window.innerHeight * 0.3)
      let current = null
      for (const id of sectionIds) {
        const el = sectionRefs.current[id]
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= triggerLine && rect.bottom > STICKY_TOP + 100) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return { activeSection, registerRef }
}
