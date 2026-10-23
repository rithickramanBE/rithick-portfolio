import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { experience } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Full-stack product development at Adeptview."
          description="Progressed from Junior Software Developer to Software Developer (Full Stack), contributing to production applications in Chennai."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="h-full border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-sky-300/20 bg-sky-500/10 p-3 text-sky-300">
                  <BriefcaseBusiness className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Adeptview · Chennai
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-white">
                    Software Developer (Full Stack)
                  </p>
                </div>
              </div>
              <p className="mt-5 text-base font-medium text-slate-200">
                August 2023 - Present
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {experience[0].summary}
              </p>

              <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <p className="text-sm font-semibold text-white">
                  Selected outcomes
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "49% lower API response time",
                    "40% faster dashboard data loading",
                    "85% Jest test coverage",
                    "20% faster time to market",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative pl-6 sm:pl-8">
              <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-sky-400 via-violet-400 to-transparent" />
              <div className="absolute left-0 top-2 h-5 w-5 rounded-full border border-sky-300/30 bg-sky-400 shadow-[0_0_24px_rgba(59,130,246,0.5)]" />
              <div className="grid gap-4">
                {experience.map((item) => (
                  <Card
                    key={item.role}
                    className="border-white/10 bg-white/5 p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                          {item.company}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">
                          {item.role}
                        </h3>
                      </div>
                      <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                        {item.period}
                      </p>
                    </div>

                    <ul className="mt-6 grid gap-3">
                      {item.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm leading-6 text-slate-300"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-sky-400 to-violet-400" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
