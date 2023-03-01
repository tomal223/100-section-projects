/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark': '#020202',
      },
      container: {
        center: true,
        padding: '20px',
      },
    },
  },
  plugins: [],
}
