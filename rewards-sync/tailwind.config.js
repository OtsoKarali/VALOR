/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app/**/*.{js,tsx}", "components/**/*.{js,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#101828", // dark navy
        primary: "#b28cff",   // purple
        white: "#FFFFFF",
        gray: "#A3A3A3"
      },
      borderRadius: { xl: "32px" },
    },
  },
  plugins: [],
}; 