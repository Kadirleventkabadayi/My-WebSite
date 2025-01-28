import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        topArea: "var(--topArea)",
        categoryArea: "var(--categoryArea)",
        socialMediaBtn: "var(--socialMedia)",
        socialMediaCard: "var(--socialMediaCard)",
        footerString1: "var(--footerString1)",
        footerString2: "var(--footerString2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
