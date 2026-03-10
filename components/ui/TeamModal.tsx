// ── components/ui/TeamModal.tsx ──
'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Linkedin, Globe } from 'lucide-react'
import type { TeamMember } from '@/lib/types'

interface TeamModalProps {
  member: TeamMember | null
  onClose: () => void
}

export default function TeamModal({ member, onClose }: TeamModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll while open
  useEffect(() => {
    if (member) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [member])

  return (
    <AnimatePresence>
      {member && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] cursor-pointer"
            style={{ background: 'rgba(10,30,28,0.55)', backdropFilter: 'blur(8px)' }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            <div
              className="relative w-full max-w-2xl rounded-[28px] overflow-hidden pointer-events-auto flex flex-col sm:flex-row"
              style={{ boxShadow: '0 40px 120px rgba(14,165,160,0.22), 0 8px 32px rgba(0,0,0,0.18)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Left panel — avatar ── */}
              <div
                className="relative sm:w-[44%] flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px] p-6"
                style={{ background: 'linear-gradient(160deg, #E0FAF8 0%, #7FE8DC 100%)' }}
              >
                {/* Soft glow behind avatar */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  aria-hidden="true"
                >
                  <div
                    className="w-[80%] h-[80%] rounded-full"
                    style={{ background: 'rgba(255,255,255,0.35)', filter: 'blur(40px)' }}
                  />
                </div>
                <motion.div
                  initial={{ scale: 0.88, y: 16 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22, delay: 0.08 }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                  style={{ minHeight: '280px' }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={320}
                    height={380}
                    unoptimized
                    priority
                    className="object-contain w-full h-full"
                    style={{ maxHeight: '360px' }}
                  />
                </motion.div>
              </div>

              {/* ── Right panel — details ── */}
              <div className="sm:w-[56%] bg-white flex flex-col justify-center px-7 py-8 gap-5">
                {/* Name + role */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h2 className="font-display font-extrabold text-[28px] text-dark leading-tight">
                    {member.name}
                  </h2>
                  <p className="font-body text-[12px] text-teal-accent uppercase tracking-[0.14em] mt-1">
                    {member.role}
                  </p>
                </motion.div>

                {/* Teal divider */}
                <div className="w-10 h-[2px] rounded-full bg-teal-strong" />

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.18 }}
                  className="font-body italic text-[15px] text-muted leading-relaxed"
                >
                  &ldquo;{member.tagline}&rdquo;
                </motion.p>

                {/* Skills */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.24 }}
                  className="flex flex-wrap gap-2"
                >
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-body font-medium text-[11px] text-teal-accent px-3 py-1.5 rounded-full border border-teal-mid"
                      style={{ background: '#E0FAF8' }}
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.30 }}
                  className="flex items-center gap-4 mt-auto pt-2"
                >
                  {/* TODO: add real social links */}
                  <a
                    href={member.social.linkedin}
                    aria-label="LinkedIn"
                    className="flex items-center gap-2 font-body text-[12px] text-muted hover:text-teal-accent transition-colors duration-200 group"
                  >
                    <Linkedin size={16} className="group-hover:text-teal-accent transition-colors duration-200" />
                    LinkedIn
                  </a>
                  <a
                    href={member.social.website}
                    aria-label="Website"
                    className="flex items-center gap-2 font-body text-[12px] text-muted hover:text-teal-accent transition-colors duration-200 group"
                  >
                    <Globe size={16} className="group-hover:text-teal-accent transition-colors duration-200" />
                    Website
                  </a>
                </motion.div>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-dark hover:bg-white transition-colors duration-200 shadow-sm"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
