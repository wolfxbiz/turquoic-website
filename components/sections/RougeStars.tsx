// ── components/sections/RougeStars.tsx ──
'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedHeading from '@/components/ui/AnimatedHeading'

const VIDEO_ID = 'SWx9Se7zOh8'

export default function RougeStars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const [playing, setPlaying] = useState(false)

  return (
    <section
      id="rougestars"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Background video */}
      <video
        src="/assets/videos/rougestars-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.35 }}
        aria-hidden="true"
      />

      {/* Dark overlay to keep text readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.7) 100%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel className="justify-center">CREATIVE STUDIO</SectionLabel>

          <AnimatedHeading
            text="Introducing RougeStars."
            tag="h2"
            className="font-display font-extrabold text-[clamp(28px,4vw,56px)] text-white leading-tight mt-3 uppercase"
          />

          <p className="font-body text-[16px] lg:text-[17px] mt-4 max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.5)' }}>
            Our in-house creative label. AI-generated music and visual production — where technology meets artistry.
          </p>

          {/* Label badge */}
          <div className="flex items-center justify-center mt-6">
            <span
              className="font-body text-[11px] uppercase tracking-[0.15em] px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(200,230,0,0.10)', color: '#C8E600', border: '1px solid rgba(200,230,0,0.20)' }}
            >
              AI Music Production
            </span>
          </div>
        </motion.div>

        {/* Video embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto max-w-4xl"
          style={{ aspectRatio: '16/9' }}
        >
          {!playing ? (
            /* Custom thumbnail / play button */
            <div
              className="absolute inset-0 rounded-[20px] overflow-hidden cursor-pointer group"
              onClick={() => setPlaying(true)}
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <img
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="RougeStars — AI Music Production"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'rgba(0,0,0,0.45)' }}
              />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center w-20 h-20 rounded-full"
                  style={{
                    background: 'rgba(45,212,192,0.95)',
                    boxShadow: '0 0 60px rgba(45,212,192,0.5)',
                  }}
                >
                  <Play size={32} fill="white" className="text-white ml-1" />
                </motion.div>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-5 left-5">
                <p className="font-display font-bold text-white text-[13px] uppercase tracking-widest opacity-80">
                  RougeStars
                </p>
              </div>
            </div>
          ) : (
            /* YouTube iframe */
            <iframe
              className="absolute inset-0 w-full h-full rounded-[20px]"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
              title="RougeStars — AI Music Production by Turquoic"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            />
          )}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center font-body text-[13px] uppercase tracking-[0.2em] mt-10"
          style={{ color: 'rgba(255,255,255,0.25)' }}
        >
          Music · Production · Visual AI — by Turquoic
        </motion.p>

      </div>
    </section>
  )
}
