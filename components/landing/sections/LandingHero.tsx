'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { staggerContainer, wordReveal } from '@/lib/animations'
import { LANDING_TRUST_ITEMS } from '@/lib/landing-constants'
import LandingButton from '@/components/landing/ui/LandingButton'

const logos = [
  { src: '/assets/logos/hsbc.png',                 alt: 'HSBC',                 w: 120 },
  { src: '/assets/logos/kpmg.png',                 alt: 'KPMG',                 w: 100 },
  { src: '/assets/logos/nielsen.png',              alt: 'Nielsen',              w: 130 },
  { src: '/assets/logos/kantar-tns.png',           alt: 'Kantar TNS',           w: 140 },
  { src: '/assets/logos/dubai-police-academy.png', alt: 'Dubai Police Academy', w: 160 },
  { src: '/assets/logos/dali-advertising.png',     alt: 'DALI Advertising',     w: 140 },
  { src: '/assets/logos/tott-books.png',           alt: 'TOTT Books',           w: 130 },
  { src: '/assets/logos/marunadam-malayalee.png',  alt: 'Marunadam Malayalee',  w: 150 },
  { src: '/assets/logos/foretell-global.png',      alt: 'Foretell Global',      w: 150 },
  { src: '/assets/logos/hylomart.png',             alt: 'HyloMart',             w: 140 },
  { src: '/assets/logos/alya-auditors.png',        alt: 'Alya Auditors',        w: 140 },
]

const track = [...logos, ...logos, ...logos]

const headline1 = 'WE BUILD AI-POWERED'
const headline2 = 'WEBSITES & APPS'
const headline3 = 'FOR YOUR BUSINESS.'

export default function LandingHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' })

  const words1 = headline1.split(' ')
  const words2 = headline2.split(' ')
  const words3 = headline3.split(' ')
  const allWords = [...words1, ...words2, ...words3]

  return (
    <section id="hero" className="relative w-full overflow-hidden flex flex-col">

      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT (below md)
      ═══════════════════════════════════════════ */}

      {/* Mobile hero image — ON TOP, right after navbar */}
      <div className="md:hidden relative w-full pt-16 overflow-hidden">
        <Image
          src="/assets/images/landing-hero.png"
          alt="Turquoic — AI-powered web application development"
          width={1200}
          height={675}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Mobile text content — below the image */}
      <div className="md:hidden bg-white px-6 py-8 flex flex-col gap-5" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block w-6 h-px bg-teal-accent" />
            <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-teal-accent">
              AI-Powered Development
            </span>
          </div>

          <h1 className="font-display font-extrabold text-[34px] leading-[1.05] tracking-tight text-dark mb-4">
            {headline1}<br />{headline2}<br />{headline3}
          </h1>

          <p className="font-body text-[15px] text-muted leading-relaxed mb-6">
            From custom websites to AI-integrated platforms — we design,
            develop, and deploy full-stack software that helps your
            business grow.
          </p>

          <div className="flex flex-col gap-3 w-full mb-6">
            <LandingButton href="https://wa.me/919400061111?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project%20with%20Turquoic." target="_blank" fullWidth>
              Start Your Project →
            </LandingButton>
            <LandingButton href="#services" variant="secondary" fullWidth>
              View Our Work
            </LandingButton>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-3 gap-3 w-full">
            {LANDING_TRUST_ITEMS.map((item, i) => {
              const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[item.icon]
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-teal-mid/30 p-4 flex flex-col items-center text-center shadow-[0_2px_12px_rgba(45,212,192,0.08)]"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-strong flex items-center justify-center mb-2">
                    {Icon && <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />}
                  </div>
                  <span className="font-display font-extrabold text-[22px] text-dark leading-none">
                    {item.value}
                  </span>
                  <span className="font-body text-[10px] text-teal-accent font-medium uppercase tracking-wide mt-1.5 leading-tight">
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
              <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-teal-accent">
                AI-Powered Development
              </span>
            </motion.div>

            {/* Headline — word reveal */}
            <motion.h1
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="font-display font-extrabold text-[clamp(32px,3.5vw,56px)] leading-[1.05] tracking-tight text-dark mb-5"
            >
              <span className="block">
                {words1.map((word, i) => (
                  <motion.span
                    key={`w1-${i}`}
                    variants={wordReveal}
                    className="inline-block mr-[0.22em]"
                    transition={{ delay: i * 0.08 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block">
                {words2.map((word, i) => (
                  <motion.span
                    key={`w2-${i}`}
                    variants={wordReveal}
                    className="inline-block mr-[0.22em]"
                    transition={{ delay: (words1.length + i) * 0.08 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block text-teal-accent">
                {words3.map((word, i) => (
                  <motion.span
                    key={`w3-${i}`}
                    variants={wordReveal}
                    className="inline-block mr-[0.22em]"
                    transition={{ delay: (words1.length + words2.length + i) * 0.08 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: allWords.length * 0.08 + 0.15 }}
              className="font-body text-[16px] lg:text-[18px] text-muted max-w-md mb-8 leading-relaxed"
            >
              From custom websites to AI-integrated platforms — we design,
              develop, and deploy full-stack software that helps your
              business grow.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: allWords.length * 0.08 + 0.3 }}
              className="flex items-start gap-4 mb-10"
            >
              <LandingButton href="https://wa.me/919400061111?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project%20with%20Turquoic." target="_blank">
                Start Your Project →
              </LandingButton>
              <LandingButton href="#services" variant="secondary">
                View Our Work
              </LandingButton>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: allWords.length * 0.08 + 0.5 }}
              className="flex items-center gap-4"
            >
              {LANDING_TRUST_ITEMS.map((item, i) => {
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
                      <span className="font-display font-extrabold text-lg text-dark leading-none block">
                        {item.value}
                      </span>
                      <span className="font-body text-[10px] text-teal-accent font-medium uppercase tracking-wide">
                        {item.label}
                      </span>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT — Hero image, fully visible */}
        <motion.div
          className="flex-1 flex items-center justify-end"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <Image
            src="/assets/images/landing-hero.png"
            alt="Turquoic — AI-powered web application development"
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
          Trusted by leading organisations worldwide
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
                  width={logo.w}
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
