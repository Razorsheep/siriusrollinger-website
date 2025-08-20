/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.{js,ts,jsx,tsx,blade.php}',
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['Arvo', 'serif'],
        'headings': ['Arvo', 'serif'],
        'content': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
