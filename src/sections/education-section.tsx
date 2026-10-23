import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

const certifications = [
  {
    name: "Node.js (Basic & Intermediate)",
    issuer: "HackerRank",
    date: "July 2024",
  },
  {
    name: "Power BI Fundamentals (PL-100)",
    issuer: "Microsoft",
    date: "April 2024",
  },
];

export function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Foundations and certifications."
          description="Computer science education and industry certifications relevant to my software development work."
        />

        <div className="mt-7 grid gap-4 sm:mt-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-white/10 bg-white/5 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-sky-300/20 bg-sky-500/10 p-3 text-sky-300">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
                    Bachelor of Engineering
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Computer Science and Engineering
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Bannari Amman Institute of Technology
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-200 sm:text-sm">
                      2019–2023
                    </span>
                    <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-200 sm:text-sm">
                      CGPA 8.0 / 10
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {certifications.map((certification, index) => (
              <motion.div
                key={certification.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="flex h-full items-start gap-4 border-white/10 bg-white/5 p-5">
                  <div className="rounded-2xl border border-violet-300/20 bg-violet-500/10 p-3 text-violet-200">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="break-words text-base font-semibold text-white">
                      {certification.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">
                      {certification.issuer}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {certification.date}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
