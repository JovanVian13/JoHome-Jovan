/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultColor: "#2B1B12",
        backColor: "#FBF5F1",
        frontColor: "#DDC7BB",
        textColor: "#4F3527",
        bgColor: "#FEF7F2",
      },
    },
  },
  plugins: [],
}