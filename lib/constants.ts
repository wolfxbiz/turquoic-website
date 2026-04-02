// ── lib/constants.ts ──
import type {
  NavLink,
  Service,
  Industry,
  ProcessStep,
  Stat,
  Testimonial,
  CapabilityHighlight,
  TeamMember,
} from './types'

export const SITE_NAME = 'Turquoic'

export const TAGLINE = 'Work Smarter. Grow Faster. Live Better.'

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const SERVICES: Service[] = [
  {
    id: 'ai-automation',
    icon: 'Zap',
    title: 'AI & Automation',
    description:
      'Replace repetitive work with intelligent systems that run 24/7. We build custom AI workflows that handle your operations so your team can focus on what matters.',
    wide: true,
  },
  {
    id: 'lead-generation',
    icon: 'Target',
    title: 'Lead Generation Systems',
    description:
      'AI-powered pipelines that fill your calendar without manual outreach. Qualified leads, automated follow-ups, and seamless CRM integration.',
    wide: false,
  },
  {
    id: 'custom-it',
    icon: 'Code2',
    title: 'Custom IT Solutions',
    description:
      'Built around your business. Not a template. Not a shortcut. We architect, develop and deploy technology that fits your exact workflow.',
    wide: false,
  },
  {
    id: 'revenue-growth',
    icon: 'TrendingUp',
    title: 'Revenue Growth Systems',
    description:
      'Convert more leads, close more deals, grow faster — systematically. Our data-driven revenue engines create compounding growth month after month.',
    wide: true,
  },
]

export const INDUSTRIES: Industry[] = [
  {
    id: 'finance',
    name: 'Finance & Accounting',
    description:
      'We help finance and accounting firms automate compliance-heavy workflows, accelerate client onboarding, and deliver real-time reporting — all without increasing headcount.',
    bulletPoints: [
      'Automated reconciliation and reporting pipelines',
      'AI-assisted compliance monitoring and alerts',
      'Client onboarding automation with document processing',
      'Intelligent bookkeeping and invoice management',
      'Custom financial dashboards with live data feeds',
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description:
      'From lead capture to contract signing, we build the digital infrastructure that modern real estate professionals need to close deals faster and scale their portfolio.',
    bulletPoints: [
      'AI-powered lead qualification and nurturing',
      'Automated property listing syndication',
      'CRM integration with smart follow-up sequences',
      'Virtual tour and appointment scheduling systems',
      'Revenue tracking and deal pipeline analytics',
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    description:
      'We power e-commerce growth with smart automation that handles everything from customer acquisition to fulfilment, so you can focus on building your brand.',
    bulletPoints: [
      'AI product recommendation and upsell engines',
      'Automated inventory and order management',
      'Customer support chatbots and ticketing systems',
      'Personalised email and SMS marketing automation',
      'Return, refund and logistics workflow automation',
    ],
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    description:
      'Law firms, consultancies, agencies and advisory businesses trust us to eliminate administrative drag and create client experiences that drive retention and referrals.',
    bulletPoints: [
      'Intelligent proposal and contract generation',
      'Automated scheduling and client communication',
      'Project tracking and time billing automation',
      'Knowledge base and internal AI assistant',
      'Client portal development and integration',
    ],
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We start with a deep-dive session to understand your business, goals, bottlenecks, and the outcomes you actually care about.',
  },
  {
    step: '02',
    title: 'Diagnose',
    description:
      'We map your current workflows, identify high-value automation opportunities, and define exactly where AI will drive the biggest ROI.',
  },
  {
    step: '03',
    title: 'Design',
    description:
      'We architect a tailored solution — not a template. Every system is designed around your business logic and integrated with your existing tools.',
  },
  {
    step: '04',
    title: 'Deploy',
    description:
      'We build, test and launch your solution with full onboarding, documentation and training so your team is confident from day one.',
  },
  {
    step: '05',
    title: 'Optimise',
    description:
      'We monitor performance, gather data, and continuously refine your systems to ensure they compound in value over time.',
  },
]

export const STATS: Stat[] = [
  { value: 500, suffix: '+', label: 'Hours Saved Per Client' },
  { value: 3, suffix: 'x', label: 'Average Revenue Growth' },
  { value: 40, suffix: '%', label: 'Reduction in Operating Costs' },
  { value: 100, suffix: '%', label: 'Custom Built Solutions' },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Working with Turquoic felt like gaining an entire technology department overnight. They understood our bookstore business immediately and delivered exactly what we needed.',
    author: 'John Mundakayam',
    role: 'Director',
    company: 'Tott Books',
    logo: '/assets/logos/tott-books.png',
    avatar: '/images/team/john-mundakayam.jpg',
  },
  {
    quote:
      'As a CA firm, accuracy and efficiency are everything. Turquoic built systems that handle our compliance workflows seamlessly — it has completely elevated how we serve our clients.',
    author: 'Bibn Jose',
    role: 'CA FCA, Founder',
    company: 'Alya Auditors',
    logo: '/assets/logos/alya-auditors.png',
    avatar: '/images/team/bibin-jose.jpg',
  },
  {
    quote:
      'Our e-commerce operations scaled faster than we thought possible. The AI automation Turquoic built handles everything from inventory to customer support around the clock.',
    author: 'Vijay Ahilani',
    role: 'Managing Director',
    company: 'HyloMart',
    logo: '/assets/logos/hylomart.png',
    avatar: '/images/team/vijay-ahilani.jpg',
  },
  {
    quote:
      'Turquoic understood the unique demands of digital media. They built tools that let our editorial team focus on journalism while the systems handle the rest.',
    author: 'Shajan Scaria',
    role: 'Founder & Editor',
    company: 'Marunadan Malayalee',
    logo: '/assets/logos/marunadam-malayalee.png',
    avatar: '/images/team/shajan-scaria.jpg',
  },
]

export const MARQUEE_ITEMS: string[] = [
  'AI AUTOMATION',
  'LEAD GENERATION',
  'PROCESS AUTOMATION',
  'IT SOLUTIONS',
  'REVENUE GROWTH',
  'CAPABILITY BUILDING',
]

// To add a new team member: drop their image in
// public/images/team/ using the format:
// FirstName LastName - Job Title.png
// Then add their entry to this array.
// Skills and tagline are auto-derived from role if left empty.
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'cristus',
    name: 'Cristus Cleetus',
    role: 'Founder & CEO',
    image: '/images/team/Cristus Cleetus - Founder, CEO.png',
    initials: 'CC',
    tagline: 'Building the future of intelligent business.',
    skills: ['Leadership', 'AI Strategy', 'Vision'],
    social: { linkedin: '#', website: '#' },
  },
  {
    id: 'jiji',
    name: 'Jiji Jacob',
    role: 'Senior Design and Layout Manager',
    image: '/images/team/Jiji Jacob - Co-Founder.png',
    initials: 'JJ',
    tagline: 'Turning ideas into impact at scale.',
    skills: ['Design', 'Layout', 'Creative Direction'],
    social: { linkedin: '#', website: '#' },
  },
  {
    id: 'anju',
    name: 'Anju Sam',
    role: 'Finance Manager',
    image: '/images/team/Anju - Finance Manager.png',
    initials: 'A',
    tagline: 'Clarity is the real competitive edge.',
    skills: ['Finance', 'Strategy'],
    social: { linkedin: '#', website: '#' }, // TODO: add real social URLs
  },
  {
    id: 'athena',
    name: 'Athena',
    role: 'UI UX and Graphic Designer',
    image: '/images/team/Athena - UI UX and Graphic Designer.png',
    initials: 'AT',
    tagline: 'Where creativity meets conversion.',
    skills: ['UI/UX Design', 'Creative'],
    social: { linkedin: '#', website: '#' }, // TODO: add real social URLs
  },
  {
    id: 'gowri-krishna',
    name: 'Gowri Krishna',
    role: 'Social Media Manager',
    image: '/images/team/Gowri Krishna - Social Media Manager.png',
    initials: 'GK',
    tagline: 'Turning conversations into growth.',
    skills: ['Lead Gen', 'Revenue'],
    social: { linkedin: '#', website: '#' }, // TODO: add real social URLs
  },
  {
    id: 'paul-jp',
    name: 'Paul JP',
    role: 'Video Editor & Developer',
    image: '/images/team/Paul JP -Video Editor & Developer.png',
    initials: 'PJ',
    tagline: 'Where creativity meets conversion.',
    skills: ['UI/UX Design', 'Creative'],
    social: { linkedin: '#', website: '#' }, // TODO: add real social URLs
  },
  {
    id: 'thara',
    name: 'Thara',
    role: 'Content Research & Presenter',
    image: '/images/team/Thara - Content Research & Presenter.png',
    initials: 'T',
    tagline: 'Making businesses run smarter every day.',
    skills: ['AI Solutions', 'Innovation'],
    social: { linkedin: '#', website: '#' }, // TODO: add real social URLs
  },
  {
    id: 'vivek-sl',
    name: 'Vivek S L',
    role: 'Creative Design & Web Developer',
    image: '/images/team/Vivek S L - Creative Design & Developer.png',
    initials: 'VL',
    tagline: 'Building the systems that never sleep.',
    skills: ['Development', 'AI Integration'],
    social: { linkedin: '#', website: '#' }, // TODO: add real social URLs
  },
  {
    id: 'abhishek-vb',
    name: 'Abhishek VB',
    role: 'Video Editor & Presenter',
    image: '/images/team/Abhishek VB - Video Editor & Presenter.png',
    initials: 'AV',
    tagline: 'Crafting stories that captivate and convert.',
    skills: ['Video Editing', 'Presenting', 'Creative'],
    social: { linkedin: '#', website: '#' }, // TODO: add real social URLs
  },
  {
    id: 'jisha-mathew',
    name: 'Jisha Mathew Panjikaran',
    role: 'Web Developer',
    image: '/images/team/Jisha Mathew Panjikaran - Web Developer.png',
    initials: 'JM',
    tagline: 'Building web experiences that work.',
    skills: ['Web Development', 'Frontend', 'Creative'],
    social: { linkedin: '#', website: '#' }, // TODO: add real social URLs
  },
  {
    id: 'simi-sl',
    name: 'Simi S L',
    role: 'Web Developer',
    image: '/images/team/Simi S L - Web Developer.png',
    initials: 'SS',
    tagline: 'Turning designs into seamless digital experiences.',
    skills: ['Web Development', 'Frontend', 'Creative'],
    social: { linkedin: '#', website: '#' }, // TODO: add real social URLs
  },
  {
    id: 'malaika-nasir',
    name: 'Malaika Nasir',
    role: 'Developer',
    image: '/images/team/Malaika Nasir - Developer.png',
    initials: 'MN',
    tagline: 'Turning ideas into elegant solutions.',
    skills: ['Development', 'Frontend', 'Creative'],
    social: { linkedin: '#', website: '#' }, // TODO: add real social URLs
  },
  {
    id: 'bismitha',
    name: 'Bismitha',
    role: 'Developer',
    image: '/images/team/Bismitha - Developer.png',
    initials: 'BI',
    tagline: 'Building clean code that speaks for itself.',
    skills: ['Development', 'Frontend', 'Creative'],
    social: { linkedin: '#', website: '#' }, // TODO: add real social URLs
  },
]

export const CAPABILITY_SECTION = {
  label: '05 — CAPABILITY PROGRAMME',
  headlineWhite: ["We Don't Just Build", 'Smarter Businesses.'],
  headlineLime:  ['We Build the People', 'Who Will Run Them.'],
  body: 'Not a course. An apprenticeship built for the next generation of AI business practitioners.',
  primaryCTA:  'Apply for the Programme →',
  secondaryCTA: 'See How It Works',
  pills: ['Real Projects', 'Expert Mentors', 'Career Pathway'],
}

export const CAPABILITY_CARDS = [
  {
    id: 'real-projects',
    icon: 'Layers',
    title: 'Real Projects',
    description:
      'Participants work on live business problems alongside our team. Not simulated case studies. Every project builds a real portfolio piece.',
  },
  {
    id: 'expert-mentors',
    icon: 'Users',
    title: 'Expert Mentors',
    description:
      'Learn directly from practitioners building AI systems in production. Mentorship is hands-on, honest and deeply practical.',
  },
  {
    id: 'career-pathway',
    icon: 'Rocket',
    title: 'Career Pathway',
    description:
      'Graduates leave with skills, confidence and connections. Many receive referrals or direct placement within our client network.',
  },
]

export const CAPABILITY_HIGHLIGHTS: CapabilityHighlight[] = [
  {
    icon: 'Layers',
    title: 'Real Projects',
    description:
      'Participants work on live, real-world business problems — not simulated case studies. Every project builds a portfolio piece.',
  },
  {
    icon: 'Users',
    title: 'Expert Mentors',
    description:
      'Learn directly from practitioners building AI systems in production. Mentorship is hands-on, honest, and deeply practical.',
  },
  {
    icon: 'Rocket',
    title: 'Career Pathway',
    description:
      'Graduates leave with skills, confidence, and connections. Many receive referrals or direct placement within our client network.',
  },
]
