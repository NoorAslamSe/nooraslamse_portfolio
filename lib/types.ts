export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  facts: string[];
  navItems: NavItem[];
  email: string;
  socials: SocialLink[];
}
