'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import LandingButton from '@/components/landing/ui/LandingButton'
import config from '../_config'

export default function TemplateFinalCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const { heading, subheadline, ctaLabel, ctaUrl, footnote } = config.finalCta

  return (
    <section id="contact" className="relative bg-gradient-section py-24 lg:py-32 overflow-hidden">
      {/* Subtle radial overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center" ref={ref}>
        <motion.h2
          className="font-display font-normal text-[clamp(28px,4vw,52px)] text-white leading-tight uppercase mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {heading}
        </motion.h2>

        <motion.p
          className="font-body text-lg text-white/80 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          {subheadline}
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
        >
          <LandingButton href={ctaUrl} target="_blank">
            {ctaLabel}
          </LandingButton>
          <p className="font-body text-sm text-white/60">{footnote}</p>
        </motion.div>
      </div>
    </section>
  )
}
