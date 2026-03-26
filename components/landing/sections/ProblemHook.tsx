'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { LANDING_PAIN_POINTS } from '@/lib/landing-constants'

const ALERT_STYLES = [
  { color: '#EF4444', bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.22)' },
  { color: '#F97316', bg: 'rgba(249,115,22,0.06)', border: 'rgba(249,115,22,0.22)' },
  { color: '#EF4444', bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.22)' },
]

export default function ProblemHook() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>

        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6 }}
        >
          <AlertTriangle className="w-4 h-4 text-[#EF4444]" />
          <span className="text-xs font-body font-normal uppercase tracking-[0.15em] text-[#EF4444]">
            Sound Familiar?
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-display font-bold text-[clamp(26px,3.8vw,50px)] text-dark leading-tight uppercase mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Most Businesses Waste Months{' '}
          <span style={{ color: '#F97316' }}>and Thousands of Dollars</span>{' '}
          on the Wrong Development Team.
        </motion.h2>

        <motion.p
          className="font-body font-normal text-muted text-[17px] leading-relaxed mb-14 max-w-xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          If any of these feel painfully familiar, you are not alone.
        </motion.p>

        {/* Pain point cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {LANDING_PAIN_POINTS.map((point, i) => {
            const style = ALERT_STYLES[i]
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-card p-8 relative overflow-hidden"
                style={{
                  background: style.bg,
                  border: `1px solid ${style.border}`,
                  borderLeft: `3px solid ${style.color}`,
                }}
              >
                {/* Faded number watermark */}
                <span
                  className="absolute top-3 right-5 font-display text-[80px] leading-none select-none pointer-events-none"
                  style={{ color: style.color, opacity: 0.08 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: style.bg, border: `1px solid ${style.border}` }}
                >
                  <AlertTriangle className="w-5 h-5" style={{ color: style.color }} />
                </div>

                <h3 className="font-display font-bold text-[16px] text-dark uppercase tracking-wide mb-3">
                  {point.title}
                </h3>
                <p className="font-body font-normal text-muted text-[16px] leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Closing nudge */}
        <motion.p
          className="text-center font-body font-normal text-[15px] text-muted uppercase tracking-widest mt-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          There is a better way.
        </motion.p>

      </div>
    </section>
  )
}
