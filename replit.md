# ReinSanté — Santé Rénale

A French-language Next.js web application providing comprehensive information about kidney health, diseases, prevention, and screening tools.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion, GSAP
- **Icons**: Heroicons
- **Fonts**: Unbounded, Poppins, Montserrat (Google Fonts)
- **Package manager**: npm

## Project Structure

- `app/` — Next.js App Router pages and layouts
  - `maladies/` — Kidney disease pages (calculs-renaux, glomerulonephrite, etc.)
  - `alimentation/`, `prevention/`, `symptomes/`, `comprendre/`, `a-propos/`, `contact/`, `blog/`
- `components/` — Shared React components
  - `layout/` — Navbar, Footer
  - `ui/` — ScrollProgress and other UI elements
- `lib/` — Utility functions (gsap.ts)
- `public/` — Static assets

## Running the App

```bash
npm run dev    # Development server on port 5000
npm run build  # Production build
npm run start  # Production server on port 5000
```

## Replit Configuration

- Dev server runs on port 5000, bound to 0.0.0.0 for Replit compatibility
- Workflow: "Start application" runs `npm run dev`
- No environment variables required
