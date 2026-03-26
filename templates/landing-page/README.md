# Landing Page Template

Reusable landing page template using the Turquoic design system.
Edit **one file** (`_config.ts`) to produce a fully working landing page.

---

## Quick Start

```bash
# 1. Copy this folder into app/ with your URL slug as the folder name
cp -r templates/landing-page app/my-new-service

# 2. Open the config and edit your content
# app/my-new-service/_config.ts

# 3. Start the dev server
npm run dev

# 4. Visit your new page
# http://localhost:3000/my-new-service
```

---

## What to Edit in `_config.ts`

| Section | Key fields |
|---|---|
| SEO | `meta.title`, `meta.description`, `meta.keywords`, `meta.canonicalPath` |
| Brand | `brand.name`, `brand.tagline`, `brand.ctaUrl` (WhatsApp/Calendly link) |
| Navbar | `navLinks[]` — label + href pairs |
| Hero | `hero.headlines` (3 lines), `hero.subheadline`, `hero.heroImage` |
| Trust stats | `hero.trustItems[]` — value, label, Lucide icon name |
| Client logos | `hero.clientLogos[]` — src, alt, width |
| Social proof strip | `socialProof[]` — array of industry/sector strings |
| Problem section | `problemHook.heading`, `problemHook.painPoints[]` |
| Services | `servicesGrid.services[]` — icon, title, description |
| Pricing | `pricing.tiers[]` — name, price, features, highlighted |
| Testimonials | `testimonials.items[]` — name, quote, rating, initials, flag |
| Process steps | `howItWorks.steps[]` — step number, title, description |
| FAQ | `faq.items[]` — question + answer pairs |
| Final CTA | `finalCta.heading`, `finalCta.ctaLabel`, `finalCta.ctaUrl` |
| Footer | `footer.tagline`, `footer.socialLinks[]` |

---

## Adding/Replacing the Hero Image

1. Place your image in `public/assets/images/`
2. Update `hero.heroImage` in `_config.ts`:
   ```ts
   heroImage: '/assets/images/your-image.png',
   ```
The image works best at 16:9 ratio (e.g. 1200×675px) with a light or transparent background.

---

## Icon Names

All `icon` fields use **Lucide React** icon names.
Browse the full library at **https://lucide.dev/icons**

Common icons used:
`Brain` `Rocket` `Code2` `Star` `Zap` `RefreshCw` `Shield` `Globe`
`LayoutDashboard` `Server` `ShoppingCart` `UserX` `Clock` `Bug`
`Search` `PenTool` `Hammer` `Check` `ChevronDown`

---

## Changing the URL Slug

The folder name under `app/` becomes the URL. To change `/my-new-service` to `/ai-consulting`:

```bash
mv app/my-new-service app/ai-consulting
```

Then update `meta.canonicalPath` in `_config.ts`:
```ts
canonicalPath: '/ai-consulting',
```

---

## Adding or Removing Sections

Edit `page.tsx` — comment out or remove any `<Template*>` component:

```tsx
// Remove a section by commenting it out:
// <TemplateSocialProof />

// Reorder by moving lines up/down
```

---

## File Structure

```
(your-slug)/
├── _config.ts          ← EDIT THIS — all content lives here
├── types.ts            ← TypeScript interfaces (no editing needed)
├── layout.tsx          ← SEO metadata (reads from _config.ts)
├── page.tsx            ← Section composer (add/remove/reorder sections)
└── components/
    ├── TemplateNavbar.tsx
    ├── TemplateHero.tsx
    ├── TemplateSocialProof.tsx
    ├── TemplateProblemHook.tsx
    ├── TemplateServicesGrid.tsx
    ├── TemplatePricing.tsx
    ├── TemplateTestimonials.tsx
    ├── TemplateHowItWorks.tsx
    ├── TemplateFaq.tsx
    ├── TemplateFinalCta.tsx
    └── TemplateFooter.tsx
```

---

## Design System

All design tokens come from the shared `tailwind.config.ts` — no duplication:

| Token | Value |
|---|---|
| `teal-accent` | `#0EA5A0` |
| `teal-strong` | `#2DD4C0` |
| `teal-mid` | `#7FE8DC` |
| `teal-light` | `#E0FAF8` |
| `lime` | `#C8E600` |
| `olive` | `#556000` |
| `dark` | `#1A1A1A` |
| `muted` | `#555555` |
| `rounded-card` | `28px` |
| `rounded-btn` | `14px` |
| `font-display` | Brandon Text |
| `font-body` | Brandon Text |

---

## Notes

- Shared UI components (`LandingButton`, `AccordionItem`) are imported via `@/` and are **not** duplicated in this template.
- Animations come from `@/lib/animations` — `fadeUp`, `staggerContainer`, `wordReveal`, etc.
- Font (Brandon Text) and global CSS variables are loaded by the root `app/layout.tsx` — available automatically.
- `npm run build` — no extra configuration needed; Next.js detects the new route automatically.
