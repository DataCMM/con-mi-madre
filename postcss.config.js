const tailwindcss = require('tailwindcss');
module.exports = {
	plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
	fontFamily: {
		sans: ['Niramit', 'Sans-serif'],
	},
};
