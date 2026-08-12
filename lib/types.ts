export interface NavItem {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroHeadingSegment {
  text: string;
  emphasis?: boolean;
}

export interface SkillGroup {
  label: string;
  tags: string[];
  learning?: boolean;
}

export interface TimelineEntry {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface Project {
  title: string;
  badge: string;
  description: string;
  stack: string[];
  url?: string;
  statusText?: string;
}

export interface ContactInfo {
  intro: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface ContactRow {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}
