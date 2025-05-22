/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  theme: {
    extend: {
      colors: {
        white: {
          A700: "#ffffff",
        },
        gray: {
          100: "#f5f7f9",
          300: "#d9dbe1",
          600: "#717171",
          700: "#4d4d4d",
          800: "#263238",
          900: "#18191f",
        },
        green: {
          50: "#e8f5e9",
          500: "#4caf4f",
        },
        blue_gray: {
          700: "#abbed1",
          800: "#88939e",
        },
        black: {
          900: "#000000",
        },
        indigo: {
          800: "#283593",
        },
      },
      fontFamily: {
        inter: "Inter",
        montserrat: "Montserrat",
      },
      boxShadow: {
        xs: "0px 2px 4px rgba(171, 190, 209, 0.2)",
        sm: "0px 8px 16px rgba(171, 190, 209, 0.4)",
      },
    },
  },
  plugins: [],
};