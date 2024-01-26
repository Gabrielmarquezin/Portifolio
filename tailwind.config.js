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
        'smartphone': {'max': '480px'},
        'big-tablet': {'min': '810px'}
      },
      fontSize:{
        'title-size': 'clamp(3rem, 1.5rem + 5vw, 4rem)',
        'title-desc': 'clamp(0.5rem, 4.5vw, 1.1rem)',
        'menu-text': 'clamp(0.6rem, 3.5vw, 1rem)',
        'desc': 'clamp(0.8rem, 2.5vw, 1rem)',
        'timeline': 'clamp(0.7rem, 2vw, 0.9rem)',
        'desc-project': 'clamp(0.8rem, 3vw, 1rem)'
      },
      gridTemplateColumns: {
        '30': 'repeat(30, minmax(0, 1fr))'
      },
      gridTemplateRows: {
        '30': 'repeat(30, minmax(0, 1fr))',
        '50': 'repeat(50, minmax(0, 1fr))'
      },
      clipPath:{
        'trapezio': 'polygon(20% 100%, 40% 100%, 80% 0%, 60% 0%)'
      }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}

