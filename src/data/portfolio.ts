import {
  Database,
  MonitorSmartphone,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

import type {
  CertificationItem,
  EngineeringNote,
  ExperienceItem,
  NavItem,
  ProjectItem,
  SkillGroup,
  SocialLink,
  Testimonial,
} from "@/types/portfolio";

// ─── Site Config ───────────────────────────────────────────
export const portfolioConfig = {
  name: "Rithick Raman",
  role: "Full-Stack Software Developer",
  opportunityBadge: {
    enabled: true,
    label: "Open to opportunities",
  },
  location: "Nilgiris, Tamil Nadu, India",
  workPreference: "Remote-first · Open to product companies & startups",
  tagline:
    "I build fast, reliable full-stack products — from React UI to queue-driven backends.",
  introduction:
    "Experienced in API design, real-time systems, background job queues, and AI-assisted document automation. I care about clean architecture, measurable performance, and code that doesn't surprise the next engineer.",
  typingRoles: [
    "Full-Stack Engineer",
    "API Design",
    "Queue-driven Systems",
    "Real-time Apps",
  ],
  profileImage: "rithick-raman-profile.jpg",
  profileImageAlt: "Portrait of Rithick Raman, Full-Stack Software Developer.",
  resumePath: "Rithick-Raman-Resume.pdf",
  email: "rithickraman855@gmail.com",
  socialLinks: {
    github: "https://github.com/rithickramanBE",
    linkedin: "https://www.linkedin.com/in/rithick-819b72217",
  },
  address: {
    locality: "Nilgiris",
    region: "Tamil Nadu",
    country: "India",
  },
  canonicalUrl: "https://rithickramanbe.github.io/rithick-portfolio/",
  pageTitle: "Rithick Raman | Full-Stack Software Developer",
  pageDescription:
    "Portfolio of Rithick Raman — Full-Stack Developer with 3+ years building production React/Node.js apps with PostgreSQL, Redis, BullMQ, and Socket.IO.",
  themeColor: "#0b1120",
  socialPreviewImage: "og-image.png",
  socialPreviewAlt: "Rithick Raman — Full-Stack Software Developer portfolio preview.",
  sections: {
    projects: {
      eyebrow: "Projects",
      title: "Production systems and real-world builds.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Three years, two titles, one team.",
    },
    skills: {
      eyebrow: "Skills",
      title: "Technologies I use in production.",
    },
    about: {
      eyebrow: "About",
      title: "Full-Stack Developer focused on reliable product delivery.",
      description:
        "I take features from database schema and API design through to responsive interfaces, with a focus on real-time systems and AI-assisted document automation.",
    },
    notes: {
      eyebrow: "Engineering Notes",
      title: "Writing through what I've built.",
    },
    education: {
      title: "Education",
      certificationHeading: "Certifications",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk.",
      invitation:
        "I reply within 24 hours. Whether it's a role, a contract, or a technical question — drop me a line.",
      responseTime: "Typically responds within 24 hours",
    },
  },
  projectLabels: {
    role: "My role",
    challenge: "Key challenge",
    companyNote: "Company project · details abstracted for confidentiality.",
  } as const,
  footerDescription: "Building and maintaining full-stack production applications.",
} as const;

// ─── Navigation ────────────────────────────────────────────
export const navItems: NavItem[] = [
  { label: "Work",       href: "#projects"    },
  { label: "Experience", href: "#experience"  },
  { label: "Skills",     href: "#skills"      },
  { label: "Writing",    href: "#notes"       },
  { label: "Contact",    href: "#contact"     },
];

// ─── Social Links ──────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: portfolioConfig.socialLinks.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: portfolioConfig.socialLinks.linkedin,
    icon: FaLinkedinIn,
  },
  {
    label: "Email",
    href: `mailto:${portfolioConfig.email}`,
    icon: FaEnvelope,
  },
];

// ─── Hero Stats ────────────────────────────────────────────
export const heroStats = [
  { value: "3+",  label: "years full-stack"        },
  { value: "3",   label: "production applications" },
  { value: "49%", label: "API response time cut"   },
  { value: "85%", label: "Jest test coverage"      },
];

// ─── Skills ────────────────────────────────────────────────
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    items: [
      { name: "React",        years: "3 yrs",  where: "All 3 production apps"        },
      { name: "TypeScript",   years: "2 yrs",  where: "All production apps"          },
      { name: "Redux",        years: "1.5 yrs", where: "Contract workflow app"       },
      { name: "React Native", years: "6 mo",   where: "Translation chatbot"          },
      { name: "Material UI",  years: "2 yrs",  where: "Inventory & POS system"       },
      { name: "Tailwind CSS", years: "1 yr",   where: "Internal dashboards"          },
      { name: "Context API",  years: "2 yrs",  where: "State management"             },
      { name: "Firebase",     years: "6 mo",   where: "Chatbot auth & realtime DB"   },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Workflow,
    items: [
      { name: "Node.js",    years: "3 yrs",  where: "All production services"      },
      { name: "Express.js", years: "3 yrs",  where: "REST API layer"               },
      { name: "FastAPI",    years: "1 yr",   where: "Python microservices"         },
      { name: "Socket.IO",  years: "1.5 yrs", where: "Real-time notifications"    },
      { name: "REST APIs",  years: "3 yrs",  where: "Core of every project"        },
      { name: "JWT",        years: "2 yrs",  where: "Auth across all apps"         },
      { name: "RBAC",       years: "2 yrs",  where: "5-role access control"        },
      { name: "Swagger",    years: "2 yrs",  where: "API documentation"            },
    ],
  },
  {
    title: "Data & Infra",
    icon: Database,
    items: [
      { name: "PostgreSQL",      years: "3 yrs",  where: "Primary DB for all apps"    },
      { name: "Prisma ORM",      years: "2.5 yrs", where: "Schema & query layer"      },
      { name: "Redis",           years: "1.5 yrs", where: "Queue backing store"       },
      { name: "BullMQ",          years: "1.5 yrs", where: "Background job queues"     },
      { name: "MySQL",           years: "1 yr",    where: "Legacy system integration" },
      { name: "Tesseract OCR",   years: "1 yr",    where: "Invoice processing"        },
      { name: "Ollama",          years: "1 yr",    where: "Local LLM for invoice AI"  },
      { name: "Azure Pipelines", years: "1 yr",    where: "Event-driven automation"   },
    ],
  },
  {
    title: "Delivery & Testing",
    icon: ShieldCheck,
    items: [
      { name: "Docker",       years: "1.5 yrs", where: "CI/CD & containerisation" },
      { name: "GitHub Actions",years: "1.5 yrs", where: "CI/CD pipelines"         },
      { name: "Jest",         years: "2 yrs",  where: "85% coverage maintained"   },
      { name: "Jenkins",      years: "1 yr",   where: "Build pipelines"            },
      { name: "Postman",      years: "3 yrs",  where: "API testing & mocking"     },
      { name: "Git",          years: "3 yrs",  where: "Every project"              },
      { name: "Agile/Scrum",  years: "3 yrs",  where: "Sprint-based delivery"     },
    ],
  },
];

// ─── Experience ────────────────────────────────────────────
export const experience: ExperienceItem[] = [
  {
    company: "Adeptview, Chennai",
    role: "Software Developer (Full Stack)",
    period: "August 2024 – Present",
    summary:
      "Promoted from Junior Developer after one year. Leading feature development across three production applications, with a focus on API performance, background processing, and AI-assisted automation.",
    responsibilities: [
      "Cut average API response time 49% (350 ms → 180 ms) by rewriting N+1 queries, adding composite indexes, and moving aggregation to the database layer.",
      "Reduced dashboard load time 40% using server-side pagination, multi-column filtering, and virtualized list rendering with React.",
      "Automated invoice ingestion pipeline with Tesseract OCR and locally hosted Ollama models, routing extracted data through configurable multi-stage approvals via BullMQ and Redis.",
      "Designed and built JWT + RBAC auth covering five user roles across two applications, with refresh-token rotation and session invalidation.",
      "Delivered real-time notification system using Socket.IO with room-based broadcasting and Redis adapter for horizontal scalability.",
      "Containerised services with Docker and configured GitHub Actions CI/CD pipelines, cutting deployment time from manual to under 10 minutes.",
    ],
  },
  {
    company: "Adeptview, Chennai",
    role: "Junior Software Developer",
    period: "August 2023 – August 2024",
    summary:
      "Joined as a fresh graduate. Built and maintained REST APIs and responsive React interfaces for production applications, earning a promotion after 12 months.",
    responsibilities: [
      "Developed PostgreSQL-backed REST APIs with Node.js, Express, and Prisma ORM for an inventory and POS system.",
      "Built and integrated React + Material UI components with Node.js/Express APIs, implementing complex form validation and state management.",
      "Raised Jest test coverage from ~40% to 85%, which reduced production defects by 25% over two release cycles.",
      "Improved query performance 20–30% through SQL profiling, index optimisation, and Prisma query analysis.",
    ],
  },
];

// ─── Projects ──────────────────────────────────────────────
export const projects: ProjectItem[] = [
  {
    title: "Invoice Processing & Automation System",
    summary:
      "End-to-end pipeline that reads emailed invoices, extracts structured data with OCR and a local LLM, then routes items through a configurable multi-stage approval workflow.",
    role:
      "Designed and built the OCR extraction layer, Ollama-powered field normalisation, BullMQ async processing, and the approval workflow engine.",
    challenge:
      "Reliably extracting structured data from inconsistently formatted invoice PDFs and coordinating async approval stages without data loss on service restarts.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tesseract OCR", "Ollama", "BullMQ", "Redis"],
    categories: ["Full-Stack", "Backend", "AI/Python"],
    companyProject: true,
  },
  {
    title: "Inventory & Point-of-Sale Management System",
    summary:
      "Manages purchase and sales orders, goods receipt and issue, multi-location stock levels, and supplier relationships with real-time stock updates across branches.",
    role:
      "Built the inventory and order management APIs, real-time stock sync using Socket.IO, and the React dashboard with virtualized rendering for large item lists.",
    challenge:
      "Keeping stock quantities and order status consistent across concurrent requests from multiple locations without race conditions.",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Docker", "Socket.IO", "JWT"],
    categories: ["Full-Stack", "Real-time"],
    companyProject: true,
  },
  {
    title: "Contract & Invoice Workflow Automation",
    summary:
      "Document management system with full version history, immutable audit trails, multi-stage approval flows, and async BullMQ-backed email notifications.",
    role:
      "Built the version history engine, approval state machine, organisation-level RBAC isolation, and BullMQ notification queues.",
    challenge:
      "Maintaining complete audit history and strict organisation-level data isolation across a multi-tenant approval workflow without complicating the query layer.",
    tech: ["React", "Redux", "Node.js", "PostgreSQL", "Prisma ORM", "BullMQ", "Redis", "JWT"],
    categories: ["Full-Stack", "Backend"],
    companyProject: true,
  },
  {
    title: "Multilingual Translation Chatbot",
    summary:
      "React Native mobile app supporting text-to-text and audio-to-audio translation in multiple languages, with Firebase auth and persistent chat history.",
    role:
      "Built the full application: Firebase auth, translation API integration, audio recording/playback pipeline, and chat history persistence.",
    challenge:
      "Supporting low-latency audio capture, translation, and spoken playback in a single conversational flow on mobile.",
    tech: ["React Native", "Firebase", "TypeScript"],
    categories: ["Full-Stack"],
    companyProject: false,
    githubUrl: "#",
  },
];

// ─── Education ─────────────────────────────────────────────
export const education = {
  degree: "Bachelor of Engineering",
  field: "Computer Science and Engineering",
  institution: "Bannari Amman Institute of Technology",
  period: "2019–2023",
  grade: "CGPA 8.0 / 10",
};

// ─── Certifications ────────────────────────────────────────
export const certifications: CertificationItem[] = [
  {
    name: "Node.js (Basic & Intermediate)",
    issuer: "HackerRank",
    date: "July 2024",
  },
  {
    name: "Power BI Fundamentals (PL-100)",
    issuer: "Microsoft",
    date: "April 2024",
  },
  {
    name: "Node.js Advanced Concepts",
    issuer: "Udemy",
    date: "October 2026",
  },
  {
    name: "Generative AI Course",
    issuer: "1000 Prompters",
    date: "October 2026",
  },
];

// ─── Engineering Notes ─────────────────────────────────────
export const engineeringNotes: EngineeringNote[] = [
  {
    title: "Why I moved heavy jobs to BullMQ — and what I learned about queue design",
    summary:
      "Replacing synchronous invoice processing with BullMQ workers cut our p95 endpoint latency from 4 s to under 200 ms. Here's the architecture, the failure modes I hit, and how I handled job retries without duplicating database writes.",
    readTime: "8 min read",
    tag: "Backend",
  },
  {
    title: "Socket.IO at scale: room-based broadcasting and the Redis adapter",
    summary:
      "When we added a second Node.js instance, Socket.IO events stopped reaching all clients. This post walks through the problem, the Redis adapter solution, and the tradeoffs between sticky sessions and the pub/sub approach.",
    readTime: "6 min read",
    tag: "Real-time",
  },
  {
    title: "Prisma ORM: the query patterns that caused problems and how I fixed them",
    summary:
      "Prisma makes relations easy — maybe too easy. I'll show the N+1 patterns I found in production using query logging, the `include` vs `select` tradeoff, and the raw SQL escape hatch that saved our invoice dashboard.",
    readTime: "7 min read",
    tag: "Database",
  },
];

// ─── Testimonials ──────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    quote: "[REAL QUOTE NEEDED]",
    name: "[Manager / Lead Name]",
    role: "[Their Title]",
    company: "Adeptview",
    initials: "??",
  },
  {
    quote: "[REAL QUOTE NEEDED]",
    name: "[Teammate Name]",
    role: "[Their Title]",
    company: "Adeptview",
    initials: "??",
  },
  {
    quote: "[REAL QUOTE NEEDED]",
    name: "[Colleague Name]",
    role: "[Their Title]",
    company: "Adeptview",
    initials: "??",
  },
];

