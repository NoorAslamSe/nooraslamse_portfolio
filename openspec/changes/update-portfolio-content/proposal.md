## Why

The portfolio currently displays generic placeholder content (name "Your Name", a placeholder bio, a portrait placeholder, three generic project placeholders). This change personalizes the site with the owner's real identity and content so it presents as a genuine portfolio.

## What Changes

- Update personal information: name "Noor Aslam", location "Peshawar, Pakistan", email `nooraslamchannel@gmail.com`.
- Replace the placeholder About bio with a professional paragraph describing a Software Engineering student and web developer interested in building clean, responsive, and user-friendly websites.
- Use the owner-provided hero image (`public/images/hero image.jpg`) in the Hero section instead of the portrait placeholder. No new image is created and the existing file is not replaced.
- Add "WordPress" to the existing skills and tools; no existing skills are removed.
- Expand the Projects section to exactly 6 project cards: keep the 3 existing projects and add 3 realistic projects (with placeholder images where the project structure requires one).
- The page title/metadata reflects the owner's name (derived automatically from the site config).
- No changes to overall design, colors, typography, header/footer structure, animations, or responsive behavior.

## Capabilities

### New Capabilities

### Modified Capabilities

- `home-page`: Requirements for the Hero, About, Skills, Projects, and Contact sections are updated to reflect the owner's real content (hero image, professional bio, WordPress skill, exactly six projects, owner's email address).

## Impact

- `lib/site.ts`: name, location, email, and bio values.
- `lib/skills.ts`: add "WordPress" to the Tools category.
- `lib/projects.ts`: expanded to 6 projects.
- `app/sections/hero.tsx`: render the owner's hero image instead of the portrait placeholder.
- `public/images/hero image.jpg`: referenced only; not renamed, recreated, or replaced.
- `public/images/`: new placeholder SVGs for the added projects.
- `app/layout.tsx`: metadata title updates automatically from the site config name.
