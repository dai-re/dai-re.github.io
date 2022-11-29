/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./js/*.js",
    "index.html"
    ],
  theme: {
    extend: {
      screens: {
        sm: '430px',
        md: '760px',
        lg: '976px',
        xl: '1140px',
      },
      colors: {
        clifford: '#da373d',
        dragv: '#323346',
        dragvw: '#686879',
      },
      width: {
        afull: '90%',
        tree: '300px'
      },
      fontSize: {
        xs: '10px',
      },
    },
  },
  plugins: [],
}
