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
    <div className="min-h-screen bg-bg text-white">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar activeSection={activeSection} />

      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
