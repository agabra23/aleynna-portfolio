/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
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
        custom: "0px 4px 20px 0px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        slider: "slider 45s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
