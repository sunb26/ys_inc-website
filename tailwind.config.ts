import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/hero.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-blue': '#2c3b57',
      },
    },
  },
  plugins: [],
} satisfies Config;
