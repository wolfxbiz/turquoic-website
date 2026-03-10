// ── components/sections/Contact.tsx ──
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import Button from '@/components/ui/Button'
import { slideInLeft, slideInRight } from '@/lib/animations'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="contact" className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left: copy + details */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <SectionLabel>08 — CONTACT</SectionLabel>

            <AnimatedHeading
              text="Let's Build Something Powerful Together."
              tag="h2"
              className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-dark leading-tight mb-6 uppercase"
            />

            <p className="font-body text-muted text-[16px] leading-relaxed mb-10">
              Ready to stop losing time and start scaling with intention? Tell us about your business
              and we will put together a tailored roadmap — no commitment required for the first call.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4 mb-10">
              <a
                href="mailto:info@turquoic.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0 group-hover:bg-teal-mid transition-colors duration-200">
                  <Mail size={18} className="text-teal-accent" />
                </div>
                <span className="font-body text-dark text-[15px] group-hover:text-teal-accent transition-colors duration-200">
                  info@turquoic.com
                </span>
              </a>
              <a
                href="tel:+919400061111"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0 group-hover:bg-teal-mid transition-colors duration-200">
                  <Phone size={18} className="text-teal-accent" />
                </div>
                <span className="font-body text-dark text-[15px] group-hover:text-teal-accent transition-colors duration-200">
                  +91 94000 61111
                </span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-teal-accent" />
                </div>
                <span className="font-body text-dark text-[15px]">
                  Remote-first · Available Worldwide
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/turquoic/' },
                { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/14XSNLn6K3p/' },
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/turquoic?igsh=Zmh3dGQzcTNhdDd1' },
              ].map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-teal-mid flex items-center justify-center text-teal-accent hover:bg-teal-light transition-colors duration-200"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div
              className="rounded-card p-8 lg:p-10"
              style={{
                background: 'linear-gradient(135deg, rgba(224,250,248,0.9) 0%, rgba(64,224,208,0.35) 100%)',
                boxShadow: '0 8px 40px rgba(45,212,192,0.12)',
              }}
            >
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-xs font-medium text-dark uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 rounded-btn bg-white border border-transparent text-dark font-body text-[15px] placeholder:text-muted/60 focus:outline-none focus:border-teal-accent transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-xs font-medium text-dark uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-btn bg-white border border-transparent text-dark font-body text-[15px] placeholder:text-muted/60 focus:outline-none focus:border-teal-accent transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-xs font-medium text-dark uppercase tracking-wide">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company name (optional)"
                    className="w-full px-4 py-3 rounded-btn bg-white border border-transparent text-dark font-body text-[15px] placeholder:text-muted/60 focus:outline-none focus:border-teal-accent transition-colors duration-200"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-xs font-medium text-dark uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your business and what you're trying to solve..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-btn bg-white border border-transparent text-dark font-body text-[15px] placeholder:text-muted/60 focus:outline-none focus:border-teal-accent transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <Button variant="primary" type="submit" fullWidth>
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
