'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import Button from '@/components/ui/Button'
import config from '@/_config'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const { sectionLabel, heading, tiers } = config.pricing

  return (
    <section id="pricing" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div className="flex items-center gap-3 mb-4" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : undefined} transition={{ duration: 0.6 }}>
          <span className="inline-block w-6 h-px bg-teal-accent" />
          <span className="text-xs font-body font-normal uppercase tracking-[0.15em] text-teal-accent">{sectionLabel}</span>
        </motion.div>

        <motion.h2 className="font-display font-normal text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase mb-14" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : undefined} transition={{ duration: 0.7, ease: 'easeOut' }}>
          {heading}
        </motion.h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch" variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          {tiers.map((tier, i) => (
            <motion.div
              key={i} variants={fadeUp} whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className={`relative rounded-card p-8 lg:p-10 flex flex-col transition-shadow duration-300 ${
                tier.highlighted
                  ? 'bg-gradient-card border-2 border-teal-strong shadow-[0_16px_60px_rgba(45,212,192,0.22)] md:-mt-4 md:mb-[-16px]'
                  : 'bg-gradient-card shadow-[0_8px_40px_rgba(45,212,192,0.12)] hover:shadow-[0_16px_60px_rgba(45,212,192,0.22)]'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-lime text-olive text-[11px] font-normal uppercase tracking-[0.12em] px-4 py-1.5 rounded-full whitespace-nowrap">Most Popular</span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-display font-normal text-[18px] text-dark uppercase tracking-wide mb-2">{tier.name}</h3>
                <span className="font-display font-normal text-5xl text-dark">${tier.price.toLocaleString()}</span>
                <p className="font-body text-sm text-muted mt-2">{tier.description}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-strong flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-[11px] h-[11px] text-white" strokeWidth={3} />
                    </span>
                    <span className="font-body text-[15px] text-muted leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href={config.brand.ctaUrl} target="_blank" fullWidth>{tier.cta}</Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
