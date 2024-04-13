/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
    require('tailwindcss'),
    require('autoprefixer')({
        preset: 'default',
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
    content: ['./src/**/*.{html,js,jsx,ts,tsx}', 'index.html'],
    theme: {
        extend: {},
    },
    
}

