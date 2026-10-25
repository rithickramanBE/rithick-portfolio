export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg:           "var(--color-bg)",
        "bg-alt":     "var(--color-bg-alt)",
        panel:        "var(--color-panel)",
        panelStrong:  "var(--color-panel-strong)",
        accent:       "var(--color-accent)",
        accentAlt:    "var(--color-accent-secondary)",
        accentLight:  "var(--color-accent-light)",
        accentDim:    "var(--color-accent-dim)",
        muted:        "var(--color-text-muted)",
        faint:        "var(--color-text-faint)",
      },
      borderRadius: {
        sm:    "var(--radius-sm)",
        md:    "var(--radius-md)",
        lg:    "var(--radius-lg)",
        xl:    "var(--radius-lg)",
        "2xl": "var(--radius-card)",
        "3xl": "var(--radius-card)",
        full:  "var(--radius-pill)",
      },
      spacing: {
        "18": "var(--space-9)",
        "20": "var(--space-10)",
        "22": "var(--space-11)",
        "24": "var(--space-12)",
      },
      fontSize: {
        xs:   ["var(--type-xs)",   { lineHeight: "1rem" }],
        sm:   ["var(--type-sm)",   { lineHeight: "1.25rem" }],
        base: ["var(--type-base)", { lineHeight: "1.5rem" }],
        lg:   ["var(--type-lg)",   { lineHeight: "1.75rem" }],
        xl:   ["var(--type-xl)",   { lineHeight: "1.75rem" }],
        "2xl":["var(--type-2xl)",  { lineHeight: "2rem" }],
        "3xl":["var(--type-3xl)",  { lineHeight: "2.25rem" }],
        "4xl":["var(--type-4xl)",  { lineHeight: "2.5rem" }],
        "5xl":["var(--type-5xl)",  { lineHeight: "1.1" }],
        "6xl":["var(--type-6xl)",  { lineHeight: "1.05" }],
        "7xl":["var(--type-7xl)",  { lineHeight: "1" }],
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
      },
      fontFamily: {
        sans:  ["Inter", "system-ui", "sans-serif"],
        mono:  ["JetBrains Mono", "Fira Code", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%":       { transform: "translate3d(0, -10px, 0)" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glow: {
          "0%, 100%": { opacity: "0.65" },
          "50%":       { opacity: "1" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float:    "float 7s ease-in-out infinite",
        "fade-up":"fade-up 0.5s ease forwards",
        "fade-in":"fade-in 0.4s ease forwards",
        glow:     "glow 3s ease-in-out infinite",
        shimmer:  "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};


