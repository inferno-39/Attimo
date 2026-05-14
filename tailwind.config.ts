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
        /** display hero — мобильный якорь + плавный рост на планшете/десктопе */
        "display-2xl": ["clamp(2.65rem,6.5vw,5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.35rem,5vw,4.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(1.85rem,3.2vw,3rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "title-md": ["1.25rem", { lineHeight: "1.35", letterSpacing: "0.08em" }],
        "caption-wide": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.22em" }],
        /** подзаголовки hero / editorial */
        "serif-lead": [
          "clamp(1.05rem,0.95rem + 0.45vw,1.375rem)",
          { lineHeight: "1.58", letterSpacing: "-0.01em" },
        ],
        /** основной текст интерфейса */
        "body-readable": [
          "clamp(0.9375rem,0.9rem + 0.18vw,1rem)",
          { lineHeight: "1.72", letterSpacing: "0.01em" },
        ],
      },
      maxWidth: {
        editorial: "1440px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        section: "clamp(4.5rem,10vw,7.5rem)",
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
