import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
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
        satisfy: ["Satisfy", ...fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF7F50",
        "primary-light": "#FFB499",
        secondary: "#002733",
        "background-screen": "var(--background-screen)",
        "background-elevated": "var(--background-elevated)",
        "background-neutral": "var(--background-neutral)",
        "content-primary": "var(--content-primary)",
        "content-secondary": "var(--content-secondary)",
        "content-tertiary": "var(--content-tertiary)",
        "interactive-primary": "#002733",
        "interactive-secondary": "#F2EBE4",
        "interactive-accent": "#FF7F50",
        "border-neutral": "var(--border-neutral)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.75s ease-out",
        "fade-in-right": "fadeInRight 0.75s ease-out",
        "fade-in-left": "fadeInLeft 0.75s ease-out",
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
        fadeInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
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
