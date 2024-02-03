/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'demo-grey': '#5A607F',
        'demo-white': '#FFFFFF',
        'demo-shadow': '#D7DBEC',
        'demo-blue': '#1E5EFF',
        'demo-border':'#BFC3D1',
        'demo-span':'#A1A7C4'
      },},
  },
  plugins: [],
}
