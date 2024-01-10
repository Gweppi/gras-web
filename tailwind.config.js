/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  plugins: [require("daisyui")],

  darkMode: 'class',

  daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#80ed99',
          'secondary': '#80ed99',
          'accent': '#80ed99'
        }
      }
    ]
  }
};