'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'
import { ALL_SERVICES } from '@/lib/services-data'
import Button from '@/components/ui/Button'
import { useConsultationModal } from '@/components/landing/ConsultationModalContext'

const MEGA_CATEGORIES = [
  {
    key: 'development' as const,
    label: 'Development',
    icon: '⚡',
    color: 'text-teal-600',
    bar: 'bg-teal-400',
  },
  {
    key: 'marketing' as const,
    label: 'Marketing & SEO',
    icon: '📈',
    color: 'text-purple-600',
    bar: 'bg-purple-400',
  },
  {
    key: 'design' as const,
    label: 'Design',
    icon: '🎨',
    color: 'text-orange-600',
    bar: 'bg-orange-400',
  },
  {
    key: 'ai' as const,
    label: 'AI & Software',
    icon: '🤖',
    color: 'text-blue-600',
    bar: 'bg-blue-400',
  },
]

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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
                      className={`relative font-body text-[15px] font-medium flex items-center gap-1 pb-0.5 transition-colors duration-300 ${
                        isActive('/services') ? 'text-teal-strong' : textColor
                      }`}
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
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="fixed left-0 right-0 mt-3 z-50"
                          style={{ top: bannerVisible ? '104px' : '64px' }}
                        >
                          <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

                              {/* Mega menu header */}
                              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                                <div>
                                  <p className="font-bold text-gray-900 text-sm">All Services</p>
                                  <p className="text-xs text-gray-400 mt-0.5">25 services across 4 categories</p>
                                </div>
                                <Link
                                  href="/services"
                                  onClick={() => setDesktopDropdownOpen(false)}
                                  className="flex items-center gap-1.5 text-xs font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                                >
                                  View all services <ArrowRight size={12} />
                                </Link>
                              </div>

                              {/* 4-column category grid */}
                              <div className="grid grid-cols-4 divide-x divide-gray-100">
                                {MEGA_CATEGORIES.map((cat) => {
                                  const services = ALL_SERVICES.filter(s => s.category === cat.key)
                                  return (
                                    <div key={cat.key} className="p-5">
                                      {/* Category heading */}
                                      <div className="flex items-center gap-2 mb-3">
                                        <span className="text-base leading-none">{cat.icon}</span>
                                        <span className={`text-xs font-bold uppercase tracking-widest ${cat.color}`}>
                                          {cat.label}
                                        </span>
                                      </div>
                                      <div className={`w-8 h-px ${cat.bar} mb-4`} />

                                      {/* Service links */}
                                      <ul className="space-y-1">
                                        {services.map(service => (
                                          <li key={service.slug}>
                                            <Link
                                              href={`/services/${service.slug}`}
                                              onClick={() => setDesktopDropdownOpen(false)}
                                              className={`block text-sm py-1.5 px-2 rounded-lg transition-colors group ${
                                                isActive(`/services/${service.slug}`)
                                                  ? 'bg-teal-50 text-teal-700 font-semibold'
                                                  : 'text-gray-700 hover:bg-gray-50 hover:text-teal-700'
                                              }`}
                                            >
                                              {service.title}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )
                                })}
                              </div>

                              {/* Bottom CTA strip */}
                              <div
                                className="px-6 py-4 flex items-center justify-between"
                                style={{ background: 'linear-gradient(135deg, #091918 0%, #0d2a28 100%)' }}
                              >
                                <div>
                                  <p className="text-white text-sm font-semibold">Not sure where to start?</p>
                                  <p className="text-white/50 text-xs mt-0.5">Free consultation — no commitment</p>
                                </div>
                                <button
                                  onClick={() => { setDesktopDropdownOpen(false); open() }}
                                  className="flex items-center gap-2 bg-lime text-olive font-bold text-xs uppercase tracking-wide px-5 py-2.5 rounded-xl hover:shadow-[0_0_20px_rgba(200,230,0,0.3)] transition-all"
                                >
                                  Book Free Consultation <ArrowRight size={12} />
                                </button>
                              </div>

                            </div>
                          </div>
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
            className="fixed inset-0 z-[100] flex flex-col overflow-y-auto"
            style={{ background: 'linear-gradient(160deg, #091918 0%, #0B1E1D 50%, #0D2A28 100%)' }}
          >
            <div className="flex items-center justify-between px-6 h-16 shrink-0">
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

            <div className="flex flex-col gap-1 px-6 pt-4 pb-8">
              {NAV_LINKS.map((link, i) => {
                if (link.subLinks) {
                  return (
                    <div key={link.label}>
                      <motion.button
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.3 }}
                        onClick={() => setMobileServicesOpen((p) => !p)}
                        className="w-full flex items-center justify-between font-display font-bold text-2xl text-white py-3 border-b border-white/10"
                      >
                        {link.label.toUpperCase()}
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        />
                      </motion.button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-3 pb-2 space-y-5">
                              {MEGA_CATEGORIES.map(cat => {
                                const services = ALL_SERVICES.filter(s => s.category === cat.key)
                                return (
                                  <div key={cat.key}>
                                    <div className="flex items-center gap-2 px-2 mb-2">
                                      <span className="text-sm">{cat.icon}</span>
                                      <span className={`text-[11px] font-bold uppercase tracking-widest ${cat.color}`}>
                                        {cat.label}
                                      </span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-1">
                                      {services.map(service => (
                                        <Link
                                          key={service.slug}
                                          href={`/services/${service.slug}`}
                                          onClick={() => setMobileOpen(false)}
                                          className="block px-2 py-2 text-white/70 hover:text-white text-sm font-medium transition-colors leading-snug"
                                        >
                                          {service.title}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                )
                              })}
                              <Link
                                href="/services"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2 mt-2 px-2 text-teal-400 font-semibold text-sm"
                              >
                                View all services <ArrowRight size={14} />
                              </Link>
                            </div>
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
                      className="block font-display font-bold text-2xl text-white py-3 border-b border-white/10"
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
              className="px-6 mt-auto mb-12 shrink-0"
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
