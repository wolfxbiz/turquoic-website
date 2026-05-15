'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Star, CheckCircle2, ArrowRight, Users, Building2 } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import AccordionItem from '@/components/landing/ui/AccordionItem'
import { staggerContainer, wordReveal, fadeUp, slideInLeft, slideInRight } from '@/lib/animations'

const REGISTER_URL = 'https://forms.gle/YOUR_GOOGLE_FORM_URL'

// ── logos (reuse site assets) ─────────────────────────────────────────────────
const logos = [
  { src: '/assets/logos/hsbc.png',                 alt: 'HSBC',                 w: 120 },
  { src: '/assets/logos/kpmg.png',                 alt: 'KPMG',                 w: 100 },
  { src: '/assets/logos/nielsen.png',              alt: 'Nielsen',              w: 130 },
  { src: '/assets/logos/kantar-tns.png',           alt: 'Kantar TNS',           w: 140 },
  { src: '/assets/logos/dubai-police-academy.png', alt: 'Dubai Police Academy', w: 160 },
  { src: '/assets/logos/dali-advertising.png',     alt: 'DALI Advertising',     w: 140 },
  { src: '/assets/logos/tott-books.png',           alt: 'TOTT Books',           w: 130 },
  { src: '/assets/logos/marunadam-malayalee.png',  alt: 'Marunadam Malayalee',  w: 150 },
  { src: '/assets/logos/foretell-global.png',      alt: 'Foretell Global',      w: 150 },
  { src: '/assets/logos/hylomart.png',             alt: 'HyloMart',             w: 140 },
  { src: '/assets/logos/alya-auditors.png',        alt: 'Alya Auditors',        w: 140 },
]
const logoTrack = [...logos, ...logos, ...logos]

// ── data ──────────────────────────────────────────────────────────────────────

const MODULES = [
  {
    id: '01',
    title: 'AI Landscape 2025',
    time: '9:00 – 10:00 AM',
    description:
      'What tools actually exist, what\'s hype vs. what\'s real, and where things are heading. No fluff — just clarity on what matters and what you can skip.',
  },
  {
    id: '02',
    title: 'Prompt Engineering That Works',
    time: '10:00 – 11:15 AM',
    description:
      'Beyond basic prompts. You\'ll learn how to give AI the right context, tone, and constraints so you get useful output every single time — not generic nonsense.',
  },
  {
    id: '03',
    title: 'AI for Research & Writing',
    time: '11:15 AM – 12:30 PM',
    description:
      'Reports, emails, proposals, content — write better in a fraction of the time. You\'ll do live exercises with your own real examples from your job or business.',
  },
  {
    id: '04',
    title: 'AI for Your Role',
    time: '1:30 – 2:45 PM',
    description:
      'Role-specific use cases — you choose your category (professional, business, educator, student) and we walk through AI workflows built around that exact context.',
  },
  {
    id: '05',
    title: 'Automating Repetitive Work',
    time: '2:45 – 4:00 PM',
    description:
      'No-code automation with AI. Connect your tools, build triggers, and eliminate the tasks that eat your week. You\'ll build something live that you can use immediately.',
  },
  {
    id: '06',
    title: 'Your Personal AI Workflow',
    time: '4:00 – 5:00 PM',
    description:
      'The capstone. You leave with a custom AI workflow built for your actual life — not a template, not a handout. Something you made, and can use on Monday.',
  },
]

const AUDIENCES = [
  {
    title: 'Working Professionals',
    subtitle: 'HR · Marketing · Sales · Finance',
    description:
      'Stay ahead of automation. Use AI to do in 10 minutes what used to take all day — and never worry about being replaced by someone who knows how to use it.',
  },
  {
    title: 'Business Owners & Entrepreneurs',
    subtitle: 'SMEs · Retailers · Service Providers',
    description:
      'Cut costs, speed up your operations, and compete with bigger players using tools you can start today — no developer, no budget, no technical background needed.',
  },
  {
    title: 'Students & Fresh Graduates',
    subtitle: 'College · Final Year · Job Seekers',
    description:
      'Add AI fluency to your resume before your peers do. Stand out in every interview and every application with skills that most graduates don\'t yet have.',
  },
  {
    title: 'Teachers & Educators',
    subtitle: 'Schools · Colleges · Trainers',
    description:
      'Transform your classroom. Use AI to create content, save prep time, and teach smarter — without needing to become a tech expert.',
  },
]

const TESTIMONIALS = [
  {
    quote: 'I came in sceptical — I\'m not a tech person at all. By the end I had automated three of my weekly tasks. The practical approach made all the difference.',
    author: 'Sreeja Nair',
    role: 'HR Manager',
    company: 'Trivandrum',
  },
  {
    quote: 'Our whole marketing team attended. We walked out with an actual content workflow using AI. We\'ve cut our content production time by 60% since then.',
    author: 'Arun Mathew',
    role: 'Marketing Lead',
    company: 'Kochi',
  },
  {
    quote: 'As a teacher I was nervous about AI. Now I use it every single day for lesson planning and student feedback. This workshop changed how I work completely.',
    author: 'Meera Thomas',
    role: 'College Lecturer',
    company: 'Thrissur',
  },
  {
    quote: 'I expected a boring seminar. Instead I built an actual automation for my business during the workshop itself. Completely different from what I imagined.',
    author: 'Rahul Krishnan',
    role: 'Founder',
    company: 'Startup, Kozhikode',
  },
  {
    quote: 'The workshop is genuinely different from every other AI talk I\'ve seen. They actually make you use the tools, not just listen to someone talk about them.',
    author: 'Divya Menon',
    role: 'Content Strategist',
    company: 'Bangalore',
  },
  {
    quote: 'Worth every rupee. I walked out knowing exactly which tools to use for my work and how to use them. No confusion, no overwhelm.',
    author: 'Joseph Varghese',
    role: 'Financial Advisor',
    company: 'Trivandrum',
  },
]

const track1 = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]
const track2 = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].reverse()

const FAQS = [
  {
    question: 'Do I need a technical background?',
    answer:
      'No. This workshop is designed for people with zero technical experience. If you can use WhatsApp, you can follow everything we teach. We start from the basics and build up to practical, usable tools.',
  },
  {
    question: 'Is this online or in-person?',
    answer:
      'Both. We run in-person batches in Trivandrum and Kochi, and online sessions via Zoom. The format is identical — live, interactive, and hands-on. You choose your preferred format during registration.',
  },
  {
    question: 'What do I need to bring?',
    answer:
      'Just a laptop or tablet with internet access. We\'ll handle everything else — including free accounts for all the AI tools we use during the workshop.',
  },
  {
    question: 'Can I book this for my team or organisation?',
    answer:
      'Yes. We offer group bookings for offices, colleges, and organisations. The content is customised around your industry or team\'s specific use cases. WhatsApp us at +91 80862 86886 to discuss.',
  },
  {
    question: 'Is this a one-time event or a course?',
    answer:
      'It\'s a focused 1-day workshop, not a multi-week course. The goal is to give you real skills in one day — not string you along for months. We run new batches regularly.',
  },
  {
    question: 'Will there be a certificate?',
    answer:
      'Yes. Participants receive a digital certificate of completion from Turquoic, along with a curated resource kit and access to our private AI community group.',
  },
]

const OUTCOMES = [
  'A personal AI workflow — built by you, for your actual job or business',
  'Prompt templates you can copy and use immediately across any AI tool',
  'Clarity on which AI tools actually save time and which are noise',
  'Hands-on practice: ChatGPT, Gemini, and no-code automation tools',
  'A curated resource kit to keep learning after the workshop',
  'Access to a private community of AI-literate professionals',
]

// ── shared register button ─────────────────────────────────────────────────────

function RegisterBtn({ className = '', large = false }: { className?: string; large?: boolean }) {
  return (
    <motion.a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-lime text-olive font-body font-bold uppercase tracking-[0.12em] rounded-btn transition-all duration-200 ${large ? 'px-8 py-4 text-sm' : 'px-6 py-3 text-[11px]'} ${className}`}
      whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(200,230,0,0.4)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      Register Now
      <ArrowRight size={large ? 17 : 13} strokeWidth={2.5} />
    </motion.a>
  )
}

// ── HERO ──────────────────────────────────────────────────────────────────────

const h1 = 'EVERYONE TALKS AI.'
const h2 = 'WE TEACH YOU TO'
const h3 = 'ACTUALLY USE IT.'
const w1 = h1.split(' ')
const w2 = h2.split(' ')
const w3 = h3.split(' ')
const allWords = [...w1, ...w2, ...w3]

const NAV_H = 64

const TRUST_STATS = [
  { value: '200+', label: 'People Trained',  Icon: Users },
  { value: '15+',  label: 'Organisations',   Icon: Building2 },
  { value: '4.9★', label: 'Avg. Rating',     Icon: Star },
]

function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden flex flex-col">

      {/* ── MOBILE: image on top, text below ── */}
      <div className="md:hidden relative w-full overflow-hidden" style={{ paddingTop: NAV_H }}>
        <Image
          src="/assets/images/ai-workshop-hero.jpg"
          alt="AI Workshop — smiling business professionals"
          width={1200}
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
        className="md:hidden bg-white px-6 py-8 flex flex-col gap-5"
      >
        <SectionLabel>TURQUOIC AI WORKSHOP · KERALA</SectionLabel>
        <h1 className="font-display font-extrabold text-[34px] leading-[1.05] tracking-tight text-dark">
          Everyone Talks AI.<br />
          We Teach You To<br />
          <span className="text-teal-accent">Actually Use It.</span>
        </h1>
        <p className="font-body text-[17px] text-muted leading-relaxed">
          Leave with a real AI workflow built for your actual job or business — in one focused day. No technical background needed.
        </p>
        <div className="flex flex-col gap-3">
          <RegisterBtn large className="justify-center" />
          <a href="#modules" className="text-center font-body text-[11px] uppercase tracking-[0.12em] text-muted hover:text-teal-accent transition-colors">
            See What&apos;s Covered ↓
          </a>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {TRUST_STATS.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-teal-mid/30 p-4 flex flex-col items-center text-center shadow-[0_2px_12px_rgba(45,212,192,0.08)]">
              <div className="w-8 h-8 rounded-lg bg-teal-strong flex items-center justify-center mb-2">
                <s.Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-extrabold text-[22px] text-dark leading-none">{s.value}</span>
              <span className="font-body text-[10px] text-teal-accent font-medium uppercase tracking-wide mt-1.5 leading-tight">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── DESKTOP: split — text left, image right ── */}
      <div
        className="hidden md:flex min-h-screen bg-white items-center overflow-hidden"
        style={{ paddingTop: NAV_H }}
      >
        {/* Left — text */}
        <motion.div
          className="w-[44%] lg:w-[42%] flex-shrink-0 pl-10 lg:pl-20 xl:pl-28 pr-6 lg:pr-10 pb-20"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="max-w-[520px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <SectionLabel>TURQUOIC AI WORKSHOP · KERALA</SectionLabel>
            </motion.div>

            <motion.h1
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="font-display font-extrabold text-[clamp(32px,3.2vw,52px)] leading-[1.05] tracking-tight text-dark mb-5"
            >
              <span className="block">
                {w1.map((word, i) => (
                  <motion.span key={i} variants={wordReveal} className="inline-block mr-[0.22em]"
                    transition={{ delay: i * 0.08 }}>
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block">
                {w2.map((word, i) => (
                  <motion.span key={i} variants={wordReveal} className="inline-block mr-[0.22em]"
                    transition={{ delay: (w1.length + i) * 0.08 }}>
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block text-teal-accent">
                {w3.map((word, i) => (
                  <motion.span key={i} variants={wordReveal} className="inline-block mr-[0.22em]"
                    transition={{ delay: (w1.length + w2.length + i) * 0.08 }}>
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: allWords.length * 0.08 + 0.2 }}
              className="font-body text-[17px] lg:text-[19px] text-muted max-w-md mb-8 leading-relaxed"
            >
              Leave with a real AI workflow built for your actual job or business —
              in one focused day. No technical background needed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: allWords.length * 0.08 + 0.35 }}
              className="flex items-center gap-4 mb-10"
            >
              <RegisterBtn large />
              <a href="#modules" className="font-body font-bold text-[11px] uppercase tracking-[0.12em] text-muted hover:text-teal-accent transition-colors">
                See Modules ↓
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: allWords.length * 0.08 + 0.55 }}
              className="flex items-center gap-4"
            >
              {TRUST_STATS.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl border border-teal-mid/30 px-4 py-3.5 flex items-center gap-3 shadow-[0_2px_12px_rgba(45,212,192,0.08)]">
                  <div className="w-9 h-9 rounded-lg bg-teal-strong flex items-center justify-center flex-shrink-0">
                    <s.Icon className="w-[18px] h-[18px] text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-lg text-dark leading-none block">{s.value}</span>
                    <span className="font-body text-[10px] text-teal-accent font-medium uppercase tracking-wide">{s.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right — image */}
        <motion.div
          className="flex-1 self-stretch relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <Image
            src="/assets/images/ai-workshop-hero.jpg"
            alt="AI Workshop — smiling business professionals"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Blend into white left panel */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #ffffff 0%, transparent 18%)' }} />
          {/* Subtle teal tint */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(45,212,192,0.10) 0%, transparent 55%)' }} />
        </motion.div>
      </div>

      {/* Logo strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="relative z-10 w-full bg-white py-6 sm:py-8 overflow-hidden"
      >
        <p className="text-center font-body text-[11px] uppercase tracking-[0.15em] text-muted mb-5">
          Professionals from these organisations have attended
        </p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }} />
          <motion.div
            className="flex items-center gap-10 sm:gap-14 md:gap-16 w-max"
            animate={{ x: ['0%', '-33.333%'] }}
            transition={{ duration: 50, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
          >
            {logoTrack.map((logo, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center px-4 sm:px-6 h-14 md:h-[60px]">
                <Image src={logo.src} alt={logo.alt} width={logo.w} height={48} unoptimized
                  className="object-contain h-full w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

// ── ABOUT / HOOK ──────────────────────────────────────────────────────────────

function HookSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section className="overflow-hidden flex flex-col lg:flex-row min-h-[80vh] w-full bg-white">
      {/* Left — video */}
      <motion.div
        ref={ref}
        variants={slideInLeft}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="w-full lg:w-1/2 flex items-center p-4 lg:p-6"
      >
        <div className="lg:hidden relative w-full rounded-card overflow-hidden" style={{ aspectRatio: '9/16' }}>
          <video src="/assets/videos/hero-video-mobile.mp4" autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="hidden lg:block relative w-full h-full rounded-card overflow-hidden" style={{ minHeight: '560px' }}>
          <video src="/assets/videos/hero-video-mobile.mp4" autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* Right — content */}
      <motion.div
        variants={slideInRight}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="bg-white w-full lg:w-1/2 flex items-center justify-center px-10 md:px-16 lg:px-20 xl:px-28 py-20 lg:py-0"
      >
        <div className="w-full max-w-xl">
          <SectionLabel>01 — THE PROBLEM</SectionLabel>
          <AnimatedHeading
            text="Everyone's talking about AI. Almost nobody knows how to use it."
            tag="h2"
            className="font-display font-extrabold text-[clamp(28px,3.2vw,46px)] text-dark leading-tight mb-4 uppercase"
          />
          <div className="w-16 h-1 bg-teal-strong rounded-full mb-8" />
          <div className="flex flex-col gap-5">
            <p className="font-body text-muted text-[16px] leading-relaxed">
              The AI conversation is everywhere — in every boardroom, every classroom, every WhatsApp group.
              But most people are still on the outside looking in. They know it matters.
              They just don't know where to start.
            </p>
            <p className="font-body text-muted text-[16px] leading-relaxed">
              Not the basics. Not just ChatGPT prompts. Actually using AI to work faster, think sharper,
              and get ahead — whether you're a student, a teacher, a business owner, or an employee.
            </p>
            <p className="font-body text-muted text-[16px] leading-relaxed">
              That's exactly what this workshop is. One day. Hands-on. No jargon.
              You leave with real skills and a workflow built for your actual life.
            </p>
          </div>
          <div className="mt-8">
            <RegisterBtn large />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// ── WHO IS THIS FOR ───────────────────────────────────────────────────────────

function AudienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="audience" className="relative overflow-hidden py-24 lg:py-32">

      {/* Full-bleed background image */}
      <Image
        src="/assets/images/ai-workshop-hero.jpg"
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden
      />

      {/* Dark teal overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(160deg, rgba(9,25,24,0.93) 0%, rgba(11,36,34,0.89) 100%)' }} />
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(ellipse, rgba(45,212,192,0.6) 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel color="#2DD4C0">02 — WHO IS THIS FOR</SectionLabel>
          <AnimatedHeading
            text="Built for people who work, not just people who code."
            tag="h2"
            className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-white leading-tight max-w-3xl uppercase"
          />
        </motion.div>

        {/* 2×2 glass cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5"
        >
          {AUDIENCES.map((a, i) => (
            <motion.div
              key={a.title}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative rounded-card overflow-hidden p-8 flex flex-col gap-5 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.09)',
                backdropFilter: 'blur(14px)',
              }}
            >
              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ border: '1px solid rgba(45,212,192,0.4)', boxShadow: 'inset 0 0 40px rgba(45,212,192,0.05)' }} />

              {/* Big faded number */}
              <span
                className="font-display font-black leading-none select-none"
                style={{ fontSize: 'clamp(3rem,5vw,4.5rem)', color: 'rgba(45,212,192,0.15)' }}
              >
                0{i + 1}
              </span>

              {/* Text */}
              <div>
                <h3 className="font-display font-black text-[clamp(17px,1.8vw,22px)] text-white uppercase leading-tight tracking-tight mb-1 group-hover:text-teal-mid transition-colors duration-300">
                  {a.title}
                </h3>
                <p className="font-body text-[11px] text-teal-strong uppercase tracking-[0.14em] mb-4">
                  {a.subtitle}
                </p>
                <p className="font-body text-white/55 text-[14px] leading-relaxed">
                  {a.description}
                </p>
              </div>

              {/* Bottom line — expands on hover */}
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] bg-teal-strong origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center gap-6 flex-wrap"
        >
          <RegisterBtn large />
          <p className="font-body text-white/35 text-[13px]">
            Online & in-person · English & Malayalam · No tech background needed
          </p>
        </motion.div>

      </div>
    </section>
  )
}

// ── MODULES (editorial list — like CapabilityProgramme) ───────────────────────

function ModulesSection() {
  const headerRef = useRef(null)
  const listRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-10% 0px' })
  const listInView = useInView(listRef, { once: true, amount: 0.15 })

  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start end', 'center center'] })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="modules" className="bg-white overflow-hidden">
      {/* Header panel */}
      <div ref={headerRef} className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <SectionLabel>03 — WHAT YOU'LL LEARN</SectionLabel>
            <AnimatedHeading
              text="Six modules. One day. Skills you use immediately."
              tag="h2"
              className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase mb-5"
            />
            <p className="font-body text-muted text-[17px] leading-relaxed">
              Every module is hands-on. You don't just hear about AI — you use it.
              By the end of the day you'll have built something real.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Editorial list */}
      <div ref={listRef} className="pb-20">
        <div className="border-t border-dark/10 mx-6 md:mx-16 lg:mx-24" />

        {MODULES.map((mod, i) => (
          <motion.div
            key={mod.id}
            initial={{ opacity: 0, y: 24 }}
            animate={listInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative"
          >
            <div className="grid grid-cols-[56px_1fr] lg:grid-cols-[8%_20%_1fr_auto] items-start gap-x-8 lg:gap-x-0 py-10 px-6 md:px-16 lg:px-24 cursor-default">
              {/* Hover underline */}
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-teal-strong origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />

              {/* Big faded number */}
              <span
                className="font-display font-black leading-none select-none self-center transition-colors duration-300 group-hover:text-teal-strong"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', color: 'rgba(26,26,26,0.09)' }}
              >
                {mod.id}
              </span>

              {/* Title */}
              <h3 className="font-display font-black text-[clamp(16px,1.7vw,24px)] text-dark uppercase leading-tight tracking-tight self-center group-hover:text-teal-accent transition-colors duration-300 col-span-1 lg:pr-10">
                {mod.title}
              </h3>

              {/* Description — desktop */}
              <p className="hidden lg:block font-body text-[15px] text-muted leading-relaxed self-center">
                {mod.description}
              </p>

              {/* Time — desktop */}
              <span className="hidden lg:block font-body text-[11px] text-teal-accent uppercase tracking-[0.12em] self-center text-right whitespace-nowrap pl-8">
                {mod.time}
              </span>

              {/* Description — mobile */}
              <div className="lg:hidden mt-3 col-start-2">
                <p className="font-body text-[14px] text-muted leading-relaxed mb-1">{mod.description}</p>
                <span className="font-body text-[11px] text-teal-accent uppercase tracking-[0.12em]">{mod.time}</span>
              </div>
            </div>
            <div className="border-t border-dark/10 mx-6 md:mx-16 lg:mx-24" />
          </motion.div>
        ))}

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={listInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="px-6 md:px-16 lg:px-24 pt-10"
        >
          <div className="flex items-center gap-3 flex-wrap">
            {['5:00–5:30 PM · Live Q&A', 'Certificate', 'Resource Kit', 'Private Community Access'].map((pill) => (
              <div key={pill} className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 border border-teal-mid" style={{ background: '#E0FAF8' }}>
                <div className="w-2 h-2 rounded-full bg-teal-strong flex-shrink-0" />
                <span className="font-body text-xs text-teal-accent font-medium">{pill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ── OUTCOMES ──────────────────────────────────────────────────────────────────

function OutcomesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section className="overflow-hidden flex flex-col lg:flex-row min-h-[70vh] w-full">
      {/* Left — dark panel */}
      <motion.div
        ref={ref}
        variants={slideInLeft}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="w-full lg:w-1/2 flex items-center px-10 md:px-16 lg:px-20 xl:px-24 py-20"
        style={{ background: 'linear-gradient(160deg, #091918 0%, #0B2422 60%, #0d2a28 100%)' }}
      >
        <div className="max-w-xl">
          <SectionLabel color="#2DD4C0">04 — WHAT YOU LEAVE WITH</SectionLabel>
          <AnimatedHeading
            text="Not certificates. Skills you use on Monday."
            tag="h2"
            className="font-display font-extrabold text-[clamp(28px,3.2vw,46px)] text-white leading-tight uppercase mb-4"
          />
          <div className="w-16 h-1 bg-teal-strong rounded-full mb-6" />
          <p className="font-body text-white/60 text-[16px] leading-relaxed">
            Every outcome below is something you build or receive during the workshop —
            not concepts you hear about once and forget.
          </p>
        </div>
      </motion.div>

      {/* Right — outcomes list */}
      <motion.div
        variants={slideInRight}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="w-full lg:w-1/2 bg-white flex items-center px-10 md:px-16 lg:px-20 xl:px-24 py-20"
      >
        <div className="w-full max-w-lg">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col"
          >
            {OUTCOMES.map((o, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group flex items-start gap-5 py-5 border-b border-dark/10 last:border-0"
              >
                <CheckCircle2 size={20} className="text-teal-strong shrink-0 mt-0.5" />
                <p className="font-body text-dark text-[16px] leading-relaxed group-hover:text-teal-accent transition-colors duration-300">
                  {o}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-8">
            <RegisterBtn large />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// ── TESTIMONIALS (dual marquee) ───────────────────────────────────────────────

function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section className="bg-teal-light py-24 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <SectionLabel className="justify-center">05 — TESTIMONIALS</SectionLabel>
          <AnimatedHeading
            text="Everyone Says the Same Thing After."
            tag="h2"
            className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col gap-5"
      >
        {/* Row 1 — left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #E0FAF8, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #E0FAF8, transparent)' }} />
          <motion.div
            className="flex gap-5 w-max"
            animate={{ x: ['0%', '-33.333%'] }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
          >
            {track1.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </motion.div>
        </div>

        {/* Row 2 — right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #E0FAF8, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #E0FAF8, transparent)' }} />
          <motion.div
            className="flex gap-5 w-max"
            animate={{ x: ['-33.333%', '0%'] }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
          >
            {track2.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div className="w-[380px] flex-shrink-0 bg-white rounded-2xl p-7 flex flex-col gap-4"
      style={{ boxShadow: '0 4px 32px rgba(45,212,192,0.10)', border: '1px solid rgba(127,232,220,0.4)' }}>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, s) => (
          <Star key={s} size={13} className="fill-teal-strong text-teal-strong" />
        ))}
      </div>
      <p className="font-body text-dark text-[14px] leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
      <div className="border-t border-teal-light/60" />
      <div>
        <p className="font-body font-semibold text-dark text-sm leading-tight">{t.author}</p>
        <p className="font-body text-teal-accent text-xs font-medium mt-0.5">{t.role}</p>
        <p className="font-body text-muted text-xs">{t.company}</p>
      </div>
    </div>
  )
}

// ── WORKSHOP DETAILS ──────────────────────────────────────────────────────────

function DetailsSection() {
  const headerRef = useRef(null)
  const listRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-10% 0px' })
  const listInView = useInView(listRef, { once: true, amount: 0.15 })

  const details = [
    { id: '01', title: 'Duration', value: 'One full day — 9:00 AM to 5:30 PM' },
    { id: '02', title: 'Format', value: 'Online via Zoom · In-person in Trivandrum & Kochi' },
    { id: '03', title: 'Language', value: 'English & Malayalam' },
    { id: '04', title: 'Batch Size', value: 'Small groups for better learning — seats are limited' },
    { id: '05', title: 'What to Bring', value: 'Just a laptop or tablet with internet. We handle everything else.' },
    { id: '06', title: 'Price', value: '₹X,XXX per person · Student discount available · Group rates on request' },
  ]

  return (
    <section id="details" className="bg-[#F7FFFE] overflow-hidden">
      <div ref={headerRef} className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
          >
            <div className="max-w-xl">
              <SectionLabel>06 — WORKSHOP DETAILS</SectionLabel>
              <AnimatedHeading
                text="Everything you need to know before you register."
                tag="h2"
                className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase"
              />
            </div>
            <RegisterBtn large />
          </motion.div>
        </div>
      </div>

      <div ref={listRef} className="pb-20">
        <div className="border-t border-dark/10 mx-6 md:mx-16 lg:mx-24" />
        {details.map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 20 }}
            animate={listInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative"
          >
            <div className="grid grid-cols-[56px_1fr] lg:grid-cols-[8%_25%_1fr] items-center gap-x-8 lg:gap-x-0 py-8 px-6 md:px-16 lg:px-24 cursor-default">
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-teal-strong origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
              <span
                className="font-display font-black leading-none select-none transition-colors duration-300 group-hover:text-teal-strong"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', color: 'rgba(26,26,26,0.09)' }}
              >
                {d.id}
              </span>
              <h3 className="font-display font-black text-[clamp(15px,1.6vw,22px)] text-dark uppercase leading-tight tracking-tight group-hover:text-teal-accent transition-colors duration-300 lg:pr-10">
                {d.title}
              </h3>
              <p className="hidden lg:block font-body text-[15px] text-muted leading-relaxed">{d.value}</p>
              <p className="lg:hidden font-body text-[14px] text-muted leading-relaxed mt-2 col-start-2">{d.value}</p>
            </div>
            <div className="border-t border-dark/10 mx-6 md:mx-16 lg:mx-24" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          className="flex items-center gap-3 mb-4 justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block w-6 h-px bg-teal-accent" />
          <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-teal-accent">07 — FAQ</span>
          <span className="inline-block w-6 h-px bg-teal-accent" />
        </motion.div>

        <motion.h2
          className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-dark leading-tight uppercase text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Common Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          {FAQS.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ── FINAL CTA ─────────────────────────────────────────────────────────────────

function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #091918 0%, #0B1E1D 50%, #0D2A28 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(45,212,192,0.12) 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(200,230,0,0.05) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center" ref={ref}>
        <motion.h2
          className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-white leading-tight uppercase mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Seats are limited. Don&apos;t wait until they&apos;re gone.
        </motion.h2>

        <motion.p
          className="font-body text-xl text-[#6A9A98] mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          Online and in-person slots open now. One day is all it takes
          to go from AI-curious to AI-capable.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
        >
          <RegisterBtn large />
          <p className="font-body text-[12px] text-white/25 uppercase tracking-widest">
            Questions? WhatsApp us at +91 80862 86886
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ── NAV ───────────────────────────────────────────────────────────────────────

function WorkshopNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-teal-mid/30 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-display font-bold text-2xl uppercase tracking-tight transition-colors duration-300"
          style={{ color: scrolled ? '#1A1A1A' : '#0EA5A0' }}
        >
          Turquoic
        </Link>
        <div className="flex items-center gap-6">
          <a
            href="#modules"
            className="hidden md:block font-body text-[13px] uppercase tracking-wide transition-colors duration-300"
            style={{ color: scrolled ? '#555555' : '#0EA5A0' }}
          >
            Modules
          </a>
          <a
            href="#details"
            className="hidden md:block font-body text-[13px] uppercase tracking-wide transition-colors duration-300"
            style={{ color: scrolled ? '#555555' : '#0EA5A0' }}
          >
            Details
          </a>
          <RegisterBtn />
        </div>
      </div>
    </nav>
  )
}

// ── FOOTER ────────────────────────────────────────────────────────────────────

function WorkshopFooter() {
  return (
    <footer className="bg-dark text-white border-t-2 border-teal-strong py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="font-display font-bold text-3xl text-white uppercase tracking-tight">
          Turquoic
        </Link>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <Link href="/" className="font-body text-white/50 hover:text-teal-strong text-sm uppercase tracking-wide transition-colors">Home</Link>
          <Link href="/solutions" className="font-body text-white/50 hover:text-teal-strong text-sm uppercase tracking-wide transition-colors">Solutions</Link>
          <a href="https://wa.me/918086286886" target="_blank" rel="noopener noreferrer"
            className="font-body text-white/50 hover:text-teal-strong text-sm uppercase tracking-wide transition-colors">
            WhatsApp
          </a>
        </div>
        <p className="font-body text-white/25 text-[12px]">
          © {new Date().getFullYear()} Turquoic. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function AIWorkshopPage() {
  return (
    <>
      <WorkshopNav />
      <main>
        <Hero />
        <HookSection />
        <AudienceSection />
        <ModulesSection />
        <OutcomesSection />
        <TestimonialsSection />
        <DetailsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <WorkshopFooter />
    </>
  )
}
