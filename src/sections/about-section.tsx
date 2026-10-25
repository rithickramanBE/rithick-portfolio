import { Award, BookOpen, GraduationCap, Lightbulb, MapPin, Zap } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import {
  certifications,
  education,
  portfolioConfig,
} from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";

const aboutParagraphs = [
  "I’m Rithick, a full-stack developer based in Tamil Nadu. I work mostly with React, TypeScript, Node.js, and PostgreSQL.",
  "I graduated in Computer Science from Bannari Amman Institute of Technology in 2023 and joined Adeptview as a junior developer. A year later I moved up to software developer, where I design APIs, make architecture decisions, and review interns’ code.",
  "I like building things that stay fast and reliable in production. Lately I’ve been working on invoice automation with OCR and local LLMs using Ollama.",
  "Outside work, I read about distributed systems and experiment with local AI models.",
];

const currentlyItems = [
  { icon: Zap, text: "Working on — invoice automation with OCR, local LLM field extraction, and BullMQ workflows at Adeptview." },
  { icon: BookOpen, text: "Learning — distributed systems patterns, Redis cluster configuration, and Kubernetes basics." },
  { icon: Lightbulb, text: "Open to — full-stack or backend-leaning roles at product companies or startups. Remote-first preferred." },
];

export function AboutSection() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      aria-labelledby="about-heading"
      className="reveal section-space scroll-mt-24"
    >
      <Container>
        <SectionHeading
          id="about-heading"
          eyebrow={portfolioConfig.sections.about.eyebrow}
          title={portfolioConfig.sections.about.title}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Left: Narrative */}
          <div className="space-y-4">
            {aboutParagraphs.map((para, i) => (
              <p key={i} className="text-sm leading-7 text-slate-200 sm:text-base">
                {para}
              </p>
            ))}

            {/* Currently block */}
            <div className="mt-6 rounded-2xl border border-accent/15 bg-accent/[0.04] p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">Currently</p>
              <ul className="space-y-3">
                {currentlyItems.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                    <Icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location badge */}
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin aria-hidden="true" className="h-4 w-4 text-accent" />
              <span>{portfolioConfig.location} · {portfolioConfig.workPreference}</span>
            </div>
          </div>

          {/* Right: Education + Certifications */}
          <div className="grid gap-4 self-start">
            <Card className="border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-white">
                <GraduationCap aria-hidden="true" className="h-5 w-5 text-accent" />
                {portfolioConfig.sections.education.title}
              </h3>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-accent">{education.degree}</p>
                <h4 className="mt-1 text-base font-semibold text-white">{education.field}</h4>
                <p className="mt-1 text-sm text-slate-300">{education.institution}</p>
                <p className="mt-1.5 text-xs text-slate-400">
                  {education.period} <span aria-hidden="true">·</span> {education.grade}
                </p>
              </div>
            </Card>

            <Card className="border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-white">
                <Award aria-hidden="true" className="h-5 w-5 text-accent" />
                {portfolioConfig.sections.education.certificationHeading}
              </h3>
              <ul className="divide-y divide-white/8">
                {certifications.map((cert) => (
                  <li key={cert.name} className="py-3 first:pt-0 last:pb-0">
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <p className="text-sm font-medium text-white">{cert.name}</p>
                      <p className="shrink-0 text-xs text-slate-400">{cert.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
