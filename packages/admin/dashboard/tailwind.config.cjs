const path = require("path")

// get the path of the dependency "@band-store/ui"
const bandStoreUI = path.join(
  path.dirname(require.resolve("@band-store/ui")),
  "**/*.{js,jsx,ts,tsx}"
)

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@band-store/ui-preset")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", bandStoreUI],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}
