'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { LANDING_PROCESS_STEPS } from '@/lib/landing-constants'

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  // Animated connector line fill
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.6'],
  })
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="process" className="bg-[#F7FFFE] py-24 lg:py-32">
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
            Process
          </span>
          <span className="inline-block w-6 h-px bg-teal-accent" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          How Turquoic Works
        </motion.h2>

        {/* Steps */}
        <motion.div
          className="relative grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Background connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-[26px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-[2px] bg-teal-light"
            aria-hidden="true"
          />
          {/* Animated fill line (desktop) */}
          <motion.div
            className="hidden lg:block absolute top-[26px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-[2px] bg-teal-strong origin-left"
            style={{ scaleX: lineScaleX }}
            aria-hidden="true"
          />

          {LANDING_PROCESS_STEPS.map((step) => (
            <motion.div
              key={step.step}
              variants={fadeUp}
              className="relative text-center lg:text-center flex flex-col items-center lg:items-center"
            >
              {/* Step number bubble */}
              <div className="relative z-10 w-[52px] h-[52px] rounded-full border-2 border-teal-light bg-white flex items-center justify-center mb-5 shadow-[0_4px_16px_rgba(45,212,192,0.15)]">
                <span className="font-display font-extrabold text-xl text-olive">
                  {String(step.step).padStart(2, '0')}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-dark uppercase mb-2">
                {step.title}
              </h3>
              <p className="font-body text-muted text-[16px] leading-relaxed max-w-[220px]">
                {step.description}
              </p>

              {/* Mobile connector */}
              {step.step < 4 && (
                <div
                  className="lg:hidden w-[2px] h-8 bg-teal-light mt-6"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
