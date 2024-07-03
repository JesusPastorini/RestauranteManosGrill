/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray-200': '#f3f3f3',
        orange: require('tailwindcss/colors').orange,
        lime: {
          '900': '#3c4708',
        },
      }
    },
  },
  plugins: [],
}