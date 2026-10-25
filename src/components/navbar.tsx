import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Container } from "@/components/container";
import { navItems, portfolioConfig } from "@/data/portfolio";
import { cn } from "@/utils/cn";

type NavbarProps = {
  activeSection: string;
};

export function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const closeOnDesktopResize = () => {
      if (window.innerWidth >= 1280) setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktopResize);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktopResize);
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="py-3">
        <div
          className={cn(
            "flex items-center justify-between gap-3 rounded-full border px-3 py-2 backdrop-blur-2xl transition-colors sm:px-4",
            isScrolled
              ? "border-white/15 bg-slate-950/95 shadow-soft"
              : "border-white/10 bg-slate-950/85",
          )}
        >
          <a
            href="#home"
            aria-label={portfolioConfig.name}
            className="group flex min-h-11 shrink-0 items-center gap-3 rounded-full"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent to-emerald-700 text-sm font-semibold text-slate-950">
              RR
            </span>
            <span className="hidden text-sm font-semibold text-white sm:inline">
              {portfolioConfig.name}
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 xl:flex"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "inline-flex min-h-11 items-center rounded-full px-3 text-sm transition-colors hover:bg-white/10 hover:text-white",
                    isActive ? "bg-white/10 text-white" : "text-slate-200",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls={isOpen ? "mobile-navigation" : undefined}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 xl:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </Container>

      {isOpen ? (
        <div className="xl:hidden">
          <Container>
            <nav
              aria-label="Mobile navigation"
              id="mobile-navigation"
              className="mt-1 rounded-3xl border border-white/15 bg-slate-950 p-4 shadow-soft"
            >
              <div className="grid gap-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "location" : undefined}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "inline-flex min-h-11 items-center rounded-2xl px-4 text-sm transition-colors",
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-slate-200 hover:bg-white/10",
                      )}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
