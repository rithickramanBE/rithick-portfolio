import { ArrowRight, BriefcaseBusiness, ChevronDown } from "lucide-react";
import { useState } from "react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { experience, portfolioConfig } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState<string>(experience[0]?.role ?? "");
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="experience"
      ref={ref}
      aria-labelledby="experience-heading"
      className="reveal section-space scroll-mt-24"
    >
      <Container>
        <SectionHeading
          id="experience-heading"
          eyebrow={portfolioConfig.sections.experience.eyebrow}
          title={portfolioConfig.sections.experience.title}
        />

        <div className="relative mt-8 timeline-track grid gap-4">
          {experience.map((item) => {
            const isOpen = expanded === item.role;
            return (
              <article key={item.role} className="relative">
                <span
                  aria-hidden="true"
                  className="timeline-dot absolute"
                />
                <Card className={`border-white/10 bg-white/[0.03] p-0 transition-all duration-300 ${isOpen ? "border-accent/20" : ""}`}>
                  {/* Accordion trigger */}
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`exp-body-${item.role.replace(/\s/g, "-")}`}
                    onClick={() => setExpanded(isOpen ? "" : item.role)}
                    className="flex w-full items-start justify-between gap-4 rounded-3xl p-5 text-left hover:bg-white/[0.02] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:p-6"
                  >
                    <div className="flex items-start gap-3">
                      <BriefcaseBusiness
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 shrink-0 text-accent"
                      />
                      <div>
                        <p className="text-xs text-slate-400">{item.company}</p>
                        <h3 className="mt-0.5 text-base font-semibold text-white sm:text-lg">
                          {item.role}
                        </h3>
                        <p className="mt-1 w-fit rounded-full border border-white/10 bg-slate-950/70 px-3 py-0.5 text-xs font-mono text-slate-300">
                          {item.period}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      aria-hidden="true"
                      className={`mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Accordion body */}
                  <div
                    id={`exp-body-${item.role.replace(/\s/g, "-")}`}
                    className={`accordion-content ${isOpen ? "open pb-5 px-5 sm:pb-6 sm:px-6" : ""}`}
                  >
                    <p className="mb-4 max-w-4xl text-sm leading-7 text-slate-300 border-l-2 border-accent/30 pl-4">
                      {item.summary}
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {item.responsibilities.map((resp) => (
                        <li
                          key={resp}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                        >
                          <ArrowRight
                            aria-hidden="true"
                            className="mt-1 h-3.5 w-3.5 shrink-0 text-accent"
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
