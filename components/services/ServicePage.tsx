import Link from 'next/link'
import type { ServiceData } from '@/lib/services-data'
import { ALL_SERVICES } from '@/lib/services-data'

const CATEGORY_BADGE: Record<string, string> = {
  development: 'bg-teal-500/15 text-teal-300 border-teal-500/20',
  marketing:   'bg-purple-500/15 text-purple-300 border-purple-500/20',
  design:      'bg-orange-500/15 text-orange-300 border-orange-500/20',
  ai:          'bg-blue-500/15 text-blue-300 border-blue-500/20',
}

const CATEGORY_LABEL: Record<string, string> = {
  development: 'Development',
  marketing:   'Marketing',
  design:      'Design',
  ai:          'AI & Software',
}

interface Props {
  service: ServiceData
}

export default function ServicePage({ service }: Props) {
  const related = service.relatedSlugs
    .map(slug => ALL_SERVICES.find(s => s.slug === slug))
    .filter(Boolean) as ServiceData[]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Turquoic',
      url: 'https://www.turquoic.com',
      telephone: '+918086286886',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'L:116, LIC E Ln, Lekshmi Nagar, Pattom',
        addressLocality: 'Trivandrum',
        addressRegion: 'Kerala',
        postalCode: '695004',
        addressCountry: 'IN',
      },
    },
    areaServed: ['Trivandrum', 'Kerala', 'India'],
    url: `https://www.turquoic.com/services/${service.slug}`,
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
            <nav className="flex items-center gap-2 text-xs text-white/30 mb-7 flex-wrap">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#services" className="hover:text-white/70 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white/50">{service.title}</span>
            </nav>

            <div className="flex items-center gap-3 mb-5">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${CATEGORY_BADGE[service.category]}`}>
                {CATEGORY_LABEL[service.category]}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              {service.title}
              <span className="block text-teal-400 text-2xl md:text-3xl mt-2 font-medium">in Trivandrum &amp; Kerala</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl">
              {service.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-lime text-olive font-bold px-8 py-3.5 rounded-xl hover:shadow-[0_0_30px_rgba(200,230,0,0.3)] transition-all text-sm uppercase tracking-wide">
                Get Free Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:+918086286886"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-semibold px-8 py-3.5 rounded-xl hover:border-white/40 hover:text-white transition-all text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 8086 286 885
              </a>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-8">
            {[
              { num: '90+', label: 'PageSpeed Score' },
              { num: '48h', label: 'First Draft Delivery' },
              { num: '100%', label: 'Client Satisfaction' },
              { num: '5★', label: 'Google Rating' },
            ].map(({ num, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-2xl font-bold text-teal-600">{num}</span>
                <span className="text-sm text-gray-500">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* OFFERINGS */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-6 h-px bg-teal-400" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">What We Offer</h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.offerings.map((offering, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-teal-200 transition-all group">
                <div className="w-8 h-0.5 bg-teal-400 mb-4 group-hover:w-14 transition-all duration-300" />
                <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-teal-700 transition-colors">{offering.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{offering.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY TURQUOIC */}
        <section
          className="py-16"
          style={{ background: 'linear-gradient(160deg, #091918 0%, #0B2422 60%, #0d2a28 100%)' }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-6 h-px bg-teal-500" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-teal-400">Why Turquoic</h2>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-6 h-px bg-teal-400" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">Our Process</h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: '01', title: 'Discovery Call', desc: 'Free consultation to understand your goals, audience, and budget.' },
              { step: '02', title: 'Proposal & Scope', desc: 'Fixed-price quote with clear deliverables and timeline.' },
              { step: '03', title: 'Design & Build', desc: 'Weekly check-ins and a staging link so you see progress in real time.' },
              { step: '04', title: 'Launch & Support', desc: 'Live deployment with 30 days of free support and maintenance.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative bg-white border border-gray-100 rounded-2xl p-6">
                <div className="text-4xl font-black text-gray-100 mb-3 leading-none">{step}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1.5">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-6 h-px bg-teal-400" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">Frequently Asked Questions</h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
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

        {/* RELATED SERVICES */}
        {related.length > 0 && (
          <section className="max-w-5xl mx-auto px-6 pb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-teal-400" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">Related Services</h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map(rel => (
                <Link key={rel.slug} href={`/services/${rel.slug}`}
                  className="group bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-teal-200 transition-all">
                  <div className="w-6 h-0.5 bg-teal-400 mb-3 group-hover:w-10 transition-all duration-300" />
                  <p className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-teal-700 transition-colors">{rel.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{rel.tagline}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* BOTTOM CTA */}
        <section className="mx-6 mb-14 rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #091918 0%, #0d2a28 100%)' }}>
          <div className="relative px-8 py-14 text-center">
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative">
              <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">Turquoic · Trivandrum</p>
              <h2 className="text-3xl font-bold text-white mb-3">Ready to get started?</h2>
              <p className="text-white/50 mb-8 max-w-md mx-auto">
                Free consultation. No commitment. Our team is based in Pattom, Trivandrum.
              </p>
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
