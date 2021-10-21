module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      "xs": "13px",
      "sm": "14px",
      "base": "15px",
      "lg": "18px",
      "xl": "24px",
      "2xl": "28px",
      "3xl": "32px",
      "4xl": "36px",
      "5xl": "40px",
      "6xl": "56px",
    },
    extend: {
      colors: {
        D87D4A: "#D87D4A",
        FBAF85: "#FBAF85",
        101010: "#101010",
        F1F1F1: "#F1F1F1",
        FAFAFA: "#FAFAFA",
        FFFFFF: "#FFFFFF",
        979797: "rgba(300,300,300,.2)",
        "clear": "rgba(0,0,0, .3)"
      },
      height: {
        81 : "340px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
