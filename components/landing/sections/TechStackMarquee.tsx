'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { LANDING_TECH_STACK } from '@/lib/landing-constants'

export default function TechStackMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section className="bg-[#F7FFFE] py-24 lg:py-32">
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
            Our Stack
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Enterprise-Grade Technologies,{' '}
          <span className="text-teal-accent">Startup-Ready Speed</span>
        </motion.h2>

        <motion.p
          className="font-body text-muted text-[16px] leading-relaxed max-w-2xl mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          We pick the right tool for each job — not the trendy one. Here&apos;s
          what powers the platforms we build.
        </motion.p>

        {/* Tech stack grid — one row per category */}
        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {LANDING_TECH_STACK.map((row) => (
            <motion.div key={row.category} variants={fadeUp}>
              {/* Category label */}
              <h3 className="font-display font-bold text-[13px] text-teal-accent uppercase tracking-[0.15em] mb-3">
                {row.category}
              </h3>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-3">
                {row.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-teal-mid/40 font-body text-sm font-medium text-dark shadow-[0_2px_12px_rgba(45,212,192,0.08)] hover:border-teal-strong hover:shadow-[0_4px_20px_rgba(45,212,192,0.16)] transition-all duration-200 cursor-default"
                  >
                    {/* Small teal dot indicator */}
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-strong" />
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
