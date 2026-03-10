// ── components/ui/ServiceCard.tsx ──
'use client'

import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import type { Service } from '@/lib/types'

type LucideIconName = keyof typeof LucideIcons

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = LucideIcons[service.icon as LucideIconName] as
    | React.ComponentType<LucideProps>
    | undefined

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 16px 60px rgba(45,212,192,0.22)',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      className="bg-gradient-card rounded-card p-8 flex flex-col gap-5 h-full"
      style={{ boxShadow: '0 8px 40px rgba(45,212,192,0.12)' }}
    >
      {IconComponent && (
        <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center flex-shrink-0">
          <IconComponent size={28} className="text-teal-accent" />
        </div>
      )}
      <div>
        <h3 className="font-display font-bold text-[18px] text-dark leading-tight mb-3 uppercase tracking-wide">
          {service.title}
        </h3>
        <p className="font-body text-muted leading-relaxed text-[15px]">
          {service.description}
        </p>
      </div>
    </motion.div>
  )
}
