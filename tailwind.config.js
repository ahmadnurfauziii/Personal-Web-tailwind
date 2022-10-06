/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#219744',
        secondary: '#232323',
        green: '#abf5c5',
        dark: '#0f172a',
        tailwind: '#38bdf8',
      },
      screens: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}
