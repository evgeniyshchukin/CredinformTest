const sortingConfig = require('./postcss-sorting.config.js');

module.exports = {
	plugins: {
		'stylelint': {
			failAfterError: true
		},
		'postcss-import': {},
		'postcss-simple-vars': {},
		'css-mqpacker': {},
		'postcss-normalize': {
			browsers: ['last 2 versions']
		},
		'postcss-cssnext': {
			browsers: ['last 2 versions', '> 5%']
		},
		'postcss-sorting': {
			"properties-order": sortingConfig
		},
		'cssnano': {
			"preset": [
				"default",
				{
					"discardComments": {
						"removeAll": true
					}
				}
			]
		},
		'precss': {},
	}
};