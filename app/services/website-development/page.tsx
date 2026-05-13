import Link from 'next/link'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.turquoic.com/services/website-development/#service',
  name: 'Website Development',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.turquoic.com/#localbusiness',
    name: 'Turquoic',
    url: 'https://www.turquoic.com',
  },
  serviceType: 'Website Development',
  description:
    'Custom website design and development for businesses in Trivandrum and Kerala. We build fast, SEO-optimized, mobile-friendly websites that convert visitors into customers.',
  areaServed: [
    { '@type': 'City', name: 'Thiruvananthapuram' },
    { '@type': 'State', name: 'Kerala' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Website Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce Website Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing Page Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WordPress Website Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Next.js Web Application Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Redesign' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does website development cost in Trivandrum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website development costs in Trivandrum typically range from ₹15,000 for a basic business website to ₹1,50,000+ for a fully custom ecommerce or web application. Turquoic offers transparent, package-based pricing. Contact us for a free quote tailored to your requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Trivandrum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard business website takes 7–14 working days. Ecommerce stores typically take 3–5 weeks. Custom web applications depend on scope. Turquoic follows a structured sprint process to deliver on time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best website development company in Trivandrum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Turquoic is one of Trivandrum\'s top-rated website development companies, known for building fast, SEO-optimized, and conversion-focused websites for businesses across Kerala and India. We combine modern tech stacks with deep digital marketing expertise.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build mobile-friendly websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every website we build at Turquoic is fully responsive and mobile-first. Over 70% of users in Kerala browse on mobile devices, so we prioritize fast load times and flawless mobile UX on every project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer SEO with website development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. SEO is built into every website we develop — from technical structure and page speed to meta tags, schema markup, and keyword-optimized content. We do not build websites that are invisible to search engines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you redesign my existing website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We offer full website redesign services for businesses in Trivandrum and Kerala. We audit your current site, identify performance gaps, and rebuild it with a modern design and improved SEO.',
      },
    },
  ],
}

const services = [
  {
    title: 'Business Websites',
    description:
      'Clean, fast, and professional websites for service businesses, consultants, clinics, schools, and enterprises in Trivandrum.',
  },
  {
    title: 'Ecommerce Stores',
    description:
      'Shopify, WooCommerce, and custom Next.js ecommerce stores built to sell products across Kerala and India.',
  },
  {
    title: 'Landing Pages',
    description:
      'High-converting single-page websites for product launches, ads, and lead generation campaigns.',
  },
  {
    title: 'Web Applications',
    description:
      'Custom portals, dashboards, booking systems, and SaaS platforms built with Next.js and modern backends.',
  },
  {
    title: 'AI-Powered Websites',
    description:
      'Websites with integrated AI chatbots, recommendation engines, and automation workflows.',
  },
  {
    title: 'Website Redesign',
    description:
      'Transform an outdated website into a modern, SEO-optimized, high-performing digital asset.',
  },
]

const reasons = [
  { stat: '5+', label: 'Years in Trivandrum' },
  { stat: '100+', label: 'Websites Delivered' },
  { stat: '3x', label: 'Avg Traffic Growth' },
  { stat: '48hr', label: 'Response Time' },
]

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white text-gray-900">

        {/* Hero */}
        <section className="bg-gradient-to-br from-teal-900 to-teal-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-teal-300 text-sm font-semibold uppercase tracking-widest mb-4">
              Trivandrum · Kerala · India
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Website Development Company in Trivandrum
            </h1>
            <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto mb-8">
              We build fast, SEO-first, conversion-focused websites for businesses in Trivandrum and
              across Kerala. From business sites to full ecommerce stores — delivered on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-white text-teal-900 font-bold px-8 py-3 rounded-xl hover:bg-teal-50 transition"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/#services"
                className="border border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Stats */}
        <section className="bg-teal-50 py-10 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {reasons.map((r) => (
              <div key={r.stat}>
                <p className="text-3xl font-extrabold text-teal-700">{r.stat}</p>
                <p className="text-gray-600 text-sm mt-1">{r.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Website Development Services in Trivandrum
            </h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
              Whether you need a simple business website or a full-scale web application, our team
              in Trivandrum delivers with speed, quality, and SEO built in from day one.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-bold text-lg mb-2 text-teal-800">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Turquoic */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              Why Choose Turquoic as Your Website Company in Trivandrum?
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              We are not a generic agency. Turquoic is a Trivandrum-based digital product studio
              that combines design excellence, technical depth, and SEO-first thinking.
            </p>
            <ul className="space-y-5 max-w-2xl mx-auto">
              {[
                'Local team based in Pattom, Trivandrum — available for in-person meetings',
                'Every website is built SEO-ready: structured data, fast load times, proper heading hierarchy',
                'Mobile-first design — over 70% of Kerala browses on mobile',
                'Transparent, fixed-price packages — no hidden costs',
                'Post-launch support: updates, performance monitoring, security patches',
                'Clients include brands across Trivandrum, Kochi, Bangalore, and beyond',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-lg mt-0.5">✓</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Website Development Process
            </h2>
            <ol className="space-y-8">
              {[
                { step: '01', title: 'Discovery & Scope', desc: 'We understand your business, goals, target audience in Trivandrum/Kerala, and map out the sitemap and feature list.' },
                { step: '02', title: 'Design & Prototype', desc: 'Our designers create wireframes and high-fidelity mockups that match your brand and convert visitors.' },
                { step: '03', title: 'Development', desc: 'We build on modern stacks (Next.js, React, or WordPress) with clean code, fast performance, and SEO foundations.' },
                { step: '04', title: 'SEO & Testing', desc: 'Structured data, meta tags, Core Web Vitals optimization, and cross-device testing before launch.' },
                { step: '05', title: 'Launch & Support', desc: 'We deploy, submit to Google Search Console, and provide ongoing maintenance so your site keeps ranking.' },
              ].map((item) => (
                <li key={item.step} className="flex gap-6">
                  <span className="text-4xl font-extrabold text-teal-100">{item.step}</span>
                  <div>
                    <h3 className="font-bold text-lg text-teal-800">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Frequently Asked Questions — Website Development in Trivandrum
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((item) => (
                <details
                  key={item.name}
                  className="border border-gray-200 rounded-xl p-5 open:bg-white"
                >
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none">
                    {item.name}
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal-900 text-white py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Your Website in Trivandrum?
            </h2>
            <p className="text-teal-200 mb-8">
              Get a free consultation with our team. We will scope your project, share a timeline,
              and give you a fixed-price quote — no surprises.
            </p>
            <Link
              href="/#contact"
              className="bg-white text-teal-900 font-bold px-10 py-4 rounded-xl hover:bg-teal-50 transition text-lg"
            >
              Start Your Project
            </Link>
            <p className="mt-4 text-teal-400 text-sm">
              📍 Pattom, Thiruvananthapuram, Kerala 695004
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
