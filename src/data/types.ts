export type NavItem = { id: string; num: string; label: string };
export type NavFootItem = { label: string; href: string };

export type HeroTitlePart = { text: string; italic?: boolean; outline?: boolean };
export type HeroStat = { label: string; value: string };

export type WorkProject = {
  num: string;
  title: string;
  titleEm?: string;
  description: string;
  video?: string;
  videoLabel?: string;
  link?: { href: string; label: string };
};

export type WorkSection = {
  company: string;
  role: string;
  tagline: string;
  period: string;
  from: string;
  to: string;
  duration: string;
  tags: string[];
  projects: WorkProject[];
};

export type AcademyFeature = { title: string; body: string };
export type AcademyTechGroup = { label: string; items: string[] };
export type AcademyRepo = { label: string; href: string };

export type AcademyCard = {
  idx: string;
  tag: string;
  title: string;
  titleEm?: string;
  description: string;
  stack: string;
  linkLabel: string;
  link: string;
  thumb: "lexi" | "kindred" | "pulse" | "minic" | "prolearning";
  featured?: boolean;
  slug?: string;
  period?: string;
  role?: string;
  status?: string;
  live?: string;
  repos?: AcademyRepo[];
  overview?: string[];
  features?: AcademyFeature[];
  techStack?: AcademyTechGroup[];
  contributions?: string;
};

export type StackColumn = { title: string; items: string[] };

export type EduSection = {
  school: string;
  schoolEm: string;
  degree: string;
  gpa: string;
  gpaSub: string;
};

export type ContactSection = {
  headline: { text: string; italic?: boolean }[];
  email: string;
  links: { label: string; value: string; href: string }[];
  footer: { left: string; right: string };
};

export type Portfolio = {
  meta: {
    name: string;
    shortName: string;
    version: string;
    availability: string;
    title: string;
    brand: string;
    location: string;
    timezone: string;
  };
  nav: NavItem[];
  navFoot: NavFootItem[];
  hero: {
    role: string;
    from: string;
    to: string;
    title: HeroTitlePart[];
    avatarSrc: string;
    avatarTag: string;
    bio: string;
    stats: HeroStat[];
  };
  marquee: string[];
  work: WorkSection;
  academy: AcademyCard[];
  stack: StackColumn[];
  edu: EduSection;
  contact: ContactSection;
};
