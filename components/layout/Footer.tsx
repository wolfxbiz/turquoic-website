import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Facebook, Instagram } from 'lucide-react'
import { NAV_LINKS, SITE_NAME, TAGLINE } from '@/lib/constants'
import { ALL_LOCATIONS } from '@/lib/locations-data'

const FOOTER_SERVICES = [
  { label: 'Website Development', href: '/services/website-development' },
  { label: 'SEO Services', href: '/services/seo-services' },
  { label: 'Ecommerce Development', href: '/services/ecommerce-development' },
  { label: 'UI/UX Design', href: '/services/ui-ux-design' },
  { label: 'Google Ads', href: '/services/google-ads-management' },
  { label: 'All Services →', href: '/services' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white border-t-2 border-teal-strong">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">

        {/* Top: logo + tagline */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <Link href="/" className="font-display font-bold text-4xl lg:text-5xl tracking-tight text-white hover:text-teal-strong transition-colors">
            {SITE_NAME.toUpperCase()}
          </Link>
          <p className="font-display font-semibold text-xl md:text-2xl text-white/50 max-w-sm leading-tight">
            {TAGLINE}
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12 border-b border-white/10">

          {/* Nav */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">Company</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">Services</p>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">We Work With</p>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-2">
                  <Image src="/assets/images/flag-india.png" alt="India" width={20} height={14} className="rounded-sm object-cover" />
                  Trivandrum · Kerala
                </Link>
              </li>
              {ALL_LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/locations/${loc.slug}`} className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-2">
                    <Image
                      src={loc.flagImage}
                      alt={loc.country}
                      width={20}
                      height={14}
                      className="rounded-sm object-cover"
                    />
                    {loc.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:+918086286885" className="text-sm text-white/55 hover:text-white transition-colors">
                  +91 8086 286 885
                </a>
              </li>
              <li>
                <a href="mailto:hello@turquoic.com" className="text-sm text-white/55 hover:text-white transition-colors">
                  hello@turquoic.com
                </a>
              </li>
              <li className="text-sm text-white/35 leading-relaxed pt-1">
                Pattom, Trivandrum<br />Kerala, India — 695004
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8">
          <p className="font-body text-white/30 text-xs">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/company/turquoic/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-teal-strong hover:border-teal-strong transition-all">
              <Linkedin size={14} />
            </a>
            <a href="https://www.facebook.com/share/14XSNLn6K3p/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-teal-strong hover:border-teal-strong transition-all">
              <Facebook size={14} />
            </a>
            <a href="https://www.instagram.com/turquoic?igsh=Zmh3dGQzcTNhdDd1" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-teal-strong hover:border-teal-strong transition-all">
              <Instagram size={14} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
