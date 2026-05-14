import type { Metadata } from 'next'

const pageUrl = 'https://www.turquoic.com/ai-workshop'

export const metadata: Metadata = {
  title: 'AI Workshop — Learn AI in 1 Day | Turquoic',
  description:
    'A hands-on, 1-day AI workshop for students, working professionals, and business owners. No technical background needed. Learn how to use AI in your actual day-to-day work. Online & in-person slots open.',
  keywords: [
    'AI workshop Kerala',
    'AI training Trivandrum',
    'AI workshop for beginners',
    'learn AI in one day',
    'AI workshop for professionals',
    'AI tools training',
    'ChatGPT workshop Kerala',
    'AI for business owners',
    'Turquoic AI workshop',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'AI Workshop — Learn AI in 1 Day | Turquoic',
    description:
      'Hands-on, 1-day AI workshop for students, professionals & business owners. No tech background needed. Online & in-person slots open.',
    url: pageUrl,
    siteName: 'Turquoic',
    type: 'website',
    images: [
      {
        url: 'https://www.turquoic.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Turquoic AI Workshop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workshop — Learn AI in 1 Day | Turquoic',
    description:
      'Hands-on AI workshop. 1 day. No tech background needed. Online & in-person slots open.',
    images: ['https://www.turquoic.com/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function AIWorkshopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
