// drop-shadow(0 70px 110px rgb(0 0 0 / 0.6))
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url(/images/bg-intro-desktop.svg)",
        "hero-mobile": "url(/images/bg-intro-mobile.svg)",
      },
      backgroundPosition: {
        "hero-desktop": "35rem -14.5rem",
      },
      backgroundSize: { "hero-mobile": "100%", "hero-desktop": "unset" },
      boxShadow: {
        nav: "0px 40px 180px 80px rgb(0 0 0 / 60%)",
      },
      colors: {
        "dark-blue": "hsl(233, 26%, 24%)",
        "lime-green": "hsl(136, 65%, 51%)",
        "bright-cyan": "hsl(192, 70%, 51%)",
        gray: {
          blue: "hsl(233, 8%, 62%)",
          "light-blue": "hsl(220, 16%, 96%)",
          "very-light": "hsl(0, 0%, 98%)",
        },
      },
      gridTemplateColumns: {
        "footer-links": "200px 1fr",
      },
      fontFamily: {
        sans: ["Public Sans", ...defaultTheme.fontFamily.sans],
      },
      fontSize: { "4.5xl": ["2.5rem", 1.2] },
    },
  },
  plugins: [],
};
