'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Zap, Clock, FileText, BadgeDollarSign } from 'lucide-react'
import { useConsultationModal } from '@/components/landing/ConsultationModalContext'

const BENEFITS = [
  { icon: Zap,             text: 'A clear technical approach for your idea'  },
  { icon: Clock,           text: 'Realistic timeline with honest milestones' },
  { icon: BadgeDollarSign, text: 'Transparent pricing — no hidden costs'     },
  { icon: FileText,        text: 'Written summary delivered within 24 hrs'   },
]

const STEPS = [
  'You share what you\'re building',
  'We analyse your requirements',
  'You receive a clear plan & quote',
]

export default function FreeConsultationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })
  const { open } = useConsultationModal()

  return (
    <section className="bg-white py-24 lg:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <motion.div
          className="rounded-card overflow-hidden grid lg:grid-cols-[1fr_1.2fr]"
          style={{
            background: 'linear-gradient(140deg, #0B1E1D 0%, #0D2A28 100%)',
            border: '1px solid rgba(45,212,192,0.14)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
          }}
          initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut' }}>

          {/* ── Left pitch ── */}
          <div className="relative px-8 py-12 lg:px-12 lg:py-14
                          border-b lg:border-b-0 lg:border-r border-white/[0.06]">
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 20% 10%, rgba(45,212,192,0.10) 0%, transparent 60%)' }} />
            <div className="relative flex flex-col gap-8 h-full">

              <div>
                <motion.div className="flex items-center gap-2.5 mb-6"
                  initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : undefined}
                  transition={{ duration: 0.5 }}>
                  <span className="w-5 h-px bg-teal-strong/60" />
                  <span className="text-[10px] font-body font-bold uppercase tracking-[0.18em] text-teal-strong/70">
                    Free Consultation
                  </span>
                </motion.div>

                <motion.h2
                  className="font-display font-black text-[clamp(28px,3.2vw,44px)] text-white
                             leading-[1.06] uppercase mb-5"
                  initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}>
                  Tell us what<br />you&apos;re building.<br />
                  <span className="text-teal-strong">We&apos;ll give<br />you a plan.</span>
                </motion.h2>

                <motion.p className="font-body text-[#6A9A98] text-[14px] leading-relaxed"
                  initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : undefined}
                  transition={{ delay: 0.3, duration: 0.6 }}>
                  Share your details and we&apos;ll come back with a clear approach,
                  a realistic timeline, and a transparent quote.
                </motion.p>
              </div>

              <motion.ul className="space-y-3.5"
                initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : undefined}
                transition={{ delay: 0.45, duration: 0.6 }}>
                {BENEFITS.map(({ icon: Icon, text }, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-teal-strong/10 border border-teal-strong/20
                                    flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-3 h-3 text-teal-strong" />
                    </div>
                    <span className="font-body text-[13px] text-[#8ABAB8] leading-snug pt-1">{text}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>

          {/* ── Right CTA panel ── */}
          <div className="bg-white px-8 py-12 lg:px-10 lg:py-14 flex flex-col justify-center gap-8">
            <div>
              <p className="font-display font-black text-dark text-[22px] uppercase mb-3 leading-tight">
                Ready to get<br />started?
              </p>
              <p className="font-body text-muted text-[14px] leading-relaxed">
                Fill in a quick form — takes under 2 minutes — and
                we&apos;ll come back with a personalised approach for your project.
              </p>
            </div>

            <ul className="space-y-3">
              {STEPS.map((step, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-strong/10 border border-teal-strong/25
                                   text-teal-strong text-[10px] font-black flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-body text-[13px] text-muted">{step}</span>
                </li>
              ))}
            </ul>

            <div>
              <button onClick={open}
                className="inline-flex items-center gap-2.5 bg-lime text-olive font-display font-black
                           text-[11px] uppercase tracking-[0.14em] rounded-btn px-8 py-4
                           hover:shadow-[0_0_28px_rgba(200,230,0,0.45)] active:scale-[0.98]
                           transition-all duration-200">
                Book My Free Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <p className="font-body text-[11px] text-gray-400 mt-3">
                No commitment required. 100% free.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
