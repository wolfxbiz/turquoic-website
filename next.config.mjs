// ── next.config.mjs ──
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Old WordPress-style trailing-slash pages → current Next.js routes
      { source: '/about-us', destination: '/', permanent: true },
      { source: '/about-us/', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/home/', destination: '/', permanent: true },
      { source: '/contact-us', destination: '/#contact', permanent: true },
      { source: '/contact-us/', destination: '/#contact', permanent: true },
      { source: '/services/', destination: '/services', permanent: true },
      { source: '/solutions/', destination: '/solutions', permanent: true },
      { source: '/e-commerce', destination: '/services/ecommerce-development', permanent: true },
      { source: '/e-commerce/', destination: '/services/ecommerce-development', permanent: true },
      { source: '/content-marketing', destination: '/services/digital-marketing', permanent: true },
      { source: '/content-marketing/', destination: '/services/digital-marketing', permanent: true },

      // Old service pages
      { source: '/services/venture-building-services', destination: '/services', permanent: true },
      { source: '/services/venture-building-services/', destination: '/services', permanent: true },
      { source: '/services/venture-building-services-2', destination: '/services', permanent: true },
      { source: '/services/venture-building-services-2/', destination: '/services', permanent: true },

      // Old blog posts → blog index
      { source: '/key-player-revealed-in-artificial-intelligence-industry', destination: '/blog', permanent: true },
      { source: '/key-player-revealed-in-artificial-intelligence-industry/', destination: '/blog', permanent: true },
      { source: '/corporate-tax-registration-uae-4', destination: '/blog', permanent: true },
      { source: '/corporate-tax-registration-uae-4/', destination: '/blog', permanent: true },
      { source: '/corporate-tax-registration-uae-4/feed', destination: '/blog', permanent: true },
      { source: '/corporate-tax-registration-uae-4/feed/', destination: '/blog', permanent: true },
      { source: '/global-brands-to-accelerate-ai-adoption-in-various-industries', destination: '/blog', permanent: true },
      { source: '/global-brands-to-accelerate-ai-adoption-in-various-industries/', destination: '/blog', permanent: true },
      { source: '/uae-tax-deadlines-2025-2', destination: '/blog', permanent: true },
      { source: '/uae-tax-deadlines-2025-2/', destination: '/blog', permanent: true },
      { source: '/ai-solutions-enterprise-growth-2', destination: '/blog', permanent: true },
      { source: '/ai-solutions-enterprise-growth-2/', destination: '/blog', permanent: true },

      // Old WordPress category pages → blog
      { source: '/category/creative', destination: '/blog', permanent: true },
      { source: '/category/creative/', destination: '/blog', permanent: true },
      { source: '/category/animation', destination: '/blog', permanent: true },
      { source: '/category/animation/', destination: '/blog', permanent: true },

      // Old WordPress wp-content paths → home
      { source: '/wp-content/:path*', destination: '/', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
      {
        source: '/og-image.jpg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ]
  },
}

export default nextConfig
