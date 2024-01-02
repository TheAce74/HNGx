/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headings: ["Sora", "sans-serif"],
        body: ["Work Sans", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f9f9fb",
          100: "#b6b3c6",
          200: "#928fab",
          300: "#605c84",
          400: "#413c6d",
          500: "#120b48",
          600: "#100a42",
          700: "#0d0833",
          800: "#0a0628",
          900: "#08051e",
        },
        secondary: {
          50: "#e6f3f3",
          100: "#b0d8d8",
          200: "#8ac6c6",
          300: "#54abab",
          400: "#339b9b",
          500: "#008282",
          600: "#007676",
          700: "#005c5c",
          800: "#004848",
          900: "#003737",
        },
        neutral: {
          100: "#ffffff",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
