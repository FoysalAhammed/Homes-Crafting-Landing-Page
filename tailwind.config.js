/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      display:["Poppins","sens-serif"]
    },

    extend: {
      colors:{
        primary:"#3368C0",
        secondary:"#EEF4FF",
        darkBlue:"#1B4282",
        background:"#F7FAFF",
        lightBlue:"#BDD6FF",
        dimBlue:"#F7FAFF",
        overlayBg:"rgba(0,0,0,0.3)",
      }
    },
  },
  plugins: [],
}