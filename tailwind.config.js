/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        demoGrey: '#5A607F',
        demoBg: '#FFFFFF',
        demoShadow: '#D7DBEC',
        demoBlue: '#1E5EFF'
      },},
  },
  plugins: [],
}
