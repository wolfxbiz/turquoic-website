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

// Triple for seamless infinite loop
const track = [...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS]

const CARD_WIDTH = 300
const CARD_GAP = 20
const CARD_STEP = CARD_WIDTH + CARD_GAP
const SCROLL_SPEED = 0.5 // px per frame

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const [selected, setSelected] = useState<TeamMember | null>(null)

  // Mobile marquee + swipe
  const mobileRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()
  const isPaused = useRef(false)
  const [activeIndex, setActiveIndex] = useState(0)

  // One-third of the total scroll width = one full set of members
  const oneThird = CARD_STEP * TEAM_MEMBERS.length

  const tick = useCallback(() => {
    const el = mobileRef.current
    if (!el) return
    if (!isPaused.current) {
      el.scrollLeft += SCROLL_SPEED
      // Seamless loop: when we pass the first copy, jump back silently
      if (el.scrollLeft >= oneThird * 2) {
        el.scrollLeft -= oneThird
      }
      // Active dot based on position within one set
      const posInSet = el.scrollLeft % oneThird
      const idx = Math.round(posInSet / CARD_STEP) % TEAM_MEMBERS.length
      setActiveIndex(idx)
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [oneThird])

  useEffect(() => {
    if (!isInView) return
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isInView, tick])

  const handleTouchStart = () => {
    isPaused.current = true
  }

  const handleTouchEnd = () => {
    // Snap to nearest card then resume
    const el = mobileRef.current
    if (!el) return
    const posInSet = el.scrollLeft % oneThird
    const snapIndex = Math.round(posInSet / CARD_STEP)
    const snappedPos = Math.floor(el.scrollLeft / oneThird) * oneThird + snapIndex * CARD_STEP
    el.scrollTo({ left: snappedPos, behavior: 'smooth' })
    setActiveIndex(snapIndex % TEAM_MEMBERS.length)
    setTimeout(() => { isPaused.current = false }, 1200)
  }

  const scrollToIndex = (index: number) => {
    const el = mobileRef.current
    if (!el) return
    isPaused.current = true
    const base = Math.floor(el.scrollLeft / oneThird) * oneThird
    el.scrollTo({ left: base + index * CARD_STEP, behavior: 'smooth' })
    setActiveIndex(index)
    setTimeout(() => { isPaused.current = false }, 1200)
  }

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

        {/* ── Desktop: CSS marquee ── */}
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
          <motion.div
            className="flex items-end gap-8 w-max px-8"
            animate={{ x: ['0%', '-33.333%'] }}
            transition={{ duration: 60, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
            whileHover={{ animationPlayState: 'paused' } as never}
          >
            {track.map((member, i) => (
              <TeamCard
                key={`${member.id}-${i}`}
                member={member}
                index={i % TEAM_MEMBERS.length}
                onClick={() => setSelected(member)}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* ── Mobile: auto-scroll marquee + swipeable ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:hidden relative"
        >
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-8 w-8 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
            aria-hidden="true"
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-8 w-8 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
            aria-hidden="true"
          />

          <div
            ref={mobileRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="flex overflow-x-auto pb-4"
            style={{
              gap: `${CARD_GAP}px`,
              paddingLeft: '24px',
              paddingRight: '24px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {track.map((member, i) => (
              <div key={`m-${member.id}-${i}`} style={{ flexShrink: 0 }}>
                <TeamCard
                  member={member}
                  index={i % TEAM_MEMBERS.length}
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
