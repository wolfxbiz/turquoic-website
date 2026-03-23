'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { LANDING_SERVICES } from '@/lib/landing-constants'

export default function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="services" className="bg-teal-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block w-6 h-px bg-teal-accent" />
          <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-teal-accent">
            What We Build
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Full-Stack Solutions Built for the Real World
        </motion.h2>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {LANDING_SERVICES.map((service, i) => {
            const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon]
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="bg-gradient-card rounded-card p-8 shadow-[0_8px_40px_rgba(45,212,192,0.12)] hover:shadow-[0_16px_60px_rgba(45,212,192,0.22)] transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center mb-5">
                  {Icon && <Icon className="w-6 h-6 text-teal-accent" />}
                </div>
                <h3 className="font-display font-bold text-[18px] text-dark uppercase tracking-wide mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted text-[15px] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
