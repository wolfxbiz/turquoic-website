export interface LocationFaq {
  q: string
  a: string
}

export interface LocationCapability {
  title: string
  description: string
}

export interface LocationData {
  slug: string
  country: string
  city: string
  flag: string
  flagImage: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  heroHeadline: string
  heroDescription: string
  intro: string
  capabilities: LocationCapability[]
  whyUs: string[]
  faqs: LocationFaq[]
  ctaHeadline: string
  ctaDescription: string
}

export const ALL_LOCATIONS: LocationData[] = [
  {
    slug: 'dubai',
    country: 'UAE',
    city: 'Dubai',
    flag: '🇦🇪',
    flagImage: '/assets/images/flag-uae.png',
    metaTitle: 'Web Design & Digital Strategy Agency for Dubai | Turquoic',
    metaDescription: 'Turquoic partners with Dubai businesses to build high-performance websites, digital products, and growth strategies. Premium work. Real results.',
    keywords: [
      'web design agency dubai',
      'digital agency for dubai businesses',
      'website development dubai',
      'digital marketing agency dubai',
      'seo agency dubai',
      'web development company dubai',
      'branding agency dubai',
      'ecommerce development dubai',
    ],
    heroHeadline: 'Built for Dubai.\nDelivered with Precision.',
    heroDescription: 'Turquoic partners with businesses across Dubai and the UAE to build digital products that perform — websites, ecommerce platforms, SEO campaigns, and brand identities crafted to the highest standard.',
    intro: 'Dubai businesses operate in one of the world\'s most competitive markets. Your digital presence needs to match the ambition of the city. We build for that standard — fast, premium, and built to convert.',
    capabilities: [
      {
        title: 'Premium Website Development',
        description: 'Custom-built websites designed for performance, brand, and conversion. Every project starts with strategy — not templates.',
      },
      {
        title: 'Ecommerce & D2C Platforms',
        description: 'Shopify and custom storefronts engineered to sell. Mobile-first, fast-loading, and optimised for the UAE consumer.',
      },
      {
        title: 'SEO & Digital Growth',
        description: 'Organic search strategies built for the Dubai and UAE market. Long-term visibility for the keywords your customers actually search.',
      },
      {
        title: 'Brand Identity & Design',
        description: 'Visual identity systems that position your business as a premium player in the UAE market — logo, brand guidelines, and digital assets.',
      },
      {
        title: 'Google & Meta Ads',
        description: 'Performance advertising managed by specialists. ROI-focused campaigns targeting Dubai audiences with precision.',
      },
      {
        title: 'Bilingual Digital Experiences',
        description: 'English and Arabic websites with proper RTL layout, localised UX, and content strategy for both audiences.',
      },
    ],
    whyUs: [
      'We work with a small number of clients at a time — your project gets full attention, not a junior team',
      'Direct communication with the designers and developers building your product — no account manager layer',
      'Every project is strategically driven — we understand your business goals before writing a single line of code',
      'We build for scale — the websites and systems we deliver grow with your business',
      'Seamless async and live collaboration — we make timezone work in your favour',
      'We take ownership of results — not just deliverables',
    ],
    faqs: [
      {
        q: 'How do you work with Dubai-based clients remotely?',
        a: 'We use Zoom, Google Meet, and async tools like Loom and Notion. Kick-off calls, weekly reviews, and design walkthroughs all happen live. The process is structured so you always know what\'s happening and what\'s next — with no delays.',
      },
      {
        q: 'Can you build bilingual Arabic and English websites?',
        a: 'Yes. We design and develop bilingual websites with full RTL Arabic support, localised UX patterns, and proper font handling. We work with your Arabic content team or can recommend certified translators.',
      },
      {
        q: 'Do you understand the Dubai market and consumer behaviour?',
        a: 'We have worked with UAE-based businesses and research every market we enter. We understand UAE consumer preferences, Arabic digital behaviour, local SEO for Google UAE, and what converts in the Dubai context specifically.',
      },
      {
        q: 'How are payments and contracts handled?',
        a: 'All contracts are in English, clearly scoped, and milestone-based. We accept international bank transfers and Wise. You own 100% of everything we build — code, designs, and assets are fully transferred on project completion.',
      },
      {
        q: 'What does a typical project timeline look like?',
        a: 'A business website takes 2–4 weeks. Ecommerce platforms take 4–8 weeks. Brand identity projects run 2–3 weeks. Every project begins with a discovery phase where we scope, plan, and agree on milestones before any work begins.',
      },
      {
        q: 'Do you offer ongoing partnership after launch?',
        a: 'Yes. Most of our Dubai clients work with us on a monthly retainer basis — covering SEO, paid advertising, performance monitoring, and continuous development. We function as a dedicated digital partner, not a one-time vendor.',
      },
    ],
    ctaHeadline: 'Let\'s build something exceptional together.',
    ctaDescription: 'Tell us about your project. We\'ll come back with a clear plan, timeline, and proposal — no fluff.',
  },

  {
    slug: 'usa',
    country: 'United States',
    city: 'United States',
    flag: '🇺🇸',
    flagImage: '/assets/images/flag-us.png',
    metaTitle: 'Web Design & Digital Strategy Agency for US Businesses | Turquoic',
    metaDescription: 'Turquoic partners with US startups and businesses to build world-class websites, digital products, and growth systems. Premium quality. Measurable results.',
    keywords: [
      'web design agency for us businesses',
      'digital agency united states',
      'website development company usa',
      'web development agency us clients',
      'seo agency for us businesses',
      'ecommerce development usa',
      'digital marketing agency us',
      'ui ux design agency usa',
    ],
    heroHeadline: 'Your Digital Partner\nfor the US Market.',
    heroDescription: 'Turquoic works with US startups, SMBs, and brands to build digital products that drive real growth — websites, platforms, SEO systems, and brand identities built to perform in the American market.',
    intro: 'The US digital market is sophisticated, competitive, and moves fast. The businesses that win online aren\'t the ones with the most budget — they\'re the ones with the clearest strategy and the best execution. That\'s what we bring.',
    capabilities: [
      {
        title: 'High-Performance Web Development',
        description: 'Next.js, React, TypeScript — modern, scalable web products built to the same standard as top US product studios. No WordPress drag, no template ceilings.',
      },
      {
        title: 'Ecommerce & Growth Platforms',
        description: 'Shopify and custom storefronts built for the US consumer. Optimised checkout, payment integrations, and performance tuned for Google and Meta.',
      },
      {
        title: 'SEO & Content Strategy',
        description: 'Organic search strategy built for US market competition. Keyword research, content architecture, and technical SEO that compounds over time.',
      },
      {
        title: 'UI/UX & Product Design',
        description: 'Design that converts — not just impresses. We work from user research and business goals, not aesthetic trends.',
      },
      {
        title: 'Brand Identity',
        description: 'Visual identity systems that position your business precisely — brand strategy, logo system, typography, and digital brand guidelines.',
      },
      {
        title: 'Performance Advertising',
        description: 'Google Ads and Meta Ads managed with a full-funnel mindset. We focus on CAC, ROAS, and revenue — not impressions.',
      },
    ],
    whyUs: [
      'We work on a small client roster — your project gets senior attention from day one',
      'You talk directly to the strategists, designers, and engineers doing the work',
      'Async-first workflow — structured updates, Loom walkthroughs, GitHub transparency, Notion documentation',
      'Modern tech stack: Next.js 14, React, TypeScript, Tailwind, Shopify — no legacy constraints',
      'We sign NDAs, own nothing, and deliver full IP transfer on completion',
      'US-compatible meeting windows available across ET, CT, MT, and PT',
    ],
    faqs: [
      {
        q: 'How does remote collaboration work across US timezones?',
        a: 'We run an async-first process that makes timezone a non-issue. You get Loom video walkthroughs for design reviews, Notion docs for project state, and structured weekly check-ins. For live calls, we offer early morning IST slots that overlap with US business hours across all timezones — ET through PT.',
      },
      {
        q: 'What technology stack do you use?',
        a: 'Next.js 14, React, TypeScript, and Tailwind CSS for web and application development. Shopify for ecommerce. Figma for UI/UX. The same stack used by top US product companies — no outdated tools, no proprietary lock-in.',
      },
      {
        q: 'Do you sign NDAs and IP transfer agreements?',
        a: 'Yes, always. We sign NDAs before any project discussion. All work is delivered under a work-for-hire agreement — you own 100% of the code, design files, and assets. We retain nothing.',
      },
      {
        q: 'How do payments work for US clients?',
        a: 'All projects are scoped and priced in USD with milestone-based payments. We accept ACH, Wise, and Stripe. A clear contract is signed before any work begins.',
      },
      {
        q: 'How do you handle revisions and feedback cycles?',
        a: 'Every project has defined revision rounds built into the scope. We use Figma for design feedback, GitHub for code review, and staging environments for final approval. Nothing goes live without your sign-off.',
      },
      {
        q: 'Can you act as a long-term digital partner?',
        a: 'Yes — many of our US clients work with us on retainer. We handle ongoing development, SEO, content, and performance marketing. We operate as an embedded part of your team, not a vendor you have to re-brief every time.',
      },
    ],
    ctaHeadline: 'Ready to work with a team that takes ownership?',
    ctaDescription: 'Share your project brief. We\'ll respond with a strategy, timeline, and clear proposal within 24 hours.',
  },
]

export function getLocationBySlug(slug: string): LocationData | undefined {
  return ALL_LOCATIONS.find(l => l.slug === slug)
}

export function getAllLocationSlugs(): string[] {
  return ALL_LOCATIONS.map(l => l.slug)
}
