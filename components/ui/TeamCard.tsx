// ── components/ui/TeamCard.tsx ──
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Linkedin, Globe } from 'lucide-react'
import type { TeamMember } from '@/lib/types'

interface TeamCardProps {
  member: TeamMember
  index: number
  onClick: () => void
}

export default function TeamCard({ member, index, onClick }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      animate={{
        scale: isHovered ? 1.05 : 1,
        y: isHovered ? -8 : 0,
      }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className="relative flex-shrink-0 w-[300px] h-[420px] rounded-[28px] overflow-hidden cursor-pointer"
      style={{
        background: '#FFFFFF',
        boxShadow: isHovered
          ? '0 24px 60px rgba(45,212,192,0.25)'
          : '0 4px 24px rgba(45,212,192,0.10)',
        zIndex: isHovered ? 50 : 1,
      }}
    >
      {/* Avatar — floats up and down, anchored from top so head stays inside */}
      <div className="h-[75%] flex items-start justify-center overflow-hidden pt-3">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 2.8 + (index % 3) * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.3,
          }}
          className="w-[90%] h-full flex items-start"
        >
          <Image
            src={member.image}
            alt={`${member.name} - ${member.role}`}
            width={240}
            height={280}
            priority={false}
            unoptimized
            className="object-contain object-top w-full h-full"
          />
        </motion.div>
      </div>

      {/* Name strip */}
      <div className="h-[25%] bg-white flex flex-col items-center justify-center gap-0.5 px-3 border-t border-teal-light">
        <span className="font-display font-bold text-[14px] text-dark leading-tight text-center uppercase">
          {member.name}
        </span>
        <span className="font-body text-[10px] text-teal-accent uppercase tracking-[0.08em] text-center leading-tight">
          {member.role}
        </span>
      </div>

      {/* Hover overlay — slides up from bottom */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[62%] px-4 pt-3 pb-3 flex flex-col items-center gap-2"
        style={{
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(16px)',
          borderRadius: '18px 18px 0 0',
          borderTop: '2px solid #2DD4C0',
        }}
        animate={{ y: isHovered ? '0%' : '100%' }}
        transition={{ type: 'spring', stiffness: 420, damping: 32, delay: 0.04 }}
      >
        <span className="font-display font-bold text-[14px] text-dark leading-tight text-center uppercase">
          {member.name}
        </span>
        <span className="font-body text-[10px] text-teal-accent uppercase tracking-[0.10em] text-center">
          {member.role}
        </span>
        <div className="w-8 h-px" style={{ background: '#E0FAF8' }} />
        <p className="font-body italic text-[11px] text-muted text-center leading-snug px-2">
          {member.tagline}
        </p>
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="font-body text-[9px] text-teal-accent px-2.5 py-0.5 rounded-full"
              style={{ background: '#E0FAF8' }}
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-auto">
          {/* TODO: add real social links */}
          <a href={member.social.linkedin} aria-label="LinkedIn">
            <Linkedin size={13} className="text-muted transition-colors duration-200 hover:text-teal-strong" />
          </a>
          <a href={member.social.website} aria-label="Website">
            <Globe size={13} className="text-muted transition-colors duration-200 hover:text-teal-strong" />
          </a>
        </div>
      </motion.div>

      {/* Lime dot on hover */}
      <motion.div
        className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full"
        style={{ background: '#C8E600' }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      />
    </motion.div>
  )
}
