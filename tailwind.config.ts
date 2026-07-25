import type { Config } from "tailwindcss";

/**
 * Bethel Digital — Design System
 * Palette sobre et premium (voir brief). Aucune couleur saturee.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Fonds
        canvas: "#FFFFFF",
        surface: "#F8F9FC",
        // Texte
        ink: "#111111",
        black: "#0E0E0E",
        // Accents
        sky: "#CFE1FF", // bleu principal (doux)
        brand: {
          DEFAULT: "#5A8CFF", // bleu CTA
          50: "#EEF3FF",
          100: "#DCE8FF",
          200: "#CFE1FF",
          300: "#A9C6FF",
          400: "#7FA8FF",
          500: "#5A8CFF",
          600: "#3D6FE6",
          700: "#2F55B4",
          800: "#233F84",
          900: "#1B305F",
        },
        beige: "#E9D8BE",
        line: "#ECECEC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tightest: "-0.045em",
      },
      boxShadow: {
        soft: "0 2px 10px -3px rgba(17,17,17,0.06), 0 6px 24px -8px rgba(17,17,17,0.05)",
        card: "0 4px 24px -8px rgba(17,17,17,0.10), 0 2px 8px -4px rgba(17,17,17,0.05)",
        "card-hover": "0 24px 60px -18px rgba(45,85,180,0.22), 0 8px 24px -12px rgba(17,17,17,0.10)",
        glow: "0 0 0 1px rgba(90,140,255,0.10), 0 20px 60px -20px rgba(90,140,255,0.35)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(17,17,17,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.035) 1px, transparent 1px)",
        "brand-gradient": "linear-gradient(135deg, #7FA8FF 0%, #5A8CFF 50%, #3D6FE6 100%)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-24px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        float: "float 7s ease-in-out infinite",
        "float-delayed": "float-delayed 9s ease-in-out infinite",
        "spin-slow": "spin-slow 26s linear infinite",
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 2.5s infinite",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
