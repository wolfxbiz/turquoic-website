'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { staggerContainer, wordReveal } from '@/lib/animations'
import LandingButton from '@/components/landing/ui/LandingButton'
import config from '../_config'

export default function TemplateHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' })

  const { sectionLabel, headlines, accentLineIndex, subheadline, heroImage, heroImageAlt, trustItems, clientLogos, clientLogoBannerText } = config.hero
  const { ctaUrl, ctaLabel, secondaryCtaLabel, secondaryCtaHref } = config.brand

  const wordGroups = headlines.map((h) => h.split(' '))
  const allWords = wordGroups.flat()

  // Running word offset for stagger delay
  let wordOffset = 0

  const track = [...clientLogos, ...clientLogos, ...clientLogos]

  return (
    <section id="hero" className="relative w-full overflow-hidden flex flex-col">

      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT (below md)
      ═══════════════════════════════════════════ */}

      {/* Mobile hero image — on top, right after navbar */}
      <div className="md:hidden relative w-full pt-16 overflow-hidden">
        <Image
          src={heroImage}
          alt={heroImageAlt}
          width={1200}
          height={675}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Mobile text content */}
      <div className="md:hidden bg-white px-6 py-8 flex flex-col gap-5" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block w-6 h-px bg-teal-accent" />
            <span className="text-xs font-body font-normal uppercase tracking-[0.15em] text-teal-accent">
              {sectionLabel}
            </span>
          </div>

          <h1 className="font-display font-normal text-[34px] leading-[1.05] tracking-[0.02em] text-dark mb-4">
            {headlines.map((line, li) => (
              <span
                key={li}
                className={`block ${li === accentLineIndex ? 'text-teal-accent' : ''}`}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="font-body text-[15px] text-muted leading-relaxed mb-6">
            {subheadline}
          </p>

          <div className="flex flex-col gap-3 w-full mb-6">
            <LandingButton href={ctaUrl} target="_blank" fullWidth>
              {ctaLabel}
            </LandingButton>
            <LandingButton href={secondaryCtaHref} variant="secondary" fullWidth>
              {secondaryCtaLabel}
            </LandingButton>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-3 gap-3 w-full">
            {trustItems.map((item, i) => {
              const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[item.icon]
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-teal-mid/30 p-4 flex flex-col items-center text-center shadow-[0_2px_12px_rgba(45,212,192,0.08)]"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-strong flex items-center justify-center mb-2">
                    {Icon && <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />}
                  </div>
                  <span className="font-display font-normal text-[22px] text-dark leading-none">
                    {item.value}
                  </span>
                  <span className="font-body text-[10px] text-teal-accent font-normal uppercase tracking-wide mt-1.5 leading-tight">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT (md and up)
      ═══════════════════════════════════════════ */}
      <div className="hidden md:flex min-h-screen bg-white items-center overflow-hidden">

        {/* LEFT — Text content */}
        <motion.div
          className="w-[42%] lg:w-[40%] flex-shrink-0 pl-10 lg:pl-20 xl:pl-28 pr-6 lg:pr-10 py-20"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="max-w-[540px]">
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="inline-block w-6 h-px bg-teal-accent" />
              <span className="text-xs font-body font-normal uppercase tracking-[0.15em] text-teal-accent">
                {sectionLabel}
              </span>
            </motion.div>

            {/* Headline — word reveal */}
            <motion.h1
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="font-display font-normal text-[clamp(32px,3.5vw,56px)] leading-[1.05] tracking-[0.02em] text-dark mb-5"
            >
              {wordGroups.map((words, li) => {
                const lineStart = wordOffset
                wordOffset += words.length
                return (
                  <span
                    key={li}
                    className={`block ${li === accentLineIndex ? 'text-teal-accent' : ''}`}
                  >
                    {words.map((word, wi) => (
                      <motion.span
                        key={`w${li}-${wi}`}
                        variants={wordReveal}
                        className="inline-block mr-[0.22em]"
                        transition={{ delay: (lineStart + wi) * 0.08 }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </span>
                )
              })}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: allWords.length * 0.08 + 0.15 }}
              className="font-body text-[16px] lg:text-[18px] text-muted max-w-md mb-8 leading-relaxed"
            >
              {subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: allWords.length * 0.08 + 0.3 }}
              className="flex items-start gap-4 mb-10"
            >
              <LandingButton href={ctaUrl} target="_blank">
                {ctaLabel}
              </LandingButton>
              <LandingButton href={secondaryCtaHref} variant="secondary">
                {secondaryCtaLabel}
              </LandingButton>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: allWords.length * 0.08 + 0.5 }}
              className="flex items-center gap-4"
            >
              {trustItems.map((item, i) => {
                const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[item.icon]
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl border border-teal-mid/30 px-5 py-3.5 flex items-center gap-3 shadow-[0_2px_12px_rgba(45,212,192,0.08)]"
                  >
                    <div className="w-9 h-9 rounded-lg bg-teal-strong flex items-center justify-center flex-shrink-0">
                      {Icon && <Icon className="w-[18px] h-[18px] text-white" strokeWidth={2.5} />}
                    </div>
                    <div>
                      <span className="font-display font-normal text-lg text-dark leading-none block">
                        {item.value}
                      </span>
                      <span className="font-body text-[10px] text-teal-accent font-normal uppercase tracking-wide">
                        {item.label}
                      </span>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT — Hero image */}
        <motion.div
          className="flex-1 flex items-center justify-end"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <Image
            src={heroImage}
            alt={heroImageAlt}
            width={1200}
            height={675}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════
          CLIENT LOGO BANNER — always visible
      ═══════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="relative z-10 w-full bg-white py-6 sm:py-8 overflow-hidden"
      >
        <p className="text-center font-body text-[11px] uppercase tracking-[0.15em] text-muted mb-5">
          {clientLogoBannerText}
        </p>

        <div className="relative">
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
            aria-hidden="true"
          />

          <motion.div
            className="flex items-center gap-10 sm:gap-14 md:gap-16 w-max"
            animate={{ x: ['0%', '-33.333%'] }}
            transition={{ duration: 50, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
          >
            {track.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center px-4 sm:px-6 h-14 md:h-[60px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={48}
                  unoptimized
                  className="object-contain h-full w-auto transition-opacity duration-300 hover:opacity-80"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
