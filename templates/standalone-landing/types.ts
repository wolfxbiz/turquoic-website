export interface NavLink { label: string; href: string }
export interface TrustItem { value: string; label: string; icon: string }
export interface ClientLogo { src: string; alt: string; width: number }
export interface PainPoint { icon: string; title: string; description: string }
export interface Service { icon: string; title: string; description: string }
export interface PricingTier {
  name: string; price: number; description: string
  features: string[]; highlighted: boolean; cta: string
}
export interface Testimonial {
  name: string; country: string; flag: string
  initials: string; rating: number; quote: string
}
export interface ProcessStep { step: number; icon: string; title: string; description: string }
export interface FaqItem { question: string; answer: string }
export interface SocialLink { platform: 'linkedin' | 'twitter' | 'github'; url: string }

export interface LandingConfig {
  meta: { title: string; description: string; keywords: string[]; canonicalPath: string; ogImage: string }
  brand: { name: string; tagline: string; ctaUrl: string; ctaLabel: string; secondaryCtaLabel: string; secondaryCtaHref: string }
  navLinks: NavLink[]
  hero: {
    sectionLabel: string; headlines: [string, string, string]; accentLineIndex: number
    subheadline: string; heroImage: string; heroImageAlt: string
    trustItems: TrustItem[]; clientLogos: ClientLogo[]; clientLogoBannerText: string
  }
  socialProof: string[]
  problemHook: { sectionLabel: string; heading: string; headingAccent: string; painPoints: PainPoint[]; closingLine: string }
  servicesGrid: { sectionLabel: string; heading: string; services: Service[] }
  pricing: { sectionLabel: string; heading: string; tiers: PricingTier[] }
  testimonials: { sectionLabel: string; heading: string; overallRating: string; items: Testimonial[] }
  howItWorks: { sectionLabel: string; heading: string; steps: ProcessStep[] }
  faq: { sectionLabel: string; heading: string; items: FaqItem[] }
  finalCta: { heading: string; subheadline: string; ctaLabel: string; ctaUrl: string; footnote: string }
  footer: { tagline: string; socialLinks: SocialLink[] }
}
