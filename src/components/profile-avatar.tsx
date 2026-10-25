import { useEffect, useRef, useState } from "react";
import { Terminal } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { portfolioConfig } from "@/data/portfolio";
import { cn } from "@/utils/cn";

interface ProfileAvatarProps {
  className?: string;
}

export function ProfileAvatar({ className }: ProfileAvatarProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // If image is already cached by browser
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, []);

  const imageSrc = `${import.meta.env.BASE_URL}${portfolioConfig.profileImage}`;

  return (
    <figure
      aria-labelledby="profile-image-caption"
      className={cn(
        "group relative mx-auto w-full max-w-[20rem] select-none sm:max-w-[23rem] lg:max-w-[25rem]",
        className
      )}
    >
      <figcaption id="profile-image-caption" className="sr-only">
        {portfolioConfig.profileImageAlt}
      </figcaption>

      {/* ─── Ambient Studio Glow (Behind Portrait, Frameless) ────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-tr from-accent/30 via-teal-500/20 to-indigo-500/25 blur-3xl opacity-60 transition-all duration-700 group-hover:opacity-90 group-hover:scale-110"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 inset-x-4 h-32 rounded-full bg-accent/20 blur-2xl opacity-50 transition-all duration-500 group-hover:opacity-80"
      />

      {/* ─── Frameless Floating Image Container ─────────────────── */}
      <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(16,185,129,0.12)] transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.9),0_0_50px_rgba(16,185,129,0.22)]">
        
        {/* Skeleton Loader with Pulse */}
        {!isLoaded && !hasError && (
          <div
            aria-label="Loading profile photo"
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900"
          >
            <Skeleton className="absolute inset-0 h-full w-full rounded-[2.5rem] bg-slate-800" />
            <div className="relative z-20 flex flex-col items-center gap-2.5 text-slate-400">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-800/90 shadow-inner">
                <Terminal className="h-7 w-7 text-accent animate-pulse" />
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
                <span>Loading portrait...</span>
              </div>
            </div>
          </div>
        )}

        {/* The Portrait Image (Border-free, clean edge) */}
        {!hasError ? (
          <img
            ref={imgRef}
            src={imageSrc}
            alt={portfolioConfig.profileImageAlt}
            width="500"
            height="500"
            loading="eager"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={cn(
              "h-full w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 filter contrast-[1.03] brightness-[1.01]",
              isLoaded
                ? "opacity-100 scale-100 blur-0"
                : "opacity-0 scale-95 blur-sm"
            )}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-slate-900 p-6 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 text-2xl font-bold text-accent">
              RR
            </div>
            <p className="mt-3 text-sm font-semibold text-white">{portfolioConfig.name}</p>
            <p className="text-xs text-slate-400">{portfolioConfig.role}</p>
          </div>
        )}

        {/* Very subtle light reflection on hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30"
        />
      </div>

      {/* ─── Floating Experience / Role Chip (Frameless Tech Accent) ─ */}
      <div className="pointer-events-none absolute -bottom-3 -right-2 z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/90 px-3.5 py-2 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent/40 sm:-bottom-4 sm:-right-3 sm:px-4 sm:py-2.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold text-white tracking-wide">3+ Years Exp</span>
          <span className="text-[10px] text-slate-400">Full-Stack Dev</span>
        </div>
      </div>
    </figure>
  );
}
