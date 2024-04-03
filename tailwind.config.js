/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        dBrown: "#1C1A26", // Deep Brown (Text - Headings, Buttons, CTAs)
        lBrown: "#88675E", // Lighter Brown (Text - Secondary, Highlights)
        highlight: "#6A9402", // Bright Green (CTAs, Special Offers)
      },
      fontFamily: {
        actor: ["Actor", "sans-serif"],
        playFair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
