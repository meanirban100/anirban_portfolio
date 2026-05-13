# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at localhost:3000
npm run build     # production build (verify before deploying)
npm run lint      # run ESLint
```

## Deploy to Vercel

```bash
npx vercel        # first deploy — follow prompts
npx vercel --prod # subsequent production deploys
```

Or connect the GitHub repo to Vercel for automatic deploys on push.

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript. No test framework configured.

## Architecture

Single-page portfolio using App Router. All content lives directly in `app/page.tsx` as typed data arrays — no CMS, no database, no API routes.

**Structure:**
- `app/layout.tsx` — root layout, metadata, Geist font
- `app/page.tsx` — entire portfolio: data arrays + single default export rendering all sections
- `app/globals.css` — minimal global styles (Tailwind v4 `@import "tailwindcss"` + CSS vars)

**Design constraints:**
- Pure white background (`#ffffff`), `#111` text, gray-400/500/600 for hierarchy
- Tailwind utility classes only — no CSS modules, no external UI libraries
- No images, no animations, no dark mode toggle
- Sections: Hero → Experience → Skills → Competitions → Certifications → Education

## Updating content

All resume data is defined as plain arrays at the top of `app/page.tsx`. Edit those arrays to update content — no other files need to change.

Note: the `hackathons` array is rendered under the section heading **"Competitions"** — the variable name and the displayed heading differ.
