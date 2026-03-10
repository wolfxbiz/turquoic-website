// ── components/sections/CapabilityProgramme.tsx ──
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import { CAPABILITY_SECTION, CAPABILITY_CARDS } from '@/lib/constants'
import { fadeUp, staggerContainer, wordReveal } from '@/lib/animations'

function HeadlineLine({
  text,
  colorClass,
  globalOffset,
  extraDelay = 0,
  isInView,
}: {
  text: string
  colorClass: string
  globalOffset: number
  extraDelay?: number
  isInView: boolean
}) {
  const words = text.split(' ')
  return (
    <span className="block">
      {words.map((word, wi) => (
        <motion.span
          key={wi}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={wordReveal}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
            delay: (globalOffset + wi) * 0.08 + extraDelay,
          }}
          className={`inline-block mr-[0.22em] ${colorClass}`}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export default function CapabilityProgramme() {
  const heroRef  = useRef(null)
  const cardsRef = useRef(null)

  const heroInView  = useInView(heroRef,  { once: true, amount: 0.15 })
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.15 })

  const whiteWords = CAPABILITY_SECTION.headlineWhite.reduce(
    (acc, line) => acc + line.split(' ').length, 0,
  )

  return (
    <section id="capability" className="overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════
          PART 1 — 50/50 split: white content left | teal image right
      ═══════════════════════════════════════════════════════════ */}
      <div ref={heroRef} className="flex flex-col lg:flex-row min-h-[480px] bg-white">

        {/* ── Left: white panel ── */}
        <div className="bg-white flex-1 flex items-center px-8 md:px-14 lg:px-20 py-16 lg:py-20">
          <div className="max-w-xl w-full">

            {/* Section label */}
            <motion.div
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
              variants={fadeUp}
              transition={{ delay: 0.05 }}
            >
              <SectionLabel color="rgba(45,212,192,1)" showLine={true}>
                {CAPABILITY_SECTION.label}
              </SectionLabel>
            </motion.div>

            {/* Headline */}
            <h2 className="font-display font-black text-4xl md:text-5xl leading-[1.05] mt-5 uppercase">
              {CAPABILITY_SECTION.headlineWhite.map((line, li) => {
                const offset = CAPABILITY_SECTION.headlineWhite
                  .slice(0, li)
                  .reduce((acc, l) => acc + l.split(' ').length, 0)
                return (
                  <HeadlineLine
                    key={`w-${li}`}
                    text={line}
                    colorClass="text-dark"
                    globalOffset={offset}
                    extraDelay={0.15}
                    isInView={heroInView}
                  />
                )
              })}
              {CAPABILITY_SECTION.headlineLime.map((line, li) => {
                const offset = CAPABILITY_SECTION.headlineLime
                  .slice(0, li)
                  .reduce((acc, l) => acc + l.split(' ').length, 0)
                return (
                  <HeadlineLine
                    key={`l-${li}`}
                    text={line}
                    colorClass="text-teal-accent"
                    globalOffset={offset}
                    extraDelay={whiteWords * 0.08 + 0.3}
                    isInView={heroInView}
                  />
                )
              })}
            </h2>

            {/* Body copy */}
            <motion.p
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
              variants={fadeUp}
              transition={{ delay: 0.55 }}
              className="font-body text-sm text-muted leading-relaxed max-w-sm mt-5"
            >
              {CAPABILITY_SECTION.body}
            </motion.p>

            {/* CTA button */}
            <motion.div
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
              variants={fadeUp}
              transition={{ delay: 0.7 }}
              className="mt-7"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-2 px-6 py-3 font-body font-bold text-[11px] uppercase tracking-[0.14em] bg-lime text-olive rounded-btn hover:shadow-[0_0_20px_rgba(200,230,0,0.4)] transition-all duration-200"
              >
                {CAPABILITY_SECTION.primaryCTA}
              </motion.a>
            </motion.div>

            {/* Pills */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
              transition={{ staggerChildren: 0.08, delayChildren: 0.85 }}
              className="mt-6 flex gap-3 flex-wrap"
            >
              {CAPABILITY_SECTION.pills.map((pill) => (
                <motion.div
                  key={pill}
                  variants={fadeUp}
                  className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 border border-teal-mid"
                  style={{ background: '#E0FAF8' }}
                >
                  <div className="w-2 h-2 rounded-full bg-teal-strong flex-shrink-0" />
                  <span className="font-body text-xs text-teal-accent font-medium">{pill}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* ── Right: teal panel with illustration ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 min-h-[360px] lg:min-h-0 p-4 lg:p-6 bg-white"
        >
          <div
            className="relative w-full h-full rounded-card overflow-hidden"
            style={{ background: '#B8E8E3', minHeight: 'inherit' }}
          >
            <Image
              src="/images/capability-team.png"
              alt="Turquoic capability team"
              fill
              unoptimized
              priority
              className="object-cover object-center"
            />
          </div>
        </motion.div>

      </div>

      {/* ═══════════════════════════════════════════════════════════
          PART 2 — Editorial numbered list
      ═══════════════════════════════════════════════════════════ */}
      <div
        ref={cardsRef}
        className="bg-white pb-20"
      >
        {/* Top border — full bleed */}
        <div className="border-t border-dark/10 mx-6 md:mx-16 lg:mx-24" />

        {CAPABILITY_CARDS.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 24 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group relative"
          >
            {/* Row — full width with consistent edge padding */}
            <div className="grid grid-cols-[56px_1fr] lg:grid-cols-[8%_28%_1fr] items-start gap-x-8 lg:gap-x-0 py-10 px-6 md:px-16 lg:px-24 cursor-default">

              {/* Animated bottom border */}
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-teal-strong origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />

              {/* Index number */}
              <span
                className="font-display font-black leading-none select-none self-center transition-colors duration-300 group-hover:text-teal-strong"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', color: 'rgba(26,26,26,0.09)' }}
              >
                0{i + 1}
              </span>

              {/* Title */}
              <h3 className="font-display font-black text-[clamp(17px,1.8vw,26px)] text-dark uppercase leading-tight tracking-tight self-center group-hover:text-teal-accent transition-colors duration-300 col-span-1 lg:pr-12">
                {card.title}
              </h3>

              {/* Description — hidden on mobile, shown from lg */}
              <p className="hidden lg:block font-body text-[15px] text-muted leading-relaxed self-center">
                {card.description}
              </p>

              {/* Description — mobile only, spans full width below */}
              <p className="lg:hidden font-body text-[14px] text-muted leading-relaxed mt-3 col-start-2">
                {card.description}
              </p>
            </div>

            {/* Row divider — full bleed */}
            <div className="border-t border-dark/10 mx-6 md:mx-16 lg:mx-24" />
          </motion.div>
        ))}
      </div>

    </section>
  )
}
