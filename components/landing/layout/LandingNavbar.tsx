'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { LANDING_NAV_LINKS } from '@/lib/landing-constants'
import LandingButton from '@/components/landing/ui/LandingButton'
import { useConsultationModal } from '@/components/landing/ConsultationModalContext'

export default function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { open, bannerVisible } = useConsultationModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const topOffset = bannerVisible ? 'top-10' : 'top-0'

  return (
    <>
      <nav
        className={`fixed ${topOffset} left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-teal-mid/30 shadow-sm'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-[22px] tracking-tight uppercase text-teal-accent">
            Turquoic
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {LANDING_NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="relative group">
                <span className="font-body text-[15px] font-medium uppercase text-dark transition-colors duration-200">
                  {link.label}
                </span>
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-teal-strong" />
              </a>
            ))}
            <LandingButton onClick={open}>
              Start Your Project
            </LandingButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen
              ? <X className="w-5 h-5 text-white" />
              : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer — dark themed */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{ background: 'linear-gradient(160deg, #091918 0%, #0B1E1D 50%, #0D2A28 100%)' }}>

            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center top, rgba(45,212,192,0.12) 0%, transparent 65%)' }} />

            {/* Header row — logo + close */}
            <div className="relative flex items-center justify-between px-6 h-16"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <a href="#"
                className="font-display font-bold text-[22px] tracking-tight uppercase text-teal-strong"
                onClick={() => setMobileOpen(false)}>
                Turquoic
              </a>
              <button onClick={() => setMobileOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full"
                style={{ background: 'rgba(255,255,255,0.08)' }}>
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="relative flex-1 flex flex-col justify-center px-6 gap-1">
              {LANDING_NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                  className="flex items-center justify-between py-4 group"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="font-display font-black text-[28px] uppercase text-white
                                   group-hover:text-teal-strong transition-colors duration-200">
                    {link.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-teal-strong
                                         group-hover:translate-x-1 transition-all duration-200" />
                </motion.a>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.div
              className="relative px-6 pb-10 pt-6 flex flex-col gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.25 }}>
              <button
                onClick={() => { setMobileOpen(false); open() }}
                className="w-full flex items-center justify-center gap-2 bg-lime text-olive
                           font-display font-black text-[12px] uppercase tracking-[0.14em]
                           rounded-btn py-4
                           hover:shadow-[0_0_28px_rgba(200,230,0,0.4)] active:scale-[0.98]
                           transition-all duration-200">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center font-body text-[11px] text-white/25 uppercase tracking-widest">
                100% free · no commitment
              </p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
