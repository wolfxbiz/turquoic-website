export type ServiceCategory = 'development' | 'marketing' | 'design' | 'ai'

export interface ServiceOffering {
  title: string
  description: string
}

export interface ServiceFaq {
  q: string
  a: string
}

export interface ServiceData {
  slug: string
  category: ServiceCategory
  title: string
  metaTitle: string
  metaDescription: string
  tagline: string
  description: string
  keywords: string[]
  offerings: ServiceOffering[]
  benefits: string[]
  faqs: ServiceFaq[]
  relatedSlugs: string[]
}

export const ALL_SERVICES: ServiceData[] = [
  // ─────────────────────────────────────────
  // DEVELOPMENT
  // ─────────────────────────────────────────
  {
    slug: 'website-development',
    category: 'development',
    title: 'Website Development',
    metaTitle: 'Website Development Company in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Turquoic builds custom, SEO-first websites for businesses in Trivandrum and Kerala. Fast delivery, transparent pricing, post-launch support.',
    tagline: 'Custom websites built to rank, convert, and grow.',
    description: 'We design and develop high-performance websites for businesses in Trivandrum and across Kerala. Every site is mobile-first, SEO-optimised, and built on modern technology that loads fast and converts visitors into customers.',
    keywords: ['website development company in Trivandrum', 'website company Trivandrum', 'web design Trivandrum', 'best website development companies in Trivandrum', 'website design Kerala', 'web development agency Trivandrum'],
    offerings: [
      { title: 'Business Websites', description: 'Professional 5–20 page sites for service businesses, clinics, schools, and consultants in Trivandrum.' },
      { title: 'Landing Pages', description: 'High-converting single pages for ads, product launches, and lead generation campaigns.' },
      { title: 'Corporate Websites', description: 'Enterprise-grade multi-page websites with CMS, team pages, case studies, and SEO architecture.' },
      { title: 'Portfolio Websites', description: 'Elegant portfolio sites for architects, designers, photographers, and creative professionals.' },
      { title: 'Website Redesign', description: 'Transform an outdated site into a fast, modern, SEO-ready digital asset.' },
      { title: 'Maintenance & Support', description: 'Monthly retainers for updates, security patches, speed optimisation, and content edits.' },
    ],
    benefits: [
      'Local team in Pattom, Trivandrum — in-person meetings available',
      'Every website scores 90+ on Google PageSpeed',
      'SEO-first structure: schema markup, canonical URLs, heading hierarchy',
      'Mobile-first design — 70%+ of Kerala users browse on mobile',
      'Fixed-price packages — no surprise invoices',
      '1 month free support after launch',
    ],
    faqs: [
      { q: 'How much does a website cost in Trivandrum?', a: 'A standard business website costs ₹25,000–₹80,000. Ecommerce starts at ₹60,000. Custom web apps start at ₹1,50,000. We offer fixed-price packages with no hidden costs.' },
      { q: 'How long does it take to build a website?', a: 'A business website takes 7–14 working days. Ecommerce stores take 3–5 weeks. Custom applications depend on scope — we provide a timeline before starting.' },
      { q: 'Do you build mobile-friendly websites?', a: 'Yes — every website we build is fully responsive and mobile-first. We test on real devices before delivery.' },
      { q: 'Is SEO included in website development?', a: 'Yes. On-page SEO, meta tags, schema markup, and proper heading structure are built into every project.' },
      { q: 'Do you offer website maintenance?', a: 'Yes — monthly maintenance packages covering updates, security, performance monitoring, and content changes.' },
    ],
    relatedSlugs: ['seo-services', 'ecommerce-development', 'ui-ux-design', 'landing-page-design'],
  },

  {
    slug: 'ecommerce-development',
    category: 'development',
    title: 'Ecommerce Website Development',
    metaTitle: 'Ecommerce Website Development in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Custom Shopify, WooCommerce, and Next.js ecommerce stores for Kerala businesses. Mobile-first, SEO-ready, and built to sell. Get a free quote today.',
    tagline: 'Online stores built to sell — not just to exist.',
    description: 'We build ecommerce websites that convert browsers into buyers. From Shopify stores to fully custom Next.js storefronts, every project is optimised for mobile, search, and sales for businesses across Kerala and India.',
    keywords: ['ecommerce website development Trivandrum', 'online store development Kerala', 'Shopify development Trivandrum', 'WooCommerce development Kerala', 'ecommerce website company Kerala'],
    offerings: [
      { title: 'Shopify Development', description: 'Custom Shopify themes, app setup, payment integration, and Shopify SEO for Indian D2C brands.' },
      { title: 'WooCommerce Development', description: 'Fully customised WordPress ecommerce stores with product management, shipping, and payment gateways.' },
      { title: 'Custom Next.js Storefronts', description: 'Headless ecommerce with blazing-fast performance — 95+ PageSpeed scores, ideal for scaling brands.' },
      { title: 'Payment Gateway Integration', description: 'Razorpay, PayU, Cashfree, Stripe — seamless checkout with UPI, cards, Net Banking, and COD.' },
      { title: 'Ecommerce SEO', description: 'Product schema markup, category page optimisation, and site structure built to rank on Google Shopping.' },
      { title: 'Store Migration', description: 'Migrate from outdated platforms to Shopify or custom Next.js without losing data or rankings.' },
    ],
    benefits: [
      'Mobile-first checkout — 80%+ of Indian ecommerce happens on mobile',
      'Full Razorpay, UPI, COD, and EMI integration',
      'Built-in inventory management and order tracking',
      'SEO-optimised product and category pages from day one',
      'Average 2.4x revenue lift for clients within 6 months',
      'Post-launch analytics setup and conversion tracking',
    ],
    faqs: [
      { q: 'Should I use Shopify or a custom website for ecommerce in Kerala?', a: 'Shopify is ideal for early-stage brands wanting to launch fast. Custom Next.js is better for scaling brands that need full SEO control and no monthly fees. We help you choose based on your revenue stage.' },
      { q: 'How much does an ecommerce website cost in Kerala?', a: 'A Shopify store starts at ₹60,000. A custom Next.js ecommerce store starts at ₹1,00,000. Both include payment integration, mobile optimisation, and basic SEO.' },
      { q: 'Do you support COD and UPI payments?', a: 'Yes — we integrate Razorpay, Cashfree, and PayU which all support UPI, Net Banking, credit/debit cards, and Cash on Delivery.' },
      { q: 'Can you migrate my existing store to a new platform?', a: 'Yes. We migrate product data, customer records, and order history to your new platform without downtime.' },
    ],
    relatedSlugs: ['shopify-development', 'seo-services', 'conversion-rate-optimisation', 'website-development'],
  },

  {
    slug: 'shopify-development',
    category: 'development',
    title: 'Shopify Development',
    metaTitle: 'Shopify Development Agency in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Expert Shopify store development, custom themes, app integrations, and Shopify SEO for Indian D2C brands. Kerala\'s trusted Shopify agency.',
    tagline: 'Shopify stores that look custom, sell hard, and scale fast.',
    description: 'We are a Shopify development agency in Trivandrum building high-performance online stores for Indian D2C brands. Custom themes, app integrations, Razorpay payments, and Shopify SEO — everything your store needs to win.',
    keywords: ['Shopify development Trivandrum', 'Shopify agency Kerala', 'Shopify store development India', 'Shopify expert Kerala', 'custom Shopify theme development'],
    offerings: [
      { title: 'Custom Shopify Theme Development', description: 'Pixel-perfect custom themes that match your brand — not a template.' },
      { title: 'Shopify App Integration', description: 'Reviews, loyalty, upsells, abandoned cart, and analytics apps configured for Indian ecommerce.' },
      { title: 'Shopify Speed Optimisation', description: 'Improve your Shopify store\'s Core Web Vitals and PageSpeed for better rankings and conversions.' },
      { title: 'Shopify SEO', description: 'URL structure, product schema, collection page optimisation, and meta tags for Google Shopping.' },
      { title: 'Shopify to Custom Migration', description: 'Migrate from Shopify to a headless Next.js storefront when you outgrow the platform.' },
      { title: 'Shopify Plus Setup', description: 'Enterprise Shopify Plus configuration, B2B channels, and wholesale pricing for scaling brands.' },
    ],
    benefits: [
      'Razorpay and Cashfree integration for UPI, cards, and COD',
      'Shopify stores loading under 2 seconds on mobile',
      'Custom theme — not a ₹500 template from the theme store',
      'Schema markup for Google Shopping rich results',
      'Ongoing Shopify support retainer available',
      'Experience with 50+ Shopify stores across India',
    ],
    faqs: [
      { q: 'How much does a Shopify store cost in India?', a: 'A custom Shopify store with theme, apps, and payment setup costs ₹60,000–₹1,20,000. Plus Shopify\'s monthly fee of ₹2,000–₹7,500. We give you a fixed quote before starting.' },
      { q: 'Can you integrate Razorpay with Shopify?', a: 'Yes — Razorpay is our standard payment gateway for Indian Shopify stores, supporting UPI, Net Banking, credit/debit cards, wallets, and COD.' },
      { q: 'Do you do Shopify SEO?', a: 'Yes. We optimise product pages, collection pages, meta titles, and add structured data for Google Shopping rich results.' },
    ],
    relatedSlugs: ['ecommerce-development', 'd2c-growth-strategy', 'seo-services', 'conversion-rate-optimisation'],
  },

  {
    slug: 'wordpress-development',
    category: 'development',
    title: 'WordPress Development',
    metaTitle: 'WordPress Development Company in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Custom WordPress website development in Trivandrum. Fast, secure, SEO-ready WordPress sites for businesses and bloggers in Kerala.',
    tagline: 'WordPress done properly — fast, secure, and SEO-ready.',
    description: 'We build custom WordPress websites that are fast, secure, and easy to manage. No bloated page builders. Clean code, proper SEO setup, and full training so your team can update content without calling a developer.',
    keywords: ['WordPress development Trivandrum', 'WordPress website company Kerala', 'custom WordPress development India', 'WordPress SEO Kerala', 'WordPress developer Trivandrum'],
    offerings: [
      { title: 'Custom WordPress Themes', description: 'Bespoke themes coded from scratch — no Elementor, no bloat, just clean and fast HTML/CSS.' },
      { title: 'WordPress WooCommerce', description: 'Full ecommerce functionality with product management, shipping zones, and payment integration.' },
      { title: 'WordPress SEO Setup', description: 'Yoast/Rank Math configuration, schema markup, XML sitemap, and Core Web Vitals optimisation.' },
      { title: 'WordPress Speed Optimisation', description: 'Caching, image compression, CDN setup, and database optimisation for sub-2-second load times.' },
      { title: 'WordPress Security Hardening', description: 'Malware removal, firewall setup, login protection, and regular backups.' },
      { title: 'WordPress Maintenance', description: 'Monthly updates, plugin management, performance monitoring, and content edits.' },
    ],
    benefits: [
      'Clean custom themes — no Elementor or Divi bloat',
      'WordPress sites scoring 85+ on Google PageSpeed',
      'Full content management training included',
      'Regular automated backups to cloud storage',
      'WooCommerce with Razorpay and COD support',
      'Compatible with all major SEO plugins and Analytics tools',
    ],
    faqs: [
      { q: 'Is WordPress good for SEO?', a: 'Yes — WordPress with proper configuration, fast hosting, and clean code can rank very well. Most of the issues come from poorly configured themes and plugins, not WordPress itself.' },
      { q: 'How much does a WordPress website cost in Kerala?', a: 'A custom WordPress business site costs ₹20,000–₹60,000 depending on complexity. WooCommerce stores start at ₹50,000.' },
      { q: 'Can I update my WordPress site myself?', a: 'Yes — WordPress has an intuitive admin panel. We provide full training so you can add blog posts, update content, and manage images without developer help.' },
    ],
    relatedSlugs: ['website-development', 'seo-services', 'technical-seo', 'ecommerce-development'],
  },

  {
    slug: 'nextjs-development',
    category: 'development',
    title: 'Next.js Development',
    metaTitle: 'Next.js Development Agency in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Expert Next.js web development in Trivandrum. We build ultra-fast, SEO-optimised Next.js websites, web apps, and SaaS platforms for businesses in Kerala.',
    tagline: 'The fastest websites on the internet run on Next.js.',
    description: 'We are a Next.js development agency in Trivandrum specialising in high-performance web applications, marketing sites, and SaaS platforms. Next.js delivers the fastest load times, the best SEO, and the most scalable architecture available today.',
    keywords: ['Next.js development Trivandrum', 'Next.js agency Kerala', 'React development Kerala', 'Next.js web app development India', 'Next.js developer Trivandrum'],
    offerings: [
      { title: 'Next.js Marketing Websites', description: 'Blazing-fast business websites with 98+ PageSpeed, App Router, and built-in SEO metadata API.' },
      { title: 'Next.js Web Applications', description: 'Full-stack apps with API routes, server actions, authentication, and database integration.' },
      { title: 'Next.js SaaS Platforms', description: 'Multi-tenant SaaS with subscription billing, user management, dashboards, and analytics.' },
      { title: 'Next.js Ecommerce', description: 'Headless storefronts with Shopify or custom backends — outperform standard Shopify on every metric.' },
      { title: 'Next.js Migrations', description: 'Migrate from WordPress, Webflow, or legacy React apps to modern Next.js App Router.' },
      { title: 'Next.js API & Backend', description: 'REST and GraphQL APIs, serverless functions, and database integration with Prisma/Supabase.' },
    ],
    benefits: [
      'Next.js websites consistently score 95–100 on Google PageSpeed',
      'Server-side rendering for instant SEO indexing',
      'App Router with React Server Components for minimal JavaScript',
      'TypeScript by default — fewer bugs, better maintainability',
      'Deployed on Vercel or your preferred cloud provider',
      'Same tech stack powering Notion, TikTok, and thousands of SaaS products',
    ],
    faqs: [
      { q: 'Why choose Next.js over WordPress?', a: 'Next.js is 3–5x faster than WordPress, has better SEO output through server-side rendering, and scales effortlessly. It\'s ideal for businesses serious about performance and search rankings.' },
      { q: 'How much does Next.js development cost in India?', a: 'A Next.js marketing site starts at ₹40,000. Web applications start at ₹1,50,000. SaaS platforms start at ₹3,00,000 depending on features.' },
      { q: 'Do you deploy Next.js on Vercel?', a: 'Yes — Vercel is our preferred platform for Next.js deployments. We also deploy on AWS, Render, and Railway depending on client requirements.' },
    ],
    relatedSlugs: ['website-development', 'web-application-development', 'ai-chatbot-development', 'technical-seo'],
  },

  {
    slug: 'web-application-development',
    category: 'development',
    title: 'Web Application Development',
    metaTitle: 'Web Application Development Company in Trivandrum | Turquoic',
    metaDescription: 'Custom web application development in Trivandrum. We build portals, dashboards, booking systems, and SaaS platforms for businesses in Kerala and India.',
    tagline: 'Custom web apps that run your business — not slow it down.',
    description: 'We build custom web applications for businesses that have outgrown off-the-shelf software. From booking systems and client portals to full SaaS platforms — we architect, develop, and deploy software that fits your exact workflow.',
    keywords: ['web application development Trivandrum', 'custom software development Kerala', 'web app development company India', 'SaaS development Trivandrum', 'portal development Kerala'],
    offerings: [
      { title: 'Business Portals & Dashboards', description: 'Custom admin panels, reporting dashboards, and internal tools for operations teams.' },
      { title: 'Booking & Appointment Systems', description: 'Online booking platforms for clinics, salons, hotels, and service businesses.' },
      { title: 'CRM & ERP Systems', description: 'Custom customer management and enterprise resource planning software.' },
      { title: 'SaaS Product Development', description: 'Multi-tenant SaaS platforms with subscription billing, user roles, and analytics.' },
      { title: 'API Development & Integration', description: 'REST and GraphQL APIs, third-party integrations, and microservice architectures.' },
      { title: 'Legacy System Migration', description: 'Rebuild outdated desktop applications as modern, cloud-based web apps.' },
    ],
    benefits: [
      'Built on Next.js + Node.js/Python — proven enterprise-grade tech',
      'Detailed technical specification before development begins',
      'Agile sprints with weekly demos — you see progress every week',
      'Full source code ownership — no vendor lock-in',
      'Comprehensive testing: unit, integration, and user acceptance',
      'Post-launch support and performance monitoring included',
    ],
    faqs: [
      { q: 'How much does custom web application development cost in India?', a: 'A simple web app (booking system, portal) starts at ₹1,50,000. Mid-complexity applications (CRM, ERP) range from ₹3,00,000–₹10,00,000. SaaS platforms start at ₹5,00,000+.' },
      { q: 'How long does web application development take?', a: 'A basic app takes 4–8 weeks. Complex applications take 3–6 months. We provide a fixed timeline in the project proposal.' },
      { q: 'Do you sign NDAs for custom software projects?', a: 'Yes — we sign NDAs before discussing sensitive project details. All code and intellectual property is fully transferred to you on project completion.' },
    ],
    relatedSlugs: ['nextjs-development', 'ai-chatbot-development', 'crm-integration', 'website-development'],
  },

  {
    slug: 'mobile-app-development',
    category: 'development',
    title: 'Mobile App Development',
    metaTitle: 'Mobile App Development Company in Trivandrum, Kerala | Turquoic',
    metaDescription: 'iOS and Android app development in Trivandrum. We build React Native and Flutter mobile apps for businesses across Kerala and India.',
    tagline: 'Mobile apps your customers actually use.',
    description: 'We build cross-platform mobile applications for iOS and Android using React Native and Flutter. From customer-facing apps to internal business tools — fast development, clean UI, and seamless integration with your existing systems.',
    keywords: ['mobile app development Trivandrum', 'app development company Kerala', 'React Native development India', 'Flutter app development Kerala', 'iOS Android app development Trivandrum'],
    offerings: [
      { title: 'React Native Apps', description: 'Cross-platform iOS and Android apps from a single codebase — 90% cost saving vs native development.' },
      { title: 'Flutter Development', description: 'Beautiful, performant apps with Flutter for businesses needing pixel-perfect UI across platforms.' },
      { title: 'E-Commerce Mobile Apps', description: 'Shopping apps with product browsing, cart, payment, and order tracking for Indian customers.' },
      { title: 'Business Utility Apps', description: 'Field service apps, inventory management, and internal tools for operations teams.' },
      { title: 'App Backend Development', description: 'API development, push notifications, authentication, and cloud storage for mobile apps.' },
      { title: 'App Store Submission', description: 'Full App Store and Google Play submission including screenshots, descriptions, and compliance.' },
    ],
    benefits: [
      'Single codebase for iOS and Android — lower cost, faster delivery',
      'Offline-first architecture for low-connectivity use in Kerala',
      'Razorpay and UPI payment integration',
      'Push notifications for user retention',
      'Published to App Store and Google Play on your behalf',
      'Regular updates and feature additions available post-launch',
    ],
    faqs: [
      { q: 'How much does mobile app development cost in Kerala?', a: 'A basic cross-platform app starts at ₹2,00,000. Apps with backend, payments, and advanced features range from ₹4,00,000–₹12,00,000+.' },
      { q: 'How long does it take to build a mobile app?', a: 'A basic app takes 6–10 weeks. Complex apps take 3–6 months. We provide a fixed timeline after the discovery phase.' },
      { q: 'Do you use React Native or Flutter?', a: 'Both — we recommend React Native for apps sharing code with a web app, and Flutter for apps needing exceptional UI performance and animation.' },
    ],
    relatedSlugs: ['web-application-development', 'ui-ux-design', 'nextjs-development', 'crm-integration'],
  },

  {
    slug: 'landing-page-design',
    category: 'development',
    title: 'Landing Page Design',
    metaTitle: 'Landing Page Design & Development in Trivandrum, Kerala | Turquoic',
    metaDescription: 'High-converting landing pages for ads, product launches, and lead generation in Kerala. Fast delivery, A/B test ready, built for performance.',
    tagline: 'One page. One goal. Maximum conversions.',
    description: 'We design and build high-converting landing pages for Google Ads, Meta Ads, and organic traffic campaigns. Every element is built around a single conversion goal — leads, sales, or sign-ups — with fast load times and mobile-first design.',
    keywords: ['landing page design Trivandrum', 'conversion landing page Kerala', 'lead generation page design India', 'Google Ads landing page Kerala', 'high converting landing page design'],
    offerings: [
      { title: 'Lead Generation Pages', description: 'Pages designed to capture leads for services businesses, consultants, and B2B companies.' },
      { title: 'Product Launch Pages', description: 'Pre-launch and launch pages for new products with countdown timers, email capture, and social proof.' },
      { title: 'Google Ads Landing Pages', description: 'Quality Score optimised pages matching ad copy with fast load times and clear CTAs.' },
      { title: 'Meta Ads Landing Pages', description: 'Facebook and Instagram ad landing pages with pixel integration and conversion tracking.' },
      { title: 'Event Registration Pages', description: 'Webinar, workshop, and event sign-up pages with automatic confirmation emails.' },
      { title: 'A/B Testing Setup', description: 'Two landing page variants with analytics to find the higher-converting version.' },
    ],
    benefits: [
      'Delivered in 3–5 working days — fast enough for active campaigns',
      'Built for Core Web Vitals — fast pages get better Quality Scores and lower CPC',
      'Mobile-first — tested on real iOS and Android devices',
      'Conversion-focused design: single CTA, zero distractions',
      'Analytics and pixel integration included',
      'Unlimited revisions until you approve',
    ],
    faqs: [
      { q: 'How much does a landing page cost in Kerala?', a: 'A basic landing page costs ₹8,000–₹20,000. Pages with advanced features (countdown timers, A/B variants, video backgrounds) cost ₹20,000–₹40,000.' },
      { q: 'How fast can you deliver a landing page?', a: 'Standard delivery is 3–5 working days. Urgent 48-hour delivery is available for an additional charge.' },
      { q: 'Do you connect the landing page to WhatsApp or CRM?', a: 'Yes — we connect forms to WhatsApp, email, Google Sheets, or your CRM of choice so leads arrive instantly.' },
    ],
    relatedSlugs: ['website-development', 'google-ads-management', 'meta-ads-management', 'conversion-rate-optimisation'],
  },

  // ─────────────────────────────────────────
  // DESIGN
  // ─────────────────────────────────────────
  {
    slug: 'ui-ux-design',
    category: 'design',
    title: 'UI/UX Design',
    metaTitle: 'UI/UX Design Agency in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Professional UI/UX design services in Trivandrum. User research, wireframes, prototypes, and design systems for web and mobile apps in Kerala.',
    tagline: 'Design that works as beautifully as it looks.',
    description: 'We design digital products that are intuitive, beautiful, and built around how real users think. From wireframes to interactive prototypes, our UI/UX process ensures your product converts users before a single line of code is written.',
    keywords: ['UI UX design Trivandrum', 'UX design agency Kerala', 'web design company Trivandrum', 'app UI design Kerala', 'product design company India'],
    offerings: [
      { title: 'User Research & Discovery', description: 'User interviews, persona development, and journey mapping to understand your customers deeply.' },
      { title: 'Wireframing & Information Architecture', description: 'Low-fidelity wireframes that map user flows before visual design begins.' },
      { title: 'UI Design (High-Fidelity)', description: 'Pixel-perfect visual design in Figma with responsive layouts for all screen sizes.' },
      { title: 'Prototyping & User Testing', description: 'Interactive Figma prototypes for stakeholder sign-off and usability testing.' },
      { title: 'Design Systems', description: 'Reusable component libraries, colour palettes, typography scales, and spacing systems.' },
      { title: 'Design Handoff to Development', description: 'Dev-ready Figma files with spacing tokens, component specs, and animation guidelines.' },
    ],
    benefits: [
      'User research before design — not assumptions',
      'Figma-based workflow with full client access',
      'Responsive designs tested on iOS, Android, and desktop',
      'Accessibility compliance (WCAG 2.1 AA)',
      'Design system delivered alongside final screens',
      'Design and development under one roof — no translation loss',
    ],
    faqs: [
      { q: 'What is the difference between UI and UX design?', a: 'UX (User Experience) is how a product works — user flows, information architecture, and usability. UI (User Interface) is how it looks — colours, typography, and visual elements. Great digital products need both.' },
      { q: 'How much does UI/UX design cost in India?', a: 'A complete UI/UX project (research, wireframes, high-fidelity design) for a website costs ₹40,000–₹1,00,000. For mobile apps, ₹80,000–₹2,00,000.' },
    ],
    relatedSlugs: ['website-development', 'mobile-app-development', 'landing-page-design', 'logo-branding-design'],
  },

  {
    slug: 'logo-branding-design',
    category: 'design',
    title: 'Logo & Brand Identity Design',
    metaTitle: 'Logo & Brand Identity Design in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Professional logo and brand identity design in Trivandrum. We create complete brand identities for startups and businesses across Kerala and India.',
    tagline: 'Your brand is the first thing people judge. Make it count.',
    description: 'We design brand identities that communicate who you are before you say a word. Logo design, colour systems, typography, brand guidelines, and all collateral — delivered as a complete brand identity kit your team can use everywhere.',
    keywords: ['logo design Trivandrum', 'brand identity design Kerala', 'branding agency Trivandrum', 'logo designer Kerala', 'brand design company Trivandrum India'],
    offerings: [
      { title: 'Logo Design', description: 'Custom logo concepts with multiple variations — primary, secondary, icon, and wordmark versions.' },
      { title: 'Brand Identity System', description: 'Complete visual identity: colours, typography, photography style, and graphic elements.' },
      { title: 'Brand Guidelines Document', description: 'A comprehensive brand manual ensuring consistency across all touchpoints.' },
      { title: 'Business Stationery Design', description: 'Business cards, letterheads, envelopes, and presentation templates.' },
      { title: 'Social Media Brand Kit', description: 'Profile pictures, cover images, post templates, and story templates in your brand style.' },
      { title: 'Brand Refresh', description: 'Modernise an existing brand while retaining recognisability and equity.' },
    ],
    benefits: [
      '3 unique logo concepts delivered — not one and done',
      'Vector files in AI, EPS, SVG, PNG, and PDF',
      'Responsive logo variants for different sizes and backgrounds',
      'Brand guidelines in editable Figma + PDF format',
      '2 rounds of revisions included',
      'Turnaround: 5–10 business days',
    ],
    faqs: [
      { q: 'How much does logo design cost in Kerala?', a: 'A professional logo design with 3 concepts and 2 revision rounds costs ₹8,000–₹25,000. A full brand identity (logo + guidelines + stationery) costs ₹25,000–₹70,000.' },
      { q: 'Will I own the logo once it is designed?', a: 'Yes — full ownership and copyright transfer is included. You receive all source files and can use the logo however you wish.' },
    ],
    relatedSlugs: ['ui-ux-design', 'website-development', 'social-media-marketing', 'content-writing'],
  },

  // ─────────────────────────────────────────
  // MARKETING
  // ─────────────────────────────────────────
  {
    slug: 'seo-services',
    category: 'marketing',
    title: 'SEO Services',
    metaTitle: 'SEO Services in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Professional SEO services in Trivandrum. Rank higher on Google for your target keywords in Kerala and India. Technical SEO, content, and link building.',
    tagline: 'Rank higher. Get found. Grow organically.',
    description: 'We help businesses in Trivandrum and Kerala rank on the first page of Google for keywords their customers are actually searching. Technical SEO, content strategy, local SEO, and white-hat link building — a complete organic growth system.',
    keywords: ['SEO services Trivandrum', 'SEO company Kerala', 'search engine optimisation Trivandrum', 'local SEO Kerala', 'SEO agency Trivandrum India', 'best SEO company Trivandrum'],
    offerings: [
      { title: 'SEO Audit & Strategy', description: 'Complete technical and content audit of your site with a prioritised 6-month ranking roadmap.' },
      { title: 'On-Page SEO', description: 'Title tags, meta descriptions, heading structure, image optimisation, and internal linking.' },
      { title: 'Technical SEO', description: 'Core Web Vitals, crawlability, indexing, schema markup, and site architecture fixes.' },
      { title: 'Local SEO', description: 'Google Business Profile optimisation, local citations, and map pack ranking for Kerala searches.' },
      { title: 'Content SEO', description: 'Keyword research, content planning, and SEO article writing targeting your audience.' },
      { title: 'Link Building', description: 'White-hat backlinks from relevant Indian and Kerala-specific directories, blogs, and publications.' },
    ],
    benefits: [
      'Average 3x organic traffic growth for clients within 6 months',
      'Local SEO expertise — we know what Kerala businesses search for',
      'Monthly ranking reports with real data, no vanity metrics',
      'No black-hat tactics — your site will never face a Google penalty',
      'SEO built into every website we develop',
      'Keyword research in English and Malayalam',
    ],
    faqs: [
      { q: 'How long does SEO take to show results in Kerala?', a: 'Local keywords in Trivandrum typically show movement in 2–4 months. Competitive state-level keywords take 4–8 months. National keywords 6–12 months.' },
      { q: 'How much do SEO services cost in Trivandrum?', a: 'SEO retainers start at ₹15,000/month for local campaigns. Comprehensive campaigns covering multiple services and locations range from ₹30,000–₹80,000/month.' },
      { q: 'Is SEO better than Google Ads?', a: 'Both serve different purposes. SEO provides compounding organic traffic with no per-click cost. Google Ads provides immediate visibility. We recommend both for the fastest growth.' },
    ],
    relatedSlugs: ['local-seo', 'technical-seo', 'link-building', 'website-development'],
  },

  {
    slug: 'local-seo',
    category: 'marketing',
    title: 'Local SEO',
    metaTitle: 'Local SEO Services in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Get your business into Google\'s local map pack in Trivandrum and Kerala. Local SEO services covering Google Business Profile, citations, and local content.',
    tagline: 'Show up when customers search for you nearby.',
    description: 'Local SEO gets your business into the Google map pack — the 3 results that appear above organic search results for local queries. We optimise your Google Business Profile, build local citations, and create location-specific content that dominates local searches in Trivandrum and Kerala.',
    keywords: ['local SEO Trivandrum', 'local SEO Kerala', 'Google My Business optimisation Kerala', 'local search marketing Trivandrum', 'map pack ranking Kerala'],
    offerings: [
      { title: 'Google Business Profile Optimisation', description: 'Complete GBP setup and optimisation — categories, photos, posts, and Q&A.' },
      { title: 'Local Citation Building', description: 'Consistent NAP listings on Justdial, Sulekha, IndiaMART, and 50+ local directories.' },
      { title: 'Location Page Creation', description: 'SEO-optimised pages targeting "[service] in [city]" keywords for every area you serve.' },
      { title: 'Review Management', description: 'Strategy to generate more Google reviews and respond professionally to all reviews.' },
      { title: 'Local Schema Markup', description: 'LocalBusiness structured data for your address, phone, hours, and services.' },
      { title: 'Local Competitor Analysis', description: 'Identify why competitors rank above you and build a plan to overtake them.' },
    ],
    benefits: [
      'Google map pack ranking drives 4x more clicks than position 1 organic',
      'Kerala-specific directory and citation expertise',
      'Average 60% increase in Google Business Profile views within 90 days',
      'Reputation management for Google and Justdial reviews',
      'Malayalam + English keyword targeting',
      'Monthly local ranking report for target keywords',
    ],
    faqs: [
      { q: 'How do I rank in the Google map pack in Trivandrum?', a: 'The three main factors are: Google Business Profile completeness, the number and quality of your reviews, and consistent NAP citations across directories. We handle all three systematically.' },
      { q: 'How long does local SEO take in Kerala?', a: 'Most businesses see improvement in map pack rankings within 60–90 days. Full competitive positions typically take 3–5 months.' },
    ],
    relatedSlugs: ['seo-services', 'technical-seo', 'website-development', 'content-writing'],
  },

  {
    slug: 'technical-seo',
    category: 'marketing',
    title: 'Technical SEO',
    metaTitle: 'Technical SEO Services in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Technical SEO audits and fixes for websites in Kerala. Core Web Vitals, crawlability, schema markup, and site structure optimisation by Turquoic.',
    tagline: 'Fix the foundations. Let Google crawl and rank your site properly.',
    description: 'Technical SEO addresses the backend issues that prevent Google from properly crawling, indexing, and ranking your website. We audit, fix, and monitor the technical foundations that every high-ranking website is built on.',
    keywords: ['technical SEO Trivandrum', 'technical SEO audit Kerala', 'Core Web Vitals optimisation India', 'website speed SEO Kerala', 'crawl error fix Trivandrum'],
    offerings: [
      { title: 'Technical SEO Audit', description: 'Comprehensive crawl of your site identifying indexing errors, duplicate content, broken links, and performance issues.' },
      { title: 'Core Web Vitals Optimisation', description: 'Fix LCP, FID/INP, and CLS scores to meet Google\'s page experience standards.' },
      { title: 'Site Architecture & URL Structure', description: 'Flat site architecture, canonical tags, and clean URL structures for maximum crawl efficiency.' },
      { title: 'Schema Markup Implementation', description: 'Structured data for LocalBusiness, FAQ, Article, Product, and BreadcrumbList schemas.' },
      { title: 'XML Sitemap & Robots.txt', description: 'Accurate sitemaps and robots.txt configuration to guide Googlebot efficiently.' },
      { title: 'HTTPS & Security Fixes', description: 'SSL certificates, mixed content errors, and security headers that affect search rankings.' },
    ],
    benefits: [
      'Prioritised fix list by SEO impact — highest ROI items first',
      'Before/after performance benchmarks on every fix',
      'Core Web Vitals improvements directly improve ranking potential',
      'Schema markup generates rich results in Google (FAQs, stars, breadcrumbs)',
      'Compatibility with all major CMS platforms',
      'Google Search Console integration and monitoring',
    ],
    faqs: [
      { q: 'What is technical SEO and why does it matter?', a: 'Technical SEO ensures Google can find, crawl, and understand your website. Without it, even great content won\'t rank because Google can\'t properly index it.' },
      { q: 'How much does a technical SEO audit cost in India?', a: 'A technical SEO audit costs ₹10,000–₹30,000 depending on site size. Fixing the identified issues is quoted separately based on the scope.' },
    ],
    relatedSlugs: ['seo-services', 'local-seo', 'website-development', 'link-building'],
  },

  {
    slug: 'link-building',
    category: 'marketing',
    title: 'Link Building',
    metaTitle: 'Link Building Services in Trivandrum, Kerala | Turquoic',
    metaDescription: 'White-hat link building services for businesses in Kerala. Earn authoritative backlinks that improve your Google rankings and domain authority.',
    tagline: 'Earn the backlinks that move your rankings.',
    description: 'We build high-quality backlinks from relevant, authoritative websites using only white-hat tactics. No PBNs, no link farms, no spam — only genuine editorial links that Google rewards with higher rankings and that last for years.',
    keywords: ['link building services Kerala', 'backlink building India', 'white-hat link building Trivandrum', 'SEO link building agency Kerala', 'domain authority building India'],
    offerings: [
      { title: 'Guest Post Outreach', description: 'Editorial placements on relevant Indian and international blogs in your industry.' },
      { title: 'Business Directory Links', description: 'High-authority directory listings on Justdial, IndiaMART, and industry-specific platforms.' },
      { title: 'Broken Link Building', description: 'Find broken links on relevant sites and replace them with links to your content.' },
      { title: 'Resource Link Building', description: 'Create linkable assets (guides, tools, research) and earn natural editorial links.' },
      { title: 'Digital PR', description: 'Get featured in Kerala and India media publications for high-authority .in and news site links.' },
      { title: 'Competitor Link Analysis', description: 'Identify where competitors get their best links and build a strategy to acquire the same.' },
    ],
    benefits: [
      '100% white-hat — Google penalty proof',
      'Monthly link report with domain authority, anchor text, and traffic data',
      'Kerala + India network for local authority building',
      'Minimum DA 30+ sites — no low-quality links',
      'Permanent links — not rented placements',
      'Content creation for link-worthy assets included',
    ],
    faqs: [
      { q: 'How many backlinks do I need to rank in Kerala?', a: 'Quality matters more than quantity. 10 links from DA 40+ Kerala-relevant sites will outrank 100 links from irrelevant low-authority sites. We focus on quality first.' },
      { q: 'How much does link building cost in India?', a: 'Link building starts at ₹15,000/month for 5–8 quality links. Aggressive campaigns with 15–25 links/month start at ₹40,000/month.' },
    ],
    relatedSlugs: ['seo-services', 'technical-seo', 'content-writing', 'local-seo'],
  },

  {
    slug: 'digital-marketing',
    category: 'marketing',
    title: 'Digital Marketing',
    metaTitle: 'Digital Marketing Agency in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Full-service digital marketing agency in Trivandrum. SEO, Google Ads, Meta Ads, social media, and email marketing for businesses in Kerala.',
    tagline: 'Every channel. One strategy. Real results.',
    description: 'We are a full-service digital marketing agency in Trivandrum running integrated campaigns across search, social, email, and content. Every campaign is data-driven, tracked to conversions, and optimised monthly to maximise your return on ad spend.',
    keywords: ['digital marketing agency Trivandrum', 'digital marketing company Kerala', 'online marketing Trivandrum', 'internet marketing Kerala', 'digital marketing services India'],
    offerings: [
      { title: 'Search Engine Marketing (SEM)', description: 'Google Ads, Shopping ads, and Display campaigns managed for maximum ROAS.' },
      { title: 'Social Media Marketing', description: 'Meta, Instagram, and LinkedIn campaigns with creative, targeting, and optimisation.' },
      { title: 'Search Engine Optimisation', description: 'Organic rankings through technical SEO, content, and link building.' },
      { title: 'Email Marketing', description: 'Drip campaigns, newsletters, and automation flows that convert subscribers into customers.' },
      { title: 'Content Marketing', description: 'Blog articles, social content, and lead magnets that attract and convert your audience.' },
      { title: 'Analytics & Reporting', description: 'Monthly performance dashboards tracking every rupee and every conversion.' },
    ],
    benefits: [
      'Integrated strategy — all channels working together, not in silos',
      'Dedicated account manager based in Trivandrum',
      'Weekly performance updates, monthly strategy reviews',
      '₹40Cr+ ad spend managed across client accounts',
      'Average 3x return on ad spend within 90 days',
      'Full transparency — you own all ad accounts and data',
    ],
    faqs: [
      { q: 'How much does digital marketing cost in Kerala?', a: 'Digital marketing retainers start at ₹25,000/month covering SEO + social. Full-service campaigns (SEO + Ads + Email) range from ₹50,000–₹2,00,000/month.' },
      { q: 'How soon will I see results from digital marketing?', a: 'Paid ads (Google, Meta) deliver results within 2–4 weeks. SEO takes 3–6 months. Email marketing shows results within 30 days of launch.' },
    ],
    relatedSlugs: ['seo-services', 'google-ads-management', 'meta-ads-management', 'social-media-marketing'],
  },

  {
    slug: 'google-ads-management',
    category: 'marketing',
    title: 'Google Ads Management',
    metaTitle: 'Google Ads Management Agency in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Professional Google Ads management in Trivandrum. We run Search, Shopping, and Display campaigns that deliver qualified leads and sales for Kerala businesses.',
    tagline: 'Appear at the top of Google. Pay only when they click.',
    description: 'We manage Google Ads campaigns for businesses in Trivandrum and Kerala — from Search and Shopping to Display and YouTube. Every campaign is built around your cost-per-lead target, not vanity metrics like impressions.',
    keywords: ['Google Ads management Trivandrum', 'Google Ads agency Kerala', 'PPC management Kerala', 'Google Ads company Trivandrum', 'search ads India'],
    offerings: [
      { title: 'Google Search Ads', description: 'Keyword-targeted ads appearing when customers search for your services in Kerala and India.' },
      { title: 'Google Shopping Ads', description: 'Product listing ads for ecommerce brands targeting buyers with high purchase intent.' },
      { title: 'Google Display Ads', description: 'Visual banner ads on millions of websites for brand awareness and remarketing campaigns.' },
      { title: 'YouTube Ads', description: 'Skippable and non-skippable video ads targeting audiences by interest, age, and location in Kerala.' },
      { title: 'Remarketing Campaigns', description: 'Re-engage visitors who left your site without converting with targeted follow-up ads.' },
      { title: 'Google Ads Audits', description: 'Audit existing campaigns for wasted spend, poor Quality Scores, and missed opportunities.' },
    ],
    benefits: [
      'Average Quality Score 7–9/10 — lower CPC than most competitors',
      'Conversion tracking for calls, forms, and purchases',
      'Monthly account audits and bid strategy reviews',
      'Kerala + national targeting with granular location bid adjustments',
      'Ad copy A/B testing every month',
      'No agency markup on ad spend — full transparency',
    ],
    faqs: [
      { q: 'How much does Google Ads cost in Kerala?', a: 'Our management fee starts at ₹10,000/month. Ad spend budget is separate — we recommend a minimum of ₹15,000/month to see meaningful data. Total starting investment: ₹25,000/month.' },
      { q: 'How quickly do Google Ads show results?', a: 'You can see traffic from day one. Optimal performance typically emerges after 2–4 weeks of data-driven optimisation.' },
    ],
    relatedSlugs: ['meta-ads-management', 'landing-page-design', 'seo-services', 'conversion-rate-optimisation'],
  },

  {
    slug: 'meta-ads-management',
    category: 'marketing',
    title: 'Meta Ads Management',
    metaTitle: 'Meta Ads Management Agency in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Expert Facebook and Instagram ads management in Trivandrum. We run Meta Ads campaigns that generate leads and sales for businesses across Kerala and India.',
    tagline: 'Facebook and Instagram ads that convert — not just get seen.',
    description: 'We run Meta Ads (Facebook and Instagram) campaigns for businesses and D2C brands in Kerala and India. From audience research and creative to campaign management and ROAS optimisation — everything under one roof.',
    keywords: ['Meta Ads agency Trivandrum', 'Facebook Ads Kerala', 'Instagram Ads management Trivandrum', 'social media advertising Kerala', 'Meta Ads management India'],
    offerings: [
      { title: 'Facebook Lead Generation Ads', description: 'Instant Form and landing page campaigns that fill your pipeline with qualified local leads.' },
      { title: 'Instagram Shopping Ads', description: 'Product-tagged Instagram posts and stories driving sales directly from the feed.' },
      { title: 'Awareness & Reach Campaigns', description: 'Brand awareness campaigns targeting specific demographics in Trivandrum and Kerala.' },
      { title: 'Retargeting Campaigns', description: 'Re-engage website visitors and video viewers with personalised ad sequences.' },
      { title: 'Creative & Ad Copy', description: 'Scroll-stopping visuals and ad copy written to resonate with Kerala audiences.' },
      { title: 'Pixel & Conversion API Setup', description: 'Accurate conversion tracking through Meta Pixel and server-side Conversion API.' },
    ],
    benefits: [
      'Average 2.8x ROAS for D2C brands within 90 days',
      'Audience research tailored to Kerala consumer behaviour',
      'Weekly creative refresh to combat ad fatigue',
      'Full funnel campaigns: awareness → consideration → conversion',
      'WhatsApp integration for direct lead follow-up',
      'Transparent reporting — you see every metric, every week',
    ],
    faqs: [
      { q: 'How much should I spend on Facebook Ads in India?', a: 'We recommend a minimum of ₹15,000/month in ad spend to gather enough data for optimisation. Our management fee starts at ₹10,000/month.' },
      { q: 'Do Meta Ads work for local businesses in Trivandrum?', a: 'Yes — Meta\'s location targeting is precise enough to target specific pin codes within Trivandrum, making it highly effective for local service businesses.' },
    ],
    relatedSlugs: ['google-ads-management', 'social-media-marketing', 'landing-page-design', 'digital-marketing'],
  },

  {
    slug: 'social-media-marketing',
    category: 'marketing',
    title: 'Social Media Marketing',
    metaTitle: 'Social Media Marketing Agency in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Social media marketing services in Trivandrum. Instagram, Facebook, LinkedIn, and YouTube content management for businesses in Kerala.',
    tagline: 'Build an audience that trusts you before they buy from you.',
    description: 'We manage social media profiles for businesses in Trivandrum and Kerala — creating content, growing audiences, and turning followers into customers. Consistent posting, community management, and data-driven optimisation every month.',
    keywords: ['social media marketing Trivandrum', 'social media management Kerala', 'Instagram marketing Trivandrum', 'Facebook marketing Kerala', 'social media agency Trivandrum'],
    offerings: [
      { title: 'Instagram Marketing', description: 'Feed posts, Reels, Stories, and highlights built around your brand voice and local audience.' },
      { title: 'Facebook Page Management', description: 'Regular posts, cover photos, event promotions, and community engagement.' },
      { title: 'LinkedIn Marketing', description: 'Thought leadership content, company page management, and B2B lead generation.' },
      { title: 'YouTube Management', description: 'Video strategy, upload scheduling, SEO-optimised descriptions, and thumbnail design.' },
      { title: 'Social Media Content Creation', description: 'Graphics, short videos, and copywriting in your brand style, in English and Malayalam.' },
      { title: 'Community Management', description: 'Responding to comments, DMs, and reviews to build trust and keep followers engaged.' },
    ],
    benefits: [
      '20–30 posts per month across platforms',
      'Content calendar shared 2 weeks in advance for approval',
      'Reels and short video production included in growth plans',
      'Monthly analytics report: reach, engagement, follower growth',
      'Malayalam content option for Kerala-specific audiences',
      'Competitor benchmarking every quarter',
    ],
    faqs: [
      { q: 'How much does social media management cost in Kerala?', a: 'Basic plans start at ₹8,000/month for 12 posts on 2 platforms. Full management (30 posts, 4 platforms, Reels) starts at ₹20,000/month.' },
      { q: 'Do you create content in Malayalam?', a: 'Yes — we offer bilingual content in English and Malayalam for businesses targeting Kerala audiences.' },
    ],
    relatedSlugs: ['meta-ads-management', 'content-writing', 'digital-marketing', 'logo-branding-design'],
  },

  {
    slug: 'email-marketing',
    category: 'marketing',
    title: 'Email Marketing',
    metaTitle: 'Email Marketing Services in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Professional email marketing services in Kerala. Drip campaigns, newsletters, and automation for businesses looking to retain customers and drive repeat sales.',
    tagline: 'The highest ROI marketing channel. Are you using it?',
    description: 'Email marketing delivers ₹42 for every ₹1 spent — the highest ROI of any marketing channel. We build automated email flows, newsletters, and drip campaigns that nurture leads, retain customers, and drive repeat purchases for businesses in Kerala.',
    keywords: ['email marketing services Kerala', 'email marketing Trivandrum', 'email automation India', 'newsletter management Kerala', 'drip campaign agency India'],
    offerings: [
      { title: 'Email Strategy & Setup', description: 'Platform setup (Mailchimp, Klaviyo, or similar), list segmentation, and campaign calendar.' },
      { title: 'Welcome & Nurture Sequences', description: 'Automated email flows that warm up new subscribers and guide them to a first purchase.' },
      { title: 'Newsletter Management', description: 'Weekly or monthly newsletters with curated content, offers, and brand updates.' },
      { title: 'Abandoned Cart Recovery', description: 'Automated emails recovering abandoned carts for ecommerce stores.' },
      { title: 'Promotional Campaigns', description: 'Festival, sale, and launch campaigns optimised for open rates and conversions.' },
      { title: 'Email List Growth', description: 'Lead magnet creation and opt-in form placement to grow your subscriber list.' },
    ],
    benefits: [
      'Average 25–40% open rates for our clients — above industry average',
      'Segmented lists for personalised messaging',
      'A/B testing on subject lines and send times',
      'GDPR and CAN-SPAM compliant campaigns',
      'Monthly analytics: open rate, click rate, revenue per email',
      'Integration with your CRM, Shopify, or WooCommerce',
    ],
    faqs: [
      { q: 'Which email marketing platform should I use in India?', a: 'Mailchimp is best for beginners. Klaviyo is best for ecommerce. For advanced automation, we recommend ActiveCampaign or Brevo. We work with all platforms.' },
      { q: 'How often should I send emails to my list in Kerala?', a: 'For B2C: 1–2 emails per week. For B2B: 1 email per week. Consistency matters more than frequency.' },
    ],
    relatedSlugs: ['digital-marketing', 'content-writing', 'conversion-rate-optimisation', 'social-media-marketing'],
  },

  {
    slug: 'content-writing',
    category: 'marketing',
    title: 'Content Writing',
    metaTitle: 'Content Writing Services in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Professional SEO content writing in Trivandrum. Blog articles, website copy, and marketing content for businesses in Kerala and India.',
    tagline: 'Words that rank, convert, and build trust.',
    description: 'We create SEO-optimised content for websites, blogs, and marketing campaigns. Every piece is keyword-researched, well-structured, and written to rank on Google while genuinely helping your readers — the approach that works long-term.',
    keywords: ['content writing services Kerala', 'SEO content writing Trivandrum', 'blog writing services India', 'website copywriting Kerala', 'content marketing agency Trivandrum'],
    offerings: [
      { title: 'SEO Blog Articles', description: 'Long-form articles targeting specific keywords — researched, structured, and written to rank.' },
      { title: 'Website Copywriting', description: 'Homepage, service pages, and about pages written to convert visitors into enquiries.' },
      { title: 'Product Descriptions', description: 'Ecommerce product descriptions optimised for search and written to sell.' },
      { title: 'Social Media Copy', description: 'Captions, ad copy, and LinkedIn posts tailored for Kerala audiences.' },
      { title: 'Email Copy', description: 'Subject lines, body copy, and CTAs for newsletters and automated sequences.' },
      { title: 'Press Releases', description: 'Professional press releases for product launches, events, and company news in Kerala.' },
    ],
    benefits: [
      'Every article keyword-researched using Google Search Console + Ahrefs data',
      'Indian English with Kerala cultural context when appropriate',
      'Fact-checked and plagiarism-free — Copyscape certified',
      '2 revision rounds included per piece',
      'SEO meta title and description included with every article',
      'Delivery within 3–5 business days per article',
    ],
    faqs: [
      { q: 'How much does SEO content writing cost in India?', a: 'A 1,000-word SEO article costs ₹2,000–₹5,000 depending on research depth and topic complexity. Monthly content packages (4–8 articles) start at ₹12,000/month.' },
      { q: 'Do you write content in Malayalam?', a: 'We primarily write in English. For Malayalam content, we work with native-speaking collaborators and can accommodate requests.' },
    ],
    relatedSlugs: ['seo-services', 'social-media-marketing', 'email-marketing', 'local-seo'],
  },

  {
    slug: 'whatsapp-marketing',
    category: 'marketing',
    title: 'WhatsApp Marketing',
    metaTitle: 'WhatsApp Marketing Services in Trivandrum, Kerala | Turquoic',
    metaDescription: 'WhatsApp Business API marketing for Kerala businesses. Broadcast campaigns, automated chatbots, and customer support via WhatsApp.',
    tagline: '98% open rate. The most powerful channel in India.',
    description: 'WhatsApp has a 98% open rate in India — higher than email, SMS, and social media combined. We set up WhatsApp Business API, build automated chatbots, and run broadcast campaigns that reach your customers where they actually are.',
    keywords: ['WhatsApp marketing Kerala', 'WhatsApp Business API Trivandrum', 'WhatsApp chatbot India', 'WhatsApp broadcast marketing Kerala', 'WhatsApp automation business India'],
    offerings: [
      { title: 'WhatsApp Business API Setup', description: 'Official WhatsApp Business API integration for businesses sending high volumes of messages.' },
      { title: 'Broadcast Campaigns', description: 'Targeted WhatsApp broadcasts for offers, product launches, and event announcements.' },
      { title: 'WhatsApp Chatbot', description: 'Automated response bots for FAQs, lead qualification, and appointment booking.' },
      { title: 'WhatsApp Drip Campaigns', description: 'Multi-step automated sequences that nurture leads after they first contact you.' },
      { title: 'Catalogue Setup', description: 'WhatsApp product catalogue setup for businesses selling products directly on WhatsApp.' },
      { title: 'CRM Integration', description: 'Connect WhatsApp with your CRM so every conversation is tracked and followed up.' },
    ],
    benefits: [
      '98% message open rate — 5x higher than email',
      'Kerala customers prefer WhatsApp over all other channels',
      'Official API compliance — no account bans',
      'Multimedia messages: images, PDFs, videos, and voice notes',
      'Integration with your website forms for instant lead alerts',
      'Suitable for any business with a customer base in India',
    ],
    faqs: [
      { q: 'Is WhatsApp marketing legal in India?', a: 'Yes — through the official WhatsApp Business API with proper opt-in consent. We never use unofficial bulk-send tools that violate WhatsApp\'s terms of service.' },
      { q: 'How much does WhatsApp marketing cost in Kerala?', a: 'Setup starts at ₹15,000. Monthly management costs ₹8,000–₹25,000 depending on message volume and automation complexity.' },
    ],
    relatedSlugs: ['digital-marketing', 'email-marketing', 'social-media-marketing', 'crm-integration'],
  },

  {
    slug: 'conversion-rate-optimisation',
    category: 'marketing',
    title: 'Conversion Rate Optimisation',
    metaTitle: 'Conversion Rate Optimisation Services in Kerala | Turquoic',
    metaDescription: 'CRO services for websites in Kerala. We analyse user behaviour and run A/B tests to convert more of your existing traffic into leads and sales.',
    tagline: 'More conversions from the traffic you already have.',
    description: 'Conversion Rate Optimisation (CRO) increases the percentage of your website visitors who take action — enquire, purchase, or sign up. We use heatmaps, session recordings, and A/B testing to systematically improve your conversion rate without increasing ad spend.',
    keywords: ['conversion rate optimisation Kerala', 'CRO services Trivandrum', 'A/B testing India', 'website conversion optimisation Kerala', 'landing page CRO India'],
    offerings: [
      { title: 'CRO Audit', description: 'Heatmap analysis, session recordings, and funnel analysis to identify conversion barriers.' },
      { title: 'A/B Testing', description: 'Controlled experiments testing headlines, CTAs, layouts, and offers on your key pages.' },
      { title: 'Landing Page Optimisation', description: 'Systematic improvements to your highest-traffic pages for more leads and sales.' },
      { title: 'Checkout Optimisation', description: 'Reduce cart abandonment with friction-free checkout flows for ecommerce stores.' },
      { title: 'Form Optimisation', description: 'Simplify lead forms to reduce drop-off and increase submission rates.' },
      { title: 'Conversion Tracking Setup', description: 'Proper goal tracking in Google Analytics 4 so you know exactly what\'s converting.' },
    ],
    benefits: [
      'Average 40% conversion rate improvement for clients in 90 days',
      'Tools: Hotjar, Microsoft Clarity, and Google Optimize',
      'Data-driven decisions — no guessing, no opinions',
      'Works alongside your existing traffic — no additional ad spend needed',
      'Monthly CRO report with test results and next hypotheses',
      'Particularly effective for ecommerce and lead generation sites',
    ],
    faqs: [
      { q: 'What is a good conversion rate for a website in India?', a: 'Average website conversion rate in India is 1–2%. A well-optimised site converts 3–5%. Ecommerce averages 1–3%. Our clients typically see 2–4x improvements.' },
      { q: 'How much does CRO cost?', a: 'CRO retainers start at ₹15,000/month covering monthly audits and A/B testing. One-time audits with a fix roadmap cost ₹20,000–₹50,000.' },
    ],
    relatedSlugs: ['landing-page-design', 'google-ads-management', 'ecommerce-development', 'ui-ux-design'],
  },

  {
    slug: 'video-production',
    category: 'marketing',
    title: 'Video Production',
    metaTitle: 'Video Production Services in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Professional video production in Trivandrum. Brand videos, social media Reels, explainer videos, and product videos for businesses in Kerala.',
    tagline: 'Video is the highest-attention content in every feed.',
    description: 'We produce brand videos, product demos, explainer animations, and social media content for businesses in Trivandrum and Kerala. From scripting to final edit — video that communicates your message clearly and keeps viewers watching.',
    keywords: ['video production Trivandrum', 'video marketing Kerala', 'brand video company Trivandrum', 'social media video production Kerala', 'explainer video India'],
    offerings: [
      { title: 'Brand Videos', description: '60–90 second brand story videos for websites, presentations, and social media.' },
      { title: 'Social Media Reels & Shorts', description: 'Vertical short-form video for Instagram Reels, YouTube Shorts, and Facebook.' },
      { title: 'Product Videos', description: 'Demonstration and showcase videos for ecommerce product pages and ads.' },
      { title: 'Explainer Animations', description: 'Motion graphics and 2D animated videos explaining complex services or products.' },
      { title: 'Testimonial Videos', description: 'Client testimonial recordings edited for maximum credibility and shareability.' },
      { title: 'Corporate Videos', description: 'Office tours, team introductions, and event coverage for corporate communications.' },
    ],
    benefits: [
      'In-house production team based in Trivandrum',
      'Script, storyboard, shoot, and edit — fully managed',
      'Subtitles included for all social media formats',
      'Delivered in all required formats: MP4, MOV, vertical, horizontal',
      'YouTube SEO metadata included for all long-form videos',
      'Turnaround: 7–14 business days from shoot',
    ],
    faqs: [
      { q: 'How much does a brand video cost in Kerala?', a: 'A 60-second brand video with scripting, shoot, and edit costs ₹25,000–₹75,000 depending on production complexity. Social media Reels start at ₹5,000 per video.' },
    ],
    relatedSlugs: ['social-media-marketing', 'content-writing', 'logo-branding-design', 'digital-marketing'],
  },

  // ─────────────────────────────────────────
  // AI
  // ─────────────────────────────────────────
  {
    slug: 'ai-chatbot-development',
    category: 'ai',
    title: 'AI Chatbot Development',
    metaTitle: 'AI Chatbot Development in Trivandrum, Kerala | Turquoic',
    metaDescription: 'Custom AI chatbots for websites and WhatsApp in Kerala. We build intelligent chatbots that handle customer queries, qualify leads, and book appointments 24/7.',
    tagline: 'Your best salesperson — working 24/7, never off sick.',
    description: 'We build custom AI chatbots powered by GPT-4 and Claude that handle customer support, lead qualification, and appointment booking for businesses in Kerala. Deploy on your website, WhatsApp, or both — and never miss a customer enquiry again.',
    keywords: ['AI chatbot development Trivandrum', 'chatbot development Kerala', 'WhatsApp chatbot India', 'customer service chatbot Kerala', 'AI assistant website India'],
    offerings: [
      { title: 'Website AI Chat Widget', description: 'Embedded chat widget that answers customer questions, captures leads, and books appointments.' },
      { title: 'WhatsApp AI Chatbot', description: 'Intelligent WhatsApp bot handling FAQs, product queries, and order status 24/7.' },
      { title: 'Lead Qualification Bot', description: 'Multi-step chatbot that scores and qualifies leads before passing them to your sales team.' },
      { title: 'Customer Support Automation', description: 'AI that resolves 70%+ of support tickets without human intervention.' },
      { title: 'Appointment Booking Bot', description: 'Conversational booking system integrated with your calendar and notification system.' },
      { title: 'Custom AI Training', description: 'Train the chatbot on your products, services, pricing, and FAQs for accurate responses.' },
    ],
    benefits: [
      'Responds instantly — no waiting for business hours',
      'Handles WhatsApp, website chat, and Instagram DMs from one system',
      'Trained on your exact business knowledge base',
      'Escalates to human agents when needed — no frustrating dead-ends',
      'Reduces customer support costs by 60–70%',
      'Analytics dashboard showing conversations, resolution rate, and lead volume',
    ],
    faqs: [
      { q: 'How much does a chatbot cost in India?', a: 'A basic FAQ chatbot starts at ₹25,000. A lead qualification bot with WhatsApp integration costs ₹50,000–₹1,00,000. Custom AI trained on your data starts at ₹1,50,000.' },
      { q: 'Can the chatbot speak Malayalam?', a: 'Yes — GPT-4 and Claude handle Malayalam conversations well. We can configure the chatbot to respond in the language the customer uses.' },
    ],
    relatedSlugs: ['web-application-development', 'whatsapp-marketing', 'crm-integration', 'website-development'],
  },

  {
    slug: 'crm-integration',
    category: 'ai',
    title: 'CRM Integration & Automation',
    metaTitle: 'CRM Integration Services in Trivandrum, Kerala | Turquoic',
    metaDescription: 'CRM setup and integration for businesses in Kerala. HubSpot, Zoho, and custom CRM development. Connect your website, ads, and WhatsApp into one system.',
    tagline: 'Every lead tracked. Every follow-up automated.',
    description: 'We set up and integrate CRM systems that centralise your leads, automate follow-ups, and give your sales team one view of every customer. From HubSpot and Zoho to custom-built CRMs, we connect your website, ads, WhatsApp, and email into one seamless system.',
    keywords: ['CRM integration Kerala', 'HubSpot setup Trivandrum', 'Zoho CRM India', 'CRM development Kerala', 'sales automation Trivandrum'],
    offerings: [
      { title: 'HubSpot Setup & Customisation', description: 'Full HubSpot CRM implementation with pipelines, properties, and automation workflows.' },
      { title: 'Zoho CRM Integration', description: 'Zoho setup tailored to Indian business workflows with Razorpay and WhatsApp integration.' },
      { title: 'Custom CRM Development', description: 'Bespoke CRM built on your exact sales process when off-the-shelf tools don\'t fit.' },
      { title: 'Lead Pipeline Automation', description: 'Automatic lead capture from ads, website, and WhatsApp → CRM → follow-up sequences.' },
      { title: 'Sales Reporting Dashboards', description: 'Real-time dashboards showing pipeline value, conversion rates, and revenue forecasts.' },
      { title: 'CRM Training', description: 'Full team training so your sales staff actually use the system from day one.' },
    ],
    benefits: [
      'Average 35% improvement in lead response time after CRM implementation',
      'Connects Google Ads, Meta Ads, website, and WhatsApp into one system',
      'Automated follow-up sequences so no lead falls through the cracks',
      'Indian-market expertise: Razorpay, Tally, and GST integration',
      'Migration from spreadsheets or legacy systems included',
      'Ongoing support for workflow changes as your business grows',
    ],
    faqs: [
      { q: 'Which CRM is best for Indian businesses?', a: 'Zoho CRM is built in India and has excellent support for Indian business workflows, GST, and regional languages. HubSpot is better for English-first B2B companies. We recommend based on your team size and complexity.' },
      { q: 'How much does CRM setup cost in India?', a: 'HubSpot or Zoho setup starts at ₹30,000. Custom CRM development starts at ₹2,00,000.' },
    ],
    relatedSlugs: ['ai-chatbot-development', 'digital-marketing', 'whatsapp-marketing', 'web-application-development'],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return ALL_SERVICES.find(s => s.slug === slug)
}

export function getServicesByCategory(category: ServiceCategory): ServiceData[] {
  return ALL_SERVICES.filter(s => s.category === category)
}

export function getAllServiceSlugs(): string[] {
  return ALL_SERVICES.map(s => s.slug)
}
