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
        "4C4C4C" : "#4C4C4C"
      },
      height: {
        81 : "340px",
        82: "350px",
        588: "588px",
        600: "600px",
      },
      maxHeight: {
        "base" : "820px",
        "lg" : "900px",
        "xl" : "1000px",
        "2xl" : "1100px"
      },
      width: {
        81: "340px",
        82: "350px",
        100: "400px",
        125: "425px",
        150: "450px",
        175: "475px",
        200: "500px",
        558: "558px",
        
      },
      maxWidth: {
        "8xl" : "1440px"
      },
      scale: {
        "65": ".65",
      },

      backgroundImage: {
        "header-mobile" : "url('public/home/mobile/image-header.jpg')",
        "header-tablet" : "url('public/home/tablet/image-header.jpg')",
        "header-desktop" : "url('public/home/desktop/image-hero.jpg')",
        "/home/mobile/image-speaker-zx9" : "url('/home/mobile/image-speaker-zx9.png')",
        "/home/desktop/image-speaker-zx9" : "url('/home/desktop/image-speaker-zx9.png')",
        "/home/mobile/image-speaker-zx7" : "url('/home/mobile/image-speaker-zx7.jpg')",
        "/home/tablet/image-speaker-zx7" : "url('/home/tablet/image-speaker-zx7.jpg')",
        "/home/desktop/image-speaker-zx7" : "url('/home/desktop/image-speaker-zx7.jpg')",
        "/home/mobile/image-earphones-yx1": "url('/home/mobile/image-earphones-yx1.jpg')",
        "/home/tablet/image-earphones-yx1": "url('/home/tablet/image-earphones-yx1.jpg')",
        "/home/desktop/image-earphones-yx1": "url('/home/desktop/image-earphones-yx1.jpg')",
        "/shared/mobile/image-best-gear" : "url('/shared/mobile/image-best-gear.jpg')",
        "/shared/tablet/image-best-gear": "url('/shared/tablet/image-best-gear.jpg')",
        "/shared/desktop/image-best-gear": "url('/shared/desktop/image-best-gear.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
