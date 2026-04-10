/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#8BBB46',
        'custom-gray': '#BEBBB2',
      },
    },
  },
  plugins: [],
}
