import { motion } from "framer-motion";
import { Award, Code2, Layers3, Sparkles } from "lucide-react";

import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { aboutStats } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SectionHeading
              eyebrow="About"
              title="Full Stack Developer focused on reliable product delivery."
              description="I have 3+ years of experience owning features end to end, from database and API design to polished, responsive interfaces. My work spans React, Node.js, PostgreSQL, real-time systems, and AI-assisted document automation."
            />

            <Card className="mt-8 border-white/10 bg-white/5 p-0 overflow-hidden">
              <div className="border-b border-white/10 bg-gradient-to-r from-sky-500/10 via-white/5 to-violet-500/10 px-6 py-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Profile snapshot
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  End-to-end engineering for production applications
                </p>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-2">
                {[
                  {
                    icon: Code2,
                    label: "Full-stack ownership",
                    text: "From database schemas and APIs to responsive interfaces",
                  },
                  {
                    icon: Layers3,
                    label: "Performance",
                    text: "Measured improvements to APIs and data-heavy dashboards",
                  },
                  {
                    icon: Sparkles,
                    label: "Automation",
                    text: "OCR and locally hosted LLMs for document workflows",
                  },
                  {
                    icon: Award,
                    label: "Security & delivery",
                    text: "JWT, RBAC, Docker, and automated CI/CD pipelines",
                  },
                ].map(({ icon: Icon, label, text }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"
                  >
                    <Icon className="h-5 w-5 text-sky-300" />
                    <p className="mt-3 text-sm font-semibold text-white">
                      {label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="group h-full border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-4xl font-semibold tracking-tight text-white">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-200">
                        {stat.label}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sky-300 transition group-hover:border-sky-300/20 group-hover:bg-sky-500/10">
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {stat.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
