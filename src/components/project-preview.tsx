import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";
import type { ProjectItem } from "@/types/portfolio";

type ProjectPreviewType = ProjectItem["previewType"];

const previewContent: Record<
  ProjectPreviewType,
  { label: string; title: string; steps: string[] }
> = {
  invoice: {
    label: "Document automation",
    title: "Invoice processing",
    steps: ["Email ingestion", "OCR and field extraction", "Approval workflow"],
  },
  inventory: {
    label: "Operations system",
    title: "Inventory and POS",
    steps: ["Purchase and sales orders", "Goods receipt and issue", "Stock tracking"],
  },
  workflow: {
    label: "Workflow automation",
    title: "Contract lifecycle",
    steps: ["Contract authoring", "Version history and audit trail", "Approvals"],
  },
  mobile: {
    label: "Mobile application",
    title: "Translation bot",
    steps: ["React Native", "CTC", "VTT"],
  },
};

type ProjectPreviewProps = {
  type: ProjectPreviewType;
  accent: string;
};

export function ProjectPreview({ type, accent }: ProjectPreviewProps) {
  const content = previewContent[type];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 p-5",
        accent,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.2),transparent_32%)]" />
      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {content.label}
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              {content.title}
            </p>
          </div>
          <Badge className="border-white/10 bg-white/5 text-slate-200">
            Selected work
          </Badge>
        </div>
        <div className="mt-5 grid gap-2">
          {content.steps.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2.5"
            >
              <span className="text-xs font-medium text-sky-300">
                0{index + 1}
              </span>
              <span className="text-sm text-slate-200">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
