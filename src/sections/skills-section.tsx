import { motion } from "framer-motion";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technical skills used across production work."
          description="A focused overview of frontend, backend, data automation, delivery, and testing technologies from my experience."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="group h-full border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/7 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_60px_rgba(59,130,246,0.12)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge className="border-white/10 bg-white/5 text-slate-300">
                      {group.title}
                    </Badge>
                    <p className="mt-4 text-xl font-semibold text-white">
                      {group.description}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sky-300 transition group-hover:border-sky-300/20 group-hover:bg-sky-500/10">
                    <group.icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-white/10 bg-slate-950/65 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:border-sky-300/30 hover:bg-sky-500/10 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
