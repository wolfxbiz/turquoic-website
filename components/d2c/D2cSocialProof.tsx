'use client'

import { motion } from 'framer-motion'
import { D2C_SOCIAL_PROOF } from '@/lib/d2c-constants'

export default function D2cSocialProof() {
  const items = [...D2C_SOCIAL_PROOF, ...D2C_SOCIAL_PROOF, ...D2C_SOCIAL_PROOF]

  return (
    <section className="w-full bg-teal-accent py-4 overflow-hidden" aria-hidden="true">
      <motion.div
        className="flex gap-0 whitespace-nowrap"
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{ duration: 25, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6 font-display font-semibold text-white uppercase tracking-widest text-sm"
          >
            {item}
            <span className="text-white/40 text-xs">·</span>
          </span>
        ))}
      </motion.div>
    </section>
  )
}
