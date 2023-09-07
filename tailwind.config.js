/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: 'Montserrat',
        Roboto: 'Roboto'
      },
      backgroundColor: {
        pblack: 'black',
        mblack: '#111',
        lblack: '#222'

      },
      colors: {
        pwhite: '#355E3B',
        mwhite: 'rgb(76, 187, 23, 0.6)',
        lwhite: 'rgba(50, 205, 50, 0.281)'

      }
    },
  },
  plugins: [],
}