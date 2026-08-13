import type {
  ContactInfo,
  ContactRow,
  HeroHeadingSegment,
  HeroStat,
  NavItem,
  Project,
  SkillGroup,
  TimelineEntry,
} from "@/lib/types";

export const siteName = "Noor Aslam";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const heroTerminalLine = "Who am I";

export const heroHeading: HeroHeadingSegment[] = [
  { text: "Building websites that " },
  { text: "load fast", emphasis: true },
  { text: " and " },
  { text: "convert.", emphasis: true },
];

export const heroSubtext =
  "Hi, I'm Noor Aslam, a Junior Next.js Developer and Frontend & WordPress Developer based in Peshawar, Pakistan. Backed by a year of shipping client projects, I specialize in crafting fast, scalable web experiences leveraging Next.js, React, WordPress, and modern web standards.";

export const heroStats: HeroStat[] = [
  { value: "10+", label: "Live client sites" },
  { value: "85–95", label: "PageSpeed score" },
  { value: "20+", label: "Bugs resolved" },
  { value: "1yr+", label: "Professional exp." },
];

export const stackCycleItems = [
  "Next.js + React",
  "JavaScript (ES6+)",
  "CSS + Tailwind CSS",
  "WordPress + Elementor",
  "WooCommerce",
  "Responsive Design",
  "Core Web Vitals",
  "Odoo 19",
  "GoHighLevel",
];

export const aboutEyebrow = "About";

export const aboutHeading = "Next.js & WordPress Developer";

export const languagesLabel = "Languages";

export const aboutExperienceLabel = "Experience";

export const projectsEyebrow = "Projects";

export const projectsHeading = "Client work and in-progress builds";

export const wordpressTabLabel = "WordPress";

export const nextjsTabLabel = "Next.js";

export const visitSiteLabel = "Visit site";

export const aboutBio = [
  "I started as a WordPress Developer Intern at BeeSocial in 2025 and have since shipped full production websites for restaurants, real estate agencies, e-commerce stores, and solar companies — handling everything from theme customization and Elementor builds to Core Web Vitals optimization and on-page SEO.",
  "Alongside client work, I integrate Odoo 19 (including for restaurant operations) and run Meta and Google Ads for my own projects — so I'm as comfortable handling digital marketing as I am debugging a layout break.",
  "Having built solid proficiency in React.js and Next.js, I am currently working with them on projects like a multilingual travel platform (cockpit.travel) and rebuilding my own portfolio with a proper spec-driven workflow — because I want to design and build custom frontends, not just customize themes.",
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
    tags: [
      "HTML5/CSS3",
      "JavaScript ES6+",
      "Tailwind CSS",
      "React.js",
      "Next.js",
      "REST APIs",
      "Responsive Design",
      "Frontend Architecture",
    ],
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
    label: "AI",
    tags: [
      "Spec-Driven Development",
      "OpenCode",
      "Claude",
      "Gemini",
      "ChatGPT",
      "DeepSeek",
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    period: "Jun 2026 – Present",
    role: "Next.js Developer",
    company: "BeeSocial",
    description:
      "Building custom React and Next.js frontends — a multilingual travel platform (cockpit.travel) pulling live flight, hotel, and car-rental data, plus a spec-driven rebuild of this portfolio.",
  },
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
    title: "GoodHealth",
    badge: "E-Commerce",
    description:
      "WooCommerce medicine store built on the Martfury theme — custom landing pages for products and a popup for sales alerts to boost conversions.",
    stack: ["Martfury", "WooCommerce", "Custom Landing Pages"],
    url: "https://goodhealth.com.pk/",
  },
];

export const nextjsProjects: Project[] = [
  {
    title: "Outdoor",
    badge: "Travel",
    description:
      "Travel website built with Next.js — showcasing outdoor destinations and adventures with a fast, modern frontend.",
    stack: ["Next.js", "Tailwind CSS", "Responsive Design"],
    url: "https://outdoor-next.vercel.app/",
  },
  {
    title: "cockpit.travel",
    badge: "In Progress",
    description:
      "Multilingual travel platform (English, Spanish, Arabic/RTL) built with a team, pulling live flight, hotel, and car-rental data through the Amadeus, Booking.com, and Rentalcars APIs.",
    stack: ["Next.js 14", "Tailwind CSS", "Sanity CMS", "REST APIs"],
    statusText: "Private team repo",
  },
  {
    title: "My Portfolio",
    badge: "Complete",
    description:
      "This website — a Next.js portfolio built section-by-section with a spec-driven workflow (OpenSpec) instead of freehand coding, now live.",
    stack: ["Next.js", "OpenSpec", "Vercel"],
    statusText: "Live",
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

export const contactEyebrow = "Contact";

export const contactHeading = "Let's work together";

export const contactRows: ContactRow[] = [
  { label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s|-/g, "")}` },
  { label: "Location", value: contactInfo.location },
  { label: "LinkedIn", value: contactInfo.linkedin, href: `https://${contactInfo.linkedin}`, external: true },
  { label: "GitHub", value: contactInfo.github, href: `https://${contactInfo.github}`, external: true },
];

export const contactFormNameLabel = "Name";

export const contactFormEmailLabel = "Email";

export const contactFormMessageLabel = "Project details";

export const contactFormSubmitLabel = "Send message";

export const contactFormSubject = "Project inquiry from";

export const contactFormEndpoint = "https://formspree.io/f/xgawyvrr";
