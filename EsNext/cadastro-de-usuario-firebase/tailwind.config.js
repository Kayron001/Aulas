module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  content: ["./src/**/*.{html,js}"],
  darkMode: false, //or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants:{
    extend:{},
  },
  plugins: [],
}
