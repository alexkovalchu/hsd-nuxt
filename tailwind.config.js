// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
      fontFamily: {
        sans: ["Tinos", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
