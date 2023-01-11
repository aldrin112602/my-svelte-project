/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["**/*.{svelte,html,js,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
],
}
