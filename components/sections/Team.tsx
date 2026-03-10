// ── components/sections/Team.tsx ──
'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import TeamCard from '@/components/ui/TeamCard'
import TeamModal from '@/components/ui/TeamModal'
import { TEAM_MEMBERS } from '@/lib/constants'
import type { TeamMember } from '@/lib/types'

// Triple for seamless infinite loop
const track = [...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS]

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const [selected, setSelected] = useState<TeamMember | null>(null)

  return (
    <>
      <section id="team" className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Soft radial teal glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, #E0FAF8 0%, transparent 65%)',
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

        {/* Marquee strip — full width, all members in one scrolling row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 lg:w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
            aria-hidden="true"
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-20 lg:w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
            aria-hidden="true"
          />

          {/* Scrolling track */}
          <motion.div
            className="flex items-end gap-8 w-max px-8"
            animate={{ x: ['0%', '-33.333%'] }}
            transition={{
              duration: 40,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
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
      </section>

      {/* Modal — rendered outside section so it can overlay everything */}
      <TeamModal member={selected} onClose={() => setSelected(null)} />
    </>
  )
}
