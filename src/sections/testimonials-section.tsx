import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { portfolioConfig, testimonials } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";

export function TestimonialsSection() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="testimonials"
      ref={ref}
      aria-labelledby="testimonials-heading"
      className="reveal section-space scroll-mt-24"
    >
      
    </section>
  );
}
