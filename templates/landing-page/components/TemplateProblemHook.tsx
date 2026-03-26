'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import config from '../_config'

export default function TemplateProblemHook() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const { sectionLabel, heading, headingAccent, painPoints, closingLine } = config.problemHook

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block w-6 h-px bg-teal-accent" />
          <span className="text-xs font-body font-normal uppercase tracking-[0.15em] text-teal-accent">
            {sectionLabel}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-display font-normal text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {heading}{' '}
          <span className="text-teal-accent">{headingAccent}</span>
        </motion.h2>

        {/* Pain point columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {painPoints.map((point, i) => {
            const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[point.icon]
            return (
              <motion.div key={i} variants={fadeUp} className="text-center px-4">
                <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mx-auto mb-5">
                  {Icon && <Icon className="w-6 h-6 text-teal-accent" />}
                </div>
                <h3 className="font-display font-normal text-[18px] text-dark uppercase tracking-wide mb-3">
                  {point.title}
                </h3>
                <p className="font-body text-muted text-[15px] leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Closing line */}
        <motion.p
          className="text-center font-display font-normal text-lg text-teal-accent uppercase tracking-wide"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          {closingLine}
        </motion.p>
      </div>
    </section>
  )
}
