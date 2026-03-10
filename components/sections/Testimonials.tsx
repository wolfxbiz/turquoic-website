// ── components/sections/Testimonials.tsx ──
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import { TESTIMONIALS } from '@/lib/constants'

const track = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="testimonials" className="bg-teal-light py-24 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <SectionLabel className="justify-center">07 — TESTIMONIALS</SectionLabel>
          <AnimatedHeading
            text="What Our Clients Say."
            tag="h2"
            className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase"
          />
        </motion.div>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col gap-5"
      >
        {/* Row 1 — scrolls left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #E0FAF8, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #E0FAF8, transparent)' }} />
          <motion.div
            className="flex gap-5 w-max"
            animate={{ x: ['0%', '-33.333%'] }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
          >
            {track.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #E0FAF8, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #E0FAF8, transparent)' }} />
          <motion.div
            className="flex gap-5 w-max"
            animate={{ x: ['-33.333%', '0%'] }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
          >
            {track.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <div
      className="w-[380px] flex-shrink-0 bg-white rounded-2xl p-7 flex flex-col gap-4"
      style={{
        boxShadow: '0 4px 32px rgba(45,212,192,0.10)',
        border: '1px solid rgba(127,232,220,0.4)',
      }}
    >
      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, s) => (
          <Star key={s} size={13} className="fill-teal-strong text-teal-strong" />
        ))}
      </div>

      {/* Quote */}
      <p className="font-body text-dark text-[14px] leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Divider */}
      <div className="border-t border-teal-light/60" />

      {/* Author row */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-12 h-12 rounded-full bg-teal-mid flex items-center justify-center flex-shrink-0 overflow-hidden ring-2 ring-teal-mid/40">
            {testimonial.avatar ? (
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                width={48}
                height={48}
                unoptimized
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <span className="font-display font-bold text-white text-base">
                {testimonial.author.charAt(0)}
              </span>
            )}
          </div>
          <div className="min-w-0">
            <p className="font-body font-semibold text-dark text-sm leading-tight">
              {testimonial.author}
            </p>
            <p className="font-body text-teal-accent text-xs font-medium mt-0.5">
              {testimonial.role}
            </p>
            <p className="font-body text-muted text-xs">
              {testimonial.company}
            </p>
          </div>
        </div>
        {testimonial.logo && (
          <div className="flex-shrink-0 h-12 w-32 relative opacity-90">
            <Image
              src={testimonial.logo}
              alt={testimonial.company}
              fill
              unoptimized
              className="object-contain object-right"
            />
          </div>
        )}
      </div>
    </div>
  )
}
