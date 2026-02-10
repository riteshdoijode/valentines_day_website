/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'valentine-pink': '#FFE4E6',
        'valentine-red': '#FECDD3',
        'valentine-dark': '#881337',
      },
      fontFamily: {
        'nunito': ['"Nunito"', 'sans-serif'],
        'quicksand': ['"Quicksand"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

