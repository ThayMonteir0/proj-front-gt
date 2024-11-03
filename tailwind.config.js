/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-light': '#E7FF86', // Adiciona a nova cor
      },
    },
  },
  plugins: [],
}
