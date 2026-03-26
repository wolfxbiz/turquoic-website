import type { Metadata } from 'next'
import './globals.css'
import config from '@/_config'

const baseUrl = 'https://www.turquoic.com'
const pageUrl = `${baseUrl}${config.meta.canonicalPath}`

export const metadata: Metadata = {
  title: config.meta.title,
  description: config.meta.description,
  keywords: config.meta.keywords,
  alternates: { canonical: pageUrl },
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
