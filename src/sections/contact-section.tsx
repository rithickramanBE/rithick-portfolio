import { ArrowUpRight, Check, ChevronDown, Clock, Copy, Mail, MapPin, Sparkles } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { portfolioConfig } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";

// ─── FAQ data ──────────────────────────────────────────────
const faq = [
  {
    q: "Are you currently available?",
    a: "Yes — I'm actively looking for my next role. I'm open to conversations about full-stack or backend-leaning positions at product companies or startups.",
  },
  {
    q: "What notice period would you need?",
    a: "I can discuss timeline during interviews. Typically I'd aim for a smooth handover, which takes 2–4 weeks depending on current project commitments.",
  },
  {
    q: "Are you open to remote / relocation?",
    a: "Remote-first is my preference. I'm based in Tamil Nadu, India and open to fully remote roles globally or hybrid setups in the region.",
  },
  {
    q: "What kind of stack or domain is a good fit?",
    a: "I work best in TypeScript/Node.js/React environments backed by PostgreSQL, with experience across async job queues (BullMQ/Redis), real-time (Socket.IO), and Python microservices (FastAPI). I enjoy product engineering over pure infrastructure.",
  },
];

// ─── Sub-components ────────────────────────────────────────
function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8 last:border-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-white hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
      >
        <span>{q}</span>
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`accordion-content text-sm leading-7 text-slate-300 ${open ? "open pb-4" : ""}`}
      >
        {a}
      </div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────
export function ContactSection() {
  const ref = useReveal<HTMLElement>();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(portfolioConfig.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }
    } catch {
      // Fallback: ignore error if clipboard API is restricted
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      aria-labelledby="contact-heading"
      className="reveal section-space scroll-mt-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* ── Left column: direct contact & channels ── */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <SectionHeading
                id="contact-heading"
                eyebrow={portfolioConfig.sections.contact.eyebrow}
                title={portfolioConfig.sections.contact.title}
                description={portfolioConfig.sections.contact.invitation}
              />

              {/* Status pill */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  Available for new roles
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock aria-hidden="true" className="h-3.5 w-3.5 text-slate-500" />
                  {portfolioConfig.sections.contact.responseTime}
                </span>
              </div>
            </div>

            {/* Email Card - Hero Contact Action */}
            <Card className="border-accent/25 bg-gradient-to-br from-white/[0.04] to-accent/[0.03] p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <Mail aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent font-mono">
                    Direct Email
                  </p>
                  <p className="text-sm sm:text-base font-medium text-white break-all">
                    {portfolioConfig.email}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${portfolioConfig.email}`}
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:bg-accentLight shadow-[0_0_0_1px_rgba(16,185,129,0.4),0_8px_20px_rgba(16,185,129,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  Send an email
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {copied ? (
                    <>
                      <Check aria-hidden="true" className="h-4 w-4 text-accent" />
                      <span className="text-accent">Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy aria-hidden="true" className="h-4 w-4 text-slate-400" />
                      <span>Copy address</span>
                    </>
                  )}
                </button>
              </div>
            </Card>

            {/* Social channels grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={portfolioConfig.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all hover:border-accent/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-colors group-hover:border-accent/30 group-hover:text-accent">
                    <FaLinkedinIn aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-white group-hover:text-accent transition-colors">
                      LinkedIn
                    </p>
                    <p className="text-xs text-slate-400">Connect or message</p>
                  </div>
                </div>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>

              <a
                href={portfolioConfig.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all hover:border-accent/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-colors group-hover:border-accent/30 group-hover:text-accent">
                    <FaGithub aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-white group-hover:text-accent transition-colors">
                      GitHub
                    </p>
                    <p className="text-xs text-slate-400">View code & repos</p>
                  </div>
                </div>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            </div>

            {/* Location & setup info */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-accent" />
                {portfolioConfig.location} (IST · UTC+5:30)
              </span>
              <span aria-hidden="true" className="text-white/20">·</span>
            </div>
          </div>

          {/* ── Right column: FAQ ── */}
          <div className="flex flex-col justify-start">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6 shadow-soft">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent font-mono">
                  Quick Answers
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  Frequently Asked Questions
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Key details on availability, remote setup, and stack fit.
                </p>
              </div>

              <div className="divide-y divide-white/8">
                {faq.map((item) => (
                  <AccordionItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
