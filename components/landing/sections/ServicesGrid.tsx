'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { LANDING_SERVICES } from '@/lib/landing-constants'

/** Splits title at accent word and renders it in teal-strong */
function TitleWithAccent({ title, accent }: { title: string; accent: string }) {
  const idx = title.indexOf(accent)
  if (idx === -1) return <>{title}</>
  return (
    <>
      {title.slice(0, idx)}
      <span className="text-teal-strong">{accent}</span>
      {title.slice(idx + accent.length)}
    </>
  )
}

// Cascade: each card's sweep starts ~as the previous one finishes, with slight duration variation for organic feel
const HIGHLIGHT_TIMINGS = [
  { duration: '2.5s', delay: '0s'    },
  { duration: '2.7s', delay: '0.9s'  },
  { duration: '2.4s', delay: '1.85s' },
  { duration: '2.6s', delay: '2.7s'  },
  { duration: '2.5s', delay: '3.6s'  },
  { duration: '2.8s', delay: '4.45s' },
]

/** Key phrase with a looping lime underline — uses box-decoration-break:clone so it covers every line */
function DescWithHighlight({ desc, accent, index }: { desc: string; accent: string; index: number }) {
  const idx = desc.indexOf(accent)
  if (idx === -1) return <>{desc}</>
  const { duration, delay } = HIGHLIGHT_TIMINGS[index] ?? HIGHLIGHT_TIMINGS[0]

  return (
    <>
      {desc.slice(0, idx)}
      <span
        className="desc-highlight font-medium text-dark"
        style={{ animationDuration: duration, animationDelay: delay }}
      >
        {accent}
      </span>
      {desc.slice(idx + accent.length)}
    </>
  )
}

export default function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : undefined}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block w-6 h-px bg-teal-accent" />
              <span className="text-xs font-body font-normal uppercase tracking-[0.15em] text-teal-accent">
                What We Build
              </span>
            </motion.div>

            <motion.h2
              className="font-display font-bold text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              Real Results for<br />Real Businesses.
            </motion.h2>
          </div>

          <motion.p
            className="font-body font-normal text-muted text-[17px] leading-relaxed max-w-sm lg:text-right"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : undefined}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We translate complex technology into outcomes that grow your revenue, save your time, and scale with your ambition.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-teal-mid/20"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {LANDING_SERVICES.map((service, i) => {
            const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon]

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-8 lg:p-10 flex flex-col gap-4 group hover:bg-teal-light transition-colors duration-300 cursor-default"
              >
                {/* Number + Icon row */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-teal-light group-hover:bg-white transition-colors duration-300 flex items-center justify-center flex-shrink-0">
                    {Icon && <Icon className="w-5 h-5 text-teal-accent" />}
                  </div>
                  <span className="font-display font-bold text-[40px] leading-none text-teal-mid/50 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title with teal accent word */}
                <h3 className="font-display font-bold text-[17px] text-dark uppercase leading-snug">
                  <TitleWithAccent title={service.title} accent={service.titleAccent} />
                </h3>

                {/* Description with animated underline on key phrase */}
                <p className="font-body font-normal text-muted text-[16px] leading-relaxed flex-1">
                  <DescWithHighlight desc={service.description} accent={service.descAccent} index={i} />
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
