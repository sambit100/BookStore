/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
      primary:"#1182c5",
      secondary:"#2aa6df"
     },
     container:{
      center:true,
      padding:{
        DEFAULT:"1rem",
        sm:"3rem"
      }
     }
    },

  },
  plugins: [],
  darkMode:"class"
}
// absolute unit - pixel, percentage,vw,vh
//relative unit - relative to parent element em,  relative to root element like html is the root element rem 