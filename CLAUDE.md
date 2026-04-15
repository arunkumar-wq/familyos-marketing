@AGENTS.md

# FamilyOS Marketing Website

Marketing website for FamilyOS — an AI-powered platform that combines a document vault, financial portfolio tracking, and connected intelligence into one app for families.

**Tagline:** "The operating system every family needs to protect what matters most"
**Founder:** Gurmail Singh, Founder & CEO
**App URL:** https://familyos-staging-production.up.railway.app
**Live site:** https://web-production-f406.up.railway.app
**GitHub:** https://github.com/arunkumar-wq/familyos-marketing

---

## Tech Stack

- **Next.js 16** (App Router, Turbopack) — read `node_modules/next/dist/docs/` for breaking changes
- **TypeScript** strict mode
- **Tailwind CSS v4** (`@tailwindcss/postcss`) — design tokens defined in `globals.css` via `@theme inline`
- **Inter** font via `next/font/google` with `display: swap`
- No additional libraries — all animations are pure CSS + IntersectionObserver

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              Root layout, Inter font, default metadata
│   ├── globals.css             Design tokens, animations, focus styles
│   ├── page.tsx                Homepage (Hero → Problem → Solution → Features → How → Replaces → Pricing → FAQ → CTA)
│   ├── features/page.tsx       Features page (2 pillars + Connected Intelligence)
│   ├── pricing/
│   │   ├── page.tsx            Server component for metadata
│   │   └── PricingContent.tsx  Client component with state (toggle, FAQ accordion)
│   └── about/page.tsx          About page (founder bio, mission, stats)
├── components/
│   ├── Header.tsx              Sticky nav, mobile hamburger (44px tap target)
│   ├── Footer.tsx              5-col grid → 2-col → 1-col, slate-950 bg
│   └── AnimateOnScroll.tsx     IntersectionObserver wrapper for fade-up animations
└── public/images/              Product screenshots + founder photo
```

---

## Design System

### Colors (defined in `globals.css` via `@theme inline`)

| Token | Value | Usage |
|-------|-------|-------|
| `navy` | `#0F172A` (slate-900) | Body text, dark sections (use `slate-900` directly when possible) |
| `navy-dark` | `#020617` (slate-950) | Footer, near-black backgrounds |
| `teal` | `#0D9488` | Primary CTA, accents, section labels, checkmarks |
| `teal-hover` | `#0F766E` | CTA hover state |
| `teal-light` | `#F0FDFA` | Light teal backgrounds |
| `gray-bg` | `#F8FAFC` (slate-50) | Section backgrounds (alternate with white) |
| `gray-border` | `#E2E8F0` (slate-200) | Card borders, dividers |

**Note:** Prefer Tailwind's `slate-*` semantic classes over custom navy/gray tokens going forward.

### Typography

- **Font:** Inter (loaded via `next/font/google`, variable: `--font-inter`)
- **Hero h1:** `text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-[-0.03em] leading-[1.08]`
- **Section h2:** `text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight`
- **Body:** `text-sm sm:text-base text-slate-500 leading-relaxed`
- **Section labels** (above h2): `text-sm font-medium text-teal uppercase tracking-widest mb-3`

### Spacing

- **Container:** `max-w-6xl mx-auto px-5 sm:px-6` (was 7xl; tighter for US SaaS feel)
- **Section padding:** `py-20 sm:py-28`
- **Card padding:** `p-6` or `p-7`
- **Card grid gap:** `gap-4`

### Buttons

- **All CTAs use pill shape:** `rounded-full`
- **Primary:** `bg-teal text-white hover:bg-teal-hover font-medium px-6 py-2.5 rounded-full`
- **Dark secondary:** `bg-slate-900 text-white hover:bg-slate-800`
- **Outline:** `border border-slate-700 text-slate-300 hover:bg-slate-800` (on dark bg)
- **All buttons get `btn-press` class** for scale(0.97) on click

### Shadows (CSS variables)

- `--shadow-card` — default card shadow (subtle)
- `--shadow-card-hover` — used on hover via `.card-hover` class
- `--shadow-elevated` — for popular pricing tier, hero images

### Animations

- `.hero-animate > *` — cascading fade-up on hero children (120ms stagger)
- `.animate-on-scroll` + `.is-visible` — IntersectionObserver-driven fade-up (used via `<FadeIn>` and `<AnimateOnScroll stagger>` components)
- `.card-hover` — translateY(-4px) lift on hover
- `.btn-press` — scale(0.97) on `:active`
- `.animate-float` — gentle bob (5s loop) on hero screenshot
- All animations respect `prefers-reduced-motion: reduce`

---

## Conventions

### Critical: Unicode in JSX text

`\u2013`, `\u2014`, `\u2019` (en-dash, em-dash, right quote) **only work inside JS string literals** (in quotes). In JSX text content (between tags), they render as literal `\u2013`. Use one of:
- HTML entities: `&ndash;`, `&mdash;`, `&rsquo;`
- Actual Unicode characters: `–`, `—`, `'`

### Pages must export metadata

For SEO. Each page has unique title + description. Layout uses `title.template = "%s | FamilyOS"`.

If a page is `"use client"`, extract content into a separate `*Content.tsx` client component and keep the `page.tsx` as a server component (see `pricing/page.tsx` pattern).

### Mobile responsiveness

- All tap targets ≥ 44x44px (mobile hamburger uses `w-10 h-10` + `flex items-center justify-center`)
- Test breakpoints: iPhone (375px), iPad (768px), Desktop (1280px+)
- Comparison table on Pricing uses `overflow-x-auto` wrapper with `min-w-[480px]` inner table
- Avoid `lg:` for mobile/tablet transitions — use `md:` (768px) instead

### Trust signals

Surface above the fold:
- Hero: badge ("AI-Powered Family Management") with pulsing dot
- Below hero: 3 checkmarks (free trial, no CC, encryption)
- SocialProof bar: 5 compliance badges (256-bit AES, SOC 2, Zero-Knowledge, GDPR, Bank-Grade)

---

## Build & Deploy

### Local dev

```bash
npm run dev      # http://localhost:3000
npm run build    # Production build (Turbopack)
```

`.claude/launch.json` configures the Claude Preview tool to spin up the dev server.

### Auto-deploy on Railway

- **Repo:** `arunkumar-wq/familyos-marketing` (main branch)
- **Project:** `b8bb1577-6419-4683-b766-5a9932fd0cdd` on Railway
- **Service:** `web` (eb52147b-88ea-412c-bb52-605be5b5b600)
- **Trigger:** GitHub webhook on push to `main` (`455ff667-3b41-4702-a3fc-6c47c412996e`)
- **Domain:** https://web-production-f406.up.railway.app

Every push to `main` automatically deploys. Build takes ~90s.

### Environment variables (Railway)

- `NODE_ENV=production`
- `PORT=3000`

---

## Page Content Sources

Marketing copy and stats come from `FamilyOS_Pitch_Deck v1.pptx` (in `C:\My New Work\`). Key messaging:

- **Problem:** Fragmentation Tax — 5 disconnected apps cost $727–$3,459/yr
- **Solution:** $149–$399/yr replaces all of them (Save 50–90%)
- **2 Pillars:** Document Vault + Financial Intelligence
- **Connective Tissue:** Cross-pillar AI links insurance→coverage, deeds→valuations, etc.
- **Tiers:** Essential ($149), Premium ($249, MOST POPULAR), Family Pro ($399)
- **Stats:** 55% of Americans have no estate docs · $84.4T wealth transfer · 1,000+ beta families · $2.8B+ tracked

---

## When making changes

1. Run `npm run build` before pushing to catch type errors
2. Use the Claude Preview tool to verify changes in browser
3. Check both desktop AND mobile (use `preview_resize` with `mobile` preset)
4. Inspect computed styles with `preview_inspect` — don't trust screenshots for color/font verification
5. Push to `main` to trigger Railway auto-deploy
