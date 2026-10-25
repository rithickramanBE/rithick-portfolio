import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type SkillItem = {
  name: string;
  years: string;
  where: string;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: SkillItem[];
};

export type WorkPrinciple = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  responsibilities: string[];
};

export type ProjectCategory = "Full-Stack" | "Backend" | "Real-time" | "AI/Python";

export type CaseStudy = {
  overview: string;
  problem: string;
  role: string;
  architecture: {
    summary: string;
    steps: string[];
  };
  technicalDecisions: {
    decision: string;
    why: string;
    tradeoff: string;
  }[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  results: {
    metric: string;
    label: string;
  }[];
};

export type ProjectItem = {
  id?: string;
  title: string;
  summary: string;
  role: string;
  challenge: string;
  tech: string[];
  categories: ProjectCategory[];
  companyProject: boolean;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: CaseStudy;
};

export type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  verificationTodo?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export type EngineeringNote = {
  title: string;
  summary: string;
  readTime: string;
  tag: string;
  date?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
