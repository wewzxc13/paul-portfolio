/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // use class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#646cff",
        "primary-dark": "#535bf2",
        "primary-light": "#747bff",
        darkbg: "#121212", // main dark background
      },
      fontFamily: {
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
