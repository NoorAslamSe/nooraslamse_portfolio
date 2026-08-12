import type {
  ContactInfo,
  HeroHeadingSegment,
  HeroStat,
  NavItem,
  Project,
  SkillGroup,
  TimelineEntry,
} from "@/lib/types";

export const siteName = "noor.dev";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroTerminalLine = "noor@peshawar ~ % whoami";

export const heroHeading: HeroHeadingSegment[] = [
  { text: "Building websites that " },
  { text: "load fast", emphasis: true },
  { text: " and " },
  { text: "convert.", emphasis: true },
];

export const heroSubtext =
  "I'm Noor Aslam, a WordPress & Frontend Developer in Peshawar, Pakistan — one year deep into shipping client sites, and currently rebuilding my own toolkit around React and Next.js.";

export const heroStats: HeroStat[] = [
  { value: "6+", label: "Live client sites" },
  { value: "85–95", label: "PageSpeed score" },
  { value: "20+", label: "Bugs resolved" },
  { value: "1yr+", label: "Professional exp." },
];

export const stackCycleItems = [
  "WordPress + Elementor",
  "WooCommerce",
  "Next.js + React",
  "Core Web Vitals",
  "Odoo 19",
];

export const aboutEyebrow = "About";

export const aboutHeading = "WordPress craft, developer mind";

export const languagesLabel = "Languages";

export const aboutExperienceLabel = "Experience";

export const projectsEyebrow = "Projects";

export const projectsHeading = "Client work and in-progress builds";

export const wordpressTabLabel = "WordPress";

export const nextjsTabLabel = "Next.js";

export const visitSiteLabel = "Visit site";

export const aboutBio = [
  "I started as a WordPress Developer Intern at BeeSocial in 2024 and have since shipped full production websites for restaurants, real estate agencies, e-commerce stores, and solar companies — handling everything from theme customization and Elementor builds to Core Web Vitals optimization and on-page SEO.",
  "Alongside client work, I run Meta and Google Ads campaigns, manage GoHighLevel CRM workflows, and integrate Odoo 19 for backend business operations — so I'm as comfortable talking to a client about lead generation as I am debugging a layout break.",
  "I'm now expanding into React.js and Next.js, working on a multilingual travel platform (cockpit.travel) and rebuilding my own portfolio with a proper spec-driven workflow — because I want to design and build custom frontends, not just customize themes.",
];

export const languages = [
  "English (Professional)",
  "Urdu (Native)",
  "Pashto (Native)",
];

export const skillGroups: SkillGroup[] = [
  {
    label: "WordPress",
    tags: ["Elementor Pro", "WooCommerce", "Theme Customization", "Plugin Config"],
  },
  {
    label: "Frontend",
    tags: ["HTML5/CSS3", "JavaScript ES6+", "Bootstrap 5", "Responsive Design"],
  },
  {
    label: "Performance & SEO",
    tags: ["Core Web Vitals", "On-Page SEO", "Search Console", "Google Analytics"],
  },
  {
    label: "Business & Marketing",
    tags: ["Meta Ads", "Google Ads", "GoHighLevel", "Odoo 19"],
  },
  {
    label: "Currently learning",
    tags: ["React.js", "Next.js", "REST APIs", "Frontend Architecture"],
    learning: true,
  },
];

export const timeline: TimelineEntry[] = [
  {
    period: "Jan 2025 – Present",
    role: "WordPress & Frontend Developer",
    company: "BeeSocial",
    description:
      "Developed and launched 6+ responsive WordPress sites across restaurant, real estate, e-commerce, and solar industries. Customized Savour, Theratio, Ecoly, and Astra themes; integrated WooCommerce and Odoo 19; resolved 20+ production bugs.",
  },
  {
    period: "2024 – 3 Months",
    role: "WordPress Developer Intern",
    company: "BeeSocial",
    description:
      "Assisted senior developers with WordPress architecture, themes, and plugin ecosystems. Handled optimization, mobile responsiveness testing, and live site maintenance.",
  },
  {
    period: "2023 – 2027",
    role: "BSc Software Engineering",
    company: "Virtual University of Pakistan",
    description:
      "In progress. Also holds a Diploma in Information Technology from the Board of Technical Education.",
  },
];

export const wordpressProjects: Project[] = [
  {
    title: "Tanttoor",
    badge: "Restaurant",
    description:
      "Menu showcase, gallery, and reservation CTAs on the Savour theme, backed by Odoo 19 for order workflow management.",
    stack: ["WordPress", "Elementor", "Odoo 19", "SEO"],
    url: "https://www.tanttoor.com/",
  },
  {
    title: "ArtStruck",
    badge: "Real Estate",
    description:
      "Property listing layouts and agent profile pages on the Theratio theme, with Search Console and structured metadata configured for organic visibility.",
    stack: ["WordPress", "Theratio", "WooCommerce"],
    url: "https://artstruck.com.pk/",
  },
  {
    title: "Serene Properties",
    badge: "Real Estate",
    description:
      "Custom Elementor build with no theme dependency — property showcase sections and lead capture forms, optimized for load speed and mobile.",
    stack: ["Elementor", "Custom Build", "SEO"],
    url: "https://www.faisaltown.beerealtors.com/",
  },
  {
    title: "NH Engineerings",
    badge: "Solar E-Comm",
    description:
      "Ecoly-theme storefront for solar products with WooCommerce catalog, category pages, and a conversion-optimized checkout.",
    stack: ["WooCommerce", "Ecoly", "On-Page SEO"],
    url: "https://www.nhengineerings.com/",
  },
  {
    title: "Darvesh Café",
    badge: "Restaurant",
    description:
      "Savour-theme café site with menu displays and ambiance galleries; Odoo 19 integration for day-to-day business operations.",
    stack: ["WordPress", "Odoo 19", "Performance"],
    url: "https://www.art.beesocialpk.com/",
  },
  {
    title: "Good Health Nutrition",
    badge: "E-Commerce",
    description:
      "Astra-theme supplement storefront with strong Core Web Vitals and structured data across product and category pages.",
    stack: ["Astra", "WooCommerce", "Core Web Vitals"],
    url: "https://goodhealthnutrition.co/",
  },
];

export const nextjsProjects: Project[] = [
  {
    title: "cockpit.travel",
    badge: "In Progress",
    description:
      "Multilingual travel platform (English, Spanish, Arabic/RTL) built with a team, pulling live flight, hotel, and car-rental data through the Amadeus, Booking.com, and Rentalcars APIs.",
    stack: ["Next.js 14", "Tailwind CSS", "Sanity CMS", "REST APIs"],
    statusText: "Private team repo",
  },
  {
    title: "Personal Portfolio v2",
    badge: "In Progress",
    description:
      "This site, rebuilt properly — a Next.js rewrite of the portfolio, developed section-by-section with a spec-driven workflow (OpenSpec) instead of freehand coding.",
    stack: ["Next.js", "OpenSpec", "Vercel"],
    statusText: "Building in public soon",
  },
];

export const contactInfo: ContactInfo = {
  intro:
    "Whether it's a WordPress build, a speed and SEO audit, or a custom Next.js frontend — I'd like to hear about it. I usually reply within a day.",
  email: "nooraslamchannel@gmail.com",
  phone: "+92 330-1435193",
  location: "Peshawar, KPK, Pakistan",
  linkedin: "linkedin.com/in/nooraslamse",
  github: "github.com/nooraslamse",
};
