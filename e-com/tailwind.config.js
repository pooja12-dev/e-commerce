/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      helvetica: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      atacama: ["__Atacama_e0976a, __Atacama_Fallback_e0976a, serif"],
      freight: ["freight-display-pro, serif"],
    },
  },
  plugins: [],
};
