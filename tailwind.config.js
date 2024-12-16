import plugin from 'tailwindcss/plugin';

export const content = [
  "./src/**/*.{html,svelte,js,ts}",
];
export const theme = {
  extend: {
    animation: {
      gradientMove: "gradientMove 5s ease infinite",
    },
    keyframes: {
      gradientMove: {
        '0%': { 'background-position': '0% 50%' },
        '50%': { 'background-position': '100% 50%' },
        '100%': { 'background-position': '0% 50%' },
      },
    },
    fontFamily: {
      albert: ['Albert Sans', 'sans-serif'],
    },
  },
};
export const plugins = [plugin];
