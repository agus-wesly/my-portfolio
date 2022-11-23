/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#64FFDA",
        whiteblue: "#CCD6F6",
        darkblue: "#112240",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        extrabold: "700",
        bold: "600",
        normal: "300",
        thin: "200",
      },
      fontSize: {
        xl: "28px",
        lg: "24px",
        md: "22px",
        nl: "20px",
        sm: "15px",
        xs: "12px",
      },
      animation: {
        slide: "slideUp 0.5s ease-in forwards",
      },
      keyframes: {
        slideUp: {
          from: {
            transform: "translate(0,20px)",
            opacity: "0",
          },
          to: {
            transform: "translate(0,0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
