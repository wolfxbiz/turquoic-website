import type { Metadata } from 'next'

const pageUrl = 'https://www.turquoic.com/d2c-growth'

export const metadata: Metadata = {
  title: 'D2C Growth Agency for Indian Brands | Turquoic',
  description:
    'Full-service e-commerce growth agency for Indian D2C brands. Three productized tiers — Launch & Scale, Growth Accelerator, Enterprise Dominance — covering Shopify, Amazon, Meesho, Meta Ads, CRO, and more. ₹40Cr+ ad spend managed.',
  keywords: [
    'D2C growth agency India',
    'Indian D2C brands',
    'Shopify agency India',
    'Amazon seller growth',
    'Meesho seller',
    'D2C marketing agency',
    'ROAS improvement India',
    'RTO reduction',
    'Blinkit seller',
    'e-commerce growth India',
    'Meta ads D2C',
    'Google Shopping India',
    'headless commerce India',
    'D2C performance marketing',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'D2C Growth Agency for Indian Brands | Turquoic',
    description:
      'Three productized service tiers for Indian D2C brands — Launch & Scale, Growth Accelerator, and Enterprise Dominance. ₹40Cr+ ad spend managed. Avg 2.4x revenue lift.',
    url: pageUrl,
    siteName: 'Turquoic',
    type: 'website',
    images: [
      {
        url: 'https://www.turquoic.com/og-image.jpg',
        secureUrl: 'https://www.turquoic.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Turquoic — D2C Growth Agency for Indian Brands',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D2C Growth Agency for Indian Brands | Turquoic',
    description:
      'Three productized service tiers for Indian D2C brands. ₹40Cr+ ad spend managed. Avg 2.4x revenue lift in 6 months.',
    images: ['https://www.turquoic.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function D2cLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
