// ── lib/d2c-constants.ts ── All static data for the /d2c-growth landing page

export const D2C_NAV_LINKS = [
  { label: 'Tiers', href: '#tiers' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#proof' },
  { label: 'FAQ', href: '#faq' },
] as const

export const D2C_TRUST_ITEMS = [
  { value: '₹40Cr+', label: 'Ad Spend Managed', icon: 'TrendingUp' },
  { value: '80+', label: 'D2C Brands Scaled', icon: 'ShoppingBag' },
  { value: '2.4x', label: 'Avg Revenue Lift', icon: 'BarChart2' },
] as const

export const D2C_SOCIAL_PROOF = [
  'Shopify',
  'Amazon',
  'Meesho',
  'Blinkit',
  'Flipkart',
  'Meta Ads',
  'Google Shopping',
  'D2C Growth',
] as const

export const D2C_PAIN_POINTS = [
  {
    title: 'Your ROAS started at 3x. Now it barely breaks even.',
    description:
      "Generic Meta campaigns with no funnel logic burn through budget fast. Cold traffic, single-image ads, and no retargeting means you're paying acquisition cost on buyers who were never ready to buy.",
    cost: 'Burns ad budget',
    costColor: 'text-red-400',
    dotColor: 'bg-red-400',
  },
  {
    title: 'RTO is quietly eating 18–22% of your margin.',
    description:
      'COD orders from low-intent pin codes, no address verification, and zero post-purchase communication. Every returned package is a double logistics cost your P&L buries below the line.',
    cost: 'Destroys margin',
    costColor: 'text-orange-400',
    dotColor: 'bg-orange-400',
  },
  {
    title: 'Your checkout converts at 1.4% while the category average is 3.1%.',
    description:
      "Slow mobile pages on 4G, forced account creation, and a checkout with four steps when two would do. Tier-2 buyers abandon within seconds if trust signals aren't instant.",
    cost: 'Kills conversions',
    costColor: 'text-red-400',
    dotColor: 'bg-red-400',
  },
] as const

export const D2C_TIERS = [
  {
    number: '01',
    tierLabel: 'Tier 1',
    name: 'Launch & Scale',
    tagline: 'Everything you need to go from zero to first ₹10L/mo.',
    whoItsFor:
      'New D2C brands, offline retailers moving online, or startups that want a clean, scalable foundation before spending on ads.',
    revenueBand: '₹0 – ₹10L / month',
    outcomePromise: 'Your first 1,000 verified orders, with a storefront built to convert from day one.',
    features: [
      { name: 'Store Setup & Tech', benefit: "A production-ready Shopify store with the apps that matter, none that don't." },
      { name: 'Payment Integration', benefit: 'UPI, COD, and card gateways wired up so no customer drops off at checkout.' },
      { name: 'Performance Marketing', benefit: 'Meta (FB/IG) and Google Search campaigns structured to pay back within the first 30 days.' },
      { name: 'Content & Social Media', benefit: 'Brand kit, social handle setup, and lifestyle product images that look credible at launch.' },
      { name: 'Marketplace SEO', benefit: 'Keyword-optimised titles and descriptions so your products surface when buyers search.' },
    ],
    cta: 'Start Building',
    highlighted: false,
  },
  {
    number: '02',
    tierLabel: 'Tier 2',
    name: 'Growth Accelerator',
    tagline: 'Plug the leaks, raise ROAS, and scale without burning margin.',
    whoItsFor:
      'Established sellers between ₹10L and ₹50L/mo who are growing but watching RTO climb, ROAS slide, and cart abandonment stay stubbornly high.',
    revenueBand: '₹10L – ₹50L / month',
    outcomePromise: '30–40% improvement in blended ROAS and a measurable drop in RTO within 90 days.',
    features: [
      { name: 'Multi-Channel Management', benefit: 'Inventory synced across your website, Amazon, and Blinkit so you never lose a sale to a stockout.' },
      { name: 'PWA Development', benefit: 'A progressive web app that loads in under 2 seconds even on a Jio 4G connection.' },
      { name: 'D2C Performance Scaling', benefit: 'Full-funnel Meta campaigns: retargeting, Lookalike audiences, and Google Shopping for high-intent buyers.' },
      { name: 'Marketplace Onboarding', benefit: 'Live, optimised listings on Amazon, Flipkart, and Meesho — managed, not just set up.' },
      { name: 'CRO', benefit: 'Heatmap analysis and A/B testing that pinpoints exactly where your cart is leaking and closes the gap.' },
      { name: 'A+ Content (EBC)', benefit: 'Premium Amazon and Nykaa listings with high-quality graphics that convert browsers into buyers.' },
    ],
    cta: 'Accelerate Growth',
    highlighted: true,
  },
  {
    number: '03',
    tierLabel: 'Tier 3',
    name: 'Enterprise Dominance',
    tagline: "Defensible brand infrastructure for brands that can't afford to lose.",
    whoItsFor:
      "Market leaders, VC-backed brands, and Shark Tank-scale operators above ₹50L/mo who need technology, compliance, and content at a standard no freelancer team can deliver.",
    revenueBand: '₹50L+ / month',
    outcomePromise: 'A brand architecture — tech, content, compliance, and retail presence — that compounds into a moat competitors cannot replicate.',
    features: [
      { name: 'Headless Commerce', benefit: "React/Next.js storefront with sub-1-second load times and complete design freedom, decoupled from Shopify's constraints." },
      { name: 'Mobile App Development', benefit: 'Native iOS and Android apps with push notifications, loyalty features, and retention mechanics built in.' },
      { name: 'Hyper-Personalization', benefit: 'AI-driven "Recommended for You" and dynamic logic based on real user behaviour, not guesses.' },
      { name: 'Regional Localization', benefit: 'Store UI, ads, and product copy localised into Hindi, Tamil, Telugu, and other regional languages.' },
      { name: 'Premium Content (CGI/3D)', benefit: 'Photorealistic 3D product renders and high-production video ads for Meta and YouTube.' },
      { name: 'Account & Compliance', benefit: 'Bookkeeping, GST filing, and legal compliance managed so your finance function stays clean.' },
      { name: 'Influencer & Social Commerce', benefit: 'Creator and celebrity tie-ups, live-selling on Instagram and Meesho, managed end-to-end.' },
    ],
    cta: 'Dominate Your Category',
    highlighted: false,
  },
] as const

export const D2C_PROCESS_STEPS = [
  {
    step: 1,
    title: 'Deep Audit',
    description:
      'We spend the first week inside your numbers — ad accounts, Shopify analytics, Amazon backend, RTO data — before recommending anything.',
  },
  {
    step: 2,
    title: 'Precision Build',
    description:
      'We deploy only the infrastructure your current revenue stage demands: no over-engineering, no shortcuts that create debt six months later.',
  },
  {
    step: 3,
    title: 'Controlled Launch',
    description:
      "Every channel goes live in a structured sequence — paid ads only after the funnel is tight enough to not waste the first ₹1 of spend.",
  },
  {
    step: 4,
    title: 'Compound Scale',
    description:
      'Weekly performance reviews, monthly tier reassessments, and a clear trigger for moving you to the next tier as revenue grows.',
  },
] as const

export const D2C_STATS = [
  { value: '₹40Cr+', caption: 'Total ad spend managed across D2C brands' },
  { value: '2.4x', caption: 'Average revenue lift within 6 months' },
  { value: '<1s', caption: 'Storefront load time on headless builds' },
  { value: '30–40%', caption: 'Average ROAS improvement at Growth tier' },
] as const

export const D2C_TESTIMONIAL = {
  name: 'Priya Nair',
  role: 'Founder',
  brand: 'Skincare & Personal Care Brand',
  initials: 'PN',
  rating: 5,
  quote:
    'We were stuck at ₹18L/mo for four months. Our RTO was at 23% and our previous agency had no answer for it. Turquoic audited our funnel in week one, restructured our ad targeting within 10 days, and by month three we were at ₹31L/mo with RTO down to 13%.',
  placeholder: '[PLACEHOLDER — replace with real client quote]',
} as const

export const D2C_FAQ_ITEMS = [
  {
    question: 'How is this different from hiring a freelancer at one-fifth the price?',
    answer:
      'A freelancer builds one thing. We are accountable to your revenue number — which means we fix the Shopify checkout, the Meta funnel, the Amazon listing, and the RTO problem in sequence, as a system. A freelancer who builds your store has no skin in your ROAS.',
  },
  {
    question: 'What happens if I am not seeing results in 90 days?',
    answer:
      'We define "results" in writing before we start — specific ROAS targets, order volumes, or RTO percentages depending on your tier. If we miss agreed milestones at day 90, we work the next 30 days at no additional cost and show you the corrective plan.',
  },
  {
    question: 'The last agency burned ₹15L of my budget and delivered nothing. Why should I trust you?',
    answer:
      "We won't run a single rupee of paid ads until the funnel is ready to receive that traffic. Ad spend stays in your own accounts and flows directly to Meta and Google — it never passes through us. You can pause at any point.",
  },
  {
    question: 'Do you lock me into a long contract?',
    answer:
      'Tier 1 is a fixed-scope engagement — you pay for a defined build, not a rolling retainer. Tier 2 and Tier 3 start on a 3-month commitment because meaningful ROAS improvement takes a full test-and-iterate cycle. We will not pretend one month is enough to fix a funnel that took two years to get into trouble.',
  },
  {
    question: "What if my product category is something you haven't worked with before?",
    answer:
      "The mechanics of D2C — funnel structure, marketplace ranking, COD logistics, RTO reduction — don't change by category. If your product has specific compliance or listing constraints, we research them before scoping and tell you upfront if your category is something we can't serve well.",
  },
  {
    question: 'Who actually does the work — senior people or interns?',
    answer:
      'Every account has a senior strategist as the named lead. Execution is handled by specialists — a paid media manager who works only on D2C, a marketplace team that manages only Amazon and Flipkart, a CRO analyst who works only on Shopify. No account is handed off to a trainee.',
  },
] as const

export const D2C_COMPARISON_ROWS = [
  { label: 'Best for revenue', tier1: '₹0 – ₹10L / mo', tier2: '₹10L – ₹50L / mo', tier3: '₹50L+ / mo' },
  { label: 'Primary outcome', tier1: 'First 1,000 orders', tier2: 'Higher ROAS, lower RTO', tier3: 'Brand moat & market share' },
  { label: 'Setup time', tier1: '2–3 weeks', tier2: '3–5 weeks', tier3: '6–10 weeks' },
  { label: 'Engagement model', tier1: 'Fixed scope', tier2: 'Ongoing retainer', tier3: 'Dedicated team' },
  { label: 'Starting investment', tier1: 'Contact us', tier2: 'Contact us', tier3: 'Contact us' },
] as const
