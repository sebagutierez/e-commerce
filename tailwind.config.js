/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
      ftitles:"'Oswald', sans-serif",
      ftext:"'Roboto', sans-serif"
      },
      backgroundImage: {
        different:"url('/src/components/Body/Banner/paper.jpg')",
      },
      transitionTimingFunction: {
        mostrar: 'cubic-bezier(1, 0, 1, 0)',
        ocultar: 'cubic-bezier(0, 1, 0, 1)',
      }
    },
  },
  plugins: [],
}
