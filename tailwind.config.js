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
        primary: '#1a2c3c',
        secondary: '#3c5c7a',
        third: '#223749',
        forth: '#f0f8ff',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        'according-animation-in': {
          '0%': {
            '-webkit-transform': 'translateY(100%)',
            transform: 'scale(0%)',
          },
          '100%': {
            '-webkit-transform': 'translateY(0%)',
            transform: 'scale(100%)',
          },
        },
        'according-animation-out': {
          '0%': {
            '-webkit-transform': 'translateY(0%)',
          },
          '50%': {
            '-webkit-transform': 'translateY(-50%)',
          },
          '100%': {
            '-webkit-transform': 'translateY(-100%)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        'according-animation-in': 'according-animation-in 0.8s ease-in-out',
        'according-animation-out': 'according-animation-out 1s ease',
      },
    },
  },
};
