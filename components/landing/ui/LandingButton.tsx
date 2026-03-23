'use client'

import { motion } from 'framer-motion'

interface LandingButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  className?: string
  fullWidth?: boolean
}

export default function LandingButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  fullWidth = false,
}: LandingButtonProps) {
  const base =
    'inline-flex items-center justify-center font-body font-bold text-[11px] uppercase tracking-[0.12em] rounded-btn px-6 py-3 transition-all duration-200 cursor-pointer'

  const variants = {
    primary:
      'bg-lime text-olive hover:shadow-[0_0_20px_rgba(200,230,0,0.4)]',
    secondary:
      'bg-transparent border border-white text-white hover:bg-white/10',
  }

  const combined = `${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  }

  if (href) {
    return (
      <motion.a href={href} className={combined} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button onClick={onClick} className={combined} {...motionProps}>
      {children}
    </motion.button>
  )
}
