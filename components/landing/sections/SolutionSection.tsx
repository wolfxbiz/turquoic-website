'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

const SOLUTIONS = [
  {
    number: '01',
    problem: 'Developers who miss the brief',
    title: 'We Document Before We Build',
    description:
      'Before a single line of code is written, you get a detailed brief, wireframes, and technical spec — all approved by you. What you describe is exactly what we build.',
  },
  {
    number: '02',
    problem: 'Months of wasted time',
    title: 'Fixed Timelines. Weekly Updates.',
    description:
      'We commit to delivery dates and stick to them. You get weekly progress updates, a shared project board, and a direct line to your developer — no radio silence, ever.',
  },
  {
    number: '03',
    problem: 'Brittle, hard-to-scale code',
    title: 'Production-Ready From Day One',
    description:
      'We write clean, tested, documented code built for real traffic. Your product handles growth, and your next developer will thank you for the codebase we leave behind.',
  },
]

export default function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section className="bg-[#F7FFFE] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block w-6 h-px bg-teal-accent" />
          <span className="text-xs font-body font-normal uppercase tracking-[0.15em] text-teal-accent">
            The Turquoic Difference
          </span>
        </motion.div>

        <motion.h2
          className="font-display font-bold text-[clamp(26px,3.8vw,50px)] text-dark leading-tight uppercase mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          We Solved Every Problem{' '}
          <span className="text-teal-accent">So You Don&apos;t Have To.</span>
        </motion.h2>

        {/* Solution rows */}
        <motion.div
          className="flex flex-col divide-y divide-teal-mid/30"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {SOLUTIONS.map((sol, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-12 group"
            >
              {/* Left — number + check */}
              <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3 lg:pt-1">
                <span className="font-display font-bold text-[13px] text-teal-accent/60 tracking-widest">
                  {sol.number}
                </span>
                <div className="w-8 h-8 rounded-full bg-teal-strong/10 border border-teal-strong/25 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-teal-accent" strokeWidth={2.5} />
                </div>
              </div>

              {/* Center — fixes label + title */}
              <div className="lg:col-span-5">
                <p className="text-[11px] font-body font-normal uppercase tracking-[0.12em] text-teal-accent mb-3">
                  Fixes: {sol.problem}
                </p>
                <h3 className="font-display font-bold text-[clamp(20px,2.2vw,28px)] text-dark uppercase leading-tight">
                  {sol.title}
                </h3>
              </div>

              {/* Right — description */}
              <div className="lg:col-span-6 flex items-center">
                <p className="font-body font-normal text-muted text-[17px] leading-relaxed">
                  {sol.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
