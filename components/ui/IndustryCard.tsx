// ── components/ui/IndustryCard.tsx ──
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import type { Industry } from '@/lib/types'

interface IndustryCardProps {
  industry: Industry
  isActive: boolean
}

export default function IndustryCard({ industry, isActive: _ }: IndustryCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={industry.id}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="grid md:grid-cols-2 gap-8 items-start"
      >
        {/* Left: description + bullets */}
        <div>
          <p className="font-body text-muted leading-relaxed text-base mb-6">
            {industry.description}
          </p>
          <ul className="flex flex-col gap-3">
            {industry.bulletPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-teal-strong flex items-center justify-center">
                  <Check size={11} className="text-white" strokeWidth={3} />
                </span>
                <span className="font-body text-dark text-[15px] leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: visual gradient card */}
        <div
          className="rounded-card h-64 md:h-80 flex items-end p-8"
          style={{
            background:
              'linear-gradient(135deg, #E0FAF8 0%, #2DD4C0 100%)',
            boxShadow: '0 8px 40px rgba(45,212,192,0.18)',
          }}
        >
          <div>
            <p className="font-display font-bold text-2xl text-white leading-tight">
              {industry.name}
            </p>
            <p className="font-body text-white/80 text-sm mt-1">
              Tailored AI solutions for your sector
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
