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
        violet: '#7122fa',
        darkviolet: '#560a86',
        pink: '#f148fb',
        turquoise: '#0abdc6',
        blue: '#133e7c',
        bluedark: '#091833',
      },
      skew: {
        15: '15deg',
      },
      animation: {
        tilt: 'tilt 10sec infinte linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(5deg)',
          },
          '75%': {
            transform: 'rotate(-5deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
