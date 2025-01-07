/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./movie.html",
    "./search.html",
    "./node_modules/flowbite/**/*.js",
    "./assets/js/script.js",
    "./assets/js/scriptmovie.js",
    "./assets/js/search.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require('daisyui'),
  ],
}

