/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '-15': '-3.75rem',
        '-13': '-3.25rem',
      }
      
    },
    backgroundImage: {
      'ecomm': "url('/src/assets/ecomm4.png')",
    },
    opacity: {
      '75': '0.75',
      '60':'0.60',
      '50':'0.50'
    },
  },
  plugins: [],
}