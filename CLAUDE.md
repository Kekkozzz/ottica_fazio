# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server with Turbopack (http://localhost:3000)
npm run build     # Production build
npm start         # Start production server
npm run lint      # ESLint (next/core-web-vitals)
```

## Architecture

Next.js 15 App Router site for Ottica Fazio (Italian optician, 2 locations in Sicily). React 19, Tailwind CSS 4, JavaScript (not TypeScript). All content is static/hardcoded — no database or CMS.

**Path alias:** `@/*` → `./src/*`

### Routing (`src/app/`)

- `/` — Homepage (composes section components: Hero, LogosCarousel, MostSold, OurProducts, OurServices, ContactUs)
- `/prodotti/*` — Product pages (occhiali-sole, occhiali-vista, lenti-contatto, nuance-audio)
- `/servizi/*` — Service pages (esame-acuita-visiva, esame-lampada-fessura, topografia-corneale, lenti-contatto, studio-forma-viso)
- `/su-di-noi/*` — About pages (team, dove-trovarci)
- `/contatti` — Contact page
- `/api/contact` — POST endpoint for contact form (uses Resend to send email to otticafazio@outlook.it)

### Components (`src/components/`)

- `animations/` — FadeInView (scroll-triggered fade), StaggerContainer/StaggerItem (staggered reveals), HoverEffect
- `layout/SmoothScroll.js` — Lenis smooth scroll wrapper (wraps entire app in layout.js)
- `navigation/LiquidGlassNavbar.js` — Glassmorphism navbar, responsive with hamburger < 1500px
- `sections/` — Homepage section components (Hero, LogosCarousel, MostSold, OurProducts, OurServices, ContactUs, ContactLensBrands, ContactLensTypes)

### Key libraries

- **Framer Motion** — Primary animation library (useInView, motion components, variants)
- **GSAP** — Advanced animations
- **Lenis** — Smooth scrolling (1.2s duration)
- **Lottie React** — Vector animations
- **Resend** — Email delivery (API key in .env.local as `RESEND_API_KEY`)
- **Vercel Analytics** — Integrated in root layout

## Conventions

- All source files use `.js` (not `.jsx` or `.tsx`)
- Client components require `'use client'` directive
- Components use PascalCase filenames
- Styling: Tailwind utility classes; Framer Motion preferred over CSS animations
- State: React hooks only (useState, useEffect, useRef) — no Redux/Context/Zustand
- Data fetching: direct `fetch()` to API routes, no abstraction layer
- Language: all UI text is hardcoded in Italian (lang="it")
- Fonts: Josefin Sans (headings), Be Vietnam Pro (body) — loaded via next/font
- `globals.css` applies `cursor: pointer` globally to all `<button>` and `<a>` elements

## Design System

- **Primary:** Bordeaux red `#b91c1c` / `--color-bordeaux-500`
- **Secondary:** Warm gray `#78716c` / Silver
- **Accent:** Gold `#f59e0b`
- **Background:** Cream/beige tones
- **Effects:** Glassmorphism (backdrop-blur-xl, bg-white/70)
- **Breakpoints:** standard Tailwind + custom 1500px for navbar desktop mode

## Environment

- `RESEND_API_KEY` in `.env.local` — required for contact form email delivery
- Remote image domains configured in `next.config.mjs`: picsum.photos, unsplash.com
- Deployed on Vercel
