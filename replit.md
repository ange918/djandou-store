# MediSens — La santé expliquée simplement

A French-language medical awareness platform built with Next.js. The homepage presents MediSens as a multi-organ health platform. `/reins` is the kidney section. `/coeur` is the full cardiovascular section with 4 complete disease pages.

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
- **Accent cyan (Reins)**: `#00C9FF` | **Blue**: `#0066FF`
- **Accent red (Coeur)**: `#EF4444` | **Dark red**: `#B91C1C`
- **Text primary**: `#F8FAFC` | **Text secondary**: `#64748B`
- **Section spacing**: `py-32` minimum
- **Card padding**: `p-10` minimum
- **Max paragraph width**: `max-w-2xl`
- **Heartbeat animation**: `animate-heartbeat` class (globals.css)

## Project Structure

```
app/
├── layout.tsx                    ← Global layout (NavbarWrapper + FooterMediSens)
├── page.tsx                      ← MediSens homepage (DO NOT MODIFY)
├── globals.css                   ← Design tokens + keyframes (heartbeat, float, pulse-kidney, glowPulse)
├── reins/                        ← Kidney section (DO NOT MODIFY)
└── coeur/
    ├── layout.tsx                ← Coeur layout wrapper (metadata)
    ├── page.tsx                  ← Coeur hub page
    └── maladies/
        ├── hypertension/
        │   ├── page.tsx          ← Server component (metadata)
        │   └── HTAContent.tsx    ← Client component (full page)
        ├── infarctus/
        │   ├── page.tsx
        │   └── InfarctusContent.tsx
        ├── insuffisance-cardiaque/
        │   ├── page.tsx
        │   └── ICContent.tsx
        └── avc/
            ├── page.tsx
            └── AVCContent.tsx

components/
├── NavbarWrapper.tsx             ← Route-based navbar switcher (client, reads pathname)
├── layout/
│   ├── NavbarMediSens.tsx        ← Homepage + non-coeur navbar
│   └── FooterMediSens.tsx        ← Global footer
├── coeur/
│   ├── CoeurNav.tsx              ← Cardiovascular section navbar (fixed, route-aware)
│   └── template/
│       ├── MaladieHero.tsx       ← Hero section with gradient + SVG + badges
│       ├── MaladieSymptomes.tsx  ← 3-tier symptom cards (urgent/modéré/surveillance)
│       ├── MaladieIllustration.tsx ← Interactive SVG with hover tooltips
│       ├── MaladieTraitement.tsx ← Numbered treatment protocol cards
│       ├── MaladiePrevention.tsx ← Interactive checklist with score gauge
│       └── MaladiePronostic.tsx  ← Gauge + complications + timeline + "Voir aussi"
├── home/
│   ├── Hero.tsx                  ← Hero with animated body SVG
│   ├── Pourquoi.tsx
│   ├── Statistiques.tsx
│   ├── OrganesGrid.tsx
│   └── Newsletter.tsx
└── ui/
    ├── SectionHeader.tsx
    ├── GlowCard.tsx
    ├── ScrollProgress.tsx
    └── AnimatedTitle.tsx

lib/
└── gsap.ts    ← GSAP + ScrollTrigger registration
```

## Navbar Architecture

`app/layout.tsx` renders `<NavbarWrapper />` which is a client component:
- Routes starting with `/coeur` → renders `<CoeurNav />` (red palette, coeur sub-navigation)
- All other routes → renders `<NavbarMediSens />` (cyan palette, organ hub links)

Each new organ section needs:
1. A Nav component registered in `components/NavbarWrapper.tsx`
2. `app/[organ]/layout.tsx` (metadata)
3. `app/[organ]/page.tsx` (hub)
4. Disease pages: `app/[organ]/maladies/[disease]/page.tsx` (server) + `[Disease]Content.tsx` (client)

## Color System by Organ

| Organ   | Primary    | Dark       |
|---------|------------|------------|
| Reins   | `#00C9FF`  | `#0066FF`  |
| Coeur   | `#EF4444`  | `#B91C1C`  |
| (future organs get their own accent color)

## Navigation Structure

| Link     | URL         | Status     |
|----------|-------------|------------|
| Accueil  | `/`         | Live       |
| Reins    | `/reins`    | Live       |
| Cœur     | `/coeur`    | Live ✅    |
| Poumons  | `/poumons`  | Coming soon|
| Foie     | `/foie`     | Coming soon|
| Cerveau  | `/cerveau`  | Coming soon|
| Diabète  | `/diabete`  | Coming soon|
| Os       | `/os`       | Coming soon|
| Peau     | `/peau`     | Coming soon|

## Coeur Disease Pages

| Disease               | URL                                        |
|-----------------------|--------------------------------------------|
| Hypertension artérielle | `/coeur/maladies/hypertension`           |
| Infarctus du myocarde | `/coeur/maladies/infarctus`               |
| Insuffisance cardiaque | `/coeur/maladies/insuffisance-cardiaque` |
| AVC                   | `/coeur/maladies/avc`                     |

Each page has: Hero, Vue d'ensemble, Illustration interactive, Symptômes, Causes & FDR, Diagnostic, Traitements, Prévention (checklist interactif), Pronostic, Voir aussi.

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
