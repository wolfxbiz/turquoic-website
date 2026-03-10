// ── components/ui/ParallaxWrapper.tsx ──
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface ParallaxWrapperProps {
  children: ReactNode
  speed?: number
  className?: string
}

export default function ParallaxWrapper({
  children,
  speed = 0.3,
  className = '',
}: ParallaxWrapperProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * -150])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
