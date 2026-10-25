import { useState } from "react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { portfolioConfig, skillGroups } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";

const workPrinciples = [
  { emoji: "🧪", label: "Testing", detail: "85% Jest coverage maintained across all production services." },
  { emoji: "🔍", label: "Code review", detail: "PR-first workflow; meaningful reviews over rubber-stamps." },
  { emoji: "📝", label: "Documentation", detail: "Swagger for APIs; inline docs for any non-obvious logic." },
  { emoji: "🚀", label: "CI/CD", detail: "GitHub Actions pipelines, Docker images, under 10-min deploys." },
  { emoji: "⚡", label: "Performance", detail: "Query profiling, index analysis, and client-side virtualisation." },
];

export function SkillsSection() {
  const [tooltip, setTooltip] = useState<string | null>(null);
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="skills"
      ref={ref}
      aria-labelledby="skills-heading"
      className="reveal section-space scroll-mt-24"
    >
      <Container>
        <SectionHeading
          id="skills-heading"
          eyebrow={portfolioConfig.sections.skills.eyebrow}
          title={portfolioConfig.sections.skills.title}
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <article key={group.title} aria-labelledby={`skill-${group.title}`}>
              <Card className="h-full border-white/10 bg-white/[0.04] p-5 hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 border border-accent/20">
                    <group.icon
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-accent"
                    />
                  </div>
                  <h3
                    id={`skill-${group.title}`}
                    className="text-sm font-semibold leading-6 text-white uppercase tracking-wide"
                  >
                    {group.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="skill-chip relative rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs leading-5 text-slate-200 font-mono cursor-default"
                      onMouseEnter={() => setTooltip(`${item.name}::${item.years}::${item.where}`)}
                      onMouseLeave={() => setTooltip(null)}
                    >
                      {item.name}
                      {tooltip?.startsWith(`${item.name}::`) && (
                        <span
                          role="tooltip"
                          className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-xs text-slate-100 shadow-xl z-50 pointer-events-none"
                        >
                          <span className="block font-semibold text-accent">{item.name}</span>
                          <span className="block text-slate-300">{item.years} · {item.where}</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </Card>
            </article>
          ))}
        </div>

        {/* How I work strip */}
        <div className="mt-8 rounded-2xl border border-white/8 bg-white/[0.025] p-5 sm:p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">How I work</p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {workPrinciples.map((p) => (
              <li
                key={p.label}
                className="flex items-start gap-3 text-sm text-slate-200"
                title={p.detail}
              >
                <span className="mt-0.5 text-base" aria-hidden="true">{p.emoji}</span>
                <div>
                  <p className="font-medium text-white">{p.label}</p>
                  <p className="mt-0.5 text-xs leading-5 text-slate-400">{p.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
