import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pink-leading with black accents — built to soften toward
        // a more organic, gender-neutral palette over time.
        ink: {
          DEFAULT: "#100a0d",
          soft: "#1c1418",
          muted: "#3a2f35",
        },
        blush: {
          50: "#fff5f9",
          100: "#ffe6f1",
          200: "#ffcfe2",
          300: "#ffadcd",
          400: "#ff7fb0",
          500: "#ff4f93",
          600: "#ec2d79",
          700: "#c01a5f",
        },
        clay: {
          // warmer, gender-neutral neutrals for the brand's next phase
          100: "#f4ece7",
          300: "#d9c4b8",
          500: "#a8897a",
        },
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px -20px rgba(192, 26, 95, 0.45)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        rise: "rise 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
