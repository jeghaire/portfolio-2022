const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          'primary': '#edf2f8',
          'accent': '#243c5a',
          'secondary': '#313bac',
          'dark': '#030303',
          'light-gray': '#e4e4e4',
          'dark-gray': '#6b7688',
          'brown': '#46364a',
        },
      },
      fontFamily: {
        sans: [
          // 'Poppins',
          'PT sans',
          ...defaultTheme.fontFamily.sans,
        ],
      }
    },
  },
  plugins: [],
}