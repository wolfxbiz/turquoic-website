import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Solutions | Website, AI & D2C Growth | Turquoic',
  description: 'Turquoic delivers three core solutions — premium website development, AI-powered software, and D2C ecommerce growth. Built for businesses that mean business.',
  alternates: { canonical: 'https://www.turquoic.com/solutions' },
  openGraph: {
    title: 'Our Solutions | Turquoic',
    description: 'Website development, AI software, and D2C ecommerce growth — three focused solutions for ambitious businesses.',
    url: 'https://www.turquoic.com/solutions',
    siteName: 'Turquoic',
    images: [{ url: 'https://www.turquoic.com/og-image.jpg', width: 1200, height: 630 }],
  },
}

const SOLUTIONS = [
  {
    number: '01',
    label: 'Web',
    title: 'Website Development',
    subtitle: 'in Trivandrum & Kerala',
    description: 'Custom, SEO-first websites built for businesses across Kerala. Every site is mobile-first, fast-loading, and designed to convert visitors into customers. From business websites to full enterprise platforms.',
    href: '/services/website-development',
    accent: 'teal',
    highlights: [
      'Business & corporate websites',
      'Landing pages & conversion funnels',
      'Website redesign & migration',
      'SEO-first architecture',
    ],
    cta: 'Explore Website Solutions',
    gradient: 'from-teal-500/10 to-teal-500/5',
    border: 'border-teal-500/20',
    bar: 'bg-teal-400',
    badgeBg: 'bg-teal-500/10 border-teal-500/20 text-teal-400',
    ctaStyle: 'bg-teal-600 hover:bg-teal-700 text-white',
  },
  {
    number: '02',
    label: 'AI',
    title: 'AI Website & Software',
    subtitle: 'Development',
    description: 'AI-powered web applications, SaaS products, and custom software built for scale. From intelligent automation to full product development — we build what off-the-shelf tools can\'t.',
    href: '/ai-website-ai-software',
    accent: 'purple',
    highlights: [
      'AI-powered web applications',
      'SaaS product development',
      'Automation & workflow systems',
      'MVPs to enterprise platforms',
    ],
    cta: 'Explore AI Solutions',
    gradient: 'from-purple-500/10 to-purple-500/5',
    border: 'border-purple-500/20',
    bar: 'bg-purple-400',
    badgeBg: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    ctaStyle: 'bg-purple-600 hover:bg-purple-700 text-white',
  },
  {
    number: '03',
    label: 'D2C',
    title: 'D2C Growth',
    subtitle: 'for Indian Brands',
    description: 'Full-service ecommerce growth for Indian D2C brands. Shopify stores, performance ads, marketplace strategy, and retention systems — everything you need to build a brand that sells.',
    href: '/d2c-growth',
    accent: 'orange',
    highlights: [
      'Shopify & ecommerce development',
      'Meta & Google performance ads',
      'Amazon & marketplace strategy',
      'Email, WhatsApp & retention',
    ],
    cta: 'Explore D2C Solutions',
    gradient: 'from-orange-500/10 to-orange-500/5',
    border: 'border-orange-500/20',
    bar: 'bg-orange-400',
    badgeBg: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    ctaStyle: 'bg-orange-500 hover:bg-orange-600 text-white',
  },
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafa]">

      {/* HERO */}
      <section
        className="relative overflow-hidden px-6 pt-32 pb-20"
        style={{ background: 'linear-gradient(160deg, #091918 0%, #0B2422 50%, #0d2a28 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(ellipse, rgba(45,212,192,0.6) 0%, transparent 65%)' }} />

        <div className="relative max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-white/25 mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/40">Solutions</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-white/50 text-xs font-medium uppercase tracking-widest">3 Core Solutions</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
            The three ways<br />
            <span className="text-teal-400">we grow your business.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            We don't do everything. We do three things exceptionally well — and we've built dedicated teams, processes, and playbooks around each one.
          </p>
        </div>
      </section>

      {/* SOLUTION CARDS */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
        {SOLUTIONS.map((sol) => (
          <div
            key={sol.number}
            className={`bg-white border ${sol.border} rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-300`}
          >
            <div className="grid md:grid-cols-2">

              {/* Left — info */}
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${sol.badgeBg}`}>
                    {sol.label}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{sol.number} / 03</span>
                </div>

                <div className={`w-10 h-0.5 ${sol.bar} mb-5 group-hover:w-16 transition-all duration-300`} />

                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-1">
                  {sol.title}
                </h2>
                <p className="text-lg font-medium text-gray-400 mb-5">{sol.subtitle}</p>
                <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                  {sol.description}
                </p>

                <Link
                  href={sol.href}
                  className={`inline-flex items-center gap-2 ${sol.ctaStyle} font-bold text-sm uppercase tracking-wide px-6 py-3 rounded-xl transition-all`}
                >
                  {sol.cta}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Right — highlights */}
              <div className={`bg-gradient-to-br ${sol.gradient} p-8 md:p-10 border-t md:border-t-0 md:border-l ${sol.border}`}>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">What's included</p>
                <ul className="space-y-4">
                  {sol.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full ${sol.badgeBg} border flex items-center justify-center shrink-0 mt-0.5`}>
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200/50">
                  <p className="text-xs text-gray-400">Free consultation · No commitment</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM CTA */}
      <section className="mx-6 mb-14 rounded-3xl overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #091918 0%, #0d2a28 100%)' }}>
        <div className="relative px-8 py-14 text-center">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="relative">
            <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">Turquoic</p>
            <h2 className="text-3xl font-bold text-white mb-3">Not sure which solution fits?</h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto text-sm">Book a free call. We'll understand your business and recommend the right solution — no sales pressure.</p>
            <Link href="/#contact"
              className="inline-flex items-center gap-2 bg-lime text-olive font-bold px-8 py-3.5 rounded-xl hover:shadow-[0_0_30px_rgba(200,230,0,0.3)] transition-all text-sm uppercase tracking-wide">
              Book Free Consultation
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
