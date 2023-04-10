/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        fontFamily: {
            roboto: ["Roboto"],
        },
        extend: {
            colors: {
                "dark-0": "#121212",
                "dark-1": "#181818",
                "dark-2": "#212121",
                "dark-3": "#282828",
                "dark-4": "#303030",
                "overlay-0": "#ffffff14",
                "label-hover": "#3e3e3e",
            },
        },
    },
    plugins: [],
};
