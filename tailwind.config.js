/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                PRIMARY_COLOR: {
                    50: "#AADFFF",
                    100: "#88BFFF",
                    200: "#0092ff",
                    300: "#0083e6",
                    400: "#0075cd",
                    500: "#0066B3",
                    600: "#00579a",
                    700: "#004980",
                    800: "#003a67",
                },
                SUB_COLOR: {
                    200: "#eabf56",
                    300: "#e7b740",
                    400: "#e4ae29",
                    500: "#D9A21B",
                    600: "#c29118",
                    700: "#ac8015",
                    800: "#956f13",
                    900: "#603B00",
                },

                GRAY_COLOR: {
                    200: "#d0d4dd",
                    300: "#c2c6d2",
                    400: "#b3b9c8",
                    500: "#A4ABBD",
                    600: "#959db2",
                    700: "#8690a8",
                    800: "#78829d",
                    900: "#3B4251",
                },
            },
        },
        screens: {
            us: "1px",
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            desktop: "1820px",
        },
        aspectRatio: {
            "3/1": "3 / 1",
            "2/1": "2 / 1",
            "1/1": "1 / 1 ",
        },
        borderRadius: {
            none: "0",
            sm: "0.125rem",
            DEFAULT: "4px",
            md: "0.375rem",
            lg: "0.5rem",
            full: "9999px",
            large: "12px",
            "3xl": "40px",
        },
    },
    plugins: [
        require("tailwind-scrollbar-hide"),
        require("tailwind-scrollbar")({ nocompatible: true }),
    ],
};
