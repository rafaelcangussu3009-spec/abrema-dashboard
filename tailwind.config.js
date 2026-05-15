/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#0b1220',
          800: '#111d33',
          700: '#1b2b4a'
        }
      }
    }
  },
  plugins: [],
}
