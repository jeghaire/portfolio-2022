const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          'primary': '#f3f4f6',//'#f6f9fc', //'#edf2f8',
          'accent': '#243c5a',
          'secondary': '#313bac', //'#6772e5',
          'dark': '#030303',
          'light-gray': '#e4e4e4',
          'dark-gray': '#6b7c93',
        },
      },
      fontFamily: {
        sans: ['PT sans', ...fontFamily.sans],
        mono: ['Fira Code', ...fontFamily.mono],
        serif: ['Cooper Std', ...fontFamily.serif],
        display: 'NeueMontreal',
      }
    },
  },
  plugins: [],
}