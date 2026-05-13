'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { D2C_STATS, D2C_TESTIMONIAL } from '@/lib/d2c-constants'

export default function D2cProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="proof" className="bg-teal-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>

        <motion.div
          className="flex items-center gap-3 mb-4 justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block w-6 h-px bg-teal-accent" />
          <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-teal-accent">
            Why Founders Pick Us
          </span>
          <span className="inline-block w-6 h-px bg-teal-accent" />
        </motion.div>

        <motion.h2
          className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Numbers that hold up under scrutiny.
        </motion.h2>

        {/* Stat blocks */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {D2C_STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-2xl p-7 shadow-[0_4px_32px_rgba(45,212,192,0.10)] border border-teal-mid/40 text-center flex flex-col gap-2"
            >
              <span className="font-display font-black text-[clamp(28px,3vw,44px)] text-dark leading-none">
                {stat.value}
              </span>
              <span className="font-body text-muted text-[13px] leading-snug">
                {stat.caption}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_32px_rgba(45,212,192,0.12)] border border-teal-mid/40">

            <div className="flex gap-1 mb-6">
              {Array.from({ length: D2C_TESTIMONIAL.rating }).map((_, j) => (
                <Star key={j} className="w-[14px] h-[14px] text-teal-strong fill-teal-strong" />
              ))}
            </div>

            <p className="font-body text-dark text-[17px] lg:text-[18px] leading-relaxed mb-8 italic">
              &ldquo;{D2C_TESTIMONIAL.quote}&rdquo;
            </p>

            <div className="border-t border-teal-light/60 pt-6 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full ring-2 ring-teal-mid/40 bg-teal-light flex items-center justify-center">
                  <span className="font-display font-bold text-sm text-teal-accent">
                    {D2C_TESTIMONIAL.initials}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-dark text-[15px]">
                    {D2C_TESTIMONIAL.name}
                  </p>
                  <p className="font-body text-teal-accent text-xs font-medium">
                    {D2C_TESTIMONIAL.role} · {D2C_TESTIMONIAL.brand}
                  </p>
                </div>
              </div>
              <span className="font-body text-[10px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full bg-lime/20 text-olive">
                {D2C_TESTIMONIAL.placeholder}
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
