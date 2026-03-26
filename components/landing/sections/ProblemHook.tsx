'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { UserX, Clock, Bug, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { LANDING_PAIN_POINTS } from '@/lib/landing-constants'

const CARD_META = [
  {
    icon: UserX,
    cost: 'Kills momentum',
    costColor: 'text-red-400',
    dotColor: 'bg-red-400',
  },
  {
    icon: Clock,
    cost: 'Burns your budget',
    costColor: 'text-orange-400',
    dotColor: 'bg-orange-400',
  },
  {
    icon: Bug,
    cost: 'Breaks under pressure',
    costColor: 'text-red-400',
    dotColor: 'bg-red-400',
  },
]

export default function ProblemHook() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0B1E1D 0%, #0D2A28 60%, #091918 100%)' }}>

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(45,212,192,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(239,68,68,0.05) 0%, transparent 60%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>

        {/* Eyebrow */}
        <motion.div className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5 }}>
          <span className="w-5 h-px bg-red-400/70" />
          <span className="text-[10px] font-body font-bold uppercase tracking-[0.18em] text-red-400/80">
            Sound Familiar?
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-display font-black text-[clamp(28px,4vw,54px)] text-white leading-tight uppercase mb-5 max-w-3xl"
          initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}>
          Most Businesses Waste Months{' '}
          <span className="text-teal-strong">and Thousands of Dollars</span>{' '}
          on the Wrong Development Team.
        </motion.h2>

        <motion.p
          className="font-body text-[#6A9A98] text-[16px] leading-relaxed mb-16 max-w-lg"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.3, duration: 0.6 }}>
          If any of these feel painfully familiar, you are not alone.
        </motion.p>

        {/* Pain point cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}>
          {LANDING_PAIN_POINTS.map((point, i) => {
            const { icon: Icon, cost, costColor, dotColor } = CARD_META[i]
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative rounded-card overflow-hidden flex flex-col
                           transition-all duration-400
                           hover:translate-y-[-4px]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>

                {/* Top accent bar */}
                <div className="h-0.5 w-full"
                  style={{ background: 'linear-gradient(90deg, rgba(45,212,192,0.6) 0%, transparent 100%)' }} />

                <div className="flex flex-col gap-5 p-7 lg:p-8 flex-1">
                  {/* Icon row */}
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        background: 'rgba(45,212,192,0.08)',
                        border: '1px solid rgba(45,212,192,0.18)',
                      }}>
                      <Icon className="w-5 h-5 text-teal-strong" />
                    </div>
                    <span className="font-display font-black text-[64px] leading-none select-none text-white/[0.05]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="font-display font-black text-[15px] text-white uppercase tracking-wide leading-snug">
                      {point.title}
                    </h3>
                    <p className="font-body text-[#6A9A98] text-[15px] leading-relaxed">
                      {point.description}
                    </p>
                  </div>

                  {/* Cost badge */}
                  <div className="flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                    <span className={`w-1.5 h-1.5 rounded-full ${dotColor} shrink-0`} />
                    <span className={`font-body font-bold text-[11px] uppercase tracking-[0.1em] ${costColor}`}>
                      {cost}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA nudge */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-16"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.9, duration: 0.6 }}>
          <span className="w-12 h-px bg-white/10" />
          <span className="flex items-center gap-2 font-body font-bold text-[11px] uppercase tracking-[0.18em] text-lime">
            There is a better way <ArrowRight className="w-3.5 h-3.5" />
          </span>
          <span className="w-12 h-px bg-white/10" />
        </motion.div>

      </div>
    </section>
  )
}
