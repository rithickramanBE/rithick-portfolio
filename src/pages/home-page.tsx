import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { EngineeringNotesSection } from "@/sections/engineering-notes-section";
import { ExperienceSection } from "@/sections/experience-section";
import { HeroSection } from "@/sections/hero-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <EngineeringNotesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
