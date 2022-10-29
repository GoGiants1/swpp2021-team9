const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      xs: '320px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['Apple SD Gothic Neo', 'sans-serif'],
      serif: ['serif'],
      body: ['Apple SD Gothic Neo', 'sans-serif'],
    },
    extend: {
      fontSize: {},
      borderWidth: {},
      spacing: {},
      height: {},
      padding: {},
      margin: {},
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.neutral,
      },
    },
  },
  plugins: [],
};
