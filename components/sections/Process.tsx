// ── components/sections/Process.tsx ──
'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import { PROCESS_STEPS } from '@/lib/constants'
import { staggerContainer, fadeUp } from '@/lib/animations'

export default function Process() {
  const ref = useRef(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="process" className="bg-[#F7FFFE] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <SectionLabel className="justify-center">06 — HOW WE WORK</SectionLabel>
          <AnimatedHeading
            text="From First Call to Full Deployment."
            tag="h2"
            className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase"
          />
        </motion.div>

        {/* Steps — Desktop: horizontal, Mobile: vertical */}
        <div className="relative">
          {/* Animated connector line (desktop only) */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-[52px] left-[calc(10%+20px)] right-[calc(10%+20px)] h-[2px] bg-teal-light overflow-hidden"
            aria-hidden="true"
          >
            <motion.div
              className="h-full bg-teal-strong origin-left"
              style={{ scaleX: lineScale }}
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10"
          >
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-start lg:items-center lg:text-center gap-4"
              >
                {/* Step number bubble */}
                <div
                  className="w-[52px] h-[52px] rounded-full border-2 border-teal-light bg-white flex items-center justify-center flex-shrink-0 relative z-10"
                  style={{ boxShadow: '0 4px 16px rgba(45,212,192,0.15)' }}
                >
                  <span
                    className="font-display font-extrabold text-xl leading-none"
                    style={{ color: '#556000' }}
                  >
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:px-2">
                  <h3 className="font-display font-bold text-lg text-dark mb-2 uppercase">
                    {step.title}
                  </h3>
                  <p className="font-body text-muted text-[14px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
