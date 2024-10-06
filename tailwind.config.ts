import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"], // Add DM Sans as a sans font
        serif: ["var(--font-cormorant)"],
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
