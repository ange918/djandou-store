# ReinSanté — Site d'Information sur la Santé Rénale

## Présentation
Site web médical français complet dédié à la santé rénale, construit avec Next.js 16 App Router, TypeScript et Tailwind CSS v4.

## Stack technique
- **Framework** : Next.js 16.1.1 (App Router, Turbopack)
- **Language** : TypeScript
- **Style** : Tailwind CSS v4 (config CSS via `@theme` dans globals.css, sans tailwind.config.ts)
- **Animations** : Framer Motion + GSAP + ScrollTrigger
- **Icônes** : @heroicons/react v2
- **Polices** : Unbounded (titres, 700/900) + Poppins (corps, 300/400/500) via next/font/google
- **Port** : 5000

## Design System
- **Fond** : `#0A0F1E` (bg-primary), `#0F172A` (surface), `#080D18` (bg-alt)
- **Accent** : Cyan `#00C9FF` / Bleu `#0066FF` (gradient)
- **Texte** : `#F8FAFC` (primary), `#64748B` (secondary), `#94A3B8` (muted)
- **Espacement** : py-32 pour les sections, p-10 pour les cartes

## Architecture
```
app/
├── layout.tsx                         # Layout global (Navbar + Footer + polices)
├── globals.css                        # Tailwind v4 @theme + variables CSS
├── page.tsx                           # Page d'accueil
├── comprendre/page.tsx                # Anatomie rénale
├── symptomes/page.tsx                 # Symptômes d'alerte
├── prevention/page.tsx                # Guide prévention
├── alimentation/page.tsx              # Alimentation rénale
├── outils/page.tsx                    # Outils interactifs (3 calculateurs)
├── blog/page.tsx                      # Blog articles
├── contact/page.tsx                   # Contact
├── a-propos/page.tsx                  # À propos + sources médicales
└── maladies/
    ├── page.tsx                       # Hub des 10 maladies
    ├── insuffisance-renale-aigue/     # IRA
    ├── insuffisance-renale-chronique/ # IRC
    ├── calculs-renaux/                # Lithiase urinaire
    ├── glomerulonephrite/             # Glomérulonéphrite
    ├── nephropathie-diabetique/       # Néphropathie diabétique
    ├── nephropathie-hypertensive/     # Néphropathie hypertensive
    ├── infections-urinaires/          # Infections urinaires
    ├── polykystose-renale/            # Polykystose rénale (PKD)
    ├── syndrome-alport/               # Syndrome d'Alport
    └── tubulopathies/                 # Tubulopathies

components/
├── layout/
│   ├── Navbar.tsx                     # Navigation responsive
│   └── Footer.tsx                     # Footer complet
├── ui/
│   ├── GlowCard.tsx                   # Carte avec halo lumineux
│   ├── SectionHeader.tsx              # En-tête de section (badge + titre + sous-titre)
│   ├── ScrollProgress.tsx             # Barre de progression de lecture
│   └── AnimatedTitle.tsx              # Titre animé GSAP
├── maladies/
│   ├── MaladieHero.tsx                # Hero section maladie
│   ├── MaladieSymptomes.tsx           # Section symptômes avec niveaux de gravité
│   ├── MaladieTraitement.tsx          # Section traitements
│   ├── MaladiePrevention.tsx          # Section prévention + populations à risque
│   └── MaladieIllustration.tsx        # Conteneur illustration SVG
└── outils/
    ├── WaterCalculator.tsx            # Calculateur d'hydratation
    ├── RiskQuiz.tsx                   # Quiz de risque rénal
    └── HabitTracker.tsx               # Tracker habitudes de vie

lib/
└── gsap.ts                            # Helpers ScrollTrigger avec guards SSR
```

## Conventions importantes
- **Tailwind v4** : Pas de `tailwind.config.ts` — configuration via `@theme inline {}` dans `globals.css`
- **Polices** : Chargées via `next/font/google` dans `layout.tsx` uniquement (PAS d'`@import url(...)` dans CSS)
- **Client Components** : Tous les composants avec animations/interactivité ont `"use client"` en haut
- **GSAP SSR Guard** : Toujours `if (typeof window !== "undefined")` + `ctx.revert()` dans useEffect
- **Couleurs inline** : Les couleurs sont passées en style inline pour un contrôle précis (pas de classes Tailwind pour les couleurs custom)

## Pages complètes : 21 pages
10 pages maladies + 11 pages sections + 1 hub maladies = 22 routes totales
