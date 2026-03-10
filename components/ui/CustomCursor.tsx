// ── components/ui/CustomCursor.tsx ──
'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hide on mobile
    if (typeof window !== 'undefined' && window.innerWidth < 768) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0
    let animFrameId: number

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      animFrameId = requestAnimationFrame(animateRing)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element
      if (
        target.closest('a, button, [data-cursor="pointer"]')
      ) {
        ring.classList.add('hovered')
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as Element
      if (
        target.closest('a, button, [data-cursor="pointer"]')
      ) {
        ring.classList.remove('hovered')
      }
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    animFrameId = requestAnimationFrame(animateRing)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(animFrameId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
