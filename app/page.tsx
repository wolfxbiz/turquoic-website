// ── app/page.tsx ──
import type { Metadata } from 'next'
import { ConsultationModalProvider } from '@/components/landing/ConsultationModalContext'
import TopBanner from '@/components/landing/layout/TopBanner'
import FreeConsultationSection from '@/components/landing/sections/FreeConsultationSection'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Industries from '@/components/sections/Industries'
import CapabilityProgramme from '@/components/sections/CapabilityProgramme'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Team from '@/components/sections/Team'
import RougeStars from '@/components/sections/RougeStars'
import Contact from '@/components/sections/Contact'
import MarqueeStrip from '@/components/ui/MarqueeStrip'

export const metadata: Metadata = {
  title: 'Best Website Development Company in Trivandrum, Kerala | Turquoic',
  description:
    'Turquoic is Trivandrum\'s top-rated website development company. We build fast, conversion-focused websites, ecommerce stores, and AI-powered web applications for businesses in Kerala and across India.',
  alternates: {
    canonical: 'https://www.turquoic.com',
  },
  keywords: [
    'website development company in Trivandrum',
    'website company Trivandrum',
    'website companies in Trivandrum',
    'best website development companies in Trivandrum',
    'web design Trivandrum',
    'website design company Kerala',
    'web development company Trivandrum',
    'best web design company Trivandrum',
    'professional website development Kerala',
    'affordable website development Trivandrum',
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': 'https://www.turquoic.com/#localbusiness',
  name: 'Turquoic',
  legalName: 'Turquoic',
  url: 'https://www.turquoic.com',
  logo: 'https://www.turquoic.com/og-image.jpg',
  image: 'https://www.turquoic.com/og-image.jpg',
  telephone: '+918086286885',
  priceRange: '$$',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer, UPI',
  description:
    'Turquoic is a leading website development company in Trivandrum, Kerala. We specialize in custom website design, ecommerce development, AI-powered web applications, SEO, and digital marketing.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'L:116, LIC E Ln, behind LIC Head Quarters, Lekshmi Nagar, Pattom',
    addressLocality: 'Thiruvananthapuram',
    addressRegion: 'Kerala',
    postalCode: '695004',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 8.524139,
    longitude: 76.936639,
  },
  areaServed: [
    { '@type': 'City', name: 'Thiruvananthapuram' },
    { '@type': 'City', name: 'Trivandrum' },
    { '@type': 'State', name: 'Kerala' },
    { '@type': 'Country', name: 'India' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development & Digital Marketing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Development',
          description: 'Custom website design and development for businesses in Trivandrum and Kerala',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ecommerce Website Development',
          description: 'Shopify, WooCommerce and headless ecommerce development in Kerala',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Services',
          description: 'Search engine optimization for businesses targeting Kerala and India',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Website Development',
          description: 'AI-powered websites and software solutions built with Next.js and modern tech stacks',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Marketing',
          description: 'Performance marketing, Meta Ads, Google Ads for businesses in Kerala',
        },
      },
    ],
  },
  knowsAbout: [
    'Website Development',
    'Web Design',
    'Ecommerce Development',
    'Search Engine Optimization',
    'Digital Marketing',
    'AI Software Development',
    'Branding',
  ],
  slogan: 'Work Smarter. Grow Faster.',
  foundingLocation: {
    '@type': 'Place',
    name: 'Thiruvananthapuram, Kerala, India',
  },
}

export default function Home() {
  return (
    <ConsultationModalProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <TopBanner />
      <main>
        <Navbar />
        <Hero />
        <About />
        <MarqueeStrip />
        <Services />
        <Industries />
        <MarqueeStrip reversed />
        <CapabilityProgramme />
        <Process />
        <Testimonials />
        <Team />
        <RougeStars />
        <FreeConsultationSection />
        <Contact />
        <Footer />
      </main>
    </ConsultationModalProvider>
  )
}
