import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Allow images from any domain — tighten this for production
    remotePatterns: [],
  },
}

export default nextConfig
