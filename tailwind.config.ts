import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: "#699b8f",
        secondary: "",
        bg: {
          menu: "#ffe5d9",
          home: "#dfe6e5",
          projects: "#eef1f6",
          now: "#dfe6e5",
          timeline: "#dbe7e4",
          blog: "#eef1f6",
          contact: "#d6e2e9",
        },
        chips: {
          one: "#ffaf91",
          two: "#a4bcbc",
          three: "#b8c9c8",
          four: "#a1bfb9",
          five: "#b5c4d2",
          six: "#ffc8b2",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        krona: ["Krona One", "sans-serif"],
        mono: ["Share Tech Monospace", "monospace"],
      },
    },
    keyframes: {
      bounce: {
        "0%": { transform: "scale(0)" },
        "50%": { transform: "scale(1.2)" },
        "70%": { transform: "scale(0.9)" },
        "100%": { transform: "scale(1)" },
      },
    },
    animation: {
      bounceScaleSm: "bounce .4s ease-out forwards",
      bounceScaleMd: "bounce .6s ease-out forwards",
      bounceScaleLg: "bounce .8s ease-out forwards",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
