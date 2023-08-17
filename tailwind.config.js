/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        violet: '#7122fa',
        darkviolet: '#560a86',
        pink: '#f148fb',
        turquoise: '#00ff9f',
        blue: '#133e7c',
        bluedark: '#091833',
      },
      skew: {
        15: '15deg',
      },
    },
  },
  plugins: [],
};
