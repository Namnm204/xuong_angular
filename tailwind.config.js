/** @type {import('tailwindcss').Config} */
export default {
    content: ['./*.html'],
    theme: {
        extend: {
            colors: {
                primary: '#17AF26',
                secondary: '#05422C',
                yelloww: '#FFFF00',
                'newtral-400': '#F4F4F4',
            },
            backgroundSize: {
                '50%': '50%',
            },
            spacing: {
                '8px': '8px',
                '20px': '20px',
                '12px': '12px',
                '48px': '48px',
                '197.33px': '197.33px',
            },
            borderRadius: {
                full: '100px',
            },
        },
    },
    plugins: [],
};
