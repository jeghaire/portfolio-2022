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
          'primary': '#F8FAFC',
          'accent': '#334155',
          'secondary': '#313bac',
          'dark': '#030303',
          'light-gray': '#e4e4e4',
          'dark-gray': '#6b7c93',
        },
      },
      fontFamily: {
        sans: ['Open Sans', ...fontFamily.sans],
        mono: ['SF Mono', 'Fira Code', ...fontFamily.mono],
        serif: ['Cooper Std', ...fontFamily.serif],
        display: 'NeueMontreal',
      }
    },
  },
  plugins: [],
}