/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        fundo: '#171719',
        pantera: "#654EAE"
      },
      fontFamily: {
        'pantera': ['decotura'],
        'menu': 'Noto Sans, sans-serif',
        'desc-time': 'Inter, sans-serif',
      },
      colors:{
        'text-comun': '#ffffff',
        'pantera-color': '#654EAE',
        'fundo': '#171719'
      },
      screens: {
        'tablet': {'max': '810px'},
        'smartphone': {'max': '480px'}
      },
      fontSize:{
        'title-size': 'clamp(3rem, 1.5rem + 5vw, 4rem)',
        'title-desc': 'clamp(0.5rem, 4.5vw, 1rem)',
        'menu-text': 'clamp(0.6rem, 3.5vw, 0.9rem)',
        'desc': 'clamp(0.8rem, 2.5vw, 1rem)',
        'timeline': 'clamp(0.7rem, 2vw, 0.8rem)'
      }
    },
  },
  plugins: [],
}

