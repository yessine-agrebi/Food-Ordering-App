/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */ 
/** @type {import('tailwindcss').Config} */ 
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ClashDisplay-Regular', ...defaultTheme.fontFamily.sans]
      },
      color: {
        tomato: '#E50914',
        marigold: '#FFBE0B',
      }
    },
  },
  plugins: [],
}
