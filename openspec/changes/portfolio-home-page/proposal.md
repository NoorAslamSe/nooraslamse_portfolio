## Why

The project is currently the fresh `create-next-app` boilerplate. This practice project needs a real deliverable: a simple, modern, professional single-page personal portfolio that replaces the starter home page and gives the owner a place to introduce themselves, list skills, showcase projects, and invite contact.

## What Changes

- Replace the boilerplate `app/page.tsx` home page with a single-page portfolio (route `/`).
- Add the following sections in order: Header, Hero, About, Skills, Projects, Contact, Footer.
- Add a sticky header with anchor navigation that smooth-scrolls to sections.
- Introduce a lightweight design system: semantic color tokens (light + dark), typography scale, spacing rhythm, and reusable layout primitives.
- Support responsive behavior from mobile to desktop, including a mobile navigation menu.
- Add a project metadata setup (page title, description) in `app/layout.tsx`.
- No application code will be written until the OpenSpec artifacts for this change are complete and approved.

## Capabilities

### New Capabilities

- `home-page`: The single `/` route — its section structure, header/navigation behavior, footer, and the requirements each section must satisfy (content, accessibility, responsive behavior).

### Modified Capabilities

## Impact

- `app/page.tsx`: rewritten as the composition point for all sections.
- `app/layout.tsx`: updated metadata (title/description).
- `app/globals.css`: extended with design tokens and base styles.
- New components and data files under `components/`, `lib/`, and `public/`.
- No new runtime dependencies. Uses existing Next.js 16, React 19, TypeScript, Tailwind CSS v4, and `next/font` (Geist).
