/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            aspectRatio: {
                '3/2': '3 / 2',
                '3/4': '3 / 4',
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
