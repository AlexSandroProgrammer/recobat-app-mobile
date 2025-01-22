/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // agregamos la fuente Kanit y los colores de la paleta
      fontFamily: {
        kanit: ["Kanit-Regular", "sans-serif"],
        "kanit-thin": ["Kanit-Thin", "sans-serif"],
        "kanit-bold": ["Kanit-Bold", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#f0f6fe",
          200: "#4880e9",
          300: "#273d88",
          400: "#1b2550",
        },
      },
    },
  },
  plugins: [],
};
