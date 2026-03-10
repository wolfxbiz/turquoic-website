// ── components/layout/Navbar.tsx ──
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-teal-mid/30 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className={`font-display font-bold text-[22px] tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-teal-accent' : 'text-teal-accent md:text-white'
            }`}
          >
            {SITE_NAME.toUpperCase()}
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative font-body text-[15px] font-medium group pb-0.5 transition-colors duration-300 ${
                  scrolled ? 'text-dark' : 'text-white'
                }`}
              >
                {link.label.toUpperCase()}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full rounded-full ${
                    scrolled ? 'bg-teal-strong' : 'bg-white'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Desktop CTA — lime on dark hero, lime on white scrolled */}
          <div className="hidden md:block">
            <Button variant="primary" href="#contact">
              Get Started
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              scrolled ? 'text-dark' : 'text-dark'
            }`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[100] bg-gradient-hero flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <span className="font-display font-bold text-[22px] text-white">
                {SITE_NAME.toUpperCase()}
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col gap-2 px-6 pt-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-display font-bold text-3xl text-white py-2 border-b border-white/30"
                >
                  {link.label.toUpperCase()}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="px-6 mt-auto mb-12"
            >
              <Button variant="primary" href="#contact" fullWidth onClick={() => setMobileOpen(false)}>
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
