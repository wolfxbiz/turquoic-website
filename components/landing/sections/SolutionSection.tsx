'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FileSearch, CalendarCheck, Rocket } from 'lucide-react'

const SOLUTIONS = [
  {
    number: '01',
    problem: 'Developers who miss the brief',
    title: 'We Document\nBefore We Build',
    description:
      'Before a single line of code is written, you get a detailed brief, wireframes, and technical spec — all approved by you. What you describe is exactly what we build.',
    result: 'Zero surprise deliveries.',
    image: '/images/capability-team.png',
    imagePos: 'object-center',
    icon: FileSearch,
    accent: 'teal' as const,
  },
  {
    number: '02',
    problem: 'Months of wasted time',
    title: 'Fixed Timelines.\nWeekly Updates.',
    description:
      'We commit to delivery dates and stick to them. You get weekly progress updates, a shared project board, and a direct line to your developer — no radio silence, ever.',
    result: 'Always know where things stand.',
    image: '/images/industry-finance.png',
    imagePos: 'object-center',
    icon: CalendarCheck,
    accent: 'dark' as const,
  },
  {
    number: '03',
    problem: 'Brittle, hard-to-scale code',
    title: 'Production-Ready\nFrom Day One',
    description:
      'We write clean, tested, documented code built for real traffic. Your product handles growth, and your next developer will thank you for the codebase we leave behind.',
    result: 'Built to scale from the start.',
    image: '/images/industry-ecommerce.png', // cspell:disable-line
    imagePos: 'object-top',
    icon: Rocket,
    accent: 'lime' as const,
  },
]

const overlayMap = {
  teal: 'from-teal-accent/80 to-[#0B1E1D]/60',
  dark: 'from-[#0B1E1D]/85 to-teal-accent/40',
  lime: 'from-[#0B1E1D]/80 to-teal-accent/50',
}

const iconBgMap = {
  teal: 'bg-teal-strong/20 border-teal-strong/40 text-teal-strong',
  dark: 'bg-white/10 border-white/20 text-white',
  lime: 'bg-lime/20 border-lime/30 text-lime',
}

const tagMap = {
  teal: 'bg-teal-strong/20 text-teal-strong',
  dark: 'bg-white/15 text-white/80',
  lime: 'bg-lime/20 text-lime',
}

const resultMap = {
  teal: 'border-l-2 border-teal-strong text-teal-accent',
  dark: 'border-l-2 border-teal-strong text-teal-accent',
  lime: 'border-l-2 border-lime text-olive',
}

export default function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div className="flex items-center gap-3 mb-5"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5 }}>
          <span className="w-6 h-px bg-teal-accent" />
          <span className="text-xs font-body font-bold uppercase tracking-[0.15em] text-teal-accent">
            The Turquoic Difference
          </span>
        </motion.div>

        <motion.h2
          className="font-display font-black text-[clamp(28px,4vw,54px)] text-dark leading-tight uppercase mb-16 lg:mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}>
          We Solved Every Problem{' '}
          <span className="text-teal-accent">So You Don&apos;t Have To.</span>
        </motion.h2>

        {/* Cards */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {SOLUTIONS.map((sol, i) => {
            const Icon = sol.icon
            const isEven = i % 2 === 0

            return (
              <motion.div
                key={i}
                className={`group rounded-card overflow-hidden flex flex-col
                            ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                            bg-white shadow-[0_4px_32px_rgba(0,0,0,0.08)]
                            hover:shadow-[0_16px_56px_rgba(0,0,0,0.14)]
                            transition-shadow duration-500`}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 + i * 0.12 }}>

                {/* ── Visual panel ── */}
                <div className="relative lg:w-[45%] h-64 lg:h-auto overflow-hidden flex-shrink-0">
                  <Image
                    src={sol.image}
                    alt={sol.title.replace('\n', ' ')}
                    fill
                    className={`object-cover group-hover:scale-105 transition-transform duration-700 ${sol.imagePos}`}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${overlayMap[sol.accent]}`} />

                  {/* Number + Icon */}
                  <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between">
                    <span className="font-display font-black text-[56px] lg:text-[72px] leading-none
                                     text-white/10 select-none">
                      {sol.number}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl border backdrop-blur-sm
                                     flex items-center justify-center ${iconBgMap[sol.accent]}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Problem tag — bottom of image */}
                  <div className="absolute bottom-5 left-6 lg:left-8 right-6 lg:right-8">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-body font-bold
                                      uppercase tracking-[0.14em] px-3 py-1.5 rounded-full
                                      backdrop-blur-sm ${tagMap[sol.accent]}`}>
                      <span className="w-1 h-1 rounded-full bg-current opacity-70" />
                      Fixes: {sol.problem}
                    </span>
                  </div>
                </div>

                {/* ── Content panel ── */}
                <div className="flex-1 flex flex-col justify-center gap-5 px-7 py-9 lg:px-12 lg:py-12">
                  {/* Title */}
                  <h3 className="font-display font-black text-[clamp(22px,2.4vw,34px)] text-dark
                                 uppercase leading-[1.08] whitespace-pre-line">
                    {sol.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-muted text-[16px] lg:text-[17px] leading-relaxed">
                    {sol.description}
                  </p>

                  {/* Result callout */}
                  <div className={`pl-4 py-1 ${resultMap[sol.accent]}`}>
                    <p className="font-body font-bold text-[13px] uppercase tracking-[0.1em]">
                      {sol.result}
                    </p>
                  </div>
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
