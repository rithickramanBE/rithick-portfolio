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
      className="relative overflow-hidden pt-32 sm:pt-36 lg:min-h-screen lg:pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_28%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.16),transparent_26%),linear-gradient(180deg,rgba(11,15,25,0.65),rgba(11,15,25,1))]" />
      <Container>
        <div className="grid items-center gap-14 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-8"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
              Software Developer (Full Stack) at Adeptview
            </motion.div>

            <motion.div variants={fadeUp} custom={0.1}>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-white via-sky-100 to-violet-200 bg-clip-text text-transparent">
                  Rithick Raman
                </span>
                <span className="mt-4 block bg-gradient-to-r from-sky-400 via-white to-violet-400 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Building full-stack applications with React, TypeScript,
              Node.js, and PostgreSQL.
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
              className="flex flex-col gap-4 sm:flex-row"
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
              className="grid gap-3 sm:grid-cols-3"
            >
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                >
                  <p className="text-2xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{item.label}</p>
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
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      Portfolio workspace
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      React, TypeScript, Node.js, and PostgreSQL
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[0.92fr_1.08fr]">
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/65 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-xl font-semibold text-white shadow-glow">
                        RR
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Rithick Raman
                        </p>
                        <p className="text-sm text-slate-400">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 space-y-3 text-sm text-slate-300">
                      <div className="flex items-center gap-2">
                        <FaGithub className="h-4 w-4 text-slate-400" />
                        github.com/rithickramanBE
                      </div>
                      <div className="flex items-center gap-2">
                        <FaLinkedinIn className="h-4 w-4 text-slate-400" />
                        Full-stack product development
                      </div>
                      <div className="flex items-center gap-2">
                        <FaEnvelope className="h-4 w-4 text-slate-400" />
                        React · Node.js · PostgreSQL
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-4">
                    <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                      Responsive by design
                    </div>
                    <img
                      src={heroIllustration}
                      alt="Abstract layered developer illustration"
                      className="mx-auto mt-8 h-auto w-full max-w-[280px] animate-float drop-shadow-[0_0_45px_rgba(139,92,246,0.25)]"
                      loading="eager"
                    />
                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {["React", "TypeScript", "PostgreSQL"].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-slate-200"
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
