// ── components/ui/StatCounter.tsx ──
'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import type { Stat } from '@/lib/types'

interface StatCounterProps extends Stat {
  className?: string
}

export default function StatCounter({ value, suffix, label, className = '' }: StatCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, {
        duration: 2,
        ease: 'easeOut',
      })
      return animation.stop
    }
  }, [isInView, value, count])

  return (
    <div ref={ref} className={`flex flex-col items-center text-center ${className}`}>
      <div className="font-display font-bold text-5xl md:text-6xl leading-none mb-2 flex items-end gap-1">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="font-body text-sm font-medium uppercase tracking-wider opacity-80">
        {label}
      </p>
    </div>
  )
}
