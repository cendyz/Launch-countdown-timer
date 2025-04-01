/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [],
	theme: {
		extend: {
			container: {
				center: true,
			},
			fontFamily: {
				sans: ['Red Hat Text', 'sans-serif'],
			},
			colors: {
				primary: {
					blue: 'hsl(237, 18%, 59%)',
					red: 'hsl(345, 95%, 68%)',
				},
				secondary: {
					red: 'hsl(0, 87%, 67%)',
				},
				neutral: {
					white: 'hsl(0, 0%, 100%)',
					blue: {
						100: 'hsl(236, 21%, 26%)',
						200: 'hsl(235, 16%, 14%)',
						300: 'hsl(234, 17%, 12%)',
					},
				},
			},
		},
		plugins: [],
	},
}
