'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { LANDING_TESTIMONIALS } from '@/lib/landing-constants'

export default function LandingTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="testimonials" className="bg-teal-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-4 justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block w-6 h-px bg-teal-accent" />
          <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-teal-accent">
            Reviews
          </span>
          <span className="inline-block w-6 h-px bg-teal-accent" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Trusted by Founders, Product Teams & Growing Brands
        </motion.h2>

        {/* Overall rating badge */}
        <motion.div
          className="flex justify-center mb-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-[0_4px_16px_rgba(45,212,192,0.12)]">
            <Star className="w-4 h-4 text-teal-strong fill-teal-strong" />
            <span className="font-body font-semibold text-dark text-[15px]">4.9/5</span>
            <span className="font-body text-muted text-[15px]">overall rating</span>
          </div>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {LANDING_TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-2xl p-7 shadow-[0_4px_32px_rgba(45,212,192,0.10)] border border-teal-mid/40 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-[13px] h-[13px] text-teal-strong fill-teal-strong" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-dark text-[16px] leading-relaxed mb-6 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="border-t border-teal-light/60 my-4" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full ring-2 ring-teal-mid/40 bg-teal-light flex items-center justify-center">
                  <span className="font-display font-bold text-sm text-teal-accent">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-dark text-[15px]">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-teal-accent text-xs font-medium">
                    {testimonial.flag} {testimonial.country}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
