// ── components/sections/ClientsBanner.tsx ──
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const logos = [
  { src: '/assets/logos/hsbc.png',                  alt: 'HSBC',                  w: 120 },
  { src: '/assets/logos/kpmg.png',                  alt: 'KPMG',                  w: 100 },
  { src: '/assets/logos/nielsen.png',               alt: 'Nielsen',               w: 130 },
  { src: '/assets/logos/kantar-tns.png',            alt: 'Kantar TNS',            w: 140 },
  { src: '/assets/logos/dubai-police-academy.png',  alt: 'Dubai Police Academy',  w: 160 },
  { src: '/assets/logos/dali-advertising.png',      alt: 'DALI Advertising',      w: 140 },
  { src: '/assets/logos/tott-books.png',            alt: 'TOTT Books',            w: 130 },
  { src: '/assets/logos/marunadam-malayalee.png',   alt: 'Marunadam Malayalee',   w: 150 },
  { src: '/assets/logos/foretell-global.png',       alt: 'Foretell Global',       w: 150 },
]

const track = [...logos, ...logos, ...logos]

export default function ClientsBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <section ref={ref} className="bg-white border-y border-teal-light overflow-hidden py-8 sm:py-10">
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center font-body text-[11px] uppercase tracking-[0.2em] text-muted mb-8"
      >
        Trusted by leading organisations worldwide
      </motion.p>

      {/* Marquee track */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
          aria-hidden="true"
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
          aria-hidden="true"
        />

        <motion.div
          className="flex items-center w-max"
          style={{ gap: '3.5rem' }}
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ height: 44 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={44}
                unoptimized
                className="object-contain h-full w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
