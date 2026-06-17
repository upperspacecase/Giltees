import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Product tile gradient classes live as string data here.
    "./src/lib/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Monochrome chrome: white surfaces, near-black ink.
        // Color enters through photography and sparse pink accents.
        ink: {
          DEFAULT: "#141110",
          soft: "#2a2522",
          muted: "#6b625d",
        },
        paper: "#ffffff",
        bone: "#f6f4f2",
        line: "#e7e3e0",
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
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.14em",
        widest2: "0.22em",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drawerIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        rise: "rise 0.7s ease-out both",
        drawerIn: "drawerIn 0.32s cubic-bezier(0.22,1,0.36,1) both",
        fade: "fade 0.25s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
