/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        LeagueSpartan: ["League Spartan", "sans-serif"],
      },
      fontSize: {
        sm: "clamp(0.9rem, -0.1vw + 0.93rem, 0.84rem)",
        base: "clamp(1.13rem, 0vw + 1.13rem, 1.13rem)",
        lg: "clamp(1.41rem, 0.17vw + 1.36rem, 1.5rem)",
        xl: "clamp(1.76rem, 0.44vw + 1.65rem, 2rem)",
        "2xl": "clamp(2.2rem, 0.85vw + 1.98rem, 2.66rem)",
        "3xl": "clamp(2.75rem, 1.46vw + 2.38rem, 3.55rem)",
        "4xl": "clamp(3.43rem, 2.37vw + 2.84rem, 4.73rem)",
        "5xl": "clamp(4.29rem, 3.67vw + 3.37rem, 6.31rem)",
        "6xl": "clamp(5.36rem, 5.54vw + 3.98rem, 8.41rem)",
      },
      colors: {
        DarkGray: "hsl(0, 0%, 63%)",
        Black: "hsl(0, 0%, 0%)",
        White: "hsl(0, 0%, 100%)",
        VeryDarkGray: "hsl(0, 0%, 27%)",
      },
    },
  },
  plugins: [],
};
