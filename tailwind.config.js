/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./node_modules/flowbite/**/*.js",
    "./assets/js/script.js",
    "./movie.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require('daisyui'),
  ],
}

