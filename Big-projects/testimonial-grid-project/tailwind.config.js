/** @type {import('tailwindcss').Config} */
module.exports = {
  // the content: look in the root for any html/js folder that has tailwind class
  content: ["./*.{html,js}"],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '978px',
    xl: '1440px'
  },

  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
