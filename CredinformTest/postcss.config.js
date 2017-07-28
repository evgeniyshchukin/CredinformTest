module.exports = {
	plugins: {
		'postcss-import': {},
		'precss': {},
		'postcss-cssnext': {
			browsers: ['last 2 versions', '> 5%'],
		},
		'autoprefixer': {
			browsers: ['last 2 versions', '> 5%'],
		},
		 'cssnano': {},
	 },
};