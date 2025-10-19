/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkest: '#0a0908',
        bronze: '#BC6C25',
        gold: '#DDA15E',
        cream: '#FEFAE0',
      },
      fontFamily: {
        epic: ['Cinzel Decorative', 'cursive'],
        body: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
