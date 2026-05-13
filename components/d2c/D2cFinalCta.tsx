'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import LandingButton from '@/components/landing/ui/LandingButton'
import { useConsultationModal } from '@/components/landing/ConsultationModalContext'

export default function D2cFinalCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const { open } = useConsultationModal()

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #091918 0%, #0B1E1D 50%, #0D2A28 100%)' }}
    >
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
          Book a free audit. Know where your brand stands{' '}
          <span className="text-teal-strong">in 48 hours.</span>
        </motion.h2>

        <motion.p
          className="font-body text-xl mb-10 leading-relaxed"
          style={{ color: '#6A9A98' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          We spend 45 minutes reviewing your ad accounts, Shopify analytics, and marketplace listings — then give you a specific, prioritised diagnosis at no cost and no obligation. Response within one business day.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
        >
          <LandingButton onClick={open}>
            Book Free Audit <ArrowRight className="inline-block w-4 h-4 ml-1.5" />
          </LandingButton>
          <LandingButton href="#tiers" variant="secondary">
            View Service Tiers
          </LandingButton>
        </motion.div>

        <motion.p
          className="font-body text-[12px] text-white/25 uppercase tracking-widest mt-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Free · No commitment · Response within 1 business day
        </motion.p>

      </div>
    </section>
  )
}
