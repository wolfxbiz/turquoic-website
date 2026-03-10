// ── components/ui/AnimatedHeading.tsx ──
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { wordReveal, staggerContainer } from '@/lib/animations'

interface AnimatedHeadingProps {
  text: string
  tag?: 'h1' | 'h2' | 'h3'
  className?: string
}

export default function AnimatedHeading({
  text,
  tag: Tag = 'h2',
  className = '',
}: AnimatedHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })

  const words = text.split(' ')

  return (
    <Tag ref={ref} className={`overflow-hidden ${className}`}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.3em] gap-y-1"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordReveal}
            className="inline-block"
            style={{ transitionDelay: `${i * 0.06}s` }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
