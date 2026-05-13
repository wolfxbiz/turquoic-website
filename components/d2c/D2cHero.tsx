'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { staggerContainer, wordReveal } from '@/lib/animations'
import { D2C_TRUST_ITEMS } from '@/lib/d2c-constants'
import LandingButton from '@/components/landing/ui/LandingButton'
import { useConsultationModal } from '@/components/landing/ConsultationModalContext'

const BANNER_H = 40
const NAV_MOBILE = 64
const NAV_DESKTOP = 80

const headline1 = 'FROM ₹0 TO ₹50L/MO.'
const headline2 = "WE'VE MAPPED"
const headline3 = 'THE ROUTE.'

export default function D2cHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' })
  const { open, bannerVisible } = useConsultationModal()
  const bannerOffset = bannerVisible ? BANNER_H : 0
  const mobileTop = NAV_MOBILE + bannerOffset
  const desktopTop = NAV_DESKTOP + bannerOffset

  const words1 = headline1.split(' ')
  const words2 = headline2.split(' ')
  const words3 = headline3.split(' ')
  const allWords = [...words1, ...words2, ...words3]

  return (
    <section id="hero" className="relative w-full overflow-hidden flex flex-col">

      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT
      ═══════════════════════════════════════════ */}
      <div
        className="md:hidden"
        style={{ paddingTop: mobileTop, background: 'linear-gradient(160deg, #091918 0%, #0B1E1D 60%, #0D2A28 100%)' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(45,212,192,0.10) 0%, transparent 65%)' }} />
      </div>

      <div
        className="md:hidden px-6 pb-10 flex flex-col gap-5"
        style={{ background: 'linear-gradient(160deg, #091918 0%, #0B1E1D 60%, #0D2A28 100%)' }}
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block w-6 h-px bg-teal-accent" />
            <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-teal-accent">
              India&apos;s D2C Growth Partner
            </span>
          </div>

          <h1 className="font-display font-extrabold text-[34px] leading-[1.05] tracking-tight text-white mb-4">
            {headline1}<br />{headline2}<br />
            <span className="text-teal-strong">{headline3}</span>
          </h1>

          <p className="font-body text-[17px] leading-relaxed mb-6" style={{ color: '#6A9A98' }}>
            For Indian D2C founders ready to stop guessing and start compounding — across web, Amazon, Meesho, and beyond.
          </p>

          <div className="flex flex-col gap-3 w-full mb-8">
            <LandingButton onClick={open} fullWidth>
              Get a Free Audit →
            </LandingButton>
            <LandingButton href="#tiers" variant="secondary" fullWidth>
              See How It Works
            </LandingButton>
          </div>

          <div className="grid grid-cols-3 gap-3 w-full">
            {D2C_TRUST_ITEMS.map((item, i) => {
              const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[item.icon]
              return (
                <div
                  key={i}
                  className="rounded-2xl p-4 flex flex-col items-center text-center"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(45,212,192,0.15)',
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-strong flex items-center justify-center mb-2">
                    {Icon && <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />}
                  </div>
                  <span className="font-display font-extrabold text-[22px] text-white leading-none">
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
          DESKTOP LAYOUT
      ═══════════════════════════════════════════ */}
      <div
        className="hidden md:flex min-h-screen items-center overflow-hidden relative"
        style={{
          paddingTop: desktopTop,
          background: 'linear-gradient(160deg, #091918 0%, #0B1E1D 55%, #0D2A28 100%)',
        }}
      >
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(45,212,192,0.09) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at bottom right, rgba(200,230,0,0.04) 0%, transparent 60%)' }} />

        {/* LEFT — Text */}
        <motion.div
          className="w-[50%] lg:w-[48%] flex-shrink-0 pl-10 lg:pl-20 xl:pl-28 pr-6 lg:pr-10 pb-20 relative z-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="max-w-[560px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="inline-block w-6 h-px bg-teal-accent" />
              <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-teal-accent">
                India&apos;s D2C Growth Partner
              </span>
            </motion.div>

            <motion.h1
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="font-display font-extrabold text-[clamp(32px,3.5vw,58px)] leading-[1.05] tracking-tight text-white mb-5"
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
              <span className="block text-teal-strong">
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: allWords.length * 0.08 + 0.15 }}
              className="font-body text-[17px] lg:text-[19px] max-w-md mb-8 leading-relaxed"
              style={{ color: '#6A9A98' }}
            >
              For Indian D2C founders and brand operators ready to stop guessing and start compounding — across web, Amazon, Meesho, and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: allWords.length * 0.08 + 0.3 }}
              className="flex items-start gap-4 mb-10"
            >
              <LandingButton onClick={open}>
                Get a Free Audit →
              </LandingButton>
              <LandingButton href="#tiers" variant="secondary">
                See How It Works
              </LandingButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: allWords.length * 0.08 + 0.5 }}
              className="flex items-center gap-4"
            >
              {D2C_TRUST_ITEMS.map((item, i) => {
                const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[item.icon]
                return (
                  <div
                    key={i}
                    className="rounded-2xl px-5 py-3.5 flex items-center gap-3"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(45,212,192,0.15)',
                    }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-teal-strong flex items-center justify-center flex-shrink-0">
                      {Icon && <Icon className="w-[18px] h-[18px] text-white" strokeWidth={2.5} />}
                    </div>
                    <div>
                      <span className="font-display font-extrabold text-lg text-white leading-none block">
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

        {/* RIGHT — Metrics panel */}
        <motion.div
          className="flex-1 flex items-center justify-center pr-10 lg:pr-20 xl:pr-28 pb-20 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div
            className="w-full max-w-[420px] rounded-card p-8 lg:p-10 flex flex-col gap-6"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(45,212,192,0.14)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.3)',
            }}
          >
            <div className="flex items-center gap-3 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="w-2 h-2 rounded-full bg-teal-strong" />
              <span className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-teal-accent">
                Live Brand Performance
              </span>
            </div>

            {[
              { label: 'Blended ROAS Improvement', value: '+34%', sub: 'vs pre-engagement baseline', color: 'text-teal-strong' },
              { label: 'RTO Rate Reduction', value: '−11%', sub: 'COD returns in 90 days', color: 'text-lime' },
              { label: 'Monthly Revenue Growth', value: '₹31L/mo', sub: 'from ₹18L/mo in 3 months', color: 'text-white' },
              { label: 'Checkout Conversion', value: '3.1%', sub: 'up from 1.4% after CRO', color: 'text-teal-strong' },
            ].map((metric, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-body text-[11px] uppercase tracking-[0.12em]" style={{ color: 'rgba(106,154,152,0.8)' }}>
                  {metric.label}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className={`font-display font-black text-[28px] leading-none ${metric.color}`}>
                    {metric.value}
                  </span>
                  <span className="font-body text-[12px]" style={{ color: 'rgba(106,154,152,0.6)' }}>
                    {metric.sub}
                  </span>
                </div>
                {i < 3 && <div className="mt-2 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />}
              </div>
            ))}

            <div
              className="rounded-xl px-4 py-3 flex items-center gap-2"
              style={{ background: 'rgba(200,230,0,0.06)', border: '1px solid rgba(200,230,0,0.12)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0" />
              <span className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-lime/80">
                Placeholder — replace with real brand data
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════
          TRUST STRIP — always visible
      ═══════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="relative z-10 w-full bg-white py-6 sm:py-8 overflow-hidden"
      >
        <p className="text-center font-body text-[11px] uppercase tracking-[0.15em] text-muted mb-5">
          Trusted by 80+ Indian D2C brands
        </p>
      </motion.div>

    </section>
  )
}
