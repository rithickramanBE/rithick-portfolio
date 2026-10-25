import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { Container } from "@/components/container";
import { portfolioConfig } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-slate-950/80 py-8">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: name + tagline */}
          <div>
            <p className="text-sm font-semibold text-white">{portfolioConfig.name}</p>
            <p className="mt-0.5 text-xs text-slate-500">
              {portfolioConfig.footerDescription}
            </p>
          </div>

          {/* Right: social links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={portfolioConfig.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all hover:border-accent/30 hover:text-accent"
            >
              <FaGithub aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
            <a
              href={portfolioConfig.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all hover:border-accent/30 hover:text-accent"
            >
              <FaLinkedinIn aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/8 pt-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {portfolioConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React + Vite + Tailwind</span>
            <span aria-hidden="true">·</span>
            <a
              href={portfolioConfig.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-0.5 text-slate-500 hover:text-slate-300 transition-colors"
            >
              Source <ArrowUpRight aria-hidden="true" className="h-3 w-3" />
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
