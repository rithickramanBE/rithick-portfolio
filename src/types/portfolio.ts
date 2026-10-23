import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

export type SkillGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  responsibilities: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  accent: string;
  previewType: "invoice" | "inventory" | "workflow" | "mobile";
};

export type TechItem = {
  name: string;
  icon: IconType;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};
