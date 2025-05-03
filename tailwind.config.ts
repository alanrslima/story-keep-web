import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...fontFamily.sans],
        montserrat: ["Montserrat", ...fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF7F50",
        "primary-light": "#FFB499",
        secondary: "#002733",
        "background-screen": "#FBFAF9",
        "background-elevated": "#FFFFFF",
        "background-neutral": "#EFEBE7",
        "content-primary": "#050506",
        "content-secondary": "#454D54",
        "content-tertiary": "#67747E",
        "interactive-primary": "#002733",
        "interactive-secondary": "#F2EBE4",
        "interactive-accent": "#FF7F50",
        "border-neutral": "#B3B3B3",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.75s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        moveBlurMemory: {
          "0%": {
            transform: "translate(0, 0) rotate(0deg)",
          },
          "25%": {
            transform: "translate(30px, -30px) rotate(90deg)",
          },
          "50%": {
            transform: "translate(0, -60px) rotate(180deg)",
          },
          "75%": {
            transform: "translate(-30px, -30px) rotate(270deg)",
          },
          "100%": {
            transform: "translate(0, 0) rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
