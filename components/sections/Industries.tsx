// ── components/sections/Industries.tsx ──
'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { Check, TrendingUp, Building2, ShoppingBag, Briefcase } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import { INDUSTRIES } from '@/lib/constants'
import type { Industry } from '@/lib/types'

const VISUAL_CONFIG: Record<string, {
  Icon: React.ElementType
  image: string
  accent: string
}> = {
  finance: {
    Icon: TrendingUp,
    image: '/images/industry-finance.png',
    accent: '#2DD4BF',
  },
  'real-estate': {
    Icon: Building2,
    image: '/images/industry-real-estate.png',
    accent: '#14B8A6',
  },
  ecommerce: {
    Icon: ShoppingBag,
    image: '/images/industry-ecommerce.png',
    accent: '#0D9488',
  },
  'professional-services': {
    Icon: Briefcase,
    image: '/images/industry-professional.png',
    accent: '#0F766E',
  },
}

function IndustryVisualCard({ industry, index }: { industry: Industry; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const config = VISUAL_CONFIG[industry.id] ?? VISUAL_CONFIG.finance
  const { Icon } = config

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 30 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }, [mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }, [mouseX, mouseY])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative rounded-card overflow-hidden cursor-none h-[460px] lg:h-[500px] shadow-xl shadow-black/10"
      >
        {/* ── Photo ── */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: isHovered ? 1.07 : 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={config.image}
            alt={industry.name}
            fill
            unoptimized
            className="object-cover object-center"
          />
        </motion.div>

        {/* ── Permanent teal vignette (bottom 60%) so name is always readable ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(14,165,160,0.92) 0%, rgba(14,165,160,0.55) 35%, rgba(45,212,192,0.15) 60%, transparent 100%)',
          }}
        />

        {/* ── Top accent bar ── */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px] pointer-events-none"
          style={{ background: 'linear-gradient(to right, #2DD4C0, #0EA5A0)' }}
          animate={{ scaleX: isHovered ? 1 : 0, originX: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />

        {/* ── Default state: icon + name at bottom ── */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3"
          animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? 12 : 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          {/* icon pill */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: config.accent }}
          >
            <Icon size={20} className="text-white" strokeWidth={1.8} />
          </div>
          <div>
            <p className="font-display font-bold text-xl text-white leading-tight">
              {industry.name}
            </p>
            <p className="font-body text-white/60 text-sm mt-1">
              Tailored AI solutions
            </p>
          </div>
        </motion.div>

        {/* ── Hover overlay: full content ── */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              key="hover"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col justify-end p-6"
              style={{
                background:
                  'linear-gradient(to top, rgba(10,74,70,0.97) 0%, rgba(14,165,160,0.92) 45%, rgba(45,212,192,0.4) 75%, transparent 100%)',
              }}
            >
              {/* Icon + name row */}
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: config.accent }}
                >
                  <Icon size={17} className="text-white" strokeWidth={1.8} />
                </div>
                <p className="font-display font-bold text-lg text-white leading-tight">
                  {industry.name}
                </p>
              </div>

              {/* Description */}
              <p className="font-body text-white/70 text-[12.5px] leading-relaxed mb-4 line-clamp-2">
                {industry.description}
              </p>

              {/* Divider */}
              <div className="h-px mb-4" style={{ background: 'rgba(224,250,248,0.3)' }} />

              {/* Bullet points */}
              <ul className="flex flex-col gap-2">
                {industry.bulletPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.24, ease: 'easeOut' }}
                    className="flex items-start gap-2.5"
                  >
                    <span
                      className="mt-[3px] flex-shrink-0 w-3.5 h-3.5 rounded-full flex items-center justify-center"
                      style={{ background: config.accent }}
                    >
                      <Check size={8} className="text-white" strokeWidth={3} />
                    </span>
                    <span className="font-body text-white/85 text-[12px] leading-snug">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section id="industries" className="bg-teal-light py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <SectionLabel>03 — INDUSTRIES</SectionLabel>
            <AnimatedHeading
              text="Solutions Designed for Your World."
              tag="h2"
              className="font-display font-extrabold text-[clamp(30px,4vw,52px)] text-dark leading-tight max-w-2xl uppercase"
            />
          </div>
          <p className="font-body text-muted text-sm max-w-xs lg:text-right leading-relaxed">
            Hover each card to explore how we transform your industry.
          </p>
        </motion.div>

        {/* 4-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((industry, i) => (
            <IndustryVisualCard key={industry.id} industry={industry} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
