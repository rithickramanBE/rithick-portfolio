import { ChevronDown, Clock, Tag } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { engineeringNotes, portfolioConfig } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";

const tagColors: Record<string, string> = {
  Backend:   "bg-blue-500/10 text-blue-300 border-blue-500/20",
  "Real-time": "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  Database:  "bg-violet-500/10 text-violet-300 border-violet-500/20",
};

export function EngineeringNotesSection() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="notes"
      ref={ref}
      aria-labelledby="notes-heading"
      className="reveal section-space scroll-mt-24"
    >
      <Container>
        <SectionHeading
          id="notes-heading"
          eyebrow={portfolioConfig.sections.notes.eyebrow}
          title={portfolioConfig.sections.notes.title}
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringNotes.map((note, i) => (
            <article key={i} className="h-full">
              <Card className="note-card flex h-full flex-col border-white/10 bg-white/[0.03] p-5 sm:p-6">
                {/* Tag + read time */}
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold font-mono ${
                      tagColors[note.tag] ?? "bg-slate-500/10 text-slate-300 border-slate-500/20"
                    }`}
                  >
                    {note.tag}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-500">
                    <Clock aria-hidden="true" className="h-3 w-3" />
                    {note.readTime}
                  </span>
                </div>

                <h3 className="flex-1 text-sm font-semibold leading-6 text-white">
                  {note.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-slate-400">
                  {note.summary}
                </p>

                {/* Placeholder CTA */}
                <div className="mt-4 border-t border-white/8 pt-4">
                  <p className="flex items-center gap-1.5 text-[11px] text-slate-600 italic">
                    <Tag aria-hidden="true" className="h-3 w-3" />
                    Article coming soon — placeholder content
                  </p>
                </div>
              </Card>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
