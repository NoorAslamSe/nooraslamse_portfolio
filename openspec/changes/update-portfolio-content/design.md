## Context

The portfolio was implemented from the `portfolio-home-page` change (fully implemented, not yet archived). It currently uses placeholder content: `lib/site.ts` holds generic values, the Hero renders `public/images/portrait.svg`, and `lib/projects.ts` has three generic placeholder projects. The owner provided real personal information and added a hero image at `public/images/hero image.jpg`. See `proposal.md` for motivation and `specs/home-page/spec.md` for the behavioral requirements. Note: `openspec/specs/` is currently empty because `portfolio-home-page` has not been archived; this change's delta targets the `home-page` capability that change will establish.

## Goals / Non-Goals

**Goals:**
- Personalize content exclusively through the existing data modules and the Hero image slot.
- Use the owner's existing hero image file without creating or replacing it.
- Reach exactly 6 projects by keeping the existing 3 and adding 3 realistic ones.
- Add WordPress without removing any existing skill.
- Keep the rendered design, layout, colors, typography, header/footer, animations, and responsive behavior identical.

**Non-Goals:**
- Any visual/design or structural changes.
- Renaming, recreating, or replacing `public/images/hero image.jpg`.
- Removing existing skills, projects, or assets.
- Changing the `SiteConfig`, `SkillCategory`, or `Project` type shapes.

## Decisions

### Personal information and bio (`lib/site.ts`)
- Set `name` to "Noor Aslam", `location` to "Peshawar, Pakistan", `email` to `nooraslamchannel@gmail.com`.
- Replace `bio` with a professional paragraph describing a Software Engineering student and web developer interested in building clean, responsive, and user-friendly websites.
- Keep `role`, `tagline`, `facts`, `navItems`, and `socials` unchanged (not requested).
- Page title flows from `name`, so metadata automatically becomes "Noor Aslam — Portfolio" with no layout change.

### Hero image (`app/sections/hero.tsx`)
- Swap the `src` of the existing `next/image` from `/images/portrait.svg` to `/images/hero image.jpg` (the exact file present in `public/images/`).
- Keep the existing slot styling: `width={240}`, `height={240}`, `priority`, `rounded-2xl`, `ring-1 ring-border`, `hidden md:block`.
- Add `object-cover` so the JPG fills the 240×240 slot without distortion.
- Next.js encodes the space in the filename when building the image URL; the file is referenced, never renamed or modified.
- `portrait.svg` remains in `public/images/` but is no longer referenced; it is not deleted (unrelated change).

### Skills (`lib/skills.ts`)
- Add "WordPress" to the existing "Tools" category (alongside Git, Node.js, VS Code). All existing skills and categories remain.

### Projects (`lib/projects.ts` and `public/images/`)
- Keep the 3 existing projects and add 3 realistic projects (e.g., "Task Manager", "Weather Dashboard", "Personal Blog") with realistic descriptions, technologies, and `example.com`/`github.com` link placeholders.
- Add `public/images/project-four.svg`, `project-five.svg`, `project-six.svg` following the existing gradient placeholder pattern so every project has a placeholder image (the `Project` type requires an `image`).

## Risks / Trade-offs

- **Hero filename contains a space** → Next.js encodes spaces in image URLs; verified during build/run. If rendering issues arise, reference the URL-encoded path. `object-cover` prevents distortion.
- **New project links use placeholder URLs** (owner has not provided real URLs) → easy to update later in the data module; no structural impact.
- **Existing generic placeholder projects remain** → required by the instruction to keep existing projects; they remain trivially editable in `lib/projects.ts`.
- **`portrait.svg` becomes unused** → harmless leftover asset; intentionally kept to avoid unrelated file changes.

## Migration Plan

- Data-module and Hero-slot edits only; no structural, type, or design changes.
- Rollback: revert via git; no data or schema migrations apply.

## Open Questions

- Real URLs for the three new projects and the owner's actual GitHub/LinkedIn profile URLs (currently placeholders). These do not affect the specs, approach, or task breakdown.
- Whether the three existing generic placeholder projects should eventually be renamed/replaced — deferred; currently kept per instruction.
