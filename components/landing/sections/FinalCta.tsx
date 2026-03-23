'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import LandingButton from '@/components/landing/ui/LandingButton'

export default function FinalCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      id="contact"
      className="relative bg-gradient-section py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle radial overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center" ref={ref}>
        <motion.h2
          className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-white leading-tight uppercase mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Let&apos;s Build Something That Lasts.
        </motion.h2>

        <motion.p
          className="font-body text-lg text-white/80 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          Whether you&apos;re validating an idea or scaling a product,
          Turquoic has the expertise to deliver.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
        >
          <LandingButton href="#pricing">
            Book a Free Discovery Call →
          </LandingButton>
          <p className="font-body text-sm text-white/60">
            Or message us directly — we respond within 1 hour
          </p>
        </motion.div>
      </div>
    </section>
  )
}
