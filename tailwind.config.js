/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "scale-down-top": "scale-down-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-top": "slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "fade-in-bottom": "fade-in-bottom 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "fade-in-top": "fade-in-top 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "fade-in-open-menu-modal": "fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "fade-out": "fade-out 1s ease   both",
      },
      keyframes: {
        "scale-down-top": {"0%": {transform: "scale(1)", "transform-origin": "50% 0%"}, to: {transform: "scale(0.8)", "transform-origin": "50% 0%"}},
        "slide-top": {"0%": {transform: "translateY(0)"}, to: {transform: "translateY(-10px)"}},
        "fade-in-bottom": {"0%": {transform: "translateY(7px)", opacity: "0"}, to: {transform: "translateY(0)", opacity: "1"}},
        "fade-in-top": {"0%": {transform: "translateY(-10px)", opacity: "0"}, to: {transform: "translateY(0)", opacity: "1"}},
        "fade-in": {"0%": {opacity: "0"},to: {opacity: "1"}},
        "fade-out": {"0%": {opacity: "1"},to: {opacity: "0"}},
      },
    },
  },
  plugins: [],
}