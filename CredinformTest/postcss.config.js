const sortingConfig = require('./postcss-sorting.config.js');

module.exports = {
	plugins: {
		'stylelint': {
			failAfterError: true
		},
		'precss': {},
		'postcss-import': {},
		'css-mqpacker': {},
		'postcss-normalize': {
			browsers: ['last 2 versions']
		},
		'postcss-sorting': {
			"properties-order": sortingConfig
		},
		'autoprefixer': {
			browsers: ['last 2 versions', '> 5%']
		},
		'cssnano': {},
		'postcss-cssnext': {
			features: {
				autoprefixer: false
			}
		}
	}
};