// ══════════════════════════════════════════════════════════════════
// LANDING PAGE CONFIGURATION — THE ONLY FILE YOU NEED TO EDIT
// ══════════════════════════════════════════════════════════════════
//
// HOW TO USE:
//   1. Run: npm install
//   2. Add font files to /public/assets/fonts/ (copy from Turquoic project)
//   3. Add your hero image to /public/assets/images/
//   4. Edit everything below to match your content
//   5. Run: npm run dev
//
// ICON NAMES: All `icon` fields use Lucide React icon names.
//   Browse all icons at https://lucide.dev/icons
// ══════════════════════════════════════════════════════════════════

import type { LandingConfig } from './types'

const config: LandingConfig = {

  // ── META & SEO ───────────────────────────────────────────────────
  meta: {
    title: 'AI Website & AI Software Development Services | Turquoic',
    description:
      'Turquoic builds custom AI websites, full-stack web applications, and AI-integrated software for ambitious businesses. Fast delivery, clean code, unlimited revisions.',
    keywords: [
      'AI website development',
      'AI software development',
      'full-stack development',
      'custom web application',
      'SaaS development',
    ],
    canonicalPath: '/',
    ogImage: 'https://www.turquoic.com/og-image.jpg',
  },

  // ── BRAND ────────────────────────────────────────────────────────
  brand: {
    name: 'Turquoic',
    tagline: 'Intelligent Software, Built Right.',
    ctaUrl: 'https://wa.me/919400061111?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project.',
    ctaLabel: 'Start Your Project →',
    secondaryCtaLabel: 'View Our Work',
    secondaryCtaHref: '#services',
  },

  // ── NAVBAR ───────────────────────────────────────────────────────
  navLinks: [
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ],

  // ── HERO ─────────────────────────────────────────────────────────
  hero: {
    sectionLabel: 'AI-Powered Development',
    headlines: [
      'WE BUILD AI-POWERED',
      'WEBSITES & APPS',
      'FOR YOUR BUSINESS.',
    ],
    accentLineIndex: 2,
    subheadline:
      'From custom websites to AI-integrated platforms — we design, develop, and deploy full-stack software that helps your business grow.',
    heroImage: '/assets/images/landing-hero.png',
    heroImageAlt: 'AI-powered web application development',
    trustItems: [
      { value: '4.9/5', label: 'From 500+ Clients', icon: 'Star' },
      { value: '2-Day', label: 'Avg Response Time', icon: 'Zap' },
      { value: '100%', label: 'Unlimited Revisions', icon: 'RefreshCw' },
    ],
    clientLogos: [
      { src: '/assets/logos/client-1.png', alt: 'Client 1', width: 120 },
      { src: '/assets/logos/client-2.png', alt: 'Client 2', width: 100 },
      { src: '/assets/logos/client-3.png', alt: 'Client 3', width: 130 },
      { src: '/assets/logos/client-4.png', alt: 'Client 4', width: 140 },
      { src: '/assets/logos/client-5.png', alt: 'Client 5', width: 120 },
    ],
    clientLogoBannerText: 'Trusted by leading organisations worldwide',
  },

  // ── SOCIAL PROOF STRIP ──────────────────────────────────────────
  socialProof: [
    'HealthTech',
    'FinTech',
    'E-Commerce',
    'SaaS Platforms',
    'Real Estate',
    'EdTech',
  ],

  // ── PROBLEM HOOK ────────────────────────────────────────────────
  problemHook: {
    sectionLabel: 'The Problem',
    heading: 'You Have a Groundbreaking Idea.',
    headingAccent: 'What You Need Is a Team to Build It.',
    painPoints: [
      {
        icon: 'UserX',
        title: 'Developers who miss the brief',
        description:
          'You explain your vision, but what gets built looks nothing like what you described. Miscommunication kills momentum.',
      },
      {
        icon: 'Clock',
        title: 'Months of wasted time',
        description:
          'Endless revisions, missed deadlines, and shifting timelines that push your launch further and further away.',
      },
      {
        icon: 'Bug',
        title: 'Brittle, hard-to-scale code',
        description:
          "You finally launch — only to discover the codebase is a mess that breaks under real traffic and can't grow with you.",
      },
    ],
    closingLine: 'At Turquoic, we eliminate the guesswork.',
  },

  // ── SERVICES GRID ───────────────────────────────────────────────
  servicesGrid: {
    sectionLabel: 'What We Build',
    heading: 'Full-Stack Solutions Built for the Real World',
    services: [
      {
        icon: 'Brain',
        title: 'AI-Powered Web Apps',
        description: 'Intelligent applications with GPT, LLMs, and custom AI models baked into the core experience.',
      },
      {
        icon: 'Code2',
        title: 'Full-Stack Websites',
        description: 'High-performance websites built with modern frameworks — fast, responsive, and SEO-optimised.',
      },
      {
        icon: 'LayoutDashboard',
        title: 'SaaS & Dashboards',
        description: 'Multi-tenant platforms, admin panels, and analytics dashboards built for scale.',
      },
      {
        icon: 'Server',
        title: 'REST & GraphQL APIs',
        description: 'Robust, documented APIs that integrate seamlessly with your existing tools and third-party services.',
      },
      {
        icon: 'ShoppingCart',
        title: 'E-Commerce & Booking',
        description: 'Online stores, booking engines, and payment systems that convert visitors into revenue.',
      },
      {
        icon: 'Rocket',
        title: 'Deployment & Support',
        description: "CI/CD pipelines, cloud hosting, monitoring, and post-launch maintenance — we don't disappear after delivery.",
      },
    ],
  },

  // ── PRICING ─────────────────────────────────────────────────────
  pricing: {
    sectionLabel: 'Pricing',
    heading: 'Transparent Pricing. No Surprises.',
    tiers: [
      {
        name: 'Starter',
        price: 249,
        description: 'Perfect for MVPs and landing pages',
        features: [
          'Single-page web app, frontend only',
          'Responsive design',
          'AI model integration (basic)',
          'Source code included',
          '5-day delivery',
          'Unlimited revisions',
        ],
        highlighted: false,
        cta: 'Get Started',
      },
      {
        name: 'Growth',
        price: 799,
        description: 'For teams ready to scale',
        features: [
          'Up to 5-page full-stack application',
          'AI integration: chatbot / API tool / recommendation engine',
          'API development & third-party integrations',
          'Dashboard / admin UI included',
          'Source code + documentation',
          '10-day delivery',
          'Unlimited revisions',
        ],
        highlighted: true,
        cta: 'Get Started',
      },
      {
        name: 'Enterprise',
        price: 3999,
        description: 'For complex, mission-critical platforms',
        features: [
          'Up to 10-page AI-driven platform',
          'Advanced AI/ML (fine-tuning, data pipelines)',
          'Full-stack + DevOps + desktop app support',
          '30-day post-launch support',
          'Source code + full documentation',
          '21-day delivery',
          'Unlimited revisions',
        ],
        highlighted: false,
        cta: 'Get Started',
      },
    ],
  },

  // ── TESTIMONIALS ────────────────────────────────────────────────
  testimonials: {
    sectionLabel: 'Reviews',
    heading: 'Trusted by Founders, Product Teams & Growing Brands',
    overallRating: '4.9/5',
    items: [
      {
        name: 'Mara R.',
        country: 'United States',
        flag: '🇺🇸',
        initials: 'MR',
        rating: 5,
        quote:
          'The communication was outstanding from day one. They understood our vision immediately and the final product exceeded our expectations.',
      },
      {
        name: 'Sammy L.',
        country: 'United States',
        flag: '🇺🇸',
        initials: 'SL',
        rating: 5,
        quote:
          "We've worked with multiple agencies before, but the quality Turquoic delivers is on another level. Delivered ahead of schedule.",
      },
      {
        name: 'Robert B.',
        country: 'Canada',
        flag: '🇨🇦',
        initials: 'RB',
        rating: 5,
        quote:
          "Clean, professional code that's actually maintainable. I was able to onboard my own developers to extend the platform without any issues.",
      },
    ],
  },

  // ── HOW IT WORKS ────────────────────────────────────────────────
  howItWorks: {
    sectionLabel: 'Process',
    heading: 'How It Works',
    steps: [
      { step: 1, icon: 'Search', title: 'Discover', description: 'Share your idea, goals, and requirements. We listen first.' },
      { step: 2, icon: 'PenTool', title: 'Plan', description: 'Architecture, tech stack, milestones — agreed before a single line of code.' },
      { step: 3, icon: 'Hammer', title: 'Build', description: 'Iterative development with you in the loop. Weekly updates, open communication.' },
      { step: 4, icon: 'Rocket', title: 'Launch', description: 'Deploy to production, full handover, documentation, and ongoing support.' },
    ],
  },

  // ── FAQ ─────────────────────────────────────────────────────────
  faq: {
    sectionLabel: 'FAQ',
    heading: 'Common Questions',
    items: [
      {
        question: 'What industries do you work with?',
        answer: 'We work across all industries — from HealthTech and FinTech to E-Commerce, SaaS, Real Estate, and EdTech.',
      },
      {
        question: 'Do you provide the source code?',
        answer: 'Absolutely. You own 100% of the source code from day one. Every plan includes full code handover with documentation.',
      },
      {
        question: 'Can you integrate with tools I already use?',
        answer: "Yes. We specialise in third-party integrations — Stripe, Shopify, HubSpot, Salesforce, Zapier, and more.",
      },
      {
        question: 'Do you offer ongoing maintenance?',
        answer: 'Yes. Our Enterprise plan includes 30-day post-launch support, and we offer monthly retainer packages.',
      },
      {
        question: 'How do we get started?',
        answer: "Message us directly. We'll discuss your project and provide a clear timeline and quote within 24 hours. No commitment required.",
      },
    ],
  },

  // ── FINAL CTA ───────────────────────────────────────────────────
  finalCta: {
    heading: "Let's Build Something That Lasts.",
    subheadline: "Whether you're validating an idea or scaling a product, we have the expertise to deliver.",
    ctaLabel: 'Book a Free Discovery Call →',
    ctaUrl: 'https://wa.me/919400061111?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20discovery%20call.',
    footnote: 'Or message us directly — we respond within 1 hour',
  },

  // ── FOOTER ──────────────────────────────────────────────────────
  footer: {
    tagline: 'Intelligent Software, Built Right.',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'github', url: 'https://github.com' },
    ],
  },
}

export default config
