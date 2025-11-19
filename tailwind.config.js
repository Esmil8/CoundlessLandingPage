/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html" ,"./project/**/*.{html,js,ts}"],
  theme: {
    extend: { colors: {
    'primary': '#FFD700',
    'hover-primary': '#FFC400',

  
        'surface-light': '#F9FAFB',   
        'surface-default': '#FFFFFF',    


        'text-default': '#1F2937',   
        'text-secondary': '#6B7280',   


        'stars': '#FFC400',       
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
  }},
  },
  plugins: [],

 
}

