const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'true-gray': colors.trueGray,
        blue: colors.lightBlue,
        lime: colors.lime,
        emerald: colors.emerald,
        cyan: colors.cyan,
        red: colors.rose,
        fuchsia: colors.fuchsia
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
