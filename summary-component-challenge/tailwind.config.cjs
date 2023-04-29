/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      lightRed: "hsl(0 100% 67%)",
      lightRedOp: "hsla(0 100% 67% / 0.05)",
      orangeYellow: "hsl(39, 100%, 56%)",
      orangeYellowOp: "hsla(39 100% 56% / 0.05)",
      greenTeal: "hsl(166, 100%, 37%)",
      greenTealOp: "hsla(166 100% 37% / 0.05)",
      cobaltBlue: "hsl(234, 85%, 45%)",
      cobaltBlueOp: "hsla(234 85% 45% / 0.05)",

      white: "rgb(255 255 255)",

      slateBg: "hsl(252, 100%, 67%)",
      royalBg: "hsl(241, 81%, 54%)",

      paleBlue: "hsl(221, 100%, 96%)",
      lightLavender: "hsl(241, 100%, 89%)",
      darkGrayBlue: "hsl(224, 30%, 27%)",
      darkGrayBlueOp: "hsla(224 30% 27% / 0.3)",

      violetCircle: "hsl(256, 72%, 46%, 1)",
      persianCircle: "hsl(241, 72%, 46%, 0)",
    },
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    dropShadow: {
      "3xl": "0 35px 35px rgba(0, 0, 0, 1)",
    }
  },
  plugins: [],
};
