'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import AccordionItem from '@/components/ui/AccordionItem'
import config from '@/_config'

export default function Faq() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { sectionLabel, heading, items } = config.faq

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div className="flex items-center gap-3 mb-4 justify-center" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : undefined} transition={{ duration: 0.6 }}>
          <span className="inline-block w-6 h-px bg-teal-accent" />
          <span className="text-xs font-body font-normal uppercase tracking-[0.15em] text-teal-accent">{sectionLabel}</span>
          <span className="inline-block w-6 h-px bg-teal-accent" />
        </motion.div>

        <motion.h2 className="font-display font-normal text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : undefined} transition={{ duration: 0.7, ease: 'easeOut' }}>
          {heading}
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : undefined} transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}>
          {items.map((item, i) => (
            <AccordionItem key={i} question={item.question} answer={item.answer} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
