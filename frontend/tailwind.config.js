/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //colors used in this project
      colors:{
        primary:"#2B85FF",
        secondary:"#EF863E"
      },
      keyframes: {
        'wiggle': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' }, // Adjust the distance as needed
        },
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}