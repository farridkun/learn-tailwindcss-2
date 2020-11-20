const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'true-gray': colors.trueGray,
        blue: colors.lightBlue,
        lime: colors.lime,
        emerald: colors.emerald,
        cyan: colors.cyan,
        red: colors.rose
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
