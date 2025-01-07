/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./movie.html",
    "./search.html",
    "./node_modules/flowbite/**/*.js",
    "./assets/js/script.js",
    "./assets/js/scriptmovie.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require('daisyui'),
  ],
}

