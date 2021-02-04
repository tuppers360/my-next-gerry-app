const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Poppins', 'system-ui', 'sans-serif'],
      sans: ['Inter', ...fontFamily.sans],
      // julietta: ['Julietta', ...fontFamily.sans],
      roboto: ['Roboto', ...fontFamily.sans]
    },
    extend: {
      colors: {
        twitter: '#00abe3',
        instagram: '#bc2a8d',
        facebook: ' #4060a5'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      opacity: ['disabled']
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
