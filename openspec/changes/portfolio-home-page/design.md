## Context

The project is a fresh `create-next-app` (Next.js 16.3.0 App Router, React 19, TypeScript 5, Tailwind CSS v4 via `@tailwindcss/postcss`) with a boilerplate home page. Motivation and scope are in `proposal.md`; observable behavior is specified in `specs/home-page/spec.md`. This document defines how the portfolio is built: structure, design system, and technical approach.

Current relevant scaffolding:
- `app/layout.tsx` already loads Geist Sans + Geist Mono via `next/font` and exposes `--font-sans` / `--font-mono` theme variables.
- `app/globals.css` already sets `--background` / `--foreground` tokens with `prefers-color-scheme` handling.
- No other runtime dependencies installed; no test framework configured.

## Goals / Non-Goals

**Goals:**
- A single-page portfolio that is simple, modern, and professional, following one cohesive design system.
- Server components by default; only genuinely interactive islands (mobile menu, reveal-on-scroll, optional theme toggle) are client components.
- Content separated from presentation via typed data modules, so the owner can edit skills/projects/links without touching components.
- Accessible and responsive by construction, with reduced-motion support.
- Keep the dependency footprint unchanged (no UI/animation libraries).

**Non-Goals:**
- Multi-page routes, routing, or a blog.
- Contact form with a backend — contact is via mailto link and social links only.
- Real project content, images, or branding (the owner will fill these in later) — placeholders are used.
- A theme toggle; color scheme follows the system `prefers-color-scheme` preference.

## Decisions

### Component architecture
- **Sections are Server Components** composed in `app/page.tsx`: `Header`, `Hero`, `About`, `Skills`, `Projects`, `Contact`, `Footer`.
- **Client components** are limited to `MobileMenu` (menu open state + body scroll locking) and a reusable `Reveal` wrapper (IntersectionObserver-driven fade/slide, disabled under reduced motion).
- **UI primitives**: `Container` (max-width wrapper), `Section` (semantic `<section>` with id + vertical rhythm), `SectionHeading` (kicker + title + description), `Button`/`LinkButton`.
- Rationale: keeps most markup static and fast; isolates the few interactive parts. Alternative considered: making nav and sections client components — rejected as unnecessary overhead.

### Folder structure
```
app/
  layout.tsx            # metadata, fonts, tokens
  page.tsx              # composes sections in order
  globals.css           # theme tokens + base styles
  sections/             # Hero, About, Skills, Projects, Contact
components/
  layout/               # Header, Footer, MobileMenu
  ui/                   # Container, Section, SectionHeading, Button, LinkButton, Reveal
lib/
  site.ts               # identity, nav, socials
  skills.ts             # skill categories
  projects.ts           # project cards
  types.ts              # shared types
public/                 # placeholder images
```

### Design system tokens (Tailwind v4 `@theme` in `globals.css`)
- Semantic colors mapped to CSS variables so light/dark switch without class changes:
  - `--background`, `--foreground` (existing), plus `--muted`, `--border`, `--accent`, `--accent-foreground`.
  - Light: background `white`/`zinc-50` surfaces, foreground `zinc-950`, muted `zinc-500`, border `zinc-200`, accent `indigo-600`.
  - Dark: background `zinc-950`, foreground `zinc-50`, muted `zinc-400`, border `zinc-800`, accent `indigo-400`.
  - Keyed off `prefers-color-scheme` (existing pattern extended).
- Typography: Geist Sans for headings/body (`--font-sans`), Geist Mono (`--font-mono`) for kickers, labels, and tech tags. Type scale uses Tailwind defaults (`text-sm` … `text-6xl`); headings `tracking-tight`.
- Spacing: Tailwind default scale; section rhythm `py-24 md:py-32`; shared `Container` width `max-w-5xl` with `px-6 md:px-8`; card padding `p-6`/`p-8`; grid gaps `gap-6`/`gap-8`.
- Radius/shadow: consistent `rounded-2xl` for cards, subtle shadows on hover only.

### Responsive behavior
- Mobile-first; breakpoints `sm`/`md`/`lg`.
- Navigation: full inline nav at `md+`; hamburger + slide-down `MobileMenu` below `md`.
- Grids: Skills and Projects use 1 → 2 → 3 columns across mobile → tablet → desktop.
- Touch targets ≥ 44px; no horizontal overflow (`overflow-x-hidden` guard).

### Animations and interactions
- Smooth scrolling: CSS `scroll-behavior: smooth` on `html`, guarded by reduced-motion.
- Hover states: buttons shift background/border; cards lift (`-translate-y-1`) with shadow + accent border.
- Reveal-on-scroll: `Reveal` client component using IntersectionObserver, optional fade/slide; rendered in final state when `prefers-reduced-motion: reduce`.

### Data-driven content
- `lib/site.ts` (name, role, tagline, nav items, email, socials), `lib/skills.ts` (categories → tags), `lib/projects.ts` (cards). Typed via `lib/types.ts`. Sections consume these; placeholders used where the owner must supply real content (name, bio, images, links).

### Accessibility implementation
- Semantic elements: `<header>`, `<nav>`, `<main>`, `<section aria-labelledby>` with heading ids, `<footer>`.
- `MobileMenu` button toggles `aria-expanded` and `aria-controls`; menu closes on link activation.
- Focus styles: Tailwind `focus-visible` rings on all interactive elements.
- `next/image` with meaningful `alt` (decorative images get `alt=""`).
- `html lang="en"` already set in root layout.

## Risks / Trade-offs

- **Geist may not suit all tastes** → easily swapped: tokens reference `--font-sans`/`--font-mono`, so replacing fonts is a one-file change.
- **Placeholder content may look unfinished** → data modules make content swaps trivial; placeholder images are clearly marked.
- **Reveal animations can cause layout jank / CLS** → animate opacity/transform only, never height/layout properties; disabled under reduced motion.
- **IntersectionObserver in `Reveal` adds a tiny client island per section** → few observers, passive by default, and safe to remove without changing appearance when motion is off.
- **Dark mode only via system preference** (no toggle) → accepted Non-Goal; tokens make adding a toggle later a small, additive change.

## Migration Plan

- Replace the boilerplate home page incrementally: first data modules + tokens, then layout primitives, then sections (Header → Hero → About → Skills → Projects → Contact → Footer), then `app/page.tsx` assembly and metadata.
- Rollback: the previous state is the current git state; any step can be reverted via git. No schema or data migrations apply.

## Open Questions

- Owner-specific content: name, role, bio, actual skills, project list, social URLs, and any portrait image. These are placeholders now and do not affect the specs, approach, or task breakdown.
- Final favicon/OG image assets — not required by any requirement; can be added later.
