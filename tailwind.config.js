/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                PRIMARY_COLOR: "#0096f5",
                SUBMENU_COLOR: "#F5F5F5",
                FOOTER_COLOR: "#22272D",
                FOOTER_FONT_COLOR: "#9EA1A5",
                PRIMARY_FONT_COLOR: "#121212",
            },

        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            desktop: "1820px",
        },

    },
    plugins: [],
};
