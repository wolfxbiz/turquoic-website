// ── templates/landing-page/layout.tsx ──
// SEO metadata is driven entirely by _config.ts — no manual edits needed here.
import type { Metadata } from 'next'
import config from './_config'

const baseUrl = 'https://www.turquoic.com'
const pageUrl = `${baseUrl}${config.meta.canonicalPath}`

export const metadata: Metadata = {
  title: config.meta.title,
  description: config.meta.description,
  keywords: config.meta.keywords,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: config.meta.title,
    description: config.meta.description,
    url: pageUrl,
    siteName: config.brand.name,
    images: [{ url: config.meta.ogImage, width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.meta.title,
    description: config.meta.description,
    images: [config.meta.ogImage],
  },
  robots: { index: true, follow: true },
}

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
