/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        light: "#FFFFFF",
        dark: "#1A202C",
        darkOne: "#171923",
        mandatory: "#FC8181",
        lightDark: "#767676",
        blue: "#4299E1",
        purpleLight: "#D6BCFA",
        purpleDark: "#805AD5",
        grayLight: "#A0AEC0",
        whiteAlpha: "#EDF2F7",
        darkTwo: "#4b1f89",
      },
    },
  },
  plugins: [],
};
