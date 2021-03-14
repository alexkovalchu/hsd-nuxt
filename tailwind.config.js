// tailwind.config.js

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
      'tinos': ['Tinos', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
