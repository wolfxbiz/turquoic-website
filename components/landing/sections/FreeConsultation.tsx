'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight,
  Zap, Clock, FileText, BadgeDollarSign, CalendarDays, Clock3,
} from 'lucide-react'

const WA_NUMBER = '919400061111'

type FormState = {
  name: string; email: string; phone: string
  whatsapp: 'yes' | 'no' | ''; date: string; time: string; query: string
}
const EMPTY: FormState = { name: '', email: '', phone: '', whatsapp: '', date: '', time: '', query: '' }

const TIME_SLOTS = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM',  '2:00 PM',  '3:00 PM',  '4:00 PM',
  '5:00 PM',  '6:00 PM',
]

const BENEFITS = [
  { icon: Zap,             text: 'A clear technical approach for your idea'  },
  { icon: Clock,           text: 'Realistic timeline with honest milestones' },
  { icon: BadgeDollarSign, text: 'Transparent pricing — no hidden costs'     },
  { icon: FileText,        text: 'Written summary delivered within 24 hrs'   },
]

const MONTH_NAMES = ['January','February','March','April','May','June',
                     'July','August','September','October','November','December']
const DAY_HEADERS = ['Su','Mo','Tu','We','Th','Fr','Sa']

/* ─── Calendar ─────────────────────────────────────────── */
function CalendarPicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const today = new Date()
  const [view, setView] = useState({ month: today.getMonth(), year: today.getFullYear() })
  const selected = value ? new Date(value + 'T00:00:00') : null

  const firstDay    = new Date(view.year, view.month, 1).getDay()
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate()

  const prev = () => setView(v => v.month === 0 ? { month: 11, year: v.year - 1 } : { month: v.month - 1, year: v.year })
  const next = () => setView(v => v.month === 11 ? { month: 0, year: v.year + 1 } : { month: v.month + 1, year: v.year })

  const isPast = (d: number) => {
    const date = new Date(view.year, view.month, d); date.setHours(0,0,0,0)
    const t = new Date(); t.setHours(0,0,0,0)
    return date < t
  }
  const isSelected = (d: number) =>
    selected?.getFullYear() === view.year && selected?.getMonth() === view.month && selected?.getDate() === d
  const isToday = (d: number) =>
    today.getFullYear() === view.year && today.getMonth() === view.month && today.getDate() === d

  const select = (d: number) => {
    if (isPast(d)) return
    onChange(`${view.year}-${String(view.month + 1).padStart(2,'0')}-${String(d).padStart(2,'0')}`)
  }

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  while (cells.length % 7 !== 0) cells.push(null)

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <button type="button" onClick={prev}
          className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-teal-light transition-colors">
          <ChevronLeft className="w-3.5 h-3.5 text-muted" />
        </button>
        <span className="font-display font-bold text-[11px] text-dark uppercase tracking-widest">
          {MONTH_NAMES[view.month]} {view.year}
        </span>
        <button type="button" onClick={next}
          className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-teal-light transition-colors">
          <ChevronRight className="w-3.5 h-3.5 text-muted" />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-0.5">
        {DAY_HEADERS.map(d => (
          <div key={d} className="text-center text-[9px] font-body text-muted uppercase tracking-wide py-1">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {cells.map((d, i) => (
          <button key={i} type="button" disabled={!d || isPast(d)} onClick={() => d && select(d)}
            className={`h-7 w-full text-[11px] font-body rounded-md transition-all duration-150 ${
              !d            ? '' :
              isSelected(d) ? 'bg-teal-strong text-white font-bold shadow-sm' :
              isToday(d)    ? 'ring-1 ring-teal-strong text-teal-accent font-bold' :
              isPast(d)     ? 'text-gray-300 cursor-not-allowed' :
              'text-dark hover:bg-teal-light cursor-pointer'
            }`}>
            {d ?? ''}
          </button>
        ))}
      </div>

      {value && (
        <div className="mt-2 pt-2 border-t border-gray-200 flex items-center justify-between">
          <span className="text-[10px] font-body text-teal-accent">
            {selected?.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
          </span>
          <button type="button" onClick={() => onChange('')}
            className="text-[10px] font-body text-gray-400 hover:text-red-400 uppercase tracking-wide transition-colors">
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

/* ─── WhatsApp URL ─────────────────────────────────────── */
function buildWaUrl(f: FormState) {
  const msg = [
    `Hi, I'd like to book a free consultation with Turquoic.`,
    ``,
    `Name: ${f.name}`,
    `Email: ${f.email}`,
    `Phone: ${f.phone}`,
    `Available on WhatsApp: ${f.whatsapp === 'yes' ? 'Yes' : 'No'}`,
    f.date  ? `Preferred date: ${new Date(f.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}` : null,
    f.time  ? `Preferred time: ${f.time}` : null,
    f.query ? `Project details: ${f.query}` : null,
  ].filter(Boolean).join('\n')
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}

const inputCls = [
  'w-full bg-[#F7FFFE] border border-gray-200 rounded-xl px-3.5 py-2.5 lg:px-4 lg:py-3',
  'text-dark text-[13px] lg:text-[14px] font-body placeholder:text-gray-400',
  'focus:outline-none focus:border-teal-strong focus:bg-white focus:ring-2 focus:ring-teal-strong/10',
  'transition-all duration-200',
].join(' ')

const labelCls = 'block text-[10px] font-body font-bold uppercase tracking-[0.14em] text-teal-accent mb-1.5'

/* ─── Date/Time tab widget ─────────────────────────────── */
function DateTimePicker({
  date, time, onDate, onTime,
}: {
  date: string; time: string; onDate: (v: string) => void; onTime: (v: string) => void
}) {
  const [tab, setTab] = useState<'date' | 'time'>('date')

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-1 p-1 bg-gray-100 rounded-xl mb-3">
        <button type="button" onClick={() => setTab('date')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-body font-bold uppercase tracking-wide transition-all duration-200 ${
            tab === 'date'
              ? 'bg-white text-teal-accent shadow-sm'
              : 'text-muted hover:text-dark'
          }`}>
          <CalendarDays className="w-3 h-3" />
          {date
            ? new Date(date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
            : 'Date'}
        </button>
        <button type="button" onClick={() => setTab('time')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-body font-bold uppercase tracking-wide transition-all duration-200 ${
            tab === 'time'
              ? 'bg-white text-teal-accent shadow-sm'
              : 'text-muted hover:text-dark'
          }`}>
          <Clock3 className="w-3 h-3" />
          {time || 'Time'}
        </button>
      </div>

      {/* Tab content */}
      <div className="bg-[#F7FFFE] border border-gray-200 rounded-xl px-4 py-3">
        {tab === 'date' ? (
          <CalendarPicker value={date} onChange={onDate} />
        ) : (
          <div>
            <div className="grid grid-cols-3 gap-1.5">
              {TIME_SLOTS.map(slot => (
                <button key={slot} type="button" onClick={() => onTime(slot)}
                  className={`py-2 rounded-lg text-[10px] font-body font-bold tracking-wide border transition-all duration-150 ${
                    time === slot
                      ? 'bg-teal-strong border-teal-strong text-white shadow-sm'
                      : 'bg-white border-gray-200 text-dark hover:border-teal-strong/40 hover:bg-teal-light/50'
                  }`}>
                  {slot}
                </button>
              ))}
            </div>
            {time && (
              <div className="mt-2 pt-2 border-t border-gray-200 flex items-center justify-between">
                <span className="text-[10px] font-body text-teal-accent">{time} selected</span>
                <button type="button" onClick={() => onTime('')}
                  className="text-[10px] font-body text-gray-400 hover:text-red-400 uppercase tracking-wide transition-colors">
                  Clear
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Modal ────────────────────────────────────────────── */
export default function FreeConsultationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormState>(EMPTY)
  const set = (k: keyof FormState, v: string) => setForm(prev => ({ ...prev, [k]: v }))

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (isOpen) window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  const handleClose = () => {
    onClose()
    setTimeout(() => { setSubmitted(false); setForm(EMPTY) }, 300)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(buildWaUrl(form), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end lg:items-center justify-center lg:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}>

          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" onClick={handleClose} />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full lg:max-w-5xl
                       flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr]
                       rounded-t-[24px] lg:rounded-card
                       max-h-[92vh] lg:max-h-[90vh]"
            style={{
              background: '#0B1E1D',
              border: '1px solid rgba(45,212,192,0.14)',
              boxShadow: '0 -8px 40px rgba(0,0,0,0.4), 0 32px 80px rgba(0,0,0,0.5)',
            }}
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}>

            {/* Drag handle — mobile only */}
            <div className="lg:hidden flex justify-center pt-3 pb-1 absolute top-0 left-0 right-0 z-30">
              <div className="w-10 h-1 rounded-full bg-white/20" />
            </div>

            {/* Close button */}
            <button onClick={handleClose} aria-label="Close"
              className="absolute top-3.5 right-4 z-20 w-8 h-8 flex items-center justify-center
                         rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <X className="w-4 h-4 text-white" />
            </button>

            {/* ── Left panel ── */}
            {/* Mobile: compact dark header. Desktop: full pitch panel */}
            <div className="relative border-b lg:border-b-0 lg:border-r border-white/[0.06]
                            px-6 pt-10 pb-5 lg:px-10 lg:py-12">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 20% 0%, rgba(45,212,192,0.12) 0%, transparent 60%)' }} />
              <div className="relative">

                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-3 lg:mb-5">
                  <span className="w-4 h-px bg-teal-strong/60" />
                  <span className="text-[9px] lg:text-[10px] font-body font-bold uppercase tracking-[0.18em] text-teal-strong/70">
                    Free Consultation
                  </span>
                </div>

                {/* Headline — one line on mobile, full on desktop */}
                <h2 className="font-display font-black text-white uppercase leading-tight mb-0 lg:mb-4
                               text-[22px] lg:text-[clamp(26px,2.8vw,42px)]">
                  <span className="lg:hidden">Tell us what you&apos;re building.</span>
                  <span className="hidden lg:block">
                    Tell us what<br />you&apos;re building.<br />
                    <span className="text-teal-strong">We&apos;ll give<br />you a plan.</span>
                  </span>
                </h2>

                {/* Description + benefits — desktop only */}
                <p className="hidden lg:block font-body text-[#6A9A98] text-[14px] leading-relaxed mb-8">
                  Share your details and we&apos;ll come back with a clear approach,
                  a realistic timeline, and a transparent quote.
                </p>

                <ul className="hidden lg:flex flex-col gap-3.5">
                  {BENEFITS.map(({ icon: Icon, text }, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-teal-strong/10 border border-teal-strong/20
                                      flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-3 h-3 text-teal-strong" />
                      </div>
                      <span className="font-body text-[13px] text-[#8ABAB8] leading-snug pt-1">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Right panel (form) ── */}
            <div className="bg-white px-5 py-6 lg:px-10 lg:py-12 overflow-y-auto">
              <AnimatePresence mode="wait">

                {/* Success */}
                {submitted && (
                  <motion.div key="success"
                    initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col items-center justify-center gap-4 min-h-[260px] text-center">
                    <div className="w-14 h-14 rounded-full bg-teal-strong/10 border border-teal-strong/25
                                    flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-teal-strong" />
                    </div>
                    <div>
                      <p className="font-display font-black text-dark text-[20px] uppercase tracking-wide mb-2">
                        Message sent!
                      </p>
                      <p className="font-body text-muted text-[14px] leading-relaxed max-w-[240px] mx-auto">
                        We&apos;ve received your details via WhatsApp.
                        Our team will respond within 2 hours.
                      </p>
                    </div>
                    <button onClick={handleClose}
                      className="text-[10px] font-body uppercase tracking-widest text-teal-accent
                                 hover:text-teal-strong transition-colors">
                      Close
                    </button>
                  </motion.div>
                )}

                {/* Form */}
                {!submitted && (
                  <motion.form key="form" onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="space-y-3.5 lg:space-y-4">

                    {/* Name + Email — always 2 cols */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelCls}>Full Name *</label>
                        <input required type="text" placeholder="Your name"
                          value={form.name} onChange={e => set('name', e.target.value)}
                          className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Email *</label>
                        <input required type="email" placeholder="your@email.com"
                          value={form.email} onChange={e => set('email', e.target.value)}
                          className={inputCls} />
                      </div>
                    </div>

                    {/* Phone + WhatsApp — always 2 cols */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelCls}>Phone *</label>
                        <input required type="tel" placeholder="Your phone number"
                          value={form.phone} onChange={e => set('phone', e.target.value)}
                          className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>On WhatsApp?</label>
                        <div className="flex gap-1.5 h-[42px] lg:h-[46px]">
                          {(['yes', 'no'] as const).map(opt => (
                            <button key={opt} type="button" onClick={() => set('whatsapp', opt)}
                              className={`flex-1 h-full rounded-xl text-[11px] font-body font-bold uppercase
                                          tracking-[0.08em] border transition-all duration-200 ${
                                form.whatsapp === opt && opt === 'yes'
                                  ? 'bg-teal-strong border-teal-strong text-white'
                                  : form.whatsapp === opt && opt === 'no'
                                  ? 'bg-dark border-dark text-white'
                                  : 'bg-[#F7FFFE] border-gray-200 text-muted hover:border-teal-strong/40'
                              }`}>
                              {opt === 'yes' ? '✓ Yes' : '✕ No'}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Date + Time */}
                    {/* Mobile: tabbed widget. Desktop: side by side */}
                    <div>
                      <label className={`${labelCls} lg:hidden`}>Preferred Date & Time</label>
                      <div className="lg:hidden">
                        <DateTimePicker
                          date={form.date} time={form.time}
                          onDate={v => set('date', v)} onTime={v => set('time', v)} />
                      </div>

                      <div className="hidden lg:grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>Preferred Date</label>
                          <div className="bg-[#F7FFFE] border border-gray-200 rounded-xl px-4 py-3">
                            <CalendarPicker value={form.date} onChange={v => set('date', v)} />
                          </div>
                        </div>
                        <div>
                          <label className={labelCls}>Preferred Time Slot</label>
                          <div className="bg-[#F7FFFE] border border-gray-200 rounded-xl p-3">
                            <div className="grid grid-cols-2 gap-1.5">
                              {TIME_SLOTS.map(slot => (
                                <button key={slot} type="button" onClick={() => set('time', slot)}
                                  className={`py-2 rounded-lg text-[11px] font-body font-bold tracking-wide
                                              border transition-all duration-150 ${
                                    form.time === slot
                                      ? 'bg-teal-strong border-teal-strong text-white shadow-sm'
                                      : 'bg-white border-gray-200 text-dark hover:border-teal-strong/40 hover:bg-teal-light/50'
                                  }`}>
                                  {slot}
                                </button>
                              ))}
                            </div>
                            {form.time && (
                              <div className="mt-2 pt-2 border-t border-gray-200 flex items-center justify-between">
                                <span className="text-[10px] font-body text-teal-accent">{form.time} selected</span>
                                <button type="button" onClick={() => set('time', '')}
                                  className="text-[10px] font-body text-gray-400 hover:text-red-400 uppercase tracking-wide transition-colors">
                                  Clear
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project details */}
                    <div>
                      <label className={labelCls}>Tell Us About Your Project</label>
                      <textarea rows={3}
                        placeholder="Briefly describe what you want to build..."
                        value={form.query} onChange={e => set('query', e.target.value)}
                        className={`${inputCls} resize-none`} />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-1">
                      <button type="submit"
                        className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-lime text-olive
                                   font-display font-black text-[11px] uppercase tracking-[0.14em]
                                   rounded-btn px-6 py-3.5 lg:px-7
                                   hover:shadow-[0_0_24px_rgba(200,230,0,0.4)] active:scale-[0.98]
                                   transition-all duration-200">
                        Send via WhatsApp <ArrowRight className="w-4 h-4" />
                      </button>
                      <button type="button" onClick={handleClose}
                        className="text-[11px] font-body uppercase tracking-widest text-gray-400
                                   hover:text-muted transition-colors">
                        Cancel
                      </button>
                    </div>

                  </motion.form>
                )}

              </AnimatePresence>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
