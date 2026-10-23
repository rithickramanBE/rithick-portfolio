import { motion } from "framer-motion";

import { Container } from "@/components/container";
import { ProjectPreview } from "@/components/project-preview";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected production work and a mobile translation project."
          description="Selected company projects summarized by their scope, stack, and engineering contributions."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="group"
            >
              <Card className="flex h-full flex-col overflow-hidden border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/7">
                <ProjectPreview
                  type={project.previewType}
                  accent={project.accent}
                />

                <div className="flex flex-1 flex-col p-2 pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                      Case study
                    </p>
                    <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(59,130,246,0.85)]" />
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 space-y-2">
                    {project.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                        {item}
                      </div>
                    ))}
                  </div>

                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
