/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./playground/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Optional: Override rounded-out sizes independently from borderRadius
      roundedOut: {
        // If not specified, will use borderRadius values
        // 'sm': '0.1rem',
        // 'md': '0.2rem',
        // 'lg': '0.3rem',
        // etc...
      }
    },
  },
  plugins: [
    require('./src/index.ts')
  ],
}