import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

import { cn } from "@/utils/cn";

type ButtonVariant = "default" | "secondary" | "ghost" | "outline" | "glow";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-white text-slate-950 shadow-[0_18px_45px_rgba(16,185,129,0.18)] hover:bg-white/95",
  secondary:
    "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
  ghost:
    "bg-transparent text-slate-200 hover:bg-white/6 hover:text-white",
  outline:
    "bg-transparent text-white border border-white/12 hover:border-white/25 hover:bg-white/5",
  glow:
    "bg-accent text-slate-950 font-semibold shadow-[0_0_0_1px_rgba(16,185,129,0.4),0_16px_40px_rgba(16,185,129,0.22)] hover:bg-accentLight hover:shadow-[0_0_0_1px_rgba(16,185,129,0.55),0_20px_55px_rgba(16,185,129,0.32)]",
};

const sizeStyles = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm md:text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      asChild = false,
      className,
      variant = "default",
      size = "md",
      children,
      ...props
    },
    ref,
  ) {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-[250ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
