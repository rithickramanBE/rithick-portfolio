import { motion } from "framer-motion";
import { ArrowUpRight, SendHorizontal } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { socialLinks } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch."
          description="For roles, product work, or professional inquiries, reach me by email or through my professional profiles."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-8 max-w-4xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="relative overflow-hidden border-white/10 bg-white/5 p-5 shadow-soft sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_48%)]" />
              <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                    Reach out
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Let&apos;s build something useful.
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
                    I work across responsive interfaces, APIs, databases, and
                    production delivery for full-stack applications.
                  </p>
                  <Button
                    asChild
                    variant="glow"
                    size="lg"
                    className="mt-6 w-full sm:w-auto"
                  >
                    <a href="mailto:rithickraman855@gmail.com">
                      Email me
                      <SendHorizontal className="h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                  {socialLinks
                    .filter(({ label }) => label !== "Email")
                    .map(({ href, icon: Icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex min-h-14 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 transition duration-300 hover:border-sky-300/30 hover:bg-sky-500/10"
                      >
                        <span className="flex min-w-0 items-center gap-3">
                          <Icon className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-sky-300" />
                          <span>{label}</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 group-hover:text-sky-300" />
                      </a>
                    ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
