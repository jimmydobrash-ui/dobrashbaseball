# Dobrash Diamond Development — CLAUDE.md

## Project overview

Landing page for **Dobrash Diamond Development (DoDiDe LLC)**, a remote baseball coaching business. Single-page marketing site with an integrated application form (Formspree).

**Tech stack:** Next.js 14 · TypeScript · Tailwind CSS · App Router · Vercel

---

## File structure

```
src/
  app/
    layout.tsx          — fonts (Barlow Condensed + Inter), metadata, root layout
    page.tsx            — assembles all section components in order
    globals.css         — base styles, @layer components (btn-primary, section-label, etc.)
  components/
    Hero.tsx            — sticky nav + full-viewport hero (includes nav)
    About.tsx           — coach background, credentials grid, photo placeholder
    WhatIncluded.tsx    — 6-service grid
    WhoThisIsFor.tsx    — ideal player traits + "not for" list + age callout
    HowItWorks.tsx      — 3-step process (Apply → I reach out → We build)
    ApplicationForm.tsx — Formspree form with success/error state
    Footer.tsx          — brand, contact, copyright
```

---

## Brand & design tokens

| Token | Value | Usage |
|---|---|---|
| `coal` | `#080808` | Primary dark background |
| `graphite` | `#111111` | Alternating section background |
| `pitch` | `#1a1a1a` | Card/input backgrounds |
| `iron` | `#2a2a2a` | Borders, dividers, separators |
| `mist` | `#888888` | Muted/secondary text |
| `silver` | `#c4c4c4` | Body text |
| `diamond` | `#5ECBDC` | Primary brand accent (ice/crystalline blue) |
| `diamond-light` | `#8DDFE9` | Hover states |
| `diamond-dim` | `#2EA8BD` | Deeper variant |

**Typography:**
- `font-display` → Barlow Condensed (headings, labels, nav, buttons) — variable: `--font-barlow-condensed`
- `font-body` → Inter (body copy, form inputs) — variable: `--font-inter`

**Reusable classes (defined in `@layer components` in globals.css):**
- `.btn-primary` — filled diamond-blue CTA button
- `.btn-outline` — outline diamond-blue button (used in nav)
- `.section-label` — small uppercase diamond-colored overline label

---

## Page sections (in order)

1. **Hero** (`#` / top) — headline, photo placeholder, CTA scrolls to `#apply`
2. **About** (`#about`) — coaching background, 4-stat credential grid
3. **WhatIncluded** (`#services`) — 6-card grid of offerings
4. **WhoThisIsFor** (`#who`) — is-for / not-for lists + age callout
5. **HowItWorks** (`#process`) — 3-step numbered process
6. **ApplicationForm** (`#apply`) — full Formspree form
7. **Footer** — brand, email, legal

---

## Formspree setup

1. Go to [formspree.io](https://formspree.io) and create a new form
2. Set the notification email to `jimmydobrash@gmail.com`
3. Copy the form ID and replace `YOUR_FORM_ID` in `src/components/ApplicationForm.tsx`:
   ```ts
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```

Form fields submitted: `name`, `age`, `grad_year`, `height`, `weight`, `position`, `goals`, `referral`, `parent_name`, `parent_email`, `parent_phone`.

---

## Swapping in real assets

**Logo:**
- Replace the `DDD` text placeholder in `Hero.tsx` (nav) and `Footer.tsx`
- Use Next.js `<Image>` with `src="/logo.png"` (place file in `/public/`)

**Coaching photos:**
- Hero photo: in `Hero.tsx`, replace the `<svg>` placeholder block with `<Image src="/photo-hero.jpg" alt="..." fill className="object-cover" />`
- About photo: same pattern in `About.tsx`

---

## Running locally

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Deploying to Vercel

```bash
# From project root (requires Vercel CLI)
vercel

# Or push to GitHub and connect repo at vercel.com
```

---

## Conventions

- All section components are server components except `Hero.tsx` and `ApplicationForm.tsx` (marked `"use client"` for scroll/form handlers)
- Alternate section backgrounds: `coal` → `graphite` → `coal` → `graphite` → `coal` → `graphite` → `coal`
- No `rounded-*` on primary elements — sharp edges are intentional to the premium aesthetic
- Arbitrary Tailwind values (`text-[clamp(...)]`, `tracking-[0.18em]`) are fine and expected here
