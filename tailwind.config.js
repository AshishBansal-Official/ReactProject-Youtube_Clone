/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        fontFamily: {
            roboto: ["Roboto"],
        },
        extend: {
            screens: {
                "app-min-md": "1352px",
                "app-md": { max: "1352px" },
                "app-sm": { max: "824px" },
                "app-xs": { max: "656px" },
                "app-xxs": { max: "450px" },
            },
            colors: {
                "app-bg": "#0f0f0f",
                "app-blue": "#3EA6FF",
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
            gridTemplateColumns: {
                "video-1": "repeat(1,minmax(10rem,22.5rem))",
                "video-2": "repeat(2,minmax(10rem,22.5rem))",
                "video-3": "repeat(3,minmax(10rem,22.5rem))",
                "video-4": "repeat(4,minmax(10rem,22.5rem))",
                "video-5": "repeat(5,minmax(10rem,22.5rem))",
                "video-6": "repeat(6,minmax(10rem,22.5rem))",
            },
        },
    },
    plugins: [],
};
