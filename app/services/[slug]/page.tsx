import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllServiceSlugs, getServiceBySlug } from '@/lib/services-data'
import ServicePage from '@/components/services/ServicePage'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllServiceSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `https://www.turquoic.com/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.turquoic.com/services/${service.slug}`,
      siteName: 'Turquoic',
      type: 'website',
      locale: 'en_IN',
      images: [{ url: 'https://www.turquoic.com/og-image.jpg', width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: ['https://www.turquoic.com/og-image.jpg'],
    },
  }
}

export default function Page({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()
  return <ServicePage service={service} />
}
