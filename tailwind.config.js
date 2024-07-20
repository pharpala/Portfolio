/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      transformOrigin: {
        'center': 'center',
      },
      scale: {
        '80': '0.8',
        '50': '0.5',
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        xxl: "1440px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/small-darkbg.png')",
      },
    },
  },
  plugins: [],
};