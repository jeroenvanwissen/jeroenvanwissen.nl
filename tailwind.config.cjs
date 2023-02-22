/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'wissen-green': '#8CCA23',
				'wissen-blue': '#10A8E0',
				'wissen-purple': '#7539A1',
				'wissen-brown': '#A07500',
				'wissen-orange': '#F3A031'
			}
		},
	},
	plugins: [],
}
