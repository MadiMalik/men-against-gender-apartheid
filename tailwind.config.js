/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d5dc0',
        dark: '#020d1f',
        'dark-blue': '#0f172a',
        'navy': '#1e293b',
        'deep-blue': '#0f1419',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
