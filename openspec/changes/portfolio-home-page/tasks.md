## 1. Foundation: design tokens and content data

- [x] 1.1 Extend `app/globals.css` with semantic theme tokens in `@theme`: background, foreground, muted, border, accent, accent-foreground, plus light and dark variants via `prefers-color-scheme`
- [x] 1.2 Create `lib/types.ts` with shared types (nav item, social link, skill category, project card, site config)
- [x] 1.3 Create `lib/site.ts` with site config data: owner name, role, tagline, nav items, email, social links (placeholder values)
- [x] 1.4 Create `lib/skills.ts` with skill categories and their tags (placeholder values)
- [x] 1.5 Create `lib/projects.ts` with 3 placeholder project entries (title, description, tech tags, links)

## 2. UI primitives

- [x] 2.1 Create `components/ui/container.tsx`: max-width centered wrapper (`max-w-5xl`, `px-6 md:px-8`)
- [x] 2.2 Create `components/ui/section.tsx`: semantic `<section>` with `id` prop, `aria-labelledby`, and consistent vertical padding
- [x] 2.3 Create `components/ui/section-heading.tsx`: kicker (mono), title, optional description
- [x] 2.4 Create `components/ui/button.tsx` with `Button` (for actions) and `LinkButton` (for anchors/links), primary and secondary variants
- [x] 2.5 Create `components/ui/reveal.tsx`: client component using IntersectionObserver for fade/slide reveal, disabled under `prefers-reduced-motion`

## 3. Layout components

- [x] 3.1 Create `components/layout/header.tsx`: sticky header with site name, nav links to sections, Contact CTA; blurs on scroll
- [x] 3.2 Create `components/layout/mobile-menu.tsx`: client hamburger menu with `aria-expanded`/`aria-controls`, closes on link click
- [x] 3.3 Create `components/layout/footer.tsx`: copyright notice, nav links, social links

## 4. Page sections

- [x] 4.1 Create `app/sections/hero.tsx`: name, role headline, tagline, primary CTA (Projects) and secondary CTA (Contact)
- [x] 4.2 Create `app/sections/about.tsx`: short bio and highlight facts from `lib/site.ts`
- [x] 4.3 Create `app/sections/skills.tsx`: categories from `lib/skills.ts` rendered as grouped tags (1 → 3 column grid)
- [x] 4.4 Create `app/sections/projects.tsx`: project cards from `lib/projects.ts` (placeholder image, title, description, tech tags, links) in a responsive grid
- [x] 4.5 Create `app/sections/contact.tsx`: call-to-action, email link, social links opening in new tabs

## 5. Page assembly and metadata

- [x] 5.1 Rewrite `app/page.tsx` to compose Header, Hero, About, Skills, Projects, Contact, Footer in order
- [x] 5.2 Update `app/layout.tsx` metadata: portfolio title and description
- [x] 5.3 Add placeholder image assets under `public/` for project cards and hero (marked as replaceable)

## 6. Interactions, accessibility, and polish

- [x] 6.1 Enable smooth anchor scrolling via CSS, disabled under `prefers-reduced-motion`
- [x] 6.2 Add hover/lift states on cards and buttons with visible `focus-visible` focus rings
- [x] 6.3 Verify semantic landmarks (header/nav/main/section/footer), section heading ids, `lang="en"`, and image `alt` handling
- [x] 6.4 Verify keyboard navigation: all interactive elements reachable, mobile menu operable without a pointer
- [x] 6.5 Verify no horizontal overflow and ≥ 44px touch targets at mobile widths

## 7. Verification

- [x] 7.1 Run `npm run lint` and fix any errors
- [x] 7.2 Run `npm run build` and confirm a clean production build
- [x] 7.3 Manually verify every scenario in `specs/home-page/spec.md` (sections render in order, anchors scroll, grids reflow, reduced-motion renders final state)
