/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4fc3f7",
        secondary: "#b3e5fc",
        accent: "#0288d1",
      },
      fontFamily: {
        jp: ["Noto Sans JP", "sans-serif"],
        mincho: ["Shippori Mincho B1", "serif"],
      },
    },
  },
  plugins: [],
};
