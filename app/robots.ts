import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://www.turquoic.com/sitemap.xml',
    host: 'https://www.turquoic.com',
  }
}
