import { useMemo } from "react";

import { PortfolioLayout } from "@/layouts/portfolio-layout";
import { HomePage } from "@/pages/home-page";
import { useActiveSection } from "@/hooks/use-active-section";

const sectionIds = [
  "home",
  "about",
  "skills",
  "experience",
  "education",
  "projects",
  "tech-stack",
  "contact",
];

function App() {
  const activeSection = useActiveSection(useMemo(() => sectionIds, []));

  return (
    <PortfolioLayout activeSection={activeSection}>
      <HomePage />
    </PortfolioLayout>
  );
}

export default App;
