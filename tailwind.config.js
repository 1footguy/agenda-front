/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        elite: ['Special Elite', 'sans-serif'],
        agu: ["Agu Display", "serif"]
      },
    },
  },
  plugins: [],
}

