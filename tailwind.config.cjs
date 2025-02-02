/** @type {import('tailwindcss').Config} */

const safelist = [];
const colors = ['primary', 'secondary', 'tertiary', 'quaternary'];
const types = [
  'text',
  'bg',
  'border',
  'border-t',
  'border-r',
  'border-b',
  'border-l',
  'hover:bg',
];

for (const color of colors) {
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  shades.forEach((shade) => {
    for (let opacity = 0; opacity <= 100; opacity += 5) {
      types.forEach((type) => {
        safelist.push(`${type}-${color}-${shade}/${opacity}`);
      });
    }
    types.forEach((type) => {
      safelist.push(`${type}-${color}-${shade}`);
    });
  });
}

module.exports = {
  safelist,
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
