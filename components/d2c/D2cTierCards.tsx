'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { D2C_TIERS } from '@/lib/d2c-constants'
import LandingButton from '@/components/landing/ui/LandingButton'
import { useConsultationModal } from '@/components/landing/ConsultationModalContext'

export default function D2cTierCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const { open } = useConsultationModal()

  return (
    <section id="tiers" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>

        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block w-6 h-px bg-teal-accent" />
          <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-teal-accent">
            Service Tiers
          </span>
        </motion.div>

        <motion.h2
          className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Pick the tier that fits where you are.
        </motion.h2>

        <motion.p
          className="font-body text-muted text-[17px] leading-relaxed mb-14 max-w-xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Not sure which tier you need? Book a free audit and we will tell you exactly where your brand stands.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {D2C_TIERS.map((tier, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className={`
                relative rounded-card flex flex-col transition-shadow duration-300
                ${tier.highlighted
                  ? 'bg-gradient-card border-2 border-teal-strong shadow-[0_16px_60px_rgba(45,212,192,0.22)] md:-mt-4 md:mb-[-16px]'
                  : 'bg-gradient-card shadow-[0_8px_40px_rgba(45,212,192,0.10)] hover:shadow-[0_16px_60px_rgba(45,212,192,0.20)]'
                }
              `}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-lime text-olive text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 lg:p-10 flex flex-col flex-1">

                {/* Tier badge + number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-body font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full bg-teal-strong/10 text-teal-accent">
                    {tier.tierLabel}
                  </span>
                  <span className="font-display font-black text-[42px] leading-none text-teal-mid/30 select-none">
                    {tier.number}
                  </span>
                </div>

                {/* Name + tagline */}
                <h3 className="font-display font-bold text-[20px] text-dark uppercase tracking-wide mb-2">
                  {tier.name}
                </h3>
                <p className="font-body text-muted text-[14px] leading-snug mb-4">
                  {tier.tagline}
                </p>

                {/* Revenue band */}
                <div
                  className="rounded-xl px-4 py-2.5 mb-4 inline-block"
                  style={{ background: 'rgba(45,212,192,0.08)', border: '1px solid rgba(45,212,192,0.18)' }}
                >
                  <span className="font-display font-bold text-[13px] text-teal-accent uppercase tracking-wide">
                    {tier.revenueBand}
                  </span>
                </div>

                {/* Outcome promise */}
                <div className="border-l-2 border-teal-strong pl-3 mb-6">
                  <p className="font-body font-bold text-[13px] text-dark uppercase tracking-[0.08em] leading-snug">
                    {tier.outcomePromise}
                  </p>
                </div>

                {/* Who its for */}
                <p className="font-body text-muted text-[13px] leading-relaxed mb-6">
                  <span className="font-bold text-dark uppercase text-[10px] tracking-wider block mb-1">Best for</span>
                  {tier.whoItsFor}
                </p>

                {/* Feature list */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-teal-strong flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-[11px] h-[11px] text-white" strokeWidth={3} />
                      </span>
                      <div>
                        <span className="font-body font-bold text-dark text-[13px] uppercase tracking-wide block leading-snug">
                          {feature.name}
                        </span>
                        <span className="font-body text-muted text-[13px] leading-relaxed">
                          {feature.benefit}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <LandingButton onClick={open} fullWidth>
                  {tier.cta} →
                </LandingButton>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
