'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingDown, Package, ShoppingCart, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { D2C_PAIN_POINTS } from '@/lib/d2c-constants'
import { useConsultationModal } from '@/components/landing/ConsultationModalContext'

const ICONS = [TrendingDown, Package, ShoppingCart]

export default function D2cProblem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })
  const { open } = useConsultationModal()

  return (
    <section
      id="problem"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0B1E1D 0%, #0D2A28 60%, #091918 100%)' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(45,212,192,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(239,68,68,0.05) 0%, transparent 60%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>

        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5 }}
        >
          <span className="w-5 h-px bg-red-400/70" />
          <span className="text-[10px] font-body font-bold uppercase tracking-[0.18em] text-red-400/80">
            The Real Problem
          </span>
        </motion.div>

        <motion.h2
          className="font-display font-black text-[clamp(28px,4vw,54px)] text-white leading-tight uppercase mb-5 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          Your brand isn&apos;t failing.{' '}
          <span className="text-teal-strong">Your setup is.</span>
        </motion.h2>

        <motion.p
          className="font-body text-[16px] leading-relaxed mb-16 max-w-lg"
          style={{ color: '#6A9A98' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          If any of these feel painfully familiar, you are not alone.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {D2C_PAIN_POINTS.map((point, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative rounded-card overflow-hidden flex flex-col hover:translate-y-[-4px] transition-all duration-400"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="h-0.5 w-full"
                  style={{ background: 'linear-gradient(90deg, rgba(45,212,192,0.6) 0%, transparent 100%)' }} />

                <div className="flex flex-col gap-5 p-7 lg:p-8 flex-1">
                  <div className="flex items-start justify-between">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(45,212,192,0.08)', border: '1px solid rgba(45,212,192,0.18)' }}
                    >
                      <Icon className="w-5 h-5 text-teal-strong" />
                    </div>
                    <span className="font-display font-black text-[64px] leading-none select-none text-white/[0.05]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="font-display font-black text-[15px] text-white uppercase tracking-wide leading-snug">
                      {point.title}
                    </h3>
                    <p className="font-body text-[15px] leading-relaxed" style={{ color: '#6A9A98' }}>
                      {point.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                    <span className={`w-1.5 h-1.5 rounded-full ${point.dotColor} shrink-0`} />
                    <span className={`font-body font-bold text-[11px] uppercase tracking-[0.1em] ${point.costColor}`}>
                      {point.cost}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-3 mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <span className="w-12 h-px bg-white/10" />
          <button
            onClick={open}
            className="flex items-center gap-2 font-body font-bold text-[11px] uppercase tracking-[0.18em] text-lime hover:text-white transition-colors duration-200"
          >
            There is a better way <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <span className="w-12 h-px bg-white/10" />
        </motion.div>

      </div>
    </section>
  )
}
