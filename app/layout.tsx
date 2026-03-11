// ── app/layout.tsx ──
import type { Metadata } from 'next'
import './globals.css'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Turquoic — AI-Powered Business Solutions',
  description:
    'Work Smarter. Grow Faster. Live Better. Turquoic delivers intelligent AI automation, lead generation, and custom IT solutions for professionals who are serious about their time.',
  keywords: [
    'AI automation',
    'business solutions',
    'lead generation',
    'process automation',
    'revenue growth',
    'IT solutions',
  ],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Turquoic — AI-Powered Business Solutions',
    description: 'Work Smarter. Grow Faster. Live Better.',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Turquoic' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turquoic — AI-Powered Business Solutions',
    description: 'Work Smarter. Grow Faster. Live Better.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
