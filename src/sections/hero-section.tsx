import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";

import heroIllustration from "@/assets/hero.png";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { heroStats, socialLinks } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:min-h-screen lg:pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_28%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.16),transparent_26%),linear-gradient(180deg,rgba(11,15,25,0.65),rgba(11,15,25,1))]" />
      <Container>
        <div className="grid items-center gap-10 sm:gap-14 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-6 sm:space-y-8"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs leading-5 text-slate-200 backdrop-blur-xl sm:px-4 sm:text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
              Software Developer (Full Stack) at Adeptview
            </motion.div>

            <motion.div variants={fadeUp} custom={0.1}>
              <h1 className="max-w-4xl text-[clamp(2.35rem,9vw,3.5rem)] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-white via-sky-100 to-violet-200 bg-clip-text text-transparent">
                  Rithick Raman
                </span>
                <span className="mt-2 block bg-gradient-to-r from-sky-400 via-white to-violet-400 bg-clip-text text-transparent sm:mt-4">
                  Full Stack Developer
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Building full-stack applications with React, TypeScript, Node.js,
              and PostgreSQL.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={0.3}
              className="max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
            >
              3+ years of experience across API design, secure access control,
              real-time systems, and AI-assisted document automation.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <Button asChild variant="glow" size="lg">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/Rithick-Raman-Resume.pdf" download>
                  Download Resume
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.5}
              className="flex flex-wrap items-center gap-3"
            >
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.6}
              className="grid grid-cols-3 gap-2 sm:gap-3"
            >
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:rounded-3xl sm:p-4"
                >
                  <p className="text-xl font-semibold text-white sm:text-2xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400 sm:mt-2 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-500/20 via-transparent to-violet-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),transparent_30%,transparent_70%,rgba(255,255,255,0.05))]" />
              <div className="relative grid gap-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400 sm:text-xs">
                    Portfolio workspace
                  </p>
                  <p className="mt-2 text-sm font-medium text-white sm:text-lg">
                    React, TypeScript, Node.js, and PostgreSQL
                  </p>
                </div>

                <div className="grid gap-3 sm:gap-4 md:grid-cols-[0.95fr_1.05fr]">
                  <div className="min-w-0 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-4 shadow-[inset_0_1px_0_rgba(148,163,184,0.15)] sm:p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-base font-semibold text-white shadow-[0_12px_30px_rgba(96,165,250,0.4)] sm:h-14 sm:w-14 sm:text-xl">
                        RR
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white sm:text-base">
                          Rithick Raman
                        </p>
                        <p className="text-sm text-slate-400">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3 text-sm text-slate-300">
                      <div className="flex items-center gap-2">
                        <FaGithub className="h-4 w-4 shrink-0 text-slate-400" />
                        <span className="min-w-0 break-all text-slate-200">
                          github.com/rithickramanBE
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaLinkedinIn className="h-4 w-4 shrink-0 text-slate-400" />
                        <span className="leading-6 text-slate-200">
                          Full-stack product development
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaEnvelope className="h-4 w-4 shrink-0 text-slate-400" />
                        <span className="text-slate-200">
                          React · Node.js · PostgreSQL
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-5">
                    <div className="relative mx-auto flex h-[220px] w-full max-w-[300px] items-center justify-center">
                      <div className="absolute inset-x-7 top-2 h-24 rounded-[1.7rem] border border-slate-400/35 bg-[#101827]/90 shadow-[0_0_0_1px_rgba(148,163,184,0.08)]" />
                      <div className="absolute inset-x-10 top-8 h-24 rounded-[1.7rem] border border-slate-400/35 bg-[#0f172a]/95 shadow-[0_20px_40px_rgba(15,23,42,0.8)]" />
                      <div className="absolute inset-x-4 bottom-0 h-24 rounded-[1.6rem] border border-violet-400/20 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#09090f] shadow-[0_25px_55px_rgba(76,29,149,0.55)]" />
                      <div className="absolute inset-x-8 bottom-8 h-[4.5rem] rounded-[1.4rem] border border-violet-400/35 bg-gradient-to-br from-violet-500/85 via-fuchsia-500/80 to-sky-400/70 opacity-90 shadow-[0_0_30px_rgba(168,85,247,0.75)]" />
                      <div className="absolute inset-x-9 bottom-7 h-[4.5rem] rounded-[1.4rem] border border-slate-400/15 bg-slate-950/80" />
                    </div>

                    <div className="mt-2 grid grid-cols-3 gap-2 sm:gap-3">
                      {['React', 'TypeScript', 'PostgreSQL'].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/5 px-2 py-2 text-center text-[10px] font-medium text-slate-200 sm:px-3 sm:text-xs"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
