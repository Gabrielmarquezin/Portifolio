/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pantera': ['decotura'],
        'menu': 'Noto Sans, sans-serif',
      },
      colors:{
        'text-comun': '#ffffff'
      },
      screens: {
        'tablet': {'max': '810px'}
      }
    },
  },
  plugins: [],
}

