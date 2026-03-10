// ── components/ui/MarqueeStrip.tsx ──
'use client'

import { motion } from 'framer-motion'
import { MARQUEE_ITEMS } from '@/lib/constants'

interface MarqueeStripProps {
  reversed?: boolean
}

export default function MarqueeStrip({ reversed = false }: MarqueeStripProps) {
  // Duplicate items for seamless infinite loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div
      className="w-full bg-teal-accent py-4 overflow-hidden group"
      aria-hidden="true"
    >
      <motion.div
        className="flex gap-0 whitespace-nowrap"
        animate={{
          x: reversed ? ['0%', '33.333%'] : ['0%', '-33.333%'],
        }}
        transition={{
          duration: 25,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        style={{
          animationPlayState: 'running',
        }}
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
    </div>
  )
}
