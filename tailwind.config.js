/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
        garamond: ["Garamond", "serif"],
      },
      colors: {
        offwhite: "#F3F0EC",
        mustard: "#FFD43C",
        pumpkin: "#FF852C",
        candyPink: "#FF63B9",
        blueberry: "#5B9DFF",
      },
    },
  },
  plugins: [],
};
