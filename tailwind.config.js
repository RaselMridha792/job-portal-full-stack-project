/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto-Mono': ["Roboto Mono", "monospace"],
        'Roboto': ["Roboto", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
