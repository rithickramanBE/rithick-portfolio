import { motion } from "framer-motion";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { techHighlights, techStack } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function TechStackSection() {
  return (
    <section id="tech-stack" className="scroll-mt-24 py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies behind my production work."
          description="A selection of the frameworks, services, and infrastructure I have used to build and support full-stack applications."
        />

        <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {techStack.map((item, index) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04 }}
            >
              <div
                className="flex h-full min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-white transition duration-300 hover:border-sky-300/25 hover:bg-sky-500/10 sm:px-4"
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-2 text-sky-300">
                  <item.icon className="h-4 w-4" />
                </div>
                <span className="min-w-0 break-words text-xs font-medium sm:text-sm">
                  {item.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
          {techHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06 }}
            >
              <Card className="group h-full border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/7">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                      {item.title}
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sky-300 transition group-hover:border-sky-300/20 group-hover:bg-sky-500/10">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
