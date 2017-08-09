module.exports = {
		plugins: {
				'postcss-import': {},
				'precss': {},
				//'postcss-sass': {},
                'postcss-simple-vars': {},		
				'stylelint': {
					failAfterError: true
				},
				'postcss-cssnext': {
						browsers: ['last 2 versions', '> 5%']
				},
				'autoprefixer': {
						browsers: ['last 2 versions', '> 5%']
				},
		
				'css-mqpacker': {}
		
		}
};