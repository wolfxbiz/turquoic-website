'use client'

import { motion } from 'framer-motion'
import config from '@/_config'

export default function SocialProof() {
  const items = [...config.socialProof, ...config.socialProof, ...config.socialProof]
  return (
    <section className="w-full bg-teal-accent py-4 overflow-hidden" aria-hidden="true">
      <div className="flex items-center justify-center">
        <motion.div
          className="flex gap-0 whitespace-nowrap"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{ duration: 25, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
        >
          {items.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6 font-display font-normal text-white uppercase tracking-widest text-sm">
              {item}
              <span className="text-white/40 text-xs">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
