// ── components/layout/Navbar.tsx ──
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'
import Button from '@/components/ui/Button'
import { useConsultationModal } from '@/components/landing/ConsultationModalContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { open, bannerVisible } = useConsultationModal()
  const pathname = usePathname()
  const topOffset = bannerVisible ? 'top-10' : 'top-0'

  const isOnHomepage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Resolve href: hash-only links become /#hash when not on homepage
  function resolveHref(href: string) {
    if (href.startsWith('/#')) return href
    return href
  }

  function isActive(href: string) {
    if (href.startsWith('/#')) return false
    return pathname === href || pathname.startsWith(href + '/')
  }

  const textColor = scrolled ? 'text-dark' : 'text-white'
  const underlineColor = scrolled ? 'bg-teal-strong' : 'bg-white'

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed ${topOffset} left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-teal-mid/30 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className={`font-display font-bold text-[22px] tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-teal-accent' : 'text-teal-accent md:text-white'
            }`}
          >
            {SITE_NAME.toUpperCase()}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              if (link.subLinks) {
                return (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDesktopDropdownOpen((p) => !p)}
                      className={`relative font-body text-[15px] font-medium flex items-center gap-1 pb-0.5 transition-colors duration-300 ${textColor}`}
                    >
                      {link.label.toUpperCase()}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${desktopDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {desktopDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                        >
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setDesktopDropdownOpen(false)}
                              className={`block px-4 py-3 hover:bg-teal-50 transition-colors group ${
                                isActive(sub.href) ? 'bg-teal-50' : ''
                              }`}
                            >
                              <span className={`block text-sm font-semibold group-hover:text-teal-700 transition-colors ${
                                isActive(sub.href) ? 'text-teal-700' : 'text-gray-900'
                              }`}>
                                {sub.label}
                              </span>
                              {sub.description && (
                                <span className="block text-xs text-gray-500 mt-0.5 leading-snug">
                                  {sub.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link
                  key={link.label}
                  href={resolveHref(link.href)}
                  className={`relative font-body text-[15px] font-medium group pb-0.5 transition-colors duration-300 ${
                    isActive(link.href) ? 'text-teal-strong' : textColor
                  }`}
                >
                  {link.label.toUpperCase()}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-300 rounded-full ${underlineColor} ${
                      isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="primary" onClick={open}>
              Get Started
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${textColor}`}
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

            <div className="flex flex-col gap-1 px-6 pt-8 overflow-y-auto">
              {NAV_LINKS.map((link, i) => {
                if (link.subLinks) {
                  return (
                    <div key={link.label}>
                      <motion.button
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.3 }}
                        onClick={() => setMobileServicesOpen((p) => !p)}
                        className="w-full flex items-center justify-between font-display font-bold text-3xl text-white py-2 border-b border-white/30"
                      >
                        {link.label.toUpperCase()}
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        />
                      </motion.button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            {link.subLinks.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block pl-4 py-2.5 border-b border-white/10 text-white/80 hover:text-white font-body font-semibold text-lg transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={resolveHref(link.href)}
                      onClick={() => setMobileOpen(false)}
                      className="block font-display font-bold text-3xl text-white py-2 border-b border-white/30"
                    >
                      {link.label.toUpperCase()}
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="px-6 mt-auto mb-12"
            >
              <Button variant="primary" fullWidth onClick={() => { setMobileOpen(false); open() }}>
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
