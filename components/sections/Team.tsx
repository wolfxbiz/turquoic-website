// ── components/sections/Team.tsx ──
'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import TeamCard from '@/components/ui/TeamCard'
import TeamModal from '@/components/ui/TeamModal'
import { TEAM_MEMBERS } from '@/lib/constants'
import type { TeamMember } from '@/lib/types'

// Triple for seamless infinite loop (desktop marquee)
const track = [...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS]

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const [selected, setSelected] = useState<TeamMember | null>(null)

  // ── Mobile scroll + dots ──
  const mobileRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = useCallback(() => {
    const el = mobileRef.current
    if (!el) return
    const cardWidth = 300 + 20
    const idx = Math.round(el.scrollLeft / cardWidth)
    setActiveIndex(Math.min(idx, TEAM_MEMBERS.length - 1))
  }, [])

  useEffect(() => {
    const el = mobileRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToIndex = (index: number) => {
    const el = mobileRef.current
    if (!el) return
    el.scrollTo({ left: index * 320, behavior: 'smooth' })
  }

  // ── Desktop marquee: RAF auto-scroll + mouse drag ──
  const desktopScrollRef = useRef<HTMLDivElement>(null)
  const isDraggingDesktop = useRef(false)
  const hasDragged = useRef(false)
  const dragStartX = useRef(0)
  const dragStartScroll = useRef(0)
  const rafRef = useRef<number>()
  const [isGrabbing, setIsGrabbing] = useState(false)

  useEffect(() => {
    if (!isInView) return
    const el = desktopScrollRef.current
    if (!el) return

    const getOneThird = () => el.scrollWidth / 3
    // Start in the middle third for seamless bidirectional looping
    el.scrollLeft = getOneThird()

    const tick = () => {
      if (!isDraggingDesktop.current) {
        el.scrollLeft += 1
        const oneThird = getOneThird()
        if (el.scrollLeft >= oneThird * 2) el.scrollLeft -= oneThird
        if (el.scrollLeft <= 0) el.scrollLeft += oneThird
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [isInView])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDraggingDesktop.current = true
    hasDragged.current = false
    setIsGrabbing(true)
    dragStartX.current = e.clientX
    dragStartScroll.current = desktopScrollRef.current?.scrollLeft ?? 0
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDraggingDesktop.current) return
    const el = desktopScrollRef.current
    if (!el) return
    e.preventDefault()
    const dx = e.clientX - dragStartX.current
    if (Math.abs(dx) > 5) hasDragged.current = true
    el.scrollLeft = dragStartScroll.current - dx
    const oneThird = el.scrollWidth / 3
    if (el.scrollLeft >= oneThird * 2) el.scrollLeft -= oneThird
    if (el.scrollLeft <= 0) el.scrollLeft += oneThird
  }, [])

  const onMouseUp = useCallback(() => {
    isDraggingDesktop.current = false
    setIsGrabbing(false)
  }, [])

  return (
    <>
      <section id="team" className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Soft radial teal glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, #E0FAF8 0%, transparent 65%)',
          }}
          aria-hidden="true"
        />

        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <SectionLabel className="justify-center">OUR TEAM</SectionLabel>
            <AnimatedHeading
              text="The Minds Behind Turquoic."
              tag="h2"
              className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-dark leading-tight mt-3 uppercase"
            />
            <p className="font-body text-muted text-[16px] lg:text-[17px] mt-4 max-w-lg mx-auto leading-relaxed">
              A passionate team obsessed with making businesses run smarter, faster and better.
            </p>
          </motion.div>
        </div>

        {/* ── Desktop: scroll-based marquee with drag support ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden md:block"
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-20 lg:w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 lg:w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
            aria-hidden="true"
          />
          <div
            ref={desktopScrollRef}
            className="overflow-x-scroll"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              cursor: isGrabbing ? 'grabbing' : 'grab',
              userSelect: 'none',
            }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            <div className="flex items-end gap-8 w-max px-8">
              {track.map((member, i) => (
                <TeamCard
                  key={`${member.id}-${i}`}
                  member={member}
                  index={i % TEAM_MEMBERS.length}
                  onClick={() => {
                    if (!hasDragged.current) setSelected(member)
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Mobile: free swipe scroll + snap + dots ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:hidden relative"
        >
          <div
            className="absolute left-0 top-0 bottom-8 w-8 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-8 w-8 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
            aria-hidden="true"
          />

          <div
            ref={mobileRef}
            className="flex overflow-x-auto pb-4"
            style={{
              gap: '20px',
              paddingLeft: '24px',
              paddingRight: '24px',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {TEAM_MEMBERS.map((member, i) => (
              <div key={member.id} style={{ flexShrink: 0, scrollSnapAlign: 'center' }}>
                <TeamCard
                  member={member}
                  index={i}
                  onClick={() => setSelected(member)}
                />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-3">
            {TEAM_MEMBERS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to team member ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: activeIndex === i ? '20px' : '8px',
                  height: '8px',
                  background: activeIndex === i ? '#2DD4C0' : '#D1FAF5',
                }}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <TeamModal member={selected} onClose={() => setSelected(null)} />
    </>
  )
}
