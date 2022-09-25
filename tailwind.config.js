/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
      "primary":"#3c37ff",
      "light-primary":"#edeffa",
      "dark-primary":"#2520e3",
      "dark-bg":"#0a0a0a",
      "dark-gray":"#262931",
      "error-bg":'#fff9f9',
      "error":"#cc8787"
      },
      fontFamily: {
        Inter: "'Inter', sans-serif"
      },
    },
  },
  plugins: [],
}
