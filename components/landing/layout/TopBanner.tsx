'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { useConsultationModal } from '@/components/landing/ConsultationModalContext'

export default function TopBanner() {
  const { open, bannerVisible, dismissBanner } = useConsultationModal()

  return (
    <AnimatePresence>
      {bannerVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: '40px', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
          style={{ background: 'linear-gradient(90deg, #0B1E1D 0%, #0D2A28 50%, #0B1E1D 100%)' }}>

          {/* Subtle glow line at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-teal-strong/30" />

          <div className="h-full max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">

            {/* Text + CTA */}
            <div className="flex-1 flex items-center justify-center gap-3 lg:gap-5">
              {/* Dot indicator */}
              <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-teal-strong shrink-0" />

              <p className="font-body text-[11px] lg:text-[12px] text-white/80 uppercase tracking-[0.12em] whitespace-nowrap">
                <span className="text-teal-strong font-bold">Free consultation</span>
                <span className="hidden sm:inline"> — get a clear plan & quote within 24 hours</span>
              </p>

              <button
                onClick={open}
                className="inline-flex items-center gap-1.5 bg-lime text-olive font-body font-bold
                           text-[10px] uppercase tracking-[0.12em] rounded-btn px-3.5 py-1.5
                           hover:shadow-[0_0_16px_rgba(200,230,0,0.4)] active:scale-95
                           transition-all duration-150 shrink-0">
                Book Now <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Dismiss */}
            <button
              onClick={dismissBanner}
              aria-label="Dismiss banner"
              className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full
                         text-white/40 hover:text-white/80 transition-colors">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
