'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { LANDING_NAV_LINKS } from '@/lib/landing-constants'
import LandingButton from '@/components/landing/ui/LandingButton'

export default function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-teal-mid/30 shadow-sm'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="font-display font-bold text-[22px] tracking-tight uppercase text-teal-accent"
          >
            Turquoic
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {LANDING_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative group"
              >
                <span className="font-body text-[15px] font-medium uppercase text-dark transition-colors duration-200">
                  {link.label}
                </span>
                {/* Underline on hover */}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-teal-strong" />
              </a>
            ))}
            <LandingButton href="#contact">
              Start Your Project
            </LandingButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-gradient-hero md:hidden flex flex-col items-center justify-center gap-6"
          >
            {LANDING_NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-display font-bold text-3xl text-white py-2 border-b border-white/30"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.label}
              </motion.a>
            ))}
            <LandingButton
              href="#contact"
              fullWidth
              onClick={() => setMobileOpen(false)}
            >
              Start Your Project
            </LandingButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
