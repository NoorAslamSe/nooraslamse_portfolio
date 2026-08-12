# Noor Aslam — Portfolio Build Spec (for OpenCode / OpenSpec)

This document is the full brief. Feed it to OpenCode as context, then work through it **one step at a time** using your `/opsx:propose` → review → `/opsx:apply` → `/opsx:archive` loop. Do not try to build everything in one pass — each step below is sized to be one proposal.

---

## 0. Project Overview

**Who:** Noor Aslam — WordPress & Frontend Developer (BeeSocial, Peshawar, Pakistan), currently learning React/Next.js.

**What:** A personal portfolio site with four sections — Home, About, Projects (WordPress + Next.js split), Contact — built as a distinctive, premium-feeling single-page site (anchor navigation, not multi-route, unless noted in Step 7).

**Why this design exists:** The site should read as "page-builder craft meeting real code" — Noor's actual professional identity. Not a generic dark-mode template. Every visual decision below exists to support that.

**Reference implementation:** A static HTML/CSS/JS version already exists and can be used as the visual reference for spacing, copy, and behavior. Treat it as the source of truth for content and layout; rebuild the *implementation* in Next.js + Tailwind, don't just import the HTML.

---

## 1. Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** `next/font/google` — Fraunces (display serif), Inter (body), JetBrains Mono (labels/utility)
- **Language:** TypeScript
- **Deployment target:** Vercel
- **No CMS needed** — content is hardcoded in a typed data file (`lib/data.ts`) so it's easy to edit later.
- **Icons:** lucide-react (only if needed — prefer no icons over generic icon-pack look)

---

## 2. Design System

### 2.1 Color tokens (add to `tailwind.config.ts` under `theme.extend.colors`)

| Token | Hex | Use |
|---|---|---|
| `ink` | `#171512` | Page background (warm charcoal, not pure black) |
| `surface` | `#211E1A` | Cards, form fields |
| `surface2` | `#2A2621` | Hover/elevated surface |
| `line` | `rgba(243,238,228,0.10)` | Borders, dividers |
| `text` | `#F3EEE4` | Primary text (warm bone white) |
| `muted` | `#9C9488` | Secondary text |
| `gold` | `#D9A441` | Primary accent — CTAs, active states |
| `teal` | `#6FB8A6` | Secondary accent — labels, terminal/code cues |

Use `gold` and `teal` sparingly — one accent should dominate any given element, not both at once.

### 2.2 Typography

- **Display (`font-display`):** Fraunces — headings, hero name. Use weight 500–700, and italic weight 500 for emphasized words within headings.
- **Body (`font-sans`):** Inter — paragraphs, nav CTA text.
- **Mono (`font-mono`):** JetBrains Mono — nav links, eyebrows/labels, tags, terminal line, stat labels, form labels. This is what signals "developer" throughout the page — use it for anything structural/labeling, never for body prose.

### 2.3 Layout language

- Max content width: `1120px`, centered, `px-8` padding.
- Sticky, blurred nav bar (`backdrop-blur`, translucent `ink` background) with bottom hairline border.
- Sections separated by 1px hairline borders (`border-line`), not shadows or background blocks.
- Generous vertical rhythm: ~110px section padding on desktop, ~80px on mobile.
- No rounded-pill buttons; use small radius (`rounded-[3px]` to `rounded-md`) throughout — this is an editorial/technical feel, not a soft consumer-app feel.

### 2.4 Signature elements (the memorable parts — don't cut these)

1. **Terminal intro line** above the hero heading: `noor@peshawar ~ % whoami` with a blinking gold caret block, monospace.
2. **Stack cycler**: a small monospace pill in the hero that rotates through `WordPress + Elementor`, `WooCommerce`, `Next.js + React`, `Core Web Vitals`, `Odoo 19` every ~2.2s with a fade transition.
3. **Projects tab switcher**: pill-style tabs labeled `WordPress (6)` / `Next.js (2)`, active tab filled gold. This is the main interactive moment on the page — keep it snappy (CSS transition, no heavy animation library needed).

### 2.5 Motion rules

- Keep motion minimal and purposeful: nav underline on hover, card lift (`translateY(-4px)`) on hover, tab panel fade-in, stack cycler fade. No scroll-jacking, no parallax, no particle effects.
- Respect `prefers-reduced-motion` — disable the caret blink and stack cycler animation (show static text) when set.

---

## 3. Content (use verbatim — this is real resume data, don't invent facts)

### 3.1 Hero (Home)

- Eyebrow/terminal line: `noor@peshawar ~ % whoami`
- Heading: "Building websites that **load fast** and **convert**." (bold/italic words in gold)
- Subtext: "I'm **Noor Aslam**, a WordPress & Frontend Developer in Peshawar, Pakistan — one year deep into shipping client sites, and currently rebuilding my own toolkit around **React** and **Next.js**."
- Stats row: `6+` Live client sites · `85–95` PageSpeed score · `20+` Bugs resolved · `1yr+` Professional exp.
- CTAs: "View projects" (primary, → #projects) · "Get in touch" (ghost, → #contact)

### 3.2 About

Bio paragraphs (use as-is, can lightly tighten):

1. "I started as a WordPress Developer Intern at BeeSocial in 2024 and have since shipped full production websites for restaurants, real estate agencies, e-commerce stores, and solar companies — handling everything from theme customization and Elementor builds to Core Web Vitals optimization and on-page SEO."
2. "Alongside client work, I run Meta and Google Ads campaigns, manage GoHighLevel CRM workflows, and integrate Odoo 19 for backend business operations — so I'm as comfortable talking to a client about lead generation as I am debugging a layout break."
3. "I'm now expanding into React.js and Next.js, working on a multilingual travel platform (cockpit.travel) and rebuilding my own portfolio with a proper spec-driven workflow — because I want to design and build custom frontends, not just customize themes."

Languages: English (Professional) · Urdu (Native) · Pashto (Native)

Skill groups (label → tags):
- WordPress → Elementor Pro, WooCommerce, Theme Customization, Plugin Config
- Frontend → HTML5/CSS3, JavaScript ES6+, Bootstrap 5, Responsive Design
- Performance & SEO → Core Web Vitals, On-Page SEO, Search Console, Google Analytics
- Business & Marketing → Meta Ads, Google Ads, GoHighLevel, Odoo 19
- Currently learning (teal tags) → React.js, Next.js, REST APIs, Frontend Architecture

Experience timeline:
- **Jan 2025 – Present** · WordPress & Frontend Developer, BeeSocial — "Developed and launched 6+ responsive WordPress sites across restaurant, real estate, e-commerce, and solar industries. Customized Savour, Theratio, Ecoly, and Astra themes; integrated WooCommerce and Odoo 19; resolved 20+ production bugs."
- **2024 – 3 Months** · WordPress Developer Intern, BeeSocial — "Assisted senior developers with WordPress architecture, themes, and plugin ecosystems. Handled optimization, mobile responsiveness testing, and live site maintenance."
- **2023 – 2027** · BSc Software Engineering, Virtual University of Pakistan — "In progress. Also holds a Diploma in Information Technology from the Board of Technical Education."

### 3.3 Projects

**WordPress tab (6 cards — all real, all live):**

| Project | Badge | Description | Stack tags | URL |
|---|---|---|---|---|
| Tanttoor | Restaurant | Menu showcase, gallery, and reservation CTAs on the Savour theme, backed by Odoo 19 for order workflow management. | WordPress, Elementor, Odoo 19, SEO | https://www.tanttoor.com/ |
| ArtStruck | Real Estate | Property listing layouts and agent profile pages on the Theratio theme, with Search Console and structured metadata configured for organic visibility. | WordPress, Theratio, WooCommerce | https://artstruck.com.pk/ |
| Serene Properties | Real Estate | Custom Elementor build with no theme dependency — property showcase sections and lead capture forms, optimized for load speed and mobile. | Elementor, Custom Build, SEO | https://www.faisaltown.beerealtors.com/ |
| NH Engineerings | Solar E-Comm | Ecoly-theme storefront for solar products with WooCommerce catalog, category pages, and a conversion-optimized checkout. | WooCommerce, Ecoly, On-Page SEO | https://www.nhengineerings.com/ |
| Darvesh Café | Restaurant | Savour-theme café site with menu displays and ambiance galleries; Odoo 19 integration for day-to-day business operations. | WordPress, Odoo 19, Performance | https://www.art.beesocialpk.com/ |
| Good Health Nutrition | E-Commerce | Astra-theme supplement storefront with strong Core Web Vitals and structured data across product and category pages. | Astra, WooCommerce, Core Web Vitals | https://goodhealthnutrition.co/ |

**Next.js tab (2 cards — in progress, no external link, disabled card style):**

| Project | Badge | Description | Stack tags |
|---|---|---|---|
| cockpit.travel | In Progress | Multilingual travel platform (English, Spanish, Arabic/RTL) built with a team, pulling live flight, hotel, and car-rental data through the Amadeus, Booking.com, and Rentalcars APIs. | Next.js 14, Tailwind CSS, Sanity CMS, REST APIs |
| Personal Portfolio v2 | In Progress | This site, rebuilt properly — a Next.js rewrite of the portfolio, developed section-by-section with a spec-driven workflow (OpenSpec) instead of freehand coding. | Next.js, OpenSpec, Vercel |

### 3.4 Contact

- Intro: "Whether it's a WordPress build, a speed and SEO audit, or a custom Next.js frontend — I'd like to hear about it. I usually reply within a day."
- Email: nooraslamchannel@gmail.com
- Phone: +92 330-1435193
- Location: Peshawar, KPK, Pakistan
- LinkedIn: linkedin.com/in/nooraslamse
- GitHub: github.com/nooraslamse
- Form fields: Name, Email, Project details (textarea) → on submit, opens `mailto:nooraslamchannel@gmail.com` prefilled with subject/body (no backend needed for v1).

---

## 4. Step-by-Step Build Plan

Work through these as separate OpenSpec proposals, in order. Each step should result in a working, visually-reviewable increment — don't move to the next step until the current one renders correctly.

### Step 1 — Project scaffold
- `npx create-next-app@latest` with TypeScript + Tailwind + App Router.
- Set up `next/font/google` for Fraunces, Inter, JetBrains Mono in `app/layout.tsx`, expose as CSS variables (`--font-display`, `--font-sans`, `--font-mono`).
- Add the color tokens from §2.1 to `tailwind.config.ts`.
- Create `lib/data.ts` with typed exports for: `heroStats`, `stackCycleItems`, `skillGroups`, `timeline`, `wordpressProjects`, `nextjsProjects`, `contactInfo`. Populate from §3 — this is the single source of truth for content.
- Deliverable: blank page that compiles, fonts and colors verified via a test div.

### Step 2 — Layout shell: Nav + Footer
- Build `components/Nav.tsx`: sticky, blurred header with logo (`noor.dev`), anchor links (Home/About/Projects/Contact), "Let's talk →" CTA, and a mobile hamburger toggle (client component, `useState` for open/close).
- Build `components/Footer.tsx`: simple centered mono-font line.
- Wire both into `app/layout.tsx`.
- Deliverable: nav sticks on scroll, mobile menu toggles, all four anchor links exist (targets can be empty divs for now).

### Step 3 — Home / Hero section
- Build `components/Hero.tsx` as a client component (needs the stack-cycler interval and reduced-motion check).
- Implement: terminal line with blinking caret (CSS animation, disabled under `prefers-reduced-motion`), hero heading with italic gold emphasis, subtext, stack-cycler pill (`setInterval` + fade), two CTA buttons, four-stat grid.
- Deliverable: hero matches the reference implementation's spacing, type scale, and behavior at desktop and mobile widths.

### Step 4 — About section
- Build `components/About.tsx`: two-column grid (bio + skills) that stacks to one column under `md:`.
- Bio column: eyebrow, heading, three paragraphs, language row — from `lib/data.ts`.
- Skills column: skill groups rendered as labeled tag rows, "Currently learning" group using the `teal` tag variant.
- Below the grid: experience timeline, each row as `date | role+company | description`, hairline-bordered, stacking to single column on mobile.
- Deliverable: all content pulled from `lib/data.ts`, no hardcoded strings in the component.

### Step 5 — Projects section
- Build `components/Projects.tsx` as a client component (tab state).
- Tab buttons: `WordPress (6)` / `Next.js (2)`, active tab filled gold, dot indicator.
- Panel below renders a 2-column card grid (1 column on mobile) with fade-in transition on tab switch.
- WordPress cards: title, teal "type" badge (Restaurant/Real Estate/etc.), description, stack tags, external link (`target="_blank" rel="noopener"`).
- Next.js cards: same shape but gold/gray "In Progress" badge, link replaced with static "Private team repo" / "Building in public soon" text, card visually muted (lower opacity link, no hover-lift on the link itself — card itself can still lift on hover).
- Deliverable: tab switching works, all 8 project cards render correct data from `lib/data.ts`, external links open in new tab.

### Step 6 — Contact section
- Build `components/Contact.tsx`: two-column grid (info + form), stacking on mobile.
- Info column: intro paragraph + labeled rows (Email/Phone/Location/LinkedIn/GitHub) from `contactInfo`.
- Form: controlled inputs (name, email, message), submit handler builds a `mailto:` link with encoded subject/body and navigates to it — no backend required for this version.
- Deliverable: form is keyboard-accessible, labels are properly associated (`htmlFor`/`id`), submitting opens the user's mail client with prefilled content.

### Step 7 — Polish pass
- Cross-check against §2.5 motion rules and add `prefers-reduced-motion` handling wherever animation was added in Steps 3 and 5.
- Verify responsive behavior at 375px, 768px, 1024px, 1440px.
- Add visible keyboard focus states (`focus-visible` rings in `gold`) on all interactive elements — nav links, tabs, buttons, form fields.
- Run Lighthouse locally; target 90+ across Performance/Accessibility/Best Practices/SEO. Fix any font-loading layout shift, missing alt text, or contrast issues found.
- Add `metadata` export in `app/layout.tsx` (title, description, OG tags) using the hero copy.
- Deliverable: production-ready build, `npm run build` passes clean.

### Step 8 — Deploy
- Push to the existing GitHub repo, connect to Vercel, verify the deployed URL matches local behavior.
- Deliverable: live URL.

---

## 5. Guardrails for OpenCode

- Don't introduce a component library (shadcn, MUI, etc.) — this design is bespoke and small enough to hand-build with Tailwind utilities.
- Don't add icon packs unless a specific icon is genuinely needed (e.g. hamburger menu) — prefer text/typographic solutions (`→`, `%`, `·`) matching the reference implementation.
- Keep `lib/data.ts` as the only place project/bio content lives — components should just map over it. This makes future edits (new projects, updated bio) a data change, not a component change.
- Ask for a review checkpoint after each numbered step above before starting the next one.
