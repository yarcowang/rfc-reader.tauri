/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            listStyleType: {
                square: 'square'
            }
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
}
