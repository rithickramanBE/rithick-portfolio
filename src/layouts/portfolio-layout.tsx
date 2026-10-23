import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

type PortfolioLayoutProps = {
  activeSection: string;
  children: ReactNode;
};

export function PortfolioLayout({
  activeSection,
  children,
}: PortfolioLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_18%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_22%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.14),transparent_22%)]" />
      <div className="pointer-events-none absolute inset-0 bg-portfolio-grid bg-[size:72px_72px] opacity-[0.18] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />
      <Navbar activeSection={activeSection} />

      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
