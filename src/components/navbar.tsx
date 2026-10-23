import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems } from "@/data/portfolio";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";

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

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="py-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-3 backdrop-blur-2xl transition-all duration-300 md:px-6",
            isScrolled
              ? "border-white/10 bg-slate-950/85 shadow-soft"
              : "border-white/5 bg-slate-950/55",
          )}
        >
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-violet-500 text-sm font-semibold text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
              RR
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">Rithick Raman</p>
              <p className="text-xs text-slate-400">Full Stack Developer</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/5 p-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-all duration-300 hover:text-white",
                    isActive
                      ? "bg-white text-slate-950 shadow-soft"
                      : "text-slate-300 hover:bg-white/6",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden md:inline-flex"
            >
              <a href="#contact">Let&apos;s talk</a>
            </Button>
            <button
              type="button"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/20 hover:bg-white/10 md:hidden"
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="md:hidden"
          >
            <Container>
              <div
                id="mobile-navigation"
                className="mt-2 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-soft backdrop-blur-2xl"
              >
                <div className="grid gap-2">
                  {navItems.map((item) => {
                    const isActive =
                      activeSection === item.href.replace("#", "");

                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "rounded-2xl px-4 py-3 text-sm transition-all duration-300",
                          isActive
                            ? "bg-white text-slate-950"
                            : "bg-white/5 text-slate-200 hover:bg-white/10",
                        )}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
