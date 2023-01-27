/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
      },
      colors: {
        "c-veryDarkDesaturatedBlue": "hsl(238, 29%, 16%)",
        "c-softRed": "hsl(14, 88%, 65%)",
        "c-softViolet": "hsl(273, 75%, 66%)",
        "c-softBlue": "hsl(240, 73%, 65%)",
        "c-veryDarkGrayishBlue": "hsl(237, 12%, 33%)",
        "c-darkGrayishBlue": "hsl(240, 6%, 50%)",
        "c-lightGrayishBlue": "hsl(240, 5%, 91%)",
      },
    },
  },
  plugins: [],
};
