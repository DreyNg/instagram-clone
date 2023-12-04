module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "ig-blue": "#0894f4",
                "ig-grey": "#acacac",
                "ig-grey-bg": "#282424",
                "ig-heart": "#ff3040",
            },
        },
    },
    plugins: [],
};
