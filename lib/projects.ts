import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of this placeholder project and what it does.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Demo", url: "https://example.com" },
      { label: "Code", url: "https://github.com/" },
    ],
    image: "/images/project-one.svg",
  },
  {
    title: "Project Two",
    description:
      "A short description of this placeholder project and what it does.",
    technologies: ["React", "Node.js"],
    links: [
      { label: "Demo", url: "https://example.com" },
      { label: "Code", url: "https://github.com/" },
    ],
    image: "/images/project-two.svg",
  },
  {
    title: "Project Three",
    description:
      "A short description of this placeholder project and what it does.",
    technologies: ["TypeScript", "Next.js"],
    links: [{ label: "Code", url: "https://github.com/" }],
    image: "/images/project-three.svg",
  },
  {
    title: "Task Manager",
    description:
      "A full-stack task management app with categories, priorities, and persistent local storage.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Demo", url: "https://example.com" },
      { label: "Code", url: "https://github.com/" },
    ],
    image: "/images/project-four.svg",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that shows current conditions and a 5-day forecast for any city.",
    technologies: ["JavaScript", "REST API", "CSS"],
    links: [
      { label: "Demo", url: "https://example.com" },
      { label: "Code", url: "https://github.com/" },
    ],
    image: "/images/project-five.svg",
  },
  {
    title: "Personal Blog",
    description:
      "A clean blogging platform with markdown posts, tags, and a fully responsive reading experience.",
    technologies: ["Next.js", "TypeScript", "Markdown"],
    links: [
      { label: "Demo", url: "https://example.com" },
      { label: "Code", url: "https://github.com/" },
    ],
    image: "/images/project-six.svg",
  },
];
