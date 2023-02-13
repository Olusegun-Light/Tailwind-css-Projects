/** @type {import('tailwindcss').Config} */
module.exports = {
  // the content: look in the root for any html/js folder that has tailwind class
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '780px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif',], 
        alata: ['Alata']
      },

      letterSpacing: {
        widest: '.3em'
      }
    },
  },
  plugins: [],
}
