// ── app/ai-website-ai-software/layout.tsx ──
import type { Metadata } from 'next'

const pageUrl = 'https://www.turquoic.com/ai-website-ai-software'

export const metadata: Metadata = {
  title: 'AI Website & AI Software Development Services | Turquoic',
  description:
    'Turquoic builds custom AI websites, AI-powered software, and full-stack web applications. From MVPs to enterprise platforms — we design, develop, and deploy digital products that grow your business.',
  keywords: [
    'AI website development',
    'AI software development',
    'custom AI web app',
    'AI-powered website',
    'full-stack development services',
    'AI integration',
    'SaaS development',
    'web application development',
    'custom software development',
    'AI web development agency',
    'hire AI developers',
    'Next.js development',
    'React development',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'AI Website & AI Software Development | Turquoic',
    description:
      'Custom AI websites, AI-powered software, and full-stack web applications. We design, develop, and deploy digital products that grow your business.',
    url: pageUrl,
    siteName: 'Turquoic',
    type: 'website',
    images: [
      {
        url: 'https://www.turquoic.com/og-image.jpg',
        secureUrl: 'https://www.turquoic.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Turquoic — AI Website & AI Software Development',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Website & AI Software Development | Turquoic',
    description:
      'Custom AI websites, AI-powered software, and full-stack web apps. We design, develop, and deploy digital products that grow your business.',
    images: ['https://www.turquoic.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
