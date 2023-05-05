/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=winter]'],
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=forest]'],
          primary: '#0099FF',
          secondary: '#00AAFF',
        },
      },
    ],
  },
  darkMode: ['class', '[data-theme="dark"]'], // https://github.com/saadeghi/daisyui/discussions/640#discussioncomment-4065361
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
