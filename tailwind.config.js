/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        hindmaduraimedium: ["Hind Madurai", "sans-serif"],
        lora: ["Lora", "serif"],
        martel: ["Martel", "serif"],
      },
    },
    keyframes: {
      wiggle: {
        " 0%, 100%": {
          opacity: 1,
        },
        "50% ": {
          opacity: 0.2,
        },
      },
      spin: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
    },
  },
  plugins: [],
};
