module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "interactive-primary-orange": "hsl(25, 97%, 53%)",
        "interactive-white": "hsl(0, 0%, 100%)",
        "interactive-light-grey": "hsl(217, 12%, 63%)",
        "interactive-medium-grey": "hsl(216, 12%, 54%)",
        "interactive-dark-blue": "hsl(213, 19%, 18%)",
        "interactive-very-dark-blue": "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        Overpass: ["Overpass, sans-serif"],
      },
    },
  },
  plugins: [],
};
