// ── components/sections/About.tsx ──
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import { slideInLeft, slideInRight } from '@/lib/animations'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="about" className="overflow-hidden flex flex-col lg:flex-row min-h-screen w-full bg-white pt-12 lg:pt-16">

      {/* Left panel — video */}
      <motion.div
        ref={ref}
        variants={slideInLeft}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="w-full lg:w-1/2 flex items-center p-4 lg:p-6 lg:min-h-0"
      >
        {/* Mobile: vertical video */}
        <div className="lg:hidden relative w-full rounded-card overflow-hidden" style={{ aspectRatio: '9/16' }}>
          <video
            src="/assets/videos/hero-video-mobile.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Desktop: original video */}
        <div className="hidden lg:block relative w-full h-full rounded-card overflow-hidden" style={{ minHeight: 'inherit' }}>
          <video
            src="/scene-1ae.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Right panel — content */}
      <motion.div
        variants={slideInRight}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="bg-white w-full lg:w-1/2 flex items-center justify-center px-10 md:px-16 lg:px-20 xl:px-28 py-20 lg:py-0"
      >
        <div className="w-full max-w-2xl">
          <SectionLabel>01 — ABOUT</SectionLabel>

          <AnimatedHeading
            text="Built for the Businesses That Mean Business."
            tag="h2"
            className="font-display font-extrabold text-[clamp(32px,3.5vw,52px)] text-dark leading-tight mb-4 uppercase"
          />

          <div className="w-16 h-1 bg-teal-strong rounded-full mb-8" />

          <div className="flex flex-col gap-5">
            <p className="font-body text-muted text-[16px] leading-relaxed">
              Turquoic was built because we were tired of watching talented professionals lose hours
              every week to tasks that technology should be handling. We are a team of engineers,
              strategists, and operators who have worked inside high-growth businesses — and we
              know exactly where the friction lives.
            </p>
            <p className="font-body text-muted text-[16px] leading-relaxed">
              We do not sell software. We build systems. The difference is that a system is
              designed around your specific workflows, integrated into your existing tools, and
              deployed with the intent to grow alongside your business.
            </p>
            <p className="font-body text-muted text-[16px] leading-relaxed">
              Whether you are a solo operator, a growing agency, or an established enterprise —
              if you are serious about scaling efficiently, Turquoic was made for you.
            </p>
          </div>
        </div>
      </motion.div>

    </section>
  )
}
