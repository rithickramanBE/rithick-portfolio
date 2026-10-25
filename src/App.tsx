import { PortfolioLayout } from "@/layouts/portfolio-layout";
import { HomePage } from "@/pages/home-page";
import { useActiveSection } from "@/hooks/use-active-section";

const sectionIds = [
  "home",
  "projects",
  "experience",
  "skills",
  "notes",
  "about",
  "testimonials",
  "contact",
];

function App() {
  const activeSection = useActiveSection(sectionIds);

  return (
    <PortfolioLayout activeSection={activeSection}>
      <HomePage />
    </PortfolioLayout>
  );
}

export default App;
