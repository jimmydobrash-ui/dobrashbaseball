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
        coal: "#080808",
        graphite: "#111111",
        pitch: "#1a1a1a",
        iron: "#2a2a2a",
        mist: "#888888",
        silver: "#c4c4c4",
        diamond: {
          DEFAULT: "#5ECBDC",
          light: "#8DDFE9",
          dim: "#2EA8BD",
        },
      },
      fontFamily: {
        display: ["var(--font-barlow-condensed)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
