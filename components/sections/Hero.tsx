// ── components/sections/Hero.tsx ──
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'
import { wordReveal, staggerContainer } from '@/lib/animations'

const headline1 = 'WE AUTOMATE.'
const headline2a = 'YOU DRIVE'
const headline2b = 'THE GROWTH.'

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


export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const scrollVideoY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentY     = useTransform(scrollYProgress, [0, 1], [0, -60])

  const words1   = headline1.split(' ')
  const words2a  = headline2a.split(' ')
  const words2b  = headline2b.split(' ')
  const allWords = [...words1, ...words2a, ...words2b]

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full overflow-hidden flex flex-col md:h-screen md:min-h-[600px]"
    >

      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT  (visible below md)
      ═══════════════════════════════════════════ */}

      {/* Text + CTA — white card on top on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
        className="md:hidden bg-white px-6 pt-20 pb-6 flex flex-col gap-5"
      >
        <SectionLabel showLine={true}>
          AI-POWERED BUSINESS SOLUTIONS
        </SectionLabel>

        <h1 className="font-display font-extrabold text-[34px] leading-[1.05] tracking-tight text-dark">
          {headline1}
          <span className="block">{headline2a}</span>
          <span className="block">{headline2b}</span>
        </h1>

        <p className="font-body text-[15px] text-muted leading-relaxed -mt-1">
          Intelligent solutions for professionals who are serious about their time.
        </p>

        <div className="flex flex-col gap-3 w-full">
          <Button variant="primary" href="#contact">
            Let&apos;s Build Together
          </Button>
          <Button variant="secondary" href="#services">
            See Our Work
          </Button>
        </div>

      </motion.div>

      {/* Video — below content on mobile */}
      <div className="md:hidden relative h-[56vmax] max-h-[62vh] min-h-[280px] overflow-hidden flex-shrink-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top"
        >
          <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(13,165,160,0.55) 0%, rgba(45,212,192,0.2) 55%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(10,130,128,0.45) 0%, transparent 70%)',
          }}
        />
      </div>


      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT  (visible from md up) — UNCHANGED
      ═══════════════════════════════════════════ */}

      {/* Full-bleed looping video */}
      <motion.div
        style={{ y: scrollVideoY }}
        className="hidden md:block absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Gradient overlays — desktop only */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(13,165,160,0.45) 0%, rgba(45,212,192,0.15) 40%, rgba(224,250,248,0.55) 82%, #ffffff 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(10,130,128,0.55) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Main content — desktop */}
      <motion.div
        style={{ y: contentY }}
        className="hidden md:flex relative z-10 flex-1 items-center pt-16 lg:pt-20"
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-[520px] lg:max-w-[600px]">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 sm:mb-5 lg:mb-6"
            >
              <SectionLabel color="rgba(255,255,255,0.80)" showLine={true}>
                AI-POWERED BUSINESS SOLUTIONS
              </SectionLabel>
            </motion.div>

            <motion.h1
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="font-display font-extrabold text-[38px] sm:text-[46px] md:text-[50px] lg:text-[54px] xl:text-[60px] leading-[1.05] tracking-tight text-white mb-4 sm:mb-5 lg:mb-6"
            >
              <span className="block">
                {words1.map((word, i) => (
                  <motion.span
                    key={`w1-${i}`}
                    variants={wordReveal}
                    custom={i}
                    className="inline-block mr-[0.22em]"
                    transition={{ delay: i * 0.08 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block">
                {words2a.map((word, i) => (
                  <motion.span
                    key={`w2a-${i}`}
                    variants={wordReveal}
                    custom={i}
                    className="inline-block mr-[0.22em]"
                    transition={{ delay: (words1.length + i) * 0.08 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block">
                {words2b.map((word, i) => (
                  <motion.span
                    key={`w2b-${i}`}
                    variants={wordReveal}
                    custom={i}
                    className="inline-block mr-[0.22em]"
                    transition={{ delay: (words1.length + words2a.length + i) * 0.08 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: allWords.length * 0.08 + 0.2 }}
              className="font-body text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-white/85 max-w-sm lg:max-w-md mb-7 sm:mb-8 lg:mb-10 leading-relaxed"
            >
              Intelligent solutions for professionals who are serious about their time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: allWords.length * 0.08 + 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button variant="primary" href="#contact">
                Let&apos;s Build Together
              </Button>
              <Button variant="secondary" href="#services">
                See Our Work
              </Button>
            </motion.div>


          </div>
        </div>
      </motion.div>


      {/* ═══════════════════════════════════════════
          CLIENTS BANNER — shared, always visible
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
            whileHover={{ animationPlayState: 'paused' } as never}
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
