/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  corePlugins: {
    preflight: false
  },
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2A3540",
        black: "#2A3540",
        black65: "#65748A",
        red: "#D90909",
        goldA9: "#A97337",
        goldE5: "#E5C097",
        grayE0: "#e0e0e0",
        grayF2: "#f2f2f2",
        grayF8: "#f8f8f8",
        gray82: "#828282",
        grayBa: "#bababa",
        success: "#34B962",
        warning: "#F5A623",
        error: "#FB5555",
        opacity_5: "rgba(255, 255, 255, 0.5)"
      }
    }
  }
};
