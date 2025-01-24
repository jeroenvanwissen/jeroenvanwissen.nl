/** @type {import('tailwindcss').Config} */

const safelist = [];
const colors = ["primary", "secondary", "tertiary", "quaternary"];
const types = [
  "text",
  "bg",
  "border",
  "border-t",
  "border-r",
  "border-b",
  "border-l",
  "hover:bg",
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
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        xs: ["0.65rem", { lineHeight: "130%" }],
        sm: ["0.8rem", { lineHeight: "140%" }],
        md: ["1rem", { lineHeight: "130%" }],
        base: ["1rem", { lineHeight: "130%" }],
        lg: ["1.25rem", { lineHeight: "120%" }],
        xl: ["1.55rem", { lineHeight: "120%" }],
        "2xl": ["1.95rem", { lineHeight: "120%" }],
        "3xl": ["2.45rem", { lineHeight: "120%" }],
        "4xl": ["3.05rem", { lineHeight: "120%" }],
        "5xl": ["3.8rem", { lineHeight: "120%" }],
      },
      colors: {
        primary: {
          50: "hsl(from var(--color-primary-50) h s l / <alpha-value>)",
          100: "hsl(from var(--color-primary-100) h s l / <alpha-value>)",
          200: "hsl(from var(--color-primary-200) h s l / <alpha-value>)",
          300: "hsl(from var(--color-primary-300) h s l / <alpha-value>)",
          400: "hsl(from var(--color-primary-400) h s l / <alpha-value>)",
          500: "hsl(from var(--color-primary-500) h s l / <alpha-value>)",
          600: "hsl(from var(--color-primary-600) h s l / <alpha-value>)",
          700: "hsl(from var(--color-primary-700) h s l / <alpha-value>)",
          800: "hsl(from var(--color-primary-800) h s l / <alpha-value>)",
          900: "hsl(from var(--color-primary-900) h s l / <alpha-value>)",
          950: "hsl(from var(--color-primary-950) h s l / <alpha-value>)",
        },
        secondary: {
          50: "hsl(from var(--color-secondary-50) h s l / <alpha-value>)",
          100: "hsl(from var(--color-secondary-100) h s l / <alpha-value>)",
          200: "hsl(from var(--color-secondary-200) h s l / <alpha-value>)",
          300: "hsl(from var(--color-secondary-300) h s l / <alpha-value>)",
          400: "hsl(from var(--color-secondary-400) h s l / <alpha-value>)",
          500: "hsl(from var(--color-secondary-500) h s l / <alpha-value>)",
          600: "hsl(from var(--color-secondary-600) h s l / <alpha-value>)",
          700: "hsl(from var(--color-secondary-700) h s l / <alpha-value>)",
          800: "hsl(from var(--color-secondary-800) h s l / <alpha-value>)",
          900: "hsl(from var(--color-secondary-900) h s l / <alpha-value>)",
          950: "hsl(from var(--color-secondary-950) h s l / <alpha-value>)",
        },
        tertiary: {
          50: "hsl(from var(--color-tertiary-50) h s l / <alpha-value>)",
          100: "hsl(from var(--color-tertiary-100) h s l / <alpha-value>)",
          200: "hsl(from var(--color-tertiary-200) h s l / <alpha-value>)",
          300: "hsl(from var(--color-tertiary-300) h s l / <alpha-value>)",
          400: "hsl(from var(--color-tertiary-400) h s l / <alpha-value>)",
          500: "hsl(from var(--color-tertiary-500) h s l / <alpha-value>)",
          600: "hsl(from var(--color-tertiary-600) h s l / <alpha-value>)",
          700: "hsl(from var(--color-tertiary-700) h s l / <alpha-value>)",
          800: "hsl(from var(--color-tertiary-800) h s l / <alpha-value>)",
          900: "hsl(from var(--color-tertiary-900) h s l / <alpha-value>)",
          950: "hsl(from var(--color-tertiary-950) h s l / <alpha-value>)",
        },
        quaternary: {
          50: "hsl(from var(--color-quaternary-50) h s l / <alpha-value>)",
          100: "hsl(from var(--color-quaternary-100) h s l / <alpha-value>)",
          200: "hsl(from var(--color-quaternary-200) h s l / <alpha-value>)",
          300: "hsl(from var(--color-quaternary-300) h s l / <alpha-value>)",
          400: "hsl(from var(--color-quaternary-400) h s l / <alpha-value>)",
          500: "hsl(from var(--color-quaternary-500) h s l / <alpha-value>)",
          600: "hsl(from var(--color-quaternary-600) h s l / <alpha-value>)",
          700: "hsl(from var(--color-quaternary-700) h s l / <alpha-value>)",
          800: "hsl(from var(--color-quaternary-800) h s l / <alpha-value>)",
          900: "hsl(from var(--color-quaternary-900) h s l / <alpha-value>)",
          950: "hsl(from var(--color-quaternary-950) h s l / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
