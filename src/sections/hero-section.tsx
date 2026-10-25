import { ArrowRight, Download, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { ProfileAvatar } from "@/components/profile-avatar";
import { heroStats, portfolioConfig, socialLinks } from "@/data/portfolio";

// ─── Typing animation hook ─────────────────────────────────
function useTypingRole(roles: readonly string[] | string[], speed = 75, pause = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "waiting" | "erasing">("typing");
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];

    if (phase === "typing") {
      if (displayText.length < currentRole.length) {
        timerRef.current = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, speed);
      } else {
        timerRef.current = setTimeout(() => setPhase("waiting"), pause);
      }
    } else if (phase === "waiting") {
      timerRef.current = setTimeout(() => setPhase("erasing"), 400);
    } else if (phase === "erasing") {
      if (displayText.length > 0) {
        timerRef.current = setTimeout(() => {
          setDisplayText((t) => t.slice(0, -1));
        }, speed / 2);
      } else {
        setRoleIndex((i) => i + 1);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timerRef.current);
  }, [displayText, phase, roleIndex, roles, speed, pause]);

  return displayText;
}

// ─── Component ─────────────────────────────────────────────
export function HeroSection() {
  const typedRole = useTypingRole(portfolioConfig.typingRoles);

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="hero-section relative scroll-mt-24 overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:min-h-[calc(100vh-2rem)] lg:pb-24"
    >
      {/* Animated dot grid */}
      <div aria-hidden="true" className="dot-grid" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:gap-16">
          <div className="max-w-2xl xl:max-w-3xl">
            {/* Availability badge */}
            {portfolioConfig.opportunityBadge.enabled ? (
              <p className="proof-badge mb-6">
                <span aria-hidden="true" className="proof-dot" />
                {portfolioConfig.opportunityBadge.label}
              </p>
            ) : null}

            {/* Name + animated role */}
            <h1
              id="hero-title"
              className="text-[clamp(2.75rem,8vw,5rem)] font-semibold leading-[1.05] tracking-tight text-white"
            >
              {portfolioConfig.name}
            </h1>

            <div
              aria-live="polite"
              aria-atomic="true"
              className="mt-3 h-9 text-[clamp(1.1rem,3vw,1.6rem)] font-medium"
            >
              <span className="text-gradient">{typedRole}</span>
              <span aria-hidden="true" className="typing-cursor" />
            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {portfolioConfig.tagline}
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
              {portfolioConfig.introduction}
            </p>

            {/* Location */}
            <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin aria-hidden="true" className="h-4 w-4 text-accent" />
                {portfolioConfig.location}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{portfolioConfig.workPreference}</span>
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="glow" size="lg">
                <a href="#projects">
                  View my work
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href={`${import.meta.env.BASE_URL}${portfolioConfig.resumePath}`}
                  download
                >
                  Download resume
                  <Download aria-hidden="true" className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noreferrer"}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-accent/30 hover:bg-accent/8 hover:text-accent"
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </a>
              ))}
              <span className="ml-1 text-xs text-slate-600">/{portfolioConfig.name.split(" ")[0].toLowerCase()}</span>
            </div>

            {/* Proof stats */}
            <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/8 bg-white/[0.03] p-4 hover:border-accent/20 transition-colors"
                >
                  <dt className="text-xs leading-5 text-slate-400">{stat.label}</dt>
                  <dd className="mt-1.5 text-2xl font-bold tracking-tight text-gradient">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Enhanced Profile Avatar with Skeleton Loading */}
          <ProfileAvatar />
        </div>
      </Container>
    </section>
  );
}
