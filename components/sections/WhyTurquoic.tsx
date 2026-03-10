// ── components/sections/WhyTurquoic.tsx ──
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, ShieldCheck, Gauge } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import StatCounter from '@/components/ui/StatCounter'
import { STATS } from '@/lib/constants'
import { staggerContainer, fadeUp, slideInLeft } from '@/lib/animations'

const differentiators = [
  {
    icon: Lightbulb,
    title: 'Radically Custom',
    description:
      'We never template, never copy-paste. Every solution is designed from scratch around your specific business model, workflow, and goals.',
  },
  {
    icon: Gauge,
    title: 'Speed Without Sacrifice',
    description:
      'We move fast — but we do not cut corners. Our process is built to deliver results quickly while building systems that actually last.',
  },
  {
    icon: ShieldCheck,
    title: 'Partners, Not Vendors',
    description:
      'We are invested in your outcomes. Our success is measured by yours — not by the number of hours we bill or the scope we inflate.',
  },
]

export default function WhyTurquoic() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="why" className="bg-gradient-section py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <SectionLabel color="rgba(255,255,255,0.75)">04 — WHY TURQUOIC</SectionLabel>
          <AnimatedHeading
            text="The Turquoic Difference."
            tag="h2"
            className="font-display font-extrabold text-[clamp(32px,5vw,64px)] text-white leading-tight max-w-xl uppercase"
          />
        </motion.div>

        {/* 3 columns */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {differentiators.map((item) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} variants={fadeUp} className="flex flex-col gap-5">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon size={28} className="text-lime" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-2 uppercase">
                    {item.title}
                  </h3>
                  <p className="font-body text-white/75 leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                className="text-white"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
