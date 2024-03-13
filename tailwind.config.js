/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans':['Roboto', 'sans serif']
    },
    extend: {
      colors: {
        'regal-red': '#cc0000',
      },
    },
  },
  plugins: [],
}

