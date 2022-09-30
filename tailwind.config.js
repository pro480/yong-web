/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PRIMARY_COLOR: "#0096f5",
        SUBMENU_COLOR: "#F5F5F5",
        FOOTER_COLOR: "#22272D",
        SUBFONT_COLOR: "#9EA1A5",
      },
    },
  },
  plugins: [],
};
