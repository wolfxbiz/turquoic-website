import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllLocationSlugs, getLocationBySlug } from '@/lib/locations-data'
import LocationPage from '@/components/locations/LocationPage'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllLocationSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = getLocationBySlug(params.slug)
  if (!location) return {}
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords,
    alternates: { canonical: `https://www.turquoic.com/locations/${location.slug}` },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://www.turquoic.com/locations/${location.slug}`,
      siteName: 'Turquoic',
      type: 'website',
      images: [{ url: 'https://www.turquoic.com/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: location.metaTitle,
      description: location.metaDescription,
      images: ['https://www.turquoic.com/og-image.jpg'],
    },
  }
}

export default function Page({ params }: Props) {
  const location = getLocationBySlug(params.slug)
  if (!location) notFound()
  return <LocationPage location={location} />
}
