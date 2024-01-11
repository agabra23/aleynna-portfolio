/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slider: {
          "0%": { left: 0 },
          "100%": { left: "-100%" },
        },
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
        garamond: ["EB Garamond", "serif"],
      },
      colors: {
        offwhite: "#F3F0EC",
        charcoal: "#575757",
        mustard: "#FFD43C",
        pumpkin: "#FF852C",
        candyPink: "#FF63B9",
        blueberry: "#5B9DFF",
      },
      boxShadow: {
        custom: "0px 4px 15px 0px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        slider: "slider 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
