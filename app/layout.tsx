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
  openGraph: {
    title: 'Turquoic — AI-Powered Business Solutions',
    description: 'Work Smarter. Grow Faster. Live Better.',
    type: 'website',
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
