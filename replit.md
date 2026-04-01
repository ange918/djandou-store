# MediSens — La santé expliquée simplement

A French-language medical awareness platform built with Next.js. The homepage presents MediSens as a multi-organ health platform, and `/reins` is the first fully-built section dedicated to kidney health.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion, GSAP (ScrollTrigger)
- **Icons**: Heroicons
- **Fonts**: Unbounded (titles, 700/900), Poppins (body, 300/400/500)
- **Package manager**: npm

## Design System

- **Background**: `#050810`
- **Surface / Cards**: `#0A0F1E` / `#0D1526`
- **Accent cyan**: `#00C9FF` | **Accent blue**: `#0066FF`
- **Text primary**: `#F8FAFC` | **Text secondary**: `#64748B`
- **Brand gradient**: `linear-gradient(135deg, #00C9FF, #0066FF)`
- **Section spacing**: `py-32` minimum
- **Card padding**: `p-10` minimum
- **Max paragraph width**: `max-w-2xl`

## Project Structure

```
app/
├── layout.tsx           ← MediSens global layout (NavbarMediSens + FooterMediSens)
├── page.tsx             ← MediSens homepage
├── globals.css          ← Design tokens + keyframes
├── reins/page.tsx       ← Kidney health section homepage
├── maladies/            ← Individual kidney disease pages
├── alimentation/        ← Kidney nutrition guide
├── comprendre/          ← Understanding kidneys
├── prevention/          ← Prevention advice
├── symptomes/           ← Symptoms guide
├── outils/              ← Risk assessment tools
├── a-propos/            ← About
├── contact/             ← Contact
└── blog/                ← Blog

components/
├── layout/
│   ├── NavbarMediSens.tsx   ← Global navbar with organ links
│   ├── FooterMediSens.tsx   ← Global footer
│   ├── Navbar.tsx           ← Legacy (kept for reference)
│   └── Footer.tsx           ← Legacy (kept for reference)
├── home/
│   ├── Hero.tsx             ← Hero with animated body SVG
│   ├── Pourquoi.tsx         ← Mission section (3 cards)
│   ├── Statistiques.tsx     ← Key stats grid (2x3)
│   ├── OrganesGrid.tsx      ← 8-organ selection grid
│   └── Newsletter.tsx       ← Email signup CTA
└── ui/
    ├── SectionHeader.tsx
    ├── GlowCard.tsx
    ├── ScrollProgress.tsx
    └── AnimatedTitle.tsx

lib/
└── gsap.ts              ← GSAP + ScrollTrigger registration + helpers
```

## Navigation Structure

| Link     | URL       | Status     |
|----------|-----------|------------|
| Accueil  | `/`       | Live       |
| Reins    | `/reins`  | Live       |
| Cœur     | `/coeur`  | Coming soon|
| Poumons  | `/poumons`| Coming soon|
| Foie     | `/foie`   | Coming soon|
| Cerveau  | `/cerveau`| Coming soon|
| Diabète  | `/diabete`| Coming soon|
| Os       | `/os`     | Coming soon|
| Peau     | `/peau`   | Coming soon|

## Running the App

```bash
npm run dev    # Development server on port 5000
npm run build  # Production build
npm run start  # Production server on port 5000
```

## Replit Configuration

- Dev server runs on port 5000, bound to `0.0.0.0`
- `allowedDevOrigins` set for `*.replit.dev` in `next.config.ts`
- Workflow: "Start application" → `npm run dev`
- No environment variables required
