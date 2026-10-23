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
    <section id="experience" className="scroll-mt-24 py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Full-stack product development at Adeptview."
          description="Progressed from Junior Software Developer to Software Developer (Full Stack), contributing to production applications in Chennai."
        />

        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          className="mt-7 sm:mt-10"
        >
          <div className="relative pl-5 sm:pl-8">
            <div className="absolute bottom-4 left-1.5 top-4 w-px bg-gradient-to-b from-sky-400 via-violet-400 to-transparent sm:left-2" />
            <div className="grid gap-4 sm:gap-5">
              {experience.map((item, index) => (
                <Card
                  key={item.role}
                  className="relative border-white/10 bg-white/5 p-4 sm:p-6 lg:p-7"
                >
                  <span className="absolute -left-[1.43rem] top-6 h-3 w-3 rounded-full border border-sky-300/40 bg-sky-400 shadow-[0_0_20px_rgba(59,130,246,0.55)] sm:-left-[2.06rem] sm:top-7 sm:h-4 sm:w-4" />
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="hidden rounded-xl border border-sky-300/20 bg-sky-500/10 p-2.5 text-sky-300 sm:block">
                        <BriefcaseBusiness className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                          {item.company}
                        </p>
                        <h3 className="mt-1.5 text-xl font-semibold text-white sm:text-2xl">
                          {item.role}
                        </h3>
                      </div>
                    </div>
                    <p className="w-fit shrink-0 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300 sm:px-4 sm:text-sm">
                      {item.period}
                    </p>
                  </div>

                  <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7">
                    {item.summary}
                  </p>

                  {index === 0 ? (
                    <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-4 sm:gap-3">
                      {[
                        { value: "49%", label: "faster API responses" },
                        { value: "40%", label: "faster dashboard loads" },
                        { value: "20%", label: "faster time to market" },
                        { value: "3", label: "production applications" },
                      ].map(({ value, label }) => (
                        <div
                          key={label}
                          className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3 sm:px-4"
                        >
                          <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                            {value}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-slate-400">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <ul className="mt-5 grid gap-2 sm:mt-6 sm:grid-cols-2 sm:gap-3">
                    {item.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-slate-950/45 px-3 py-2.5 text-sm leading-6 text-slate-300 sm:px-4 sm:py-3"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
