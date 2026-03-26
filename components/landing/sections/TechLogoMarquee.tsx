'use client'

import { motion } from 'framer-motion'
import {
  SiNextdotjs, SiReact, SiOpenai, SiLangchain, SiTailwindcss,
  SiVercel, SiNodedotjs, SiPostgresql, SiStripe, SiGraphql,
  SiShopify, SiDocker, SiGithubactions,
} from 'react-icons/si'
import { Cloud } from 'lucide-react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TECH_LIST: { name: string; Icon: React.ComponentType<any> }[] = [
  { name: 'Next.js',         Icon: SiNextdotjs },
  { name: 'React',           Icon: SiReact },
  { name: 'OpenAI',          Icon: SiOpenai },
  { name: 'LangChain',       Icon: SiLangchain },
  { name: 'TailwindCSS',     Icon: SiTailwindcss },
  { name: 'Vercel',          Icon: SiVercel },
  { name: 'Node.js',         Icon: SiNodedotjs },
  { name: 'PostgreSQL',      Icon: SiPostgresql },
  { name: 'Stripe',          Icon: SiStripe },
  { name: 'GraphQL',         Icon: SiGraphql },
  { name: 'Shopify',         Icon: SiShopify },
  { name: 'Docker',          Icon: SiDocker },
  { name: 'GitHub Actions',  Icon: SiGithubactions },
  { name: 'AWS',             Icon: Cloud },
]

// Triplicate for seamless left-to-right loop
const ITEMS = [...TECH_LIST, ...TECH_LIST, ...TECH_LIST]

export default function TechLogoMarquee() {
  return (
    <div className="bg-white border-t border-b border-teal-mid/25 py-5 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }} />

      <motion.div
        className="flex items-center gap-8 w-max"
        animate={{ x: ['-33.33%', '0%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {ITEMS.map(({ name, Icon }, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-teal-mid/30 bg-teal-light/40 flex-shrink-0"
          >
            <Icon size={13} className="text-teal-accent flex-shrink-0" />
            <span className="text-[11px] font-body font-normal uppercase tracking-[0.1em] text-teal-accent whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
