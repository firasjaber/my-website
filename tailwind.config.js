const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        varella: ['"Varela Round"', 'sans-serif'],
        scode: ['"Source Code Pro"', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate( 0.0deg)' },
          '10%': {
            transform: 'rotate(14.0deg)',
          },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': {
            transform: 'rotate( 0.0deg)',
          },
          '100%': { transform: 'rotate( 0.0deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 2.5s infinite',
      },
      transformOrigin: {
        70: '70% 70%',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(120px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(120px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
