import Link from 'next/link'
import type { LocationData } from '@/lib/locations-data'

interface Props {
  location: LocationData
}

export default function LocationPage({ location }: Props) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Turquoic',
    description: location.heroDescription,
    url: `https://www.turquoic.com/locations/${location.slug}`,
    telephone: '+918086286886',
    areaServed: [location.country, location.city],
    sameAs: ['https://www.turquoic.com'],
  }

  const headlineLines = location.heroHeadline.split('\n')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-[#f8fafa]">

        {/* HERO */}
        <section
          className="relative overflow-hidden px-6 pt-32 pb-24"
          style={{ background: 'linear-gradient(160deg, #091918 0%, #0B2422 50%, #0d2a28 100%)' }}
        >
          <div className="absolute inset-0 opacity-[0.035]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none opacity-10"
            style={{ background: 'radial-gradient(ellipse, rgba(45,212,192,0.6) 0%, transparent 65%)' }} />

          <div className="relative max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-xs text-white/25 mb-10 flex-wrap">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/40">{location.flag} {location.city}</span>
            </nav>

            <div className="inline-flex items-center gap-2.5 border border-white/10 rounded-full px-4 py-1.5 mb-8 bg-white/5">
              <span className="text-base">{location.flag}</span>
              <span className="text-white/50 text-xs font-medium uppercase tracking-widest">{location.city} · {location.country}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tight">
              {headlineLines.map((line, i) => (
                <span key={i} className={`block ${i === 1 ? 'text-teal-400' : ''}`}>{line}</span>
              ))}
            </h1>

            <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
              {location.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-lime text-olive font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(200,230,0,0.3)] transition-all text-sm uppercase tracking-wide">
                Start a Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 font-semibold px-8 py-4 rounded-xl hover:border-white/30 hover:text-white transition-all text-sm">
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="flex items-start gap-6">
            <div className="w-px h-20 bg-teal-400 shrink-0 mt-1" />
            <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed">
              {location.intro}
            </p>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="bg-white border-y border-gray-100 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-6 h-px bg-teal-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">What We Do</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
              {location.capabilities.map((cap, i) => (
                <div key={i} className="bg-white p-7 group hover:bg-[#f8fafa] transition-colors">
                  <div className="w-7 h-0.5 bg-teal-400 mb-5 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-bold text-gray-900 text-base mb-2.5 group-hover:text-teal-700 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section
          className="py-20"
          style={{ background: 'linear-gradient(160deg, #091918 0%, #0B2422 60%, #0d2a28 100%)' }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-6 h-px bg-teal-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400">How We Engage</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { n: '01', title: 'Discovery', body: 'We learn your business, market, goals, and audience before anything else.' },
                { n: '02', title: 'Strategy & Scope', body: 'A clear plan with defined deliverables, timeline, and milestones — agreed before work starts.' },
                { n: '03', title: 'Design & Build', body: 'Weekly reviews on a live staging environment. You see progress at every step.' },
                { n: '04', title: 'Launch & Growth', body: 'We launch, measure, and iterate. Many clients continue with us on retainer.' },
              ].map(({ n, title, body }) => (
                <div key={n} className="border border-white/10 rounded-2xl p-6 bg-white/[0.03]">
                  <div className="text-5xl font-black text-white/8 mb-4 leading-none">{n}</div>
                  <h3 className="font-bold text-white text-sm mb-2">{title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY TURQUOIC */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-6 h-px bg-teal-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Why Teams Choose Us</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {location.whyUs.map((point, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl">
                <div className="w-6 h-6 rounded-full bg-teal-500/10 border border-teal-400/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 pb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-6 h-px bg-teal-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Questions</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          <div className="space-y-2">
            {location.faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 text-sm select-none hover:text-teal-700 transition-colors">
                  {faq.q}
                  <svg className="w-4 h-4 text-gray-300 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="mx-6 mb-14 rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #091918 0%, #0d2a28 100%)' }}>
          <div className="relative px-8 py-16 text-center">
            <div className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative">
              <div className="text-5xl mb-6">{location.flag}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{location.ctaHeadline}</h2>
              <p className="text-white/40 mb-10 max-w-sm mx-auto text-sm leading-relaxed">{location.ctaDescription}</p>
              <Link href="/#contact"
                className="inline-flex items-center gap-2 bg-lime text-olive font-bold px-10 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(200,230,0,0.3)] transition-all text-sm uppercase tracking-wide">
                Start the Conversation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
