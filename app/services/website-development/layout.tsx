import type { Metadata } from 'next'

const pageUrl = 'https://www.turquoic.com/services/website-development'

export const metadata: Metadata = {
  title: 'Website Development Company in Trivandrum, Kerala | Turquoic',
  description:
    'Looking for a website development company in Trivandrum? Turquoic builds custom, SEO-ready websites for businesses in Kerala. Fast delivery, transparent pricing. Get a free quote today.',
  keywords: [
    'website development company in Trivandrum',
    'website company Trivandrum',
    'website companies in Trivandrum',
    'best website development companies in Trivandrum',
    'web design company Trivandrum Kerala',
    'website design Trivandrum',
    'custom website development Kerala',
    'professional web design Trivandrum',
    'affordable website development Kerala',
    'small business website Trivandrum',
    'ecommerce website development Trivandrum',
    'WordPress development Trivandrum',
    'Next.js development Kerala',
    'mobile-friendly website Trivandrum',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Website Development Company in Trivandrum | Turquoic',
    description:
      'Turquoic builds fast, conversion-ready websites for businesses in Trivandrum and Kerala. Custom design, SEO-first development, and ongoing support.',
    url: pageUrl,
    siteName: 'Turquoic',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.turquoic.com/og-image.jpg',
        secureUrl: 'https://www.turquoic.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Development Company in Trivandrum — Turquoic',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in Trivandrum | Turquoic',
    description:
      'Custom websites for businesses in Trivandrum & Kerala. SEO-first, fast, and conversion-ready.',
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

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
