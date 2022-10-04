/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'] 
      },
      backgroundImage:{
        galaxy: "url('/background-galaxy.png')",
        nlwGradient: 'linear-gradient(85.86deg, #9572FC 3.00%, #43E7AD 70.00%, #E1D55D 95.00%)',
        'games-name-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      }
    },
  },
  plugins: [],
}
