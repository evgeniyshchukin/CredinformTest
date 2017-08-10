module.exports = {
    plugins: {
                'stylelint': {
                    failAfterError: true
                },      
                'postcss-import': {},
                'postcss-simple-vars': {},	
                'css-mqpacker': {},
                postcss-data - packer
                'postcss-cssnext': {
                    browsers: ['last 2 versions', '> 5%']
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
                'postcss-normalize': {
                    browsers: ['last 2 versions']
                },
				'precss': {}
		}
};