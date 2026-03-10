// ── components/layout/Footer.tsx ──
import { Linkedin, Facebook, Instagram, Phone } from 'lucide-react'
import { NAV_LINKS, SITE_NAME, TAGLINE } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white border-t-2 border-teal-strong">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight text-white">
            {SITE_NAME.toUpperCase()}
          </h2>
          <nav className="flex flex-wrap gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-white/60 hover:text-white transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Middle row: tagline */}
        <div className="py-10 border-b border-white/10">
          <p className="font-display font-semibold text-2xl md:text-3xl text-white/80 max-w-2xl leading-tight">
            {TAGLINE}
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8">
          <p className="font-body text-white/40 text-sm">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>

          {/* Phone */}
          <a
            href="tel:+919400061111"
            className="flex items-center gap-2 text-white/50 hover:text-teal-strong transition-colors duration-200"
          >
            <Phone size={14} />
            <span className="font-body text-sm">+91 94000 61111</span>
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/turquoic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-teal-strong hover:border-teal-strong transition-all duration-200"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://www.facebook.com/share/14XSNLn6K3p/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-teal-strong hover:border-teal-strong transition-all duration-200"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/turquoic?igsh=Zmh3dGQzcTNhdDd1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-teal-strong hover:border-teal-strong transition-all duration-200"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
