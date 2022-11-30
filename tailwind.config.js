/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fb1',
        'secundary': '#333',
        'neutral': '#eee',
        'textButton': '#764701',
        'error': '#f31'
      },
      boxShadow: {
        'customShadow': '0 0 0 3px #fea, 0 0 0 4px #fb1',
      },
      screens: {
        'tablet': '800px',
      },
    },
  },
  plugins: [],
}
