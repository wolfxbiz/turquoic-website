// ── app/layout.tsx ──
import type { Metadata } from 'next'
import './globals.css'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.turquoic.com'),
  title: {
    default: 'Best Website Development Company in Trivandrum | Turquoic',
    template: '%s | Turquoic',
  },
  description:
    'Website development company in Trivandrum, Kerala. High-performance websites, ecommerce stores, AI web apps & digital marketing for businesses across India.',
  keywords: [
    'website development company in Trivandrum',
    'website company in Trivandrum',
    'web design company Trivandrum',
    'best website development companies in Trivandrum',
    'website companies in Trivandrum',
    'web development agency Kerala',
    'website design Trivandrum',
    'web development company Kerala',
    'IT company Trivandrum',
    'digital marketing Trivandrum',
    'ecommerce website development Kerala',
    'SEO company Trivandrum',
    'software company Trivandrum',
    'Turquoic',
  ],
  alternates: {
    canonical: 'https://www.turquoic.com',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Best Website Development Company in Trivandrum | Turquoic',
    description:
      'Turquoic builds high-performance websites, ecommerce stores, and AI-powered web apps for businesses in Trivandrum & Kerala. Get a free consultation today.',
    type: 'website',
    url: 'https://www.turquoic.com',
    siteName: 'Turquoic',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.turquoic.com/og-image.jpg',
        secureUrl: 'https://www.turquoic.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Turquoic — Best Website Development Company in Trivandrum',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Website Development Company in Trivandrum | Turquoic',
    description:
      'High-performance websites, ecommerce stores & AI web apps for businesses in Trivandrum, Kerala.',
    images: ['https://www.turquoic.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.turquoic.com/#organization',
  name: 'Turquoic',
  url: 'https://www.turquoic.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.turquoic.com/og-image.jpg',
    width: 1200,
    height: 630,
  },
  image: 'https://www.turquoic.com/og-image.jpg',
  telephone: '+918086286886',
  email: 'hello@turquoic.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'L:116, LIC E Ln, Lekshmi Nagar, Pattom',
    addressLocality: 'Trivandrum',
    addressRegion: 'Kerala',
    postalCode: '695004',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/company/turquoic/',
    'https://www.facebook.com/share/14XSNLn6K3p/',
    'https://www.instagram.com/turquoic',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.turquoic.com/#website',
  url: 'https://www.turquoic.com',
  name: 'Turquoic',
  description: 'Best Website Development Company in Trivandrum, Kerala',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.turquoic.com/?s={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
