// ── components/sections/Services.tsx ──
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import ServiceCard from '@/components/ui/ServiceCard'
import { SERVICES } from '@/lib/constants'
import { staggerContainer } from '@/lib/animations'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  // Asymmetric 2x2: row1=[wide, narrow], row2=[narrow, wide]
  const row1 = [SERVICES[0], SERVICES[1]]
  const row2 = [SERVICES[2], SERVICES[3]]

  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel>02 — SERVICES</SectionLabel>
          <AnimatedHeading
            text="Everything Your Business Needs to Scale."
            tag="h2"
            className="font-display font-extrabold text-[clamp(30px,4vw,52px)] text-dark leading-tight max-w-2xl uppercase"
          />
        </motion.div>

        {/* Row 1: wide + narrow */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-5"
        >
          {/* Wide card — 60% */}
          <div className="md:col-span-3">
            <ServiceCard service={row1[0]} />
          </div>
          {/* Narrow card — 40% */}
          <div className="md:col-span-2">
            <ServiceCard service={row1[1]} />
          </div>
        </motion.div>

        {/* Row 2: narrow + wide */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-5 gap-5"
          transition={{ delayChildren: 0.2 }}
        >
          {/* Narrow card — 40% */}
          <div className="md:col-span-2">
            <ServiceCard service={row2[0]} />
          </div>
          {/* Wide card — 60% */}
          <div className="md:col-span-3">
            <ServiceCard service={row2[1]} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
