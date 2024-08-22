/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/daisyui/dist/**/*.js',
    './node_modules/@daisyui/**/*.js',
  ],
  theme: {
    extend: {},
    colors: {
      primary_color: "#292524", /* Main text and primary color */
      light_color: "#F0EFEB", /* Light background color */
      accent_color: "#FFD700", /* Highlight or accent color */
      orange_color: "#FF4500", /* Button color */
      secondary_color: "#5C5C5C", /* Secondary text color */
      offwhite_color: "rgb(240, 239, 235)" /* Border color for elements */
    }
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["light"],
  },
}