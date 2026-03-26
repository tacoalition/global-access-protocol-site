import { useState, useEffect, useCallback } from 'react'
import { createPopup } from '@typeform/embed'

const TYPEFORM_ID = 'uWyIXRTX'
const DRIVE_FOLDER_URL = 'https://drive.google.com/drive/u/0/folders/1mgUdy_I3XZij8PHvlx7TEDpIGYCxi-fu'

export default function HighlightComment({ onFormSubmit, formCompleted }) {
  const [selection, setSelection] = useState(null)
  const [tooltipEl, setTooltipEl] = useState(null)

  const handleMouseUp = useCallback(() => {
    setTimeout(() => {
      const sel = window.getSelection()
      const text = sel?.toString().trim()

      if (!text || text.length < 3) {
        setSelection(null)
        return
      }

      const range = sel.getRangeAt(0)
      const rect = range.getBoundingClientRect()

      let sectionId = ''
      let node = range.startContainer
      while (node && node !== document.body) {
        if (node.dataset?.section) {
          sectionId = node.dataset.section
          break
        }
        node = node.parentElement
      }

      setSelection({
        text,
        sectionId,
        top: rect.top,
        left: rect.left + rect.width / 2,
      })
    }, 10)
  }, [])

  const handleMouseDown = useCallback((e) => {
    if (tooltipEl && !tooltipEl.contains(e.target)) {
      setSelection(null)
    }
  }, [tooltipEl])

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [handleMouseUp, handleMouseDown])

  const handleClick = () => {
    if (formCompleted) {
      window.open(DRIVE_FOLDER_URL, '_blank')
      setSelection(null)
      return
    }

    const { open } = createPopup(TYPEFORM_ID, {
      hidden: {
        highlighted_text: selection.text.slice(0, 500),
        page_section: selection.sectionId,
      },
      onSubmit: () => {
        onFormSubmit?.()
        setSelection(null)
      },
      onClose: () => setSelection(null),
    })
    open()
  }

  if (!selection) return null

  return (
    <div
      ref={setTooltipEl}
      className="fixed z-[100] -translate-x-1/2 -translate-y-full"
      style={{
        top: selection.top - 12,
        left: Math.min(Math.max(selection.left, 80), window.innerWidth - 80),
      }}
    >
      <div className="bg-surface border border-border rounded-lg shadow-lg px-3 py-2 flex items-center gap-2">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
          <path d="M1 3.5h12M1 7h8M1 10.5h10" />
        </svg>
        <button
          onClick={handleClick}
          className="font-sans text-xs font-medium text-accent-light hover:text-accent cursor-pointer bg-transparent border-none p-0"
        >
          {formCompleted ? 'View materials' : 'Leave a comment'}
        </button>
      </div>
      <div className="flex justify-center">
        <div className="w-2 h-2 bg-surface border-r border-b border-border rotate-45 -mt-1" />
      </div>
    </div>
  )
}
