/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: ['winter', 'forest'],
    darkTheme: 'forest',
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
