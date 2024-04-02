/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        dBrown: "#1C1A26", // Deep Brown (Text - Headings, Buttons, CTAs)
        lBrown: "#58413D", // Lighter Brown (Text - Secondary, Highlights)
        background: "#F0F0F2", // White (Background - Main Website Area)
        foreground: "#e6e6eb", // Off-White (Content Areas, Product Boxes)
        highlight: "#A9BF04", // Bright Green (CTAs, Special Offers)
      },
      fontFamily: {
        actor: ["Actor", "sans-serif"],
        playFair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
