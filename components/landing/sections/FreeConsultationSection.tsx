'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useConsultationModal } from '@/components/landing/ConsultationModalContext'

export default function FreeConsultationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })
  const { open } = useConsultationModal()

  return (
    <section className="bg-white py-16 lg:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          className="relative w-full lg:aspect-video py-20 lg:py-0 rounded-card overflow-hidden flex items-center justify-center"
          style={{
            background: 'linear-gradient(140deg, #091918 0%, #0B1E1D 50%, #0D2A28 100%)',
            border: '1px solid rgba(45,212,192,0.12)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.25)',
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut' }}>

          {/* Glows */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(45,212,192,0.13) 0%, transparent 60%)' }} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(200,230,0,0.05) 0%, transparent 70%)' }} />

          {/* Decorative grid lines */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(45,212,192,1) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,192,1) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }} />

          {/* Corner accents */}
          <div className="absolute top-4 left-4 lg:top-8 lg:left-8 w-6 h-6 lg:w-8 lg:h-8 border-t-2 border-l-2 border-teal-strong/30 rounded-tl-lg" />
          <div className="absolute top-4 right-4 lg:top-8 lg:right-8 w-6 h-6 lg:w-8 lg:h-8 border-t-2 border-r-2 border-teal-strong/30 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 w-6 h-6 lg:w-8 lg:h-8 border-b-2 border-l-2 border-teal-strong/30 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 w-6 h-6 lg:w-8 lg:h-8 border-b-2 border-r-2 border-teal-strong/30 rounded-br-lg" />

          {/* Content — centered */}
          <div className="relative flex flex-col items-center text-center gap-6 px-6 max-w-2xl">

            {/* Eyebrow */}
            <motion.div className="flex items-center gap-3"
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : undefined}
              transition={{ delay: 0.2, duration: 0.5 }}>
              <span className="w-6 h-px bg-teal-strong/50" />
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-teal-strong/70">
                Free Consultation
              </span>
              <span className="w-6 h-px bg-teal-strong/50" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="font-display font-black text-[clamp(26px,4.5vw,58px)] text-white
                         uppercase leading-[1.04]"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.3, duration: 0.65, ease: 'easeOut' }}>
              Tell us what you&apos;re building.{' '}
              <br className="hidden sm:block" />
              <span className="text-teal-strong">We&apos;ll give you a plan.</span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              className="font-body text-[#6A9A98] text-[15px] lg:text-[16px] leading-relaxed max-w-md"
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : undefined}
              transition={{ delay: 0.45, duration: 0.6 }}>
              A clear approach, honest timeline, and transparent quote —
              delivered within 24 hours. No commitment required.
            </motion.p>

            {/* CTA */}
            <motion.div className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.55, duration: 0.5 }}>
              <button
                onClick={open}
                className="inline-flex items-center gap-2.5 bg-lime text-olive
                           font-display font-black text-[12px] uppercase tracking-[0.14em]
                           rounded-btn px-10 py-4
                           hover:shadow-[0_0_40px_rgba(200,230,0,0.5)] active:scale-[0.98]
                           transition-all duration-200">
                Book My Free Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <span className="font-body text-[11px] text-white/25 uppercase tracking-widest">
                100% free · no commitment
              </span>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
