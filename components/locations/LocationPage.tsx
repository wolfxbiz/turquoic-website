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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Turquoic',
    description: location.heroDescription,
    url: `https://www.turquoic.com/locations/${location.slug}`,
    telephone: '+918086286885',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'L:116, LIC E Ln, Lekshmi Nagar, Pattom',
      addressLocality: 'Trivandrum',
      addressRegion: 'Kerala',
      postalCode: '695004',
      addressCountry: 'IN',
    },
    areaServed: [location.country, location.city],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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

          <div className="relative max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-xs text-white/30 mb-8 flex-wrap">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-white/70 transition-colors">Locations</Link>
              <span>/</span>
              <span className="text-white/50">{location.flag} {location.city}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-6">
              <span>{location.flag}</span>
              <span className="text-teal-400 text-xs font-semibold uppercase tracking-widest">
                Serving {location.city} · {location.country}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3rem] font-bold text-white leading-tight mb-4">
              {location.heroHeadline}
            </h1>
            <p className="text-lime font-bold text-xl mb-5">{location.heroSubheadline}</p>
            <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-2xl">
              {location.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-lime text-olive font-bold px-8 py-3.5 rounded-xl hover:shadow-[0_0_30px_rgba(200,230,0,0.3)] transition-all text-sm uppercase tracking-wide">
                Get Free Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:+918086286885"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-semibold px-8 py-3.5 rounded-xl hover:border-white/40 hover:text-white transition-all text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 8086 286 885
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
              {location.stats.map(stat => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-black text-lime mb-1">{stat.value}</div>
                  <div className="text-xs text-white/40 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAIN POINT */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-teal-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">The Problem</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{location.painPoint}</h2>
              <p className="text-gray-600 leading-relaxed">{location.painPointDescription}</p>
            </div>
            <div
              className="rounded-2xl p-8 text-white"
              style={{ background: 'linear-gradient(135deg, #091918 0%, #0d2a28 100%)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-lg">⏱</div>
                <div>
                  <p className="font-bold text-sm text-white">{location.timezoneNote}</p>
                  <p className="text-xs text-white/40">Timezone advantage</p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{location.timezoneDetail}</p>
            </div>
          </div>
        </section>

        {/* COST COMPARISON */}
        <section className="py-16" style={{ background: 'linear-gradient(160deg, #091918 0%, #0B2422 60%, #0d2a28 100%)' }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-teal-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400">Cost Comparison</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{location.savingsHeadline}</h2>
            <p className="text-white/50 mb-10 max-w-2xl">{location.savingsDescription}</p>

            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <th className="text-left px-5 py-3.5 text-white/50 font-semibold text-xs uppercase tracking-wide">Service</th>
                    <th className="text-left px-5 py-3.5 text-white/50 font-semibold text-xs uppercase tracking-wide">
                      Local {location.city} Agency
                    </th>
                    <th className="text-left px-5 py-3.5 text-teal-400 font-semibold text-xs uppercase tracking-wide">Turquoic (India)</th>
                  </tr>
                </thead>
                <tbody>
                  {location.services.map((svc, i) => (
                    <tr key={svc.slug}
                      className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-5 py-3.5">
                        <Link href={`/services/${svc.slug}`}
                          className="text-white font-medium hover:text-teal-400 transition-colors">
                          {svc.title}
                        </Link>
                      </td>
                      <td className="px-5 py-3.5 text-white/40 line-through">{svc.localPrice}</td>
                      <td className="px-5 py-3.5">
                        <span className="text-lime font-bold">{svc.turquoicPrice}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-white/30 text-xs mt-3">* Prices are indicative. Final quote based on scope. Local agency prices sourced from public market data.</p>
          </div>
        </section>

        {/* WHY US */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-6 h-px bg-teal-400" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">Why Turquoic</h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {location.whyUs.map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-2xl p-5">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-teal-500/15 border border-teal-400/30 flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-6 h-px bg-teal-400" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">
              Questions from {location.city} Clients
            </h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="space-y-3">
            {location.faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-gray-900 text-sm select-none hover:text-teal-700 transition-colors">
                  {faq.q}
                  <svg className="w-4 h-4 text-gray-400 shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="mx-6 mb-14 rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #091918 0%, #0d2a28 100%)' }}>
          <div className="relative px-8 py-14 text-center">
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative">
              <div className="text-4xl mb-4">{location.flag}</div>
              <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">
                India → {location.city}
              </p>
              <h2 className="text-3xl font-bold text-white mb-3">{location.ctaHeadline}</h2>
              <p className="text-white/50 mb-8 max-w-md mx-auto">{location.ctaDescription}</p>
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
    </>
  )
}
