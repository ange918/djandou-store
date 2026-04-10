# Project: djjj (Next.js Health Information Site)

## Overview
A French-language health information website built with Next.js 16, React 19, Tailwind CSS v4, GSAP, and Framer Motion. The site covers topics like cardiac health, lung health, diseases, nutrition, prevention, symptoms, emergencies, and more.

## Architecture
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP + ScrollTrigger, Framer Motion
- **Icons**: Heroicons, React Icons
- **Package Manager**: npm

## Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `lib/` - Shared utilities (GSAP setup, data files)
- `public/` - Static assets

## Running the App
- **Dev server**: `npm run dev` (port 5000)
- **Production build**: `npm run build && npm run start`

## Replit Configuration
- Dev server runs on port 5000 with `-H 0.0.0.0` for Replit proxy compatibility
- Allowed dev origins set in `next.config.ts` for `*.replit.dev`, `*.replit.app`, `*.repl.co`
- Workflow: "Start application" → `npm run dev`

## No Environment Variables Required
This project has no backend, database, or external API keys — it is a fully static/frontend Next.js application.
