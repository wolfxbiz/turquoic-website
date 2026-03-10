// ── lib/types.ts ──

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  wide: boolean
}

export interface Industry {
  id: string
  name: string
  description: string
  bulletPoints: string[]
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  logo?: string
  avatar?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface CapabilityHighlight {
  icon: string
  title: string
  description: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  initials: string
  tagline: string
  skills: string[]
  social: {
    linkedin: string
    website: string
  }
}
