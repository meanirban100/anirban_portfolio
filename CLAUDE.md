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
npx vercel --prod
```

Or connect the GitHub repo to Vercel for automatic deploys on push.

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript. No test framework configured.

## Architecture

Single-page portfolio using App Router. All content lives directly in `app/page.tsx` as typed data arrays — no CMS, no database, no API routes. One client component exists for the theme toggle.

**Key files:**
- `app/layout.tsx` — root layout with Inter + Fira Code fonts (`next/font/google`), `suppressHydrationWarning` on `<html>`, and an inline `<script>` that reads `localStorage` to set `data-theme` before first paint (prevents theme flash)
- `app/page.tsx` — entire portfolio: data arrays at top + single Server Component rendering all sections
- `app/globals.css` — all styling: Tailwind v4 import, CSS variables for both themes, and custom utility classes
- `app/components/ThemeToggle.tsx` — the only Client Component; toggles `data-theme` on `<html>` and persists to `localStorage`

## Theming

Two themes are defined entirely in CSS variables in `globals.css`:
- **Dark** (default): navy `#0a192f` background, teal `#64ffda` accent — set on `:root`
- **Light**: slate-white `#f8fafc` background, sky `#0284c7` accent — set on `[data-theme="light"]`

All colors in the page use custom CSS classes (`.text-accent`, `.text-heading`, `.text-body`, `.text-faint`, `.border-theme`) or component classes (`.section-card`, `.stack-card`, `.skill-tag`, `.btn-primary`, `.btn-outline`, `.btn-contact`, `.nav-bg`, `.mono`) defined in `globals.css`. **Do not use hardcoded Tailwind color values** (e.g. `text-[#e6f1ff]`) — they won't respond to theme switching.

## Updating content

All resume data (`experience`, `skills`, `certifications`, `hackathons`) is defined as plain arrays at the top of `app/page.tsx`. Edit those arrays to update content — no other files need to change.

Note: the `hackathons` array is rendered under the section heading **"Competitions"** (section `id="competitions"`). The nav links use anchor IDs `#experience`, `#stack`, `#competitions`, `#certifications` — these must match the `id` attributes on `<section>` elements in `page.tsx`.

## Exceptions to the no-hardcoded-colors rule

The hero tagline in `page.tsx` intentionally uses hardcoded Tailwind colors (`text-cyan-400`, `text-amber-400`, `text-purple-400`) for decorative accent words — these are a deliberate design choice, not an oversight. All other text must use the CSS variable classes listed above.

## Unused CSS

`globals.css` defines `.timeline-line` and `.timeline-dot` for a potential education/timeline section. These classes are not currently rendered anywhere in `page.tsx`.

## Next.js version note

This project uses Next.js 16, which has breaking changes from earlier versions. Before writing any Next.js-specific code, check `node_modules/next/dist/docs/` for the relevant guide. APIs, conventions, and file structure may differ from training data.
