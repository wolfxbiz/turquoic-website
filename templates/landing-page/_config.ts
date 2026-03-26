// ══════════════════════════════════════════════════════════════════
// LANDING PAGE CONFIGURATION
// ──────────────────────────────────────────────────────────────────
// This is the ONLY file you need to edit to customise your landing page.
// Every section reads all of its content from this single config object.
//
// HOW TO USE:
//   1. Copy the entire `templates/landing-page/` folder into `app/<your-slug>/`
//   2. Edit this file with your content
//   3. Run `npm run dev` — visit http://localhost:3000/<your-slug>
//
// ICON NAMES: All `icon` fields use Lucide React icon names.
//   Browse all icons at https://lucide.dev/icons
//   Examples: 'Brain', 'Rocket', 'Code2', 'Star', 'Zap', 'Shield'
// ══════════════════════════════════════════════════════════════════

import type { LandingConfig } from './types'

const config: LandingConfig = {

  // ── META & SEO ────────────────────────────────────────────────────
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
      'AI integration',
      'Next.js development',
      'web app development agency',
    ],
    canonicalPath: '/ai-website-ai-software',
    ogImage: 'https://www.turquoic.com/og-image.jpg',
  },

  // ── BRAND ─────────────────────────────────────────────────────────
  brand: {
    name: 'Turquoic',
    tagline: 'Intelligent Software, Built Right.',
    ctaUrl:
      'https://wa.me/919400061111?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project%20with%20Turquoic.',
    ctaLabel: 'Start Your Project →',
    secondaryCtaLabel: 'View Our Work',
    secondaryCtaHref: '#services',
  },

  // ── NAVBAR ────────────────────────────────────────────────────────
  navLinks: [
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ],

  // ── HERO ──────────────────────────────────────────────────────────
  hero: {
    sectionLabel: 'AI-Powered Development',
    headlines: [
      'WE BUILD AI-POWERED',
      'WEBSITES & APPS',
      'FOR YOUR BUSINESS.',
    ],
    accentLineIndex: 2, // 0 = first line, 1 = second, 2 = third
    subheadline:
      'From custom websites to AI-integrated platforms — we design, develop, and deploy full-stack software that helps your business grow.',
    heroImage: '/assets/images/landing-hero.png',
    heroImageAlt: 'Turquoic — AI-powered web application development',
    trustItems: [
      { value: '4.9/5', label: 'From 500+ Clients', icon: 'Star' },
      { value: '2-Day', label: 'Avg Response Time', icon: 'Zap' },
      { value: '100%', label: 'Unlimited Revisions', icon: 'RefreshCw' },
    ],
    clientLogos: [
      { src: '/assets/logos/hsbc.png', alt: 'HSBC', width: 120 },
      { src: '/assets/logos/kpmg.png', alt: 'KPMG', width: 100 },
      { src: '/assets/logos/nielsen.png', alt: 'Nielsen', width: 130 },
      { src: '/assets/logos/kantar-tns.png', alt: 'Kantar TNS', width: 140 },
      { src: '/assets/logos/dubai-police-academy.png', alt: 'Dubai Police Academy', width: 160 },
      { src: '/assets/logos/dali-advertising.png', alt: 'DALI Advertising', width: 140 },
      { src: '/assets/logos/tott-books.png', alt: 'TOTT Books', width: 130 },
      { src: '/assets/logos/marunadam-malayalee.png', alt: 'Marunadam Malayalee', width: 150 },
      { src: '/assets/logos/foretell-global.png', alt: 'Foretell Global', width: 150 },
      { src: '/assets/logos/hylomart.png', alt: 'HyloMart', width: 140 },
      { src: '/assets/logos/alya-auditors.png', alt: 'Alya Auditors', width: 140 },
    ],
    clientLogoBannerText: 'Trusted by leading organisations worldwide',
  },

  // ── SOCIAL PROOF STRIP ───────────────────────────────────────────
  socialProof: [
    'HealthTech',
    'FinTech',
    'E-Commerce',
    'SaaS Platforms',
    'Real Estate',
    'EdTech',
  ],

  // ── PROBLEM HOOK ─────────────────────────────────────────────────
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

  // ── SERVICES GRID ─────────────────────────────────────────────────
  servicesGrid: {
    sectionLabel: 'What We Build',
    heading: 'Full-Stack Solutions Built for the Real World',
    services: [
      {
        icon: 'Brain',
        title: 'AI-Powered Web Apps',
        description:
          'Intelligent applications with GPT, LLMs, and custom AI models baked into the core experience.',
      },
      {
        icon: 'Code2',
        title: 'Full-Stack Websites',
        description:
          'High-performance websites built with modern frameworks — fast, responsive, and SEO-optimised.',
      },
      {
        icon: 'LayoutDashboard',
        title: 'SaaS & Dashboards',
        description:
          'Multi-tenant platforms, admin panels, and analytics dashboards built for scale.',
      },
      {
        icon: 'Server',
        title: 'REST & GraphQL APIs',
        description:
          'Robust, documented APIs that integrate seamlessly with your existing tools and third-party services.',
      },
      {
        icon: 'ShoppingCart',
        title: 'E-Commerce & Booking',
        description:
          'Online stores, booking engines, and payment systems that convert visitors into revenue.',
      },
      {
        icon: 'Rocket',
        title: 'Deployment & Support',
        description:
          "CI/CD pipelines, cloud hosting, monitoring, and post-launch maintenance — we don't disappear after delivery.",
      },
    ],
  },

  // ── PRICING ───────────────────────────────────────────────────────
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

  // ── TESTIMONIALS ──────────────────────────────────────────────────
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
          'The communication was outstanding from day one. They understood our vision immediately and kept us in the loop at every stage. The final product exceeded our expectations — it felt like working with an in-house team.',
      },
      {
        name: 'Sammy L.',
        country: 'United States',
        flag: '🇺🇸',
        initials: 'SL',
        rating: 5,
        quote:
          "We've worked with multiple agencies before, but the quality and consistency Turquoic delivers is on another level. Our AI-powered dashboard was delivered ahead of schedule and has been rock-solid in production.",
      },
      {
        name: 'Robert B.',
        country: 'Canada',
        flag: '🇨🇦',
        initials: 'RB',
        rating: 5,
        quote:
          "Clean, professional code that's actually maintainable. The documentation alone was worth it. I was able to onboard my own developers to extend the platform without any issues. Highly recommend.",
      },
    ],
  },

  // ── HOW IT WORKS ──────────────────────────────────────────────────
  howItWorks: {
    sectionLabel: 'Process',
    heading: 'How Turquoic Works',
    steps: [
      {
        step: 1,
        icon: 'Search',
        title: 'Discover',
        description: 'Share your idea, goals, and requirements. We listen first.',
      },
      {
        step: 2,
        icon: 'PenTool',
        title: 'Plan',
        description: 'Architecture, tech stack, milestones — agreed before a single line of code.',
      },
      {
        step: 3,
        icon: 'Hammer',
        title: 'Build',
        description: 'Iterative development with you in the loop. Weekly updates, open communication.',
      },
      {
        step: 4,
        icon: 'Rocket',
        title: 'Launch',
        description: 'Deploy to production, full handover, documentation, and ongoing support.',
      },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────────────────
  faq: {
    sectionLabel: 'FAQ',
    heading: 'Common Questions',
    items: [
      {
        question: 'What industries do you work with?',
        answer:
          'We work across all industries — from HealthTech and FinTech to E-Commerce, SaaS, Real Estate, and EdTech. Our team adapts to your domain and builds solutions tailored to your specific market needs.',
      },
      {
        question: 'Do you provide the source code?',
        answer:
          'Absolutely. You own 100% of the source code from day one. Every plan includes full code handover along with documentation so your team can maintain and extend the product independently.',
      },
      {
        question: 'Can you integrate with tools I already use?',
        answer:
          "Yes. We specialise in third-party integrations — whether it's Stripe, Shopify, HubSpot, Salesforce, Zapier, or any tool with an API. If it has an endpoint, we can connect it.",
      },
      {
        question: 'Do you offer ongoing maintenance?',
        answer:
          'Yes. Our Enterprise plan includes 30-day post-launch support. We also offer monthly retainer packages for ongoing maintenance, feature development, and performance monitoring.',
      },
      {
        question: "What's included in the Enterprise plan?",
        answer:
          'The Enterprise plan covers up to 10-page AI-driven platforms with advanced ML capabilities including fine-tuning and data pipelines. It includes full-stack development, DevOps setup, desktop app support, 30-day post-launch support, complete source code, and comprehensive documentation.',
      },
      {
        question: 'How do we get started?',
        answer:
          "It's simple — book a free discovery call or message us directly. We'll discuss your project, recommend the right approach, and provide a clear timeline and quote within 24 hours. No commitment required.",
      },
    ],
  },

  // ── FINAL CTA ─────────────────────────────────────────────────────
  finalCta: {
    heading: "Let's Build Something That Lasts.",
    subheadline:
      "Whether you're validating an idea or scaling a product, Turquoic has the expertise to deliver.",
    ctaLabel: 'Book a Free Discovery Call →',
    ctaUrl:
      'https://wa.me/919400061111?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20discovery%20call.',
    footnote: 'Or message us directly — we respond within 1 hour',
  },

  // ── FOOTER ────────────────────────────────────────────────────────
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
