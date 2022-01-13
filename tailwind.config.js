const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '6rem',
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      "text-black": "#243c5a",
      "text-green": "#008c8d",
      "bg-green": "#6bc2c3",
      "bg-black": "#262c3a",
      "progress-pale": "#c5eaea",
      "progress-deep": "#2bb9ba",
      "border-green": "#c5eaea",
    },
    extend: {
      backgroundImage: (theme) => ({
        "bg-about-pc": "url('../../public/bg-about.png')",
        "bg-future-pc": "url('../../public/bg-future.png')",
        "bg-skills-pc": "url('../../public/bg-skills.png')",
      }),
    },
  },
  plugins: [],
};
