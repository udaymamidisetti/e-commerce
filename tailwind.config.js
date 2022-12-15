/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kazari': {
          DEFAULT: '#600D3F',
          '50': '#EA63B4',
          '100': '#E851AC',
          '200': '#E32E9B',
          '300': '#CC1C86',
          '400': '#A8176E',
          '500': '#841257',
          '600': '#600D3F',
          '700': '#2F061F',
          '800': '#000000',
          '900': '#000000'
        },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms'),
  ],
}