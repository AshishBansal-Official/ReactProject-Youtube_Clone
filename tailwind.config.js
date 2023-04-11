/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        fontFamily: {
            roboto: ["Roboto"],
        },
        extend: {
            colors: {
                "app-bg": "#0f0f0f",
                "dark-0": "#121212",
                "dark-1": "#181818",
                "dark-2": "#212121",
                "dark-3": "#282828",
                "dark-4": "#303030",
                "overlay-0": "#ffffff14", // 0.08
                "overlay-1": "#ffffff1a", // 0.1
                "overlay-2": "#ffffff33", // 0.2
                "text-primary": "#f1f1f1",
                "text-secondary": "#aaaaaa",
                "text-disabled": "#717171",
            },
        },
    },
    plugins: [],
};
