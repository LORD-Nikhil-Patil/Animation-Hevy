/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serifRegular: ["Roboto", "sans-serif"],
      oldStandard: ["Old Standard TT", "serif"]
    },
    colors: {
      red: "#FF0000",
      black: "#000"
    },
    extend: {
      animationDelay: {
        '250': '250ms',
        '750': '1000ms',
      },
      animation:{
        slideUp1: 'slideUp 0.5s ease-out forwards',
        slideUp2: 'slideUp 0.8s ease-out forwards',
        slideUp3: 'slideUp 1s ease-out forwards',
        slideUp4: 'slideUp 1.2s ease-out forwards',
        slideUpMini: 'slideUp 0.8s ease-out forwards',
        swipe: 'horizontalScroll 40s linear infinite'
      },
      keyframes: {
        slideUpMini: {
          "25%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(75%)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        horizontalScroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" }
        }
      },
    },
  },
  plugins: [],
}

