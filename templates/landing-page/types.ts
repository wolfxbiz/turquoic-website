// ── templates/landing-page/types.ts ──
// TypeScript interfaces for the landing page config.
// These give you autocomplete and type-checking when editing _config.ts.

export interface NavLink {
  label: string
  href: string
}

export interface TrustItem {
  value: string
  label: string
  /** Lucide icon name — see https://lucide.dev/icons for all options */
  icon: string
}

export interface ClientLogo {
  src: string
  alt: string
  width: number
}

export interface PainPoint {
  /** Lucide icon name */
  icon: string
  title: string
  description: string
}

export interface Service {
  /** Lucide icon name */
  icon: string
  title: string
  description: string
}

export interface PricingTier {
  name: string
  price: number
  description: string
  features: string[]
  highlighted: boolean
  cta: string
}

export interface Testimonial {
  name: string
  country: string
  flag: string
  initials: string
  rating: number
  quote: string
}

export interface ProcessStep {
  step: number
  /** Lucide icon name (currently unused in display but kept for extensibility) */
  icon: string
  title: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'github'
  url: string
}

export interface LandingConfig {
  meta: {
    title: string
    description: string
    keywords: string[]
    /** URL path only, e.g. '/ai-website-ai-software' */
    canonicalPath: string
    ogImage: string
  }
  brand: {
    name: string
    tagline: string
    /** Full WhatsApp or Calendly URL for primary CTA */
    ctaUrl: string
    ctaLabel: string
    secondaryCtaLabel: string
    secondaryCtaHref: string
  }
  navLinks: NavLink[]
  hero: {
    sectionLabel: string
    /** Array of 3 headline lines displayed as separate rows */
    headlines: [string, string, string]
    /** 0-indexed — which headline line gets teal-accent colour */
    accentLineIndex: number
    subheadline: string
    heroImage: string
    heroImageAlt: string
    trustItems: TrustItem[]
    clientLogos: ClientLogo[]
    clientLogoBannerText: string
  }
  /** Industry/sector names for the scrolling proof strip */
  socialProof: string[]
  problemHook: {
    sectionLabel: string
    heading: string
    /** Highlighted portion of heading (rendered in teal-accent) */
    headingAccent: string
    painPoints: PainPoint[]
    closingLine: string
  }
  servicesGrid: {
    sectionLabel: string
    heading: string
    services: Service[]
  }
  pricing: {
    sectionLabel: string
    heading: string
    tiers: PricingTier[]
  }
  testimonials: {
    sectionLabel: string
    heading: string
    overallRating: string
    items: Testimonial[]
  }
  howItWorks: {
    sectionLabel: string
    heading: string
    steps: ProcessStep[]
  }
  faq: {
    sectionLabel: string
    heading: string
    items: FaqItem[]
  }
  finalCta: {
    heading: string
    subheadline: string
    ctaLabel: string
    ctaUrl: string
    footnote: string
  }
  footer: {
    tagline: string
    socialLinks: SocialLink[]
  }
}
