import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FAFAF8",
        ivory: "#F5F0E8",
        mist: "#E8E6E1",
        graphite: "#1C1C1C",
        stone: "#4A4744",
        ash: "#8C8883",
        line: "#D9D6D0",
        gold: {
          DEFAULT: "#C4A574",
          soft: "#D4BE94",
          dim: "#9A8360",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        /** display hero */
        "display-xl": ["clamp(2.75rem,6vw,4.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem,4vw,3rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "title-md": ["1.25rem", { lineHeight: "1.35", letterSpacing: "0.08em" }],
        "caption-wide": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.22em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      transitionDuration: {
        480: "480ms",
        560: "560ms",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.22,1,0.36,1) both",
        shimmer: "shimmer 3s cubic-bezier(0.22,1,0.36,1) infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
