'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import LandingButton from '@/components/landing/ui/LandingButton'
import { useConsultationModal } from '@/components/landing/ConsultationModalContext'

export default function FinalCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const { open } = useConsultationModal()

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #091918 0%, #0B1E1D 50%, #0D2A28 100%)' }}
    >
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(45,212,192,0.12) 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(200,230,0,0.05) 0%, transparent 70%)' }} />

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
          className="font-body text-xl text-[#6A9A98] mb-10 leading-relaxed"
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
          <LandingButton onClick={open}>
            Book a Free Discovery Call →
          </LandingButton>
          <p className="font-body text-[12px] text-white/25 uppercase tracking-widest">
            100% free · no commitment
          </p>
        </motion.div>
      </div>
    </section>
  )
}
