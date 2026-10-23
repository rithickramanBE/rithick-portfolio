import {
  Activity,
  Blocks,
  Code2,
  Database,
  FileBadge2,
  Globe2,
  Layers3,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

import type {
  ExperienceItem,
  NavItem,
  ProjectItem,
  SkillGroup,
  SocialLink,
  StatItem,
  TechItem,
} from "@/types/portfolio";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/rithickramanBE",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rithick-819b72217",
    icon: FaLinkedinIn,
  },
  {
    label: "Email",
    href: "mailto:rithickraman855@gmail.com",
    icon: FaEnvelope,
  },
];

export const heroStats = [
  { value: "3+ years", label: "full-stack experience" },
  { value: "3 apps", label: "built for production" },
  { value: "49%", label: "lower API response time" },
];

export const aboutStats: StatItem[] = [
  {
    label: "Years Experience",
    value: "3+",
    description: "Building and maintaining full-stack applications",
    icon: Sparkles,
  },
  {
    label: "Production Apps",
    value: "3",
    description: "Full-stack applications delivered at Adeptview",
    icon: Blocks,
  },
  {
    label: "API Response Time",
    value: "−49%",
    description: "Reduced average response time from 350 ms to 180 ms",
    icon: Activity,
  },
  {
    label: "Jest Test Coverage",
    value: "85%",
    description: "Coverage achieved through automated testing",
    icon: Code2,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Responsive web and mobile interfaces.",
    icon: MonitorSmartphone,
    items: [
      "React.js",
      "React Native",
      "Firebase Auth",
      "Firebase (chat storage)",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Context API",
      "Material UI",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend & APIs",
    description: "Application services, integrations, and access control.",
    icon: Workflow,
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "Swagger",
      "JWT",
      "OAuth2",
      "RBAC",
      "Socket.IO",
    ],
  },
  {
    title: "Data & Automation",
    description: "Relational data, async jobs, and document processing.",
    icon: Database,
    items: [
      "PostgreSQL",
      "MySQL",
      "Prisma ORM",
      "Redis",
      "BullMQ",
      "Tesseract OCR",
      "Ollama",
      "Azure AI Pipelines",
    ],
  },
  {
    title: "Delivery & Testing",
    description: "Containerized delivery, CI/CD, and quality practices.",
    icon: ShieldCheck,
    items: [
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "Jest",
      "Postman",
      "Git",
      "Agile/Scrum",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Adeptview, Chennai",
    role: "Software Developer (Full Stack)",
    period: "August 2024 - Present",
    summary:
      "Own end-to-end features across production applications, from database schema and API design through responsive user interfaces. Modular architecture and reusable API layers helped reduce time to market by 20%.",
    responsibilities: [
      "Designed and deployed three production full-stack applications using React.js, TypeScript, Node.js, and PostgreSQL.",
      "Optimized SQL queries and database indexes, reducing average API response time from 350 ms to 180 ms (49%).",
      "Improved large-dashboard data loading by 40% with server-side pagination, multi-column filtering, and virtualized rendering.",
      "Built invoice automation using Tesseract OCR, locally hosted Ollama models, and Azure event-driven pipelines.",
      "Implemented JWT authentication and RBAC for five roles, plus real-time notifications with Socket.IO and PostgreSQL LISTEN/NOTIFY.",
      "Added BullMQ/Redis job queues and Docker-based CI/CD with GitHub Actions and Jenkins.",
    ],
  },
  {
    company: "Adeptview, Chennai",
    role: "Junior Software Developer",
    period: "August 2023 - August 2024",
    summary:
      "Built and maintained REST APIs and responsive React interfaces, strengthening data access, test coverage, and production reliability.",
    responsibilities: [
      "Developed PostgreSQL-backed REST APIs with Node.js and Prisma ORM.",
      "Built React.js and Material UI components and integrated them with Node.js/Express APIs.",
      "Led Jest testing work to reach 85% code coverage and reduce production defects by 25%.",
      "Improved database query performance by 20–30% through SQL optimization and index tuning.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Invoice Processing & Automation System",
    description:
      "An invoice workflow that ingests documents from email, extracts structured fields with OCR and locally hosted LLMs, and routes them through configurable approvals.",
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tesseract OCR",
      "Ollama",
      "BullMQ",
      "Redis",
      "FastAPI",
    ],
    highlights: [
      "IMAP email ingestion and OCR/LLM extraction",
      "Asynchronous processing and approval workflows",
      "RBAC and real-time status notifications",
    ],
    accent: "from-sky-500/20 via-sky-500/5 to-cyan-500/10",
    previewType: "invoice",
  },
  {
    title: "Inventory & Point-of-Sale Management System",
    description:
      "An inventory and order management system covering purchase and sales orders, goods receipt and issue, multi-location stock, and supplier management.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
      "Socket.IO",
      "JWT",
    ],
    highlights: [
      "Purchase orders, sales orders, GRN, and GIN",
      "Multi-location stock and supplier management",
      "Docker-based services and real-time stock updates",
    ],
    accent: "from-emerald-500/20 via-emerald-500/5 to-teal-500/10",
    previewType: "inventory",
  },
  {
    title: "Contract & Invoice Workflow Automation",
    description:
      "A contract lifecycle system with version history, audit trails, multi-stage approvals, and asynchronous notifications across organizations.",
    tech: [
      "React.js",
      "Redux",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "BullMQ",
      "Redis",
      "JWT",
    ],
    highlights: [
      "Version control and audit trail logging",
      "Configurable multi-stage approval workflows",
      "Organization-level data isolation and RBAC",
    ],
    accent: "from-violet-500/20 via-violet-500/5 to-fuchsia-500/10",
    previewType: "workflow",
  },
  {
    title: "Multilingual Translation Chatbot",
    description:
      "A React Native chatbot that supports text-to-text and audio-to-audio translation, letting users listen to responses in their preferred language. Firebase handles authentication and chat history storage.",
    tech: ["React Native", "Firebase Auth", "Firebase (chat storage)"],
    highlights: [
      "Text-to-text translation",
      "Audio-to-audio translation with translated audio playback",
      "Firebase authentication and saved chat history",
    ],
    accent: "from-amber-500/20 via-amber-500/5 to-orange-500/10",
    previewType: "mobile",
  },
];

export const techStack: TechItem[] = [
  { name: "React.js / React Native", icon: Code2 },
  { name: "Firebase", icon: Zap },
  { name: "TypeScript", icon: FileBadge2 },
  { name: "Node.js / Express.js", icon: Database },
  { name: "PostgreSQL / Prisma", icon: Layers3 },
  { name: "FastAPI", icon: Globe2 },
  { name: "Redis / BullMQ", icon: Zap },
  { name: "OCR / Local LLMs", icon: Sparkles },
  { name: "Docker / CI/CD", icon: Workflow },
];

export const techHighlights = [
  { title: "Performance", value: "49% lower API response time", icon: Zap },
  { title: "Automation", value: "Tesseract OCR + Ollama", icon: Sparkles },
  { title: "Authorization", value: "JWT + RBAC for 5 roles", icon: ShieldCheck },
  {
    title: "Delivery",
    value: "Docker, GitHub Actions, Jenkins",
    icon: Workflow,
  },
];
