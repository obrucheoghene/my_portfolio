/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    backgroundColor: {
      'main-bg': '#201F1F',
    },
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
