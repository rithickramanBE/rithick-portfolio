import { Container } from "@/components/container";
import { socialLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-slate-950/70 py-8 backdrop-blur-xl">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">Rithick Raman</p>
            <p className="mt-2 max-w-md text-sm text-slate-400">
              Full Stack Developer building production applications with React,
              Node.js, and PostgreSQL.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Rithick Raman. All rights reserved.</p>
          <p>Nilgiris, Tamil Nadu, India</p>
        </div>
      </Container>
    </footer>
  );
}
