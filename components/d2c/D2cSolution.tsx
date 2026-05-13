'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { IndianRupee, Target, ArrowUpRight } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

const POINTS = [
  {
    icon: IndianRupee,
    title: 'Right stage, right tools',
    body: 'A brand doing ₹3L/mo needs a fundamentally different intervention than one doing ₹40L/mo. You do not pay for headless commerce when you have not hit your first 1,000 orders.',
    accent: 'teal' as const,
  },
  {
    icon: Target,
    title: 'Audit before anything',
    body: "We spend the first week inside your numbers before recommending a single rupee of spend. The right diagnosis is worth more than the fastest action.",
    accent: 'dark' as const,
  },
  {
    icon: ArrowUpRight,
    title: 'Grows with your revenue',
    body: 'Each tier has a clear revenue trigger for the next one. When you outgrow your tier, we tell you — and move you up. No upsell pressure, just a clear framework.',
    accent: 'lime' as const,
  },
]

const cardStyle = {
  teal: {
    iconBg: 'bg-teal-strong/20 border-teal-strong/40 text-teal-strong',
    result: 'border-l-2 border-teal-strong text-teal-accent',
  },
  dark: {
    iconBg: 'bg-white/10 border-white/20 text-white',
    result: 'border-l-2 border-teal-strong text-teal-accent',
  },
  lime: {
    iconBg: 'bg-lime/20 border-lime/30 text-lime',
    result: 'border-l-2 border-lime text-olive',
  },
}

export default function D2cSolution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section id="solution" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>

        <motion.div
          className="flex items-center gap-3 mb-5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5 }}
        >
          <span className="w-6 h-px bg-teal-accent" />
          <span className="text-xs font-body font-bold uppercase tracking-[0.15em] text-teal-accent">
            How We Think
          </span>
        </motion.div>

        <motion.h2
          className="font-display font-black text-[clamp(28px,4vw,54px)] text-dark leading-tight uppercase mb-5 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          Three tiers. One framework.{' '}
          <span className="text-teal-accent">Built around where your brand actually is.</span>
        </motion.h2>

        <motion.p
          className="font-body text-muted text-[17px] leading-relaxed mb-16 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Most agencies sell you a retainer and figure out the scope later. We do not. We built three productized service tiers calibrated to specific revenue stages — because the right service depends on where the brand is right now.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {POINTS.map((point, i) => {
            const Icon = point.icon
            const styles = cardStyle[point.accent]
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group rounded-card overflow-hidden bg-white shadow-[0_4px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_56px_rgba(0,0,0,0.14)] transition-shadow duration-500 flex flex-col"
              >
                <div className="flex flex-col gap-5 p-8 lg:p-10 flex-1">
                  <div
                    className={`w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0 ${styles.iconBg}`}
                    style={point.accent === 'dark' ? { background: 'rgba(13,42,40,0.08)', borderColor: 'rgba(13,42,40,0.15)', color: '#0D2A28' } : undefined}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="font-display font-black text-[17px] text-dark uppercase tracking-wide leading-snug">
                      {point.title}
                    </h3>
                    <p className="font-body text-muted text-[16px] leading-relaxed">
                      {point.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
