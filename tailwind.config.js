/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        bgreen: '#c1dea4',
        violet: '#711c91',
        pink: '#ea00d9',
        turquoise: '#0abdc6',
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
