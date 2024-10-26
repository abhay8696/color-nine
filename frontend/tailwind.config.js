/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};

//npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
