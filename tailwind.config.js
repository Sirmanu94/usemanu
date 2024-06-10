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
  },
  plugins: [],
}