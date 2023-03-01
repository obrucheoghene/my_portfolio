/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#201F1F',
    },
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
