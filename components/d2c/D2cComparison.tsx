'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { D2C_COMPARISON_ROWS } from '@/lib/d2c-constants'

export default function D2cComparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  const tiers = ['Launch & Scale', 'Growth Accelerator', 'Enterprise Dominance']
  const tierLabels = ['Tier 1', 'Tier 2', 'Tier 3']

  return (
    <section id="comparison" className="bg-white py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8" ref={ref}>

        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block w-6 h-px bg-teal-accent" />
          <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-teal-accent">
            Side by Side
          </span>
        </motion.div>

        <motion.h2
          className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Which tier is right for you?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="text-left py-4 pr-6 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-muted w-[28%]">
                  Criteria
                </th>
                {tiers.map((tier, i) => (
                  <th
                    key={i}
                    className={`py-4 px-5 text-center font-display font-bold text-[13px] uppercase tracking-wide w-[24%] ${
                      i === 1
                        ? 'bg-teal-strong text-white rounded-t-xl'
                        : 'text-dark'
                    }`}
                  >
                    <span className="block text-[10px] font-body font-normal uppercase tracking-[0.15em] opacity-70 mb-0.5">
                      {tierLabels[i]}
                    </span>
                    {tier}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {D2C_COMPARISON_ROWS.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? 'bg-[#F7FFFE]' : 'bg-white'}
                >
                  <td className="py-4 pr-6 font-body text-[13px] font-bold text-dark uppercase tracking-wide">
                    {row.label}
                  </td>
                  <td className="py-4 px-5 text-center font-body text-[14px] text-muted">
                    {row.tier1}
                  </td>
                  <td className="py-4 px-5 text-center font-body text-[14px] text-dark font-semibold bg-teal-strong/[0.06]">
                    {row.tier2}
                  </td>
                  <td className="py-4 px-5 text-center font-body text-[14px] text-muted">
                    {row.tier3}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  )
}
