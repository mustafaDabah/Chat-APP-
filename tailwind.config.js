/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          // sm: '2rem',
          // lg: '4rem',
          // xl: '5rem',
          // '2xl': '6rem',
        },
      },
      colors: {
        primary: '#1c114d',
        secondary: '#645CBB',
        third: '#291c63',
        forth: '#f5f3ff',
      },
      keyframes: {
        fadeInRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(20px)',
            '-webkit-transform': 'translateX(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0px)',
            '-webkit-transform': 'translateX(0px)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-20px)',
            '-webkit-transform': 'translateX(-20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0px)',
            '-webkit-transform': 'translateX(0px)',
          },
        },

      },
      animation: {
        fadeInRight: 'fadeInRight 0.2s ease',
        fadeInLeft: 'fadeInLeft 0.2s ease',

      },
    },
  },
};
