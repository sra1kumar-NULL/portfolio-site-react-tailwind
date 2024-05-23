/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      rouge: ["rouge"],
      ubuntu: ["ubuntu-sans-mono-uniqueid"],
    },
    extend: {
      transitionProperty: {
        opacity: "opacity",
      },
    },
  },
  plugins: [],
};
