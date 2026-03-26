# Turquoic Landing Page Template — Standalone

A complete, self-contained Next.js landing page. No external dependencies on the main project.
Edit **one file** (`_config.ts`) to produce a fully working landing page.

---

## Setup

```bash
# 1. Copy this folder anywhere on your machine (or send as a zip)
# 2. Install dependencies
npm install

# 3. Add font files (see below)
# 4. Add your hero image to public/assets/images/landing-hero.png
# 5. Edit _config.ts with your content
# 6. Start dev server
npm run dev
```

Visit `http://localhost:3000`

---

## Fonts

This template uses **Brandon Text** (licensed commercial font).

Copy the font files from the main Turquoic project into `public/assets/fonts/`:

```
BrandonText-w100.woff2
BrandonText-w300.woff2
BrandonText-w400.woff2
BrandonText-w500.woff2
BrandonText-w700.woff2
BrandonText-w900.woff2
```

Without them, the page falls back to Helvetica Neue / Arial and still looks fine.

---

## What to Edit in `_config.ts`

| Section | What to change |
|---|---|
| `meta` | Page title, description, keywords for SEO |
| `brand` | Company name, tagline, WhatsApp/CTA URL |
| `navLinks` | Navbar link labels and href anchors |
| `hero.headlines` | 3 headline lines (array of 3 strings) |
| `hero.accentLineIndex` | Which line gets teal colour (0, 1, or 2) |
| `hero.subheadline` | Paragraph below headline |
| `hero.heroImage` | Path to your hero image |
| `hero.trustItems` | Stats (value, label, Lucide icon name) |
| `hero.clientLogos` | Client logo images (src, alt, width) |
| `socialProof` | Industry names for the scrolling strip |
| `problemHook` | Heading + 3 pain points |
| `servicesGrid` | 6 service cards (icon, title, description) |
| `pricing` | 3 pricing tiers (name, price, features) |
| `testimonials` | Client reviews |
| `howItWorks` | 4 process steps |
| `faq` | Question & answer pairs |
| `finalCta` | Bottom CTA headline + button |
| `footer` | Tagline + social links |

---

## Hero Image

- Place at `public/assets/images/landing-hero.png`
- Best at 16:9 ratio (e.g. 1200×675px)
- Light or gradient background works best

Update the path in `_config.ts`:
```ts
heroImage: '/assets/images/your-image.png',
```

---

## Client Logos

Place logos in `public/assets/logos/` and reference them in `_config.ts`:
```ts
clientLogos: [
  { src: '/assets/logos/client-name.png', alt: 'Client Name', width: 120 },
  ...
]
```

---

## Icon Names

All `icon` fields use **Lucide React** names.
Browse: **https://lucide.dev/icons**

Common examples: `Brain` `Rocket` `Code2` `Star` `Zap` `Shield` `Globe`
`LayoutDashboard` `Server` `ShoppingCart` `UserX` `Clock` `Bug`

---

## Add / Remove Sections

Edit `app/page.tsx` — comment out or delete any section component:

```tsx
// <SocialProof />   ← commented out = hidden
<ProblemHook />
<ServicesGrid />
```

---

## File Structure

```
standalone-landing/
├── _config.ts              ← EDIT THIS — all content
├── types.ts                ← TypeScript types (no editing needed)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── app/
│   ├── layout.tsx          ← Root layout + SEO
│   ├── globals.css         ← Fonts + design tokens
│   └── page.tsx            ← Section composer
├── lib/
│   └── animations.ts       ← Framer Motion variants
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── AccordionItem.tsx
│   └── sections/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── SocialProof.tsx
│       ├── ProblemHook.tsx
│       ├── ServicesGrid.tsx
│       ├── Pricing.tsx
│       ├── Testimonials.tsx
│       ├── HowItWorks.tsx
│       ├── Faq.tsx
│       ├── FinalCta.tsx
│       └── Footer.tsx
└── public/
    └── assets/
        ├── fonts/          ← Add Brandon Text .woff2 files here
        ├── images/         ← Add hero image here
        └── logos/          ← Add client logos here
```

---

## Build for Production

```bash
npm run build
npm run start
```

Or deploy to Vercel — just drag the folder into vercel.com/new.
