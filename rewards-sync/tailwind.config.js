/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app/**/*.{js,tsx}", "components/**/*.{js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:  "#FF6B6B",  // addictive watermelon
        secondary:"#4ECDC4",  // mint
        accent:   "#FFE66D",  // yellow pop
      },
      borderRadius: { xl: "32px" },
    },
  },
  plugins: [],
}; 