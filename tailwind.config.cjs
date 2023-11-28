/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				xs: ['0.65rem', { 'lineHeight': '130%' }],
				sm: ['0.8rem', { 'lineHeight': '140%' }],
				md: ['1rem', { 'lineHeight': '130%' }],
				base: ['1rem', { 'lineHeight': '130%' }],
				lg: ['1.25rem', { 'lineHeight': '120%' }],
				xl: ['1.55rem', { 'lineHeight': '120%' }],
				'2xl': ['1.95rem', { 'lineHeight': '120%' }],
				'3xl': ['2.45rem', { 'lineHeight': '120%' }],
				'4xl': ['3.05rem', { 'lineHeight': '120%' }],
				'5xl': ['3.8rem', { 'lineHeight': '120%' }],
			},
			colors: {
				primary: {
					50: '#F7FCEE',
					100: '#E2F4C2',
					200: '#B8E56B',
					300: '#B8E56B',
					400: '#A3DE40',
					500: '#8CCA23',
					600: '#6C9C1B',
					700: '#4E7114',
					800: '#30460C',
					900: '#121A05',
				},
				secondary: {
					50: '#F1FAFE',
					100: '#C1EBFB',
					200: '#92DCF7',
					300: '#62CDF4',
					400: '#32BDF0',
					500: '#10A8E0',
					600: '#0D84B0',
					700: '#096081',
					800: '#063D51',
					900: '#021921',
				},
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
