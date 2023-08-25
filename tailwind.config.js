/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Orbitron', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        violet: '#7122fa',
        darkviolet: '#560a86',
        pink: '#f148fb',
        turquoise: '#00ff9f',
        red: '#fd0130',
        darkred: '#34161c',
        greyred: '#241a1a',
        yellow: '#fcee0a',
        blue: '#00f0ff',
        bluedark: '#070f15',
        green: '#1ef758',
      },
      skew: {
        15: '15deg',
      },
      boxShadow: {
        neon: '0px 0px 5px 1px #fd0130',
      },
    },
  },
  plugins: [],
};
