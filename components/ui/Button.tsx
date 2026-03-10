// ── components/ui/Button.tsx ──
'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: ReactNode
  onClick?: () => void
  href?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

export default function Button({
  variant = 'primary',
  children,
  onClick,
  href,
  className = '',
  type = 'button',
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    px-6 py-3 font-body font-bold text-[11px] uppercase tracking-[0.12em]
    transition-all duration-200 select-none
    ${fullWidth ? 'w-full' : ''}
  `

  const variants = {
    primary: `
      bg-lime text-olive
      rounded-btn
      hover:shadow-[0_0_20px_rgba(200,230,0,0.4)]
    `,
    secondary: `
      bg-transparent border border-white text-white
      rounded-btn
      hover:bg-white/10
    `,
  }

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  }

  const combinedClass = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a href={href} className={combinedClass} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedClass}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
