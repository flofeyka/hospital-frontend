const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", "./src/**/*.{jsx, js}"],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '330px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1024px'},

      'lg': {'min': '1025px'}
      // => @media (min-width: 768px and max-width: 1023px) { ... }
    }
  },
  plugins: [nextui()],
}

