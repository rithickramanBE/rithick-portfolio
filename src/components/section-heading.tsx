import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="text-[clamp(1.75rem,6vw,2.5rem)] font-semibold leading-tight tracking-tight text-white"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-slate-200 sm:mt-4 sm:text-base">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
