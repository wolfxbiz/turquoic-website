import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllSlugs, getAllPosts } from '@/lib/blog'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `https://www.turquoic.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.turquoic.com/blog/${post.slug}`,
      siteName: 'Turquoic',
      type: 'article',
      locale: 'en_IN',
      publishedTime: post.date,
      authors: ['Turquoic'],
      images: [{ url: 'https://www.turquoic.com/og-image.jpg', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['https://www.turquoic.com/og-image.jpg'],
    },
  }
}

const TAG_COLORS: Record<string, string> = {
  'Website Development': 'bg-teal-50 text-teal-700 border-teal-100',
  'SEO':                 'bg-purple-50 text-purple-700 border-purple-100',
  'Ecommerce':           'bg-orange-50 text-orange-700 border-orange-100',
  'Kerala':              'bg-green-50 text-green-700 border-green-100',
  'Trivandrum':          'bg-blue-50 text-blue-700 border-blue-100',
  'pricing':             'bg-yellow-50 text-yellow-700 border-yellow-100',
  'D2C':                 'bg-pink-50 text-pink-700 border-pink-100',
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const related = allPosts
    .filter(p => p.slug !== post.slug && p.tags.some(t => post.tags.includes(t)))
    .slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Turquoic', url: 'https://www.turquoic.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Turquoic',
      url: 'https://www.turquoic.com',
      logo: { '@type': 'ImageObject', url: 'https://www.turquoic.com/og-image.jpg' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.turquoic.com/blog/${post.slug}` },
    image: 'https://www.turquoic.com/og-image.jpg',
    keywords: post.tags.join(', '),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <main className="min-h-screen bg-[#f8fafa]">

        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden px-6 pt-28 pb-14"
          style={{ background: 'linear-gradient(160deg, #091918 0%, #0B2422 50%, #0d2a28 100%)' }}
        >
          {/* Grid bg */}
          <div className="absolute inset-0 opacity-[0.035]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
          {/* Glow */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] pointer-events-none opacity-20"
            style={{ background: 'radial-gradient(ellipse, rgba(45,212,192,0.5) 0%, transparent 65%)' }} />

          <div className="relative max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-white/30 mb-7 flex-wrap">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/50 truncate max-w-[200px]">{post.title}</span>
            </nav>

            {/* Tags */}
            <div className="flex items-center gap-2 mb-5 flex-wrap">
              {post.tags.slice(0, 3).map(tag => (
                <span key={tag} className="text-xs font-semibold bg-white/10 text-white/70 border border-white/10 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white leading-tight mb-5">
              {post.title}
            </h1>
            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              {post.description}
            </p>

            {/* Meta row */}
            <div className="flex items-center gap-1 text-white/30 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-xs font-bold text-teal-400">T</div>
                <span className="text-white/60 font-medium">{post.author}</span>
              </div>
              <span className="mx-2">·</span>
              <time className="text-white/40">
                {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
              <span className="mx-2">·</span>
              <span className="text-white/40">{post.readTime}</span>
            </div>
          </div>
        </section>

        {/* ── CONTENT AREA ── */}
        <div className="max-w-5xl mx-auto px-6 py-12 lg:flex lg:gap-12">

          {/* Main article */}
          <article className="lg:flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
              <div className="blog-content">
                <MDXRemote source={post.content} />
              </div>

              {/* Article footer */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 border border-teal-200 flex items-center justify-center font-bold text-teal-600">T</div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Turquoic Team</p>
                      <p className="text-xs text-gray-400">Pattom, Trivandrum, Kerala</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {post.tags.slice(0, 3).map(tag => {
                      const cls = TAG_COLORS[tag] ?? 'bg-gray-100 text-gray-600 border-gray-200'
                      return (
                        <span key={tag} className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${cls}`}>{tag}</span>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div className="mt-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px bg-teal-400" />
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">Related Articles</h2>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {related.map(p => (
                    <Link key={p.slug} href={`/blog/${p.slug}`}
                      className="group bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-teal-200 transition-all">
                      <div className="w-8 h-0.5 bg-teal-400 mb-4 group-hover:w-12 transition-all" />
                      <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 group-hover:text-teal-700 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs text-gray-400">{p.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* ── SIDEBAR ── */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-5">

              {/* Back link */}
              <Link href="/blog"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-teal-700 transition-colors font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                All articles
              </Link>

              {/* Article info */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">About this article</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Published</p>
                    <p className="text-sm font-medium text-gray-800">
                      {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Reading time</p>
                    <p className="text-sm font-medium text-gray-800">{post.readTime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1.5">Topics</p>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map(tag => {
                        const cls = TAG_COLORS[tag] ?? 'bg-gray-100 text-gray-600 border-gray-200'
                        return <span key={tag} className={`text-xs font-medium px-2 py-0.5 rounded-full border ${cls}`}>{tag}</span>
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA card */}
              <div className="rounded-2xl p-5 text-white"
                style={{ background: 'linear-gradient(135deg, #091918 0%, #0d2a28 100%)' }}>
                <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="font-bold text-sm mb-1.5">Need help for your business?</p>
                <p className="text-white/50 text-xs leading-relaxed mb-4">
                  Free consultation with our Trivandrum team.
                </p>
                <Link href="/#contact"
                  className="block text-center bg-lime text-olive font-bold text-xs uppercase tracking-wide px-4 py-2.5 rounded-xl hover:shadow-[0_0_20px_rgba(200,230,0,0.3)] transition-all">
                  Get Free Consultation
                </Link>
              </div>

              {/* More articles */}
              {related.length > 0 && (
                <div className="bg-white border border-gray-100 rounded-2xl p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">More Articles</p>
                  <div className="space-y-4">
                    {related.map(p => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                        <p className="text-sm font-medium text-gray-800 group-hover:text-teal-700 transition-colors leading-snug mb-1">
                          {p.title}
                        </p>
                        <p className="text-xs text-gray-400">{p.readTime}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* ── BOTTOM CTA ── */}
        <section className="mx-6 mb-14 rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #091918 0%, #0d2a28 100%)' }}>
          <div className="relative px-8 py-14 text-center">
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative">
              <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">Turquoic · Trivandrum</p>
              <h2 className="text-3xl font-bold text-white mb-3">Want help growing your business?</h2>
              <p className="text-white/50 mb-8 max-w-md mx-auto">Free consultation. No commitment. Our team is based in Pattom, Trivandrum.</p>
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
    </>
  )
}
