import { useState, useEffect, useRef } from 'react'

export function useScrollObserver(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0])
  const sectionRefs = useRef({})

  const registerRef = (id) => (el) => {
    if (el) sectionRefs.current[id] = el
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.section)
          }
        })
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    )

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return { activeSection, registerRef }
}
