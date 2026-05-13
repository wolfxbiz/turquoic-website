export interface LocationStat {
  label: string
  value: string
}

export interface LocationFaq {
  q: string
  a: string
}

export interface LocationService {
  title: string
  slug: string
  localPrice: string
  turquoicPrice: string
}

export interface LocationData {
  slug: string
  country: string
  city: string
  region: string
  flag: string
  currency: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  heroHeadline: string
  heroSubheadline: string
  heroDescription: string
  painPoint: string
  painPointDescription: string
  timezoneNote: string
  timezoneDetail: string
  savingsHeadline: string
  savingsDescription: string
  services: LocationService[]
  whyUs: string[]
  faqs: LocationFaq[]
  stats: LocationStat[]
  ctaHeadline: string
  ctaDescription: string
}

export const ALL_LOCATIONS: LocationData[] = [
  {
    slug: 'dubai',
    country: 'UAE',
    city: 'Dubai',
    region: 'Middle East',
    flag: '🇦🇪',
    currency: 'AED',
    metaTitle: 'Web Design & Development Agency for Dubai Businesses | Turquoic India',
    metaDescription: 'Turquoic is a top-rated Indian web design agency serving Dubai and UAE businesses. Save 60–70% vs local Dubai agencies. Same quality, faster delivery, 1.5hr timezone gap.',
    keywords: [
      'web design agency for dubai businesses',
      'web development company india dubai',
      'affordable website design dubai',
      'outsource web development dubai india',
      'best web design company for uae clients',
      'website development india for dubai',
      'digital marketing agency india dubai',
      'seo services india for uae businesses',
    ],
    heroHeadline: 'World-Class Web Design for Dubai Businesses',
    heroSubheadline: 'Indian quality. Dubai results. 60% less cost.',
    heroDescription: 'Turquoic is a Trivandrum-based web design and digital marketing agency serving businesses across Dubai and the UAE. We build high-performance websites, run SEO campaigns, and deliver digital products — at a fraction of what local Dubai agencies charge.',
    painPoint: 'Dubai Agencies Are Expensive',
    painPointDescription: 'A standard business website from a Dubai or Abu Dhabi agency costs AED 15,000–50,000+. The same quality work — often by the same offshore talent — costs significantly less when you hire an Indian agency directly. The middleman markup is real.',
    timezoneNote: 'Only 1.5 Hours Apart',
    timezoneDetail: 'India Standard Time (IST) and UAE Standard Time (GST) are only 1 hour 30 minutes apart. Morning standups, afternoon reviews, same-day revisions — working with Turquoic feels like working with a local team.',
    savingsHeadline: 'Same Quality. 60% Less Cost.',
    savingsDescription: 'Dubai businesses that outsource web development to India typically save 60–70% on project costs without compromising quality. Our team uses the same technology stack, design tools, and project management processes as top Dubai agencies.',
    services: [
      { title: 'Business Website', slug: 'website-development', localPrice: 'AED 15,000–35,000', turquoicPrice: 'AED 5,000–12,000' },
      { title: 'Ecommerce Store', slug: 'ecommerce-development', localPrice: 'AED 25,000–60,000', turquoicPrice: 'AED 8,000–20,000' },
      { title: 'SEO (6 months)', slug: 'seo-services', localPrice: 'AED 10,000–25,000', turquoicPrice: 'AED 3,500–9,000' },
      { title: 'Logo & Branding', slug: 'logo-branding-design', localPrice: 'AED 5,000–15,000', turquoicPrice: 'AED 1,500–5,000' },
      { title: 'Google Ads', slug: 'google-ads-management', localPrice: 'AED 3,000–8,000/mo', turquoicPrice: 'AED 1,000–3,000/mo' },
      { title: 'UI/UX Design', slug: 'ui-ux-design', localPrice: 'AED 12,000–30,000', turquoicPrice: 'AED 4,000–10,000' },
    ],
    whyUs: [
      'Direct communication — no account manager relay, you talk to the designers and developers',
      'Only 1.5-hour timezone difference — real-time collaboration during your business day',
      'English-first team — all briefs, calls, and deliverables in fluent English',
      'Indian IT industry quality — same talent pool as the agencies Dubai companies already outsource to',
      'Fixed-price contracts — no surprise invoices or scope creep charges',
      'WhatsApp, Zoom, or email — we work the way you work',
    ],
    faqs: [
      { q: 'How do I communicate with a team based in India from Dubai?', a: 'We use Zoom, Google Meet, WhatsApp, and email. With only 1.5 hours between IST and UAE time, we can easily schedule morning or afternoon calls that suit your Dubai workday. Most clients find communication smoother than with local agencies.' },
      { q: 'How do payments work for Dubai clients?', a: 'We accept international bank transfers (SWIFT), Wise, and PayPal. All pricing is quoted in USD or AED based on your preference. A 50% advance and 50% on delivery is our standard payment schedule.' },
      { q: 'Can you build a website in Arabic?', a: 'Yes — we build bilingual (English + Arabic) websites with proper RTL (right-to-left) layout support. We work with your Arabic content or can recommend translation partners.' },
      { q: 'How long does a project take from Dubai?', a: 'Project timelines are the same regardless of location. A business website takes 7–14 working days. Ecommerce stores take 3–5 weeks. The remote nature does not slow things down — we use staging links and loom videos for reviews.' },
      { q: 'Do you understand the Dubai market and audience?', a: 'Yes. We have worked with UAE-based businesses and understand the Dubai consumer — bilingual content, WhatsApp-first communication, trust signals relevant to the Middle East market, and local SEO for Google UAE.' },
      { q: 'What happens if I am not happy with the work?', a: 'We offer unlimited revisions within the agreed scope until you are satisfied. Our contracts protect both parties clearly. We have a 100% client satisfaction record across all international projects.' },
    ],
    stats: [
      { value: '60–70%', label: 'Cost savings vs Dubai agencies' },
      { value: '1.5 hrs', label: 'Timezone difference (IST–GST)' },
      { value: '7–14 days', label: 'Business website delivery' },
      { value: '100%', label: 'English-first communication' },
    ],
    ctaHeadline: 'Ready to work with an Indian agency that delivers?',
    ctaDescription: 'Free consultation call. We will show you our portfolio, answer your questions, and give you a fixed-price quote — no pressure, no commitment.',
  },

  {
    slug: 'usa',
    country: 'USA',
    city: 'United States',
    region: 'North America',
    flag: '🇺🇸',
    currency: 'USD',
    metaTitle: 'Web Design & Development Agency for US Businesses | Turquoic India',
    metaDescription: 'Turquoic is a top-rated Indian web agency serving US businesses and startups. Save 60–70% vs American agencies. Modern tech stack, English-first team, async-friendly workflow.',
    keywords: [
      'web design agency india for us clients',
      'offshore web development company india usa',
      'hire web developer india for us business',
      'affordable web design usa outsourcing india',
      'web development outsourcing india',
      'best indian web design company for us clients',
      'seo services india for us businesses',
      'website development company india united states',
    ],
    heroHeadline: 'Top Indian Web Agency for US Businesses',
    heroSubheadline: 'Silicon Valley quality. India pricing. Async-friendly workflow.',
    heroDescription: 'Turquoic is an India-based web design and digital marketing agency serving startups, SMBs, and enterprises across the United States. We deliver modern, high-performance digital products — at 60–70% less than US agency rates — without compromising on quality, communication, or timelines.',
    painPoint: 'US Agency Rates Are Unsustainable',
    painPointDescription: 'A standard business website from a US agency costs $5,000–$25,000. An ecommerce store starts at $15,000. For startups and growing SMBs, these rates are a barrier. The same work — often done by offshore teams anyway — costs significantly less when you hire the source directly.',
    timezoneNote: 'Async-Optimised Workflow',
    timezoneDetail: 'We are IST-based, which means our workday overlaps with your US evening — your brief arrives overnight, and the work is ready when you wake up. For real-time calls, we offer early morning IST slots (7–9 AM IST = 8:30 PM–10:30 PM ET the previous day) and late afternoon overlaps.',
    savingsHeadline: 'Same Stack. 60% Less Cost.',
    savingsDescription: 'US companies outsourcing to India is not new — it is how most large US tech companies operate. The difference is you are hiring us directly, not through a staffing layer. We use React, Next.js, TypeScript, Tailwind, Shopify, WordPress — the exact same tools your US agency would use.',
    services: [
      { title: 'Business Website', slug: 'website-development', localPrice: '$5,000–$15,000', turquoicPrice: '$1,500–$5,000' },
      { title: 'Ecommerce Store', slug: 'ecommerce-development', localPrice: '$15,000–$50,000', turquoicPrice: '$4,000–$15,000' },
      { title: 'SEO (6 months)', slug: 'seo-services', localPrice: '$6,000–$18,000', turquoicPrice: '$2,000–$6,000' },
      { title: 'Logo & Branding', slug: 'logo-branding-design', localPrice: '$3,000–$10,000', turquoicPrice: '$800–$3,000' },
      { title: 'Google Ads Mgmt', slug: 'google-ads-management', localPrice: '$1,500–$5,000/mo', turquoicPrice: '$500–$1,800/mo' },
      { title: 'Web Application', slug: 'web-application-development', localPrice: '$25,000–$100,000', turquoicPrice: '$8,000–$35,000' },
    ],
    whyUs: [
      'Modern tech stack — Next.js, React, TypeScript, Shopify, Tailwind — no legacy code',
      'Async-first workflow — detailed Loom updates, Notion docs, GitHub transparency',
      'English-first team — native-level written English, no language barriers',
      'India\'s IT industry is the world\'s offshore development backbone — you\'re hiring from that pool directly',
      'Fixed-scope contracts with milestone-based payments — no open-ended billing',
      'Overlap windows available for ET, CT, PT — we make real-time calls work',
    ],
    faqs: [
      { q: 'How does async collaboration work across timezones?', a: 'We are 9.5–12.5 hours ahead of US timezones depending on your state. We use Loom videos for design walkthroughs, Notion for project docs, GitHub for code transparency, and Slack or email for async updates. You brief us in the evening, we build overnight, you review in the morning. Most US clients find this cycle faster than working with local agencies.' },
      { q: 'What technology stack do you use?', a: 'Next.js 14, React, TypeScript, Tailwind CSS for web apps. Shopify for ecommerce. WordPress/Headless CMS for content-heavy sites. Figma for UI/UX. The same stack your US tech team or agency would recommend.' },
      { q: 'How do payments work for US clients?', a: 'We accept ACH transfers, Wise, PayPal, and Stripe. All contracts are priced in USD. Standard terms: 50% upfront, 50% on delivery. For larger projects we use milestone-based payments.' },
      { q: 'Do you sign NDAs and contracts?', a: 'Absolutely. We sign NDAs before any project discussion if required. All work is under a work-for-hire agreement — you own 100% of the code, design files, and assets delivered.' },
      { q: 'How is your English communication quality?', a: 'Our team communicates entirely in English — written and spoken. All project briefs, status updates, and deliverables are in clear, professional English. We do not use account managers — you talk directly to the designers and developers building your product.' },
      { q: 'What if I need ongoing support after launch?', a: 'We offer monthly retainer packages for US clients covering updates, performance monitoring, SEO maintenance, and feature additions. Many US clients use us as their dedicated offshore development team on a retainer basis.' },
    ],
    stats: [
      { value: '60–70%', label: 'Cost savings vs US agencies' },
      { value: 'Next.js', label: 'Modern tech stack' },
      { value: '7–14 days', label: 'Business website delivery' },
      { value: '100%', label: 'Code ownership — yours' },
    ],
    ctaHeadline: 'Let\'s talk. Free consultation, no commitment.',
    ctaDescription: 'We will review your project, share relevant portfolio pieces, and give you a fixed USD quote within 24 hours.',
  },
]

export function getLocationBySlug(slug: string): LocationData | undefined {
  return ALL_LOCATIONS.find(l => l.slug === slug)
}

export function getAllLocationSlugs(): string[] {
  return ALL_LOCATIONS.map(l => l.slug)
}
