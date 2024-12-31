/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
     "./node_modules/flowbite/**/*.js",
     "./assets/script.js"
  ],
  theme: {
    extend: {},
  },
  plugins: ["flowbite/plugin"],
}

