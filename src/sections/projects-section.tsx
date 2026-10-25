import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { portfolioConfig, projects } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";
import type { ProjectCategory } from "@/types/portfolio";

type FilterTab = "All" | ProjectCategory;
const tabs: FilterTab[] = ["All", "Full-Stack", "Backend", "Real-time", "AI/Python"];

const categoryColors: Record<ProjectCategory, string> = {
  "Full-Stack": "bg-violet-500/10 text-violet-300 border-violet-500/20",
  "Backend":    "bg-blue-500/10 text-blue-300 border-blue-500/20",
  "Real-time":  "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  "AI/Python":  "bg-amber-500/10 text-amber-300 border-amber-500/20",
};

export function ProjectsSection() {
  const [active, setActive] = useState<FilterTab>("All");
  const ref = useReveal<HTMLElement>();

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.categories.includes(active));

  return (
    <section
      id="projects"
      ref={ref}
      aria-labelledby="projects-heading"
      className="reveal section-space scroll-mt-24"
    >
      <Container>
        <SectionHeading
          id="projects-heading"
          eyebrow={portfolioConfig.sections.projects.eyebrow}
          title={portfolioConfig.sections.projects.title}
        />

        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mt-6 flex flex-wrap gap-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
              className={[
                "filter-tab rounded-full border px-4 py-1.5 text-xs font-semibold font-mono transition-all duration-200",
                active === tab
                  ? "border-accent/30 bg-accent/10 text-accent"
                  : "border-white/10 bg-slate-950/50 text-slate-300 hover:border-white/20 hover:text-white",
              ].join(" ")}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {filtered.map((project) => (
            <article key={project.title} className="group h-full">
              <Card className="project-card flex h-full flex-col border-white/10 bg-white/[0.03] p-5 sm:p-6 hover:bg-white/[0.05]">
                {/* Category chips */}
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold font-mono ${categoryColors[cat]}`}
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold leading-snug text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-300">
                  {project.summary}
                </p>

                <dl className="mt-4 grid gap-3">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {portfolioConfig.projectLabels.role}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-slate-300">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {portfolioConfig.projectLabels.challenge}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-slate-300">{project.challenge}</dd>
                  </div>
                </dl>

                {/* Tech tags */}
                <ul
                  aria-label={`${project.title} technologies`}
                  className="mt-4 flex flex-wrap gap-1.5"
                >
                  {project.tech.slice(0, 8).map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950/70 px-2.5 py-1 font-mono text-[11px] text-slate-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Footer row */}
                <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-4">
                  {project.companyProject ? (
                    <p className="text-[11px] leading-5 text-slate-500 italic">
                      {portfolioConfig.projectLabels.companyNote}
                    </p>
                  ) : (
                    <span />
                  )}
                  <div className="flex gap-2">
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        GitHub
                        <ExternalLink aria-hidden="true" className="h-3 w-3" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent-light transition-colors"
                      >
                        Live
                        <ArrowRight aria-hidden="true" className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-sm text-slate-500">No projects in this category yet.</p>
        )}

      </Container>
    </section>
  );
}
