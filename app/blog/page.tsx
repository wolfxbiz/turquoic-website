import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import type { BlogPostMeta } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — Web Development, SEO & Digital Marketing Insights | Turquoic',
  description:
    'Practical guides on website development, SEO, ecommerce, and digital marketing for businesses in Trivandrum and Kerala. Written by the Turquoic team.',
  alternates: { canonical: 'https://www.turquoic.com/blog' },
  openGraph: {
    title: 'Blog — Web Development & SEO Insights | Turquoic Trivandrum',
    description: 'Practical guides on website development, SEO, ecommerce, and digital marketing for Kerala businesses.',
    url: 'https://www.turquoic.com/blog',
    siteName: 'Turquoic',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.turquoic.com/og-image.jpg', width: 1200, height: 630 }],
  },
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  'Website Development': { bg: 'bg-teal-500/15', text: 'text-teal-300', dot: 'bg-teal-400' },
  'SEO':                 { bg: 'bg-purple-500/15', text: 'text-purple-300', dot: 'bg-purple-400' },
  'Ecommerce':           { bg: 'bg-orange-500/15', text: 'text-orange-300', dot: 'bg-orange-400' },
  'Kerala':              { bg: 'bg-green-500/15', text: 'text-green-300', dot: 'bg-green-400' },
  'Trivandrum':          { bg: 'bg-blue-500/15', text: 'text-blue-300', dot: 'bg-blue-400' },
  'D2C':                 { bg: 'bg-pink-500/15', text: 'text-pink-300', dot: 'bg-pink-400' },
}

const LIGHT_COLORS: Record<string, string> = {
  'Website Development': 'bg-teal-50 text-teal-700 border-teal-100',
  'SEO':                 'bg-purple-50 text-purple-700 border-purple-100',
  'Ecommerce':           'bg-orange-50 text-orange-700 border-orange-100',
  'Kerala':              'bg-green-50 text-green-700 border-green-100',
  'Trivandrum':          'bg-blue-50 text-blue-700 border-blue-100',
  'pricing':             'bg-yellow-50 text-yellow-700 border-yellow-100',
  'D2C':                 'bg-pink-50 text-pink-700 border-pink-100',
  'AI Development':      'bg-indigo-50 text-indigo-700 border-indigo-100',
  'Marketing':           'bg-red-50 text-red-700 border-red-100',
  'Next.js':             'bg-gray-100 text-gray-700 border-gray-200',
  'SaaS':                'bg-cyan-50 text-cyan-700 border-cyan-100',
  'web development':     'bg-teal-50 text-teal-700 border-teal-100',
  'small business':      'bg-lime-50 text-lime-700 border-lime-100',
}

function Tag({ tag, light = false }: { tag: string; light?: boolean }) {
  if (light) {
    const cls = LIGHT_COLORS[tag] ?? 'bg-gray-100 text-gray-600 border-gray-200'
    return (
      <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border ${cls}`}>
        {tag}
      </span>
    )
  }
  const c = CATEGORY_COLORS[tag]
  if (!c) return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 text-white/70 px-2.5 py-1 rounded-full">
      {tag}
    </span>
  )
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${c.bg} ${c.text} px-2.5 py-1 rounded-full`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {tag}
    </span>
  )
}

function FeaturedCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0d2a28] to-[#091918] p-8 md:p-12 hover:border-teal-500/40 transition-all duration-300">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(45,212,192,0.3) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

        <div className="relative">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded-full border border-lime/20">
              Featured
            </span>
            {post.tags.slice(0, 2).map(tag => <Tag key={tag} tag={tag} />)}
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 group-hover:text-teal-300 transition-colors duration-300 max-w-2xl">
            {post.title}
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            {post.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-white/40 text-sm">
              <time>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <span className="flex items-center gap-2 text-teal-400 font-semibold text-sm group-hover:gap-3 transition-all">
              Read article
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

function ArticleCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <div className="h-full border border-gray-100 rounded-2xl p-6 bg-white hover:shadow-lg hover:shadow-teal-500/5 hover:border-teal-200 transition-all duration-300 flex flex-col">
        {/* Top bar accent */}
        <div className="w-10 h-1 rounded-full bg-teal-500 mb-5 group-hover:w-16 transition-all duration-300" />

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          {post.tags.slice(0, 2).map(tag => <Tag key={tag} tag={tag} light />)}
        </div>

        <h3 className="font-bold text-gray-900 text-lg leading-snug mb-3 group-hover:text-teal-700 transition-colors flex-1">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">
          {post.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <time className="text-xs text-gray-400">
            {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </time>
          <div className="flex items-center gap-1.5 text-teal-600 text-xs font-semibold group-hover:gap-2.5 transition-all">
            <span>{post.readTime}</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

const SERVICES = [
  {
    href: '/services/website-development',
    emoji: '🌐',
    label: 'Website Development',
    title: 'Website Development in Trivandrum',
    description: 'Custom, SEO-first websites for businesses in Kerala. Fixed pricing, fast delivery.',
    color: 'from-teal-50 to-teal-100/50 border-teal-200 hover:border-teal-400',
    labelColor: 'text-teal-700 bg-teal-100',
  },
  {
    href: '/ai-website-ai-software',
    emoji: '🤖',
    label: 'AI Development',
    title: 'AI Website & Software Development',
    description: 'AI-powered web apps, SaaS platforms, and digital products. MVPs to enterprise.',
    color: 'from-indigo-50 to-indigo-100/50 border-indigo-200 hover:border-indigo-400',
    labelColor: 'text-indigo-700 bg-indigo-100',
  },
  {
    href: '/d2c-growth',
    emoji: '📈',
    label: 'D2C & Ecommerce',
    title: 'D2C Growth for Indian Brands',
    description: 'Full-service ecommerce growth. Shopify, Amazon, Meesho, Meta Ads and more.',
    color: 'from-orange-50 to-orange-100/50 border-orange-200 hover:border-orange-400',
    labelColor: 'text-orange-700 bg-orange-100',
  },
]

export default function BlogPage() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts

  return (
    <main className="min-h-screen bg-[#f8fafa]">

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden px-6 pt-32 pb-20"
        style={{ background: 'linear-gradient(160deg, #091918 0%, #0B2422 50%, #0d2a28 100%)' }}
      >
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(ellipse at top, rgba(45,212,192,0.4) 0%, transparent 65%)' }} />

        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-400 text-xs font-bold uppercase tracking-[0.2em]">Insights & Guides</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            The Turquoic <span className="text-teal-400">Blog</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            Practical guides on website development, SEO, and digital marketing for businesses in Trivandrum and Kerala.
          </p>

          {/* Stats strip */}
          <div className="flex items-center gap-6 mt-10 flex-wrap">
            {[
              { n: posts.length + '+', l: 'Articles' },
              { n: '100%', l: 'Free' },
              { n: 'Kerala', l: 'Focused' },
            ].map(s => (
              <div key={s.l} className="flex items-center gap-2">
                <span className="text-white font-bold text-lg">{s.n}</span>
                <span className="text-white/30 text-sm">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-16">

        {/* ── FEATURED POST ── */}
        {featured && (
          <section>
            <FeaturedCard post={featured} />
          </section>
        )}

        {/* ── ARTICLES GRID ── */}
        {rest.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-teal-400" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">All Articles</h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map(post => <ArticleCard key={post.slug} post={post} />)}
            </div>
          </section>
        )}

        {/* ── SERVICES ── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-teal-400" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">Our Services</h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {SERVICES.map(s => (
              <Link key={s.href} href={s.href}
                className={`group block bg-gradient-to-br ${s.color} border rounded-2xl p-6 transition-all duration-300 hover:shadow-md`}
              >
                <div className="text-3xl mb-4">{s.emoji}</div>
                <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${s.labelColor} mb-3 inline-block`}>
                  {s.label}
                </span>
                <h3 className="font-bold text-gray-900 mb-2 leading-snug group-hover:text-teal-800 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                <div className="mt-4 flex items-center gap-1.5 text-teal-600 text-xs font-semibold group-hover:gap-3 transition-all">
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ── CTA ── */}
      <section className="mx-6 mb-14 rounded-3xl overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #091918 0%, #0d2a28 100%)' }}>
        <div className="relative px-8 py-14 text-center">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="relative">
            <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">Based in Trivandrum</p>
            <h2 className="text-3xl font-bold text-white mb-3">Ready to grow your business online?</h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto">Free consultation with our team. No commitment, no fluff.</p>
            <Link href="/#contact"
              className="inline-flex items-center gap-2 bg-lime text-olive font-bold px-8 py-3.5 rounded-xl hover:shadow-[0_0_30px_rgba(200,230,0,0.3)] transition-all text-sm uppercase tracking-wide">
              Get a Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
