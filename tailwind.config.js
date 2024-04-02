/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        deepBrown: "#1f1b29",
        lightBrown: "#77595b",
        background: "#e6e6eb",
      },
      fontFamily: {
        actor: ["Actor", "sans-serif"],
        playFair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
