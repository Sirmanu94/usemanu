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
      'progetti':"url('/src/assets/progetti.png')"
    },
    opacity: {
      '75': '0.75',
      '60':'0.60',
      '50':'0.50',
      '70': '0.7',
      '80': '0.8',
      '90': '0.9',
      '95':'0.95',
      
    },
  },
  plugins: [],
}