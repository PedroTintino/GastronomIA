/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      white: '#ffffff',
      softPink: '#ffd0e1',
      verySoftPink: '#ffd0e1',
      medianPink: '#ffb8d2',
      strongPink: '#ffa0c4',
      lightGray: '#ededed'
    },
    extend: {},
  },
  plugins: [],
}

