/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        bodyColor: '#fcfbf8',
        txt1Color: '#133531',
        mainColor: '#15C8B4',
        contrastColor: '#11B19F',
        txt2Color: '#bebeb4'
      },
      fontFamily: {
        'sans': ['Roboto', 'Arial', 'sans-serif'], //изменил шрифт по умолчанию
        'robot': ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'onestepLogo': "url('/onestep_tailwindcss/images/logo.svg')"
      },
    },
  },
  plugins: [],
}

