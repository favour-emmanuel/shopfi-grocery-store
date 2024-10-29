/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        charm: ["Charm", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        appBlack: "#010f1c",
        appGreen: "#678e61",
        appGray: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
