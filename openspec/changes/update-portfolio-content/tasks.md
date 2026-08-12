## 1. Personal information and About content

- [ ] 1.1 Update `lib/site.ts`: set `name` to "Noor Aslam", `location` to "Peshawar, Pakistan", `email` to `nooraslamchannel@gmail.com`
- [ ] 1.2 Update `lib/site.ts`: replace `bio` with a professional paragraph describing Noor Aslam as a Software Engineering student and web developer interested in building clean, responsive, and user-friendly websites
- [ ] 1.3 Verify the page metadata title becomes "Noor Aslam — Portfolio" (derived from `siteConfig.name`)

## 2. Hero image

- [ ] 2.1 Update `app/sections/hero.tsx` to render `/images/hero image.jpg` (the existing file) instead of `/images/portrait.svg`, keeping the current slot styling, `alt` text, `priority`, and `hidden md:block`
- [ ] 2.2 Add `object-cover` to the hero image to prevent distortion

## 3. Skills

- [ ] 3.1 Add "WordPress" to the Tools category in `lib/skills.ts`, keeping JavaScript and all other existing skills

## 4. Projects

- [ ] 4.1 Expand `lib/projects.ts` to exactly 6 projects: keep the 3 existing projects and add 3 realistic projects with title, short description, technologies, links, and image
- [ ] 4.2 Add placeholder images `public/images/project-four.svg`, `project-five.svg`, `project-six.svg` following the existing placeholder pattern

## 5. Verification

- [ ] 5.1 Confirm no changes were made to overall design, colors, typography, header/footer structure, animations, or responsive behavior
- [ ] 5.2 Run `npm run lint` and fix any errors
- [ ] 5.3 Run `npm run build` and confirm a clean production build
- [ ] 5.4 Run the site and verify: hero image is the existing file (not recreated), About bio and location render, Contact email targets `nooraslamchannel@gmail.com`, WordPress is listed, and exactly 6 project cards render
