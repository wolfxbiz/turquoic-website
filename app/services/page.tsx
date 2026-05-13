import type { Metadata } from 'next'
import Link from 'next/link'
import { ALL_SERVICES } from '@/lib/services-data'

export const metadata: Metadata = {
  title: 'Our Services | Web Design, SEO & Digital Marketing in Trivandrum',
  description: 'Turquoic offers website development, SEO, digital marketing, UI/UX design, and AI software services for businesses in Trivandrum and Kerala.',
  alternates: { canonical: 'https://www.turquoic.com/services' },
  openGraph: {
    title: 'Our Services | Turquoic — Trivandrum',
    description: 'Website development, SEO, digital marketing, design, and AI services for Kerala businesses.',
    url: 'https://www.turquoic.com/services',
    siteName: 'Turquoic',
    images: [{ url: 'https://www.turquoic.com/og-image.jpg', width: 1200, height: 630 }],
  },
}

const CATEGORIES = [
  { key: 'development', label: 'Development', color: 'teal' },
  { key: 'marketing',   label: 'Marketing & SEO', color: 'purple' },
  { key: 'design',      label: 'Design', color: 'orange' },
  { key: 'ai',          label: 'AI & Software', color: 'blue' },
] as const

const CATEGORY_STYLES = {
  teal:   { badge: 'bg-teal-50 text-teal-700 border-teal-100', bar: 'bg-teal-400', heading: 'text-teal-400', dot: 'bg-teal-400/20 border-teal-400/30 text-teal-400' },
  purple: { badge: 'bg-purple-50 text-purple-700 border-purple-100', bar: 'bg-purple-400', heading: 'text-purple-400', dot: 'bg-purple-400/20 border-purple-400/30 text-purple-400' },
  orange: { badge: 'bg-orange-50 text-orange-700 border-orange-100', bar: 'bg-orange-400', heading: 'text-orange-400', dot: 'bg-orange-400/20 border-orange-400/30 text-orange-400' },
  blue:   { badge: 'bg-blue-50 text-blue-700 border-blue-100', bar: 'bg-blue-400', heading: 'text-blue-400', dot: 'bg-blue-400/20 border-blue-400/30 text-blue-400' },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f8fafa]">

      {/* HERO */}
      <section
        className="relative overflow-hidden px-6 pt-32 pb-20"
        style={{ background: 'linear-gradient(160deg, #091918 0%, #0B2422 50%, #0d2a28 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(45,212,192,0.5) 0%, transparent 65%)' }} />

        <div className="relative max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-white/30 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/50">Services</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-400 text-xs font-semibold uppercase tracking-widest">Trivandrum · Kerala · India</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Everything your business<br />
            <span className="text-teal-400">needs to grow online</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            From custom websites and SEO to AI-powered software — we handle the full digital stack for businesses in Trivandrum and across Kerala.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-lime text-olive font-bold px-8 py-3.5 rounded-xl hover:shadow-[0_0_30px_rgba(200,230,0,0.3)] transition-all text-sm uppercase tracking-wide">
              Get Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="tel:+918086286886"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-semibold px-8 py-3.5 rounded-xl hover:border-white/40 hover:text-white transition-all text-sm">
              +91 8086 286 886
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="relative max-w-3xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { num: '25+', label: 'Services' },
            { num: '90+', label: 'PageSpeed Score' },
            { num: '48h', label: 'First Draft' },
            { num: '5★', label: 'Google Rating' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center bg-white/5 border border-white/10 rounded-2xl py-4 px-3">
              <div className="text-2xl font-black text-white mb-0.5">{num}</div>
              <div className="text-xs text-white/40 uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES BY CATEGORY */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {CATEGORIES.map(({ key, label, color }) => {
          const services = ALL_SERVICES.filter(s => s.category === key)
          const styles = CATEGORY_STYLES[color]
          return (
            <section key={key}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-6 h-px ${styles.bar}`} />
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${styles.badge}`}>
                  {label}
                </span>
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400">{services.length} services</span>
              </div>

              {/* Cards grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map(service => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-200"
                  >
                    <div className={`w-8 h-0.5 ${styles.bar} mb-4 group-hover:w-14 transition-all duration-300`} />
                    <h2 className="font-bold text-gray-900 text-base mb-1.5 group-hover:text-teal-700 transition-colors leading-snug">
                      {service.title}
                    </h2>
                    <p className="text-xs text-teal-600 font-medium mb-3">{service.tagline}</p>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{service.description}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-gray-400 group-hover:text-teal-600 transition-colors">
                      Learn more
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      {/* BOTTOM CTA */}
      <section className="mx-6 mb-14 rounded-3xl overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #091918 0%, #0d2a28 100%)' }}>
        <div className="relative px-8 py-14 text-center">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="relative">
            <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">Turquoic · Pattom, Trivandrum</p>
            <h2 className="text-3xl font-bold text-white mb-3">Not sure which service you need?</h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto">Talk to our team for free. We'll recommend exactly what will move the needle for your business.</p>
            <Link href="/#contact"
              className="inline-flex items-center gap-2 bg-lime text-olive font-bold px-8 py-3.5 rounded-xl hover:shadow-[0_0_30px_rgba(200,230,0,0.3)] transition-all text-sm uppercase tracking-wide">
              Get a Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
