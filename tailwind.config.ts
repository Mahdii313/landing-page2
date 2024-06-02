import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        subHero: "url('/subHero.jpg')",
        jungle1: "url('/Slider/jungle1.jpg')",
        jungle2: "url('/Slider/jungle2.jpg')",
        jungle3: "url('/Slider/jungle3.jpg')",
        jungle4: "url('/Slider/jungle4.jpg')",
        jungle5: "url('/Slider/jungle5.jpg')",
      },
      fontFamily: {
        Jaro2X: "Jaro2X",
        Jaro: "Jaro",
        RobotoMono: "RobotoMono",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(.74,.73,.2,.98)",
      },
      dropShadow: {
        red: "0 0 40px rgba(255, 0, 0, 1)",
        green: "0 0 40px rgba(0, 255, 0, 1)",
        blue: "0 0 40px rgba(0, 0, 255, 1)",
        yellow: "0 0 40px rgba(234, 179, 8, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
