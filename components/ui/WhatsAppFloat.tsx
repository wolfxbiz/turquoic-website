// ── components/ui/WhatsAppFloat.tsx ──
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const PHONE = '919400061111'
const WA_URL = `https://wa.me/${PHONE}?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Turquoic.`

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip label */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.2 }}
            className="bg-dark text-white font-body text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
          >
            Chat on WhatsApp
          </motion.span>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 1.2 }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ background: '#25D366' }}
      >
        {/* Pulse ring */}
        <span className="absolute w-14 h-14 rounded-full animate-ping opacity-30" style={{ background: '#25D366' }} />
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
          className="relative z-10"
        >
          <path d="M16.003 3C9.374 3 4 8.373 4 15.003c0 2.18.586 4.22 1.607 5.98L4 29l8.217-1.573A12.04 12.04 0 0 0 16.003 28c6.629 0 12.003-5.373 12.003-12.003S22.632 3 16.003 3zm0 21.88a9.94 9.94 0 0 1-4.974-1.333l-.357-.213-3.712.711.737-3.614-.234-.372A9.95 9.95 0 0 1 6.12 15.003c0-5.453 4.43-9.883 9.883-9.883s9.883 4.43 9.883 9.883-4.43 9.877-9.883 9.877zm5.42-7.394c-.297-.149-1.757-.867-2.03-.966-.272-.099-.47-.148-.669.149-.198.297-.767.966-.94 1.164-.173.199-.347.224-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.457.13-.605.133-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.372-.025-.52-.074-.149-.668-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01a1.093 1.093 0 0 0-.793.372c-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.214 3.074c.149.198 2.095 3.2 5.076 4.487.71.307 1.263.49 1.694.627.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.123-.272-.198-.57-.347z" />
        </svg>
      </motion.a>
    </div>
  )
}
