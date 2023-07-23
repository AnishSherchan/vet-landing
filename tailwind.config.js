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
        primary: "#007FFF",
        secondary: "#17224D",
        background: "#F5FAFA",
        text_primary: "#292929",
        text_secondary: "#515151",
      },
    },
  },
  plugins: [],
};
