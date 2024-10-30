/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            fontSize: {
                h1: ["3.1875rem", { lineHeight: "3.5rem" }], // 51px
                h2: ["2.25rem", { lineHeight: "2.5rem" }], // 36px
                h3: ["1.875rem", { lineHeight: "2.25rem" }], // 30px
                h4: ["1.5rem", { lineHeight: "2rem" }], // 24px
                h5: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
                h6: ["1rem", { lineHeight: "1.5rem" }], // 16px
            },
            boxShadow: {
                custom: "2px 2px 5px 0px rgba(0, 0, 0, 0.75)",
            },
            zIndex: {
                "-1": "-1",
                100: "100",
            },
            backgroundImage: {
                "primary-gradient":
                    "linear-gradient(180deg, #f95959 0%, #ff9a8e 100%)",
            },
        },
    },
    plugins: [],
};

//npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
