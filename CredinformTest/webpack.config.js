/// <binding ProjectOpened='Watch - Development, Run - Production, Run - Development' /> 

'use strict';
const
		path = require('path'),
		webpack = require('webpack'),
		BrowserSync = require('browser-sync-webpack-plugin'),
		merge = require('webpack-merge'),
		PostCss = require('postcss-loader'), 
		SvgSpritePlugin = require('webpack-svg-sprite-plugin'),
		ImageLoader = require('image-webpack-loader'),
		CopyWebpackPlugin = require('copy-webpack-plugin'),
		SpritesmithPlugin = require('webpack-spritesmith'),
		ExtractTextPlugin = require('extract-text-webpack-plugin'),
		environment = process.env.NODE_ENV,
		addresses = {
				libraries: {
						JS: [
								'./common/libraries/forms/forms.js',
								'./common/libraries/hints/hints.js',
								'./common/libraries/lists/lists.js',
								'./common/libraries/popups/popups.js',
								'./common/libraries/utils/utils.js'
						],
						CSS: [
								'./common/libraries/forms/forms.css',
								'./common/libraries/hints/hints.css',
								'./common/libraries/lists/lists.css',
								'./common/libraries/popups/popups.css'
						]
				},
				header: {
						JS: './common/header/header.js',
						CSS: './common/header/header.css'
				},
				home: {
						JS: './home/home.js',
						CSS: './home/home.css'
				}
		};



switch (environment) {
		case 'production':
				module.exports = () => {
						return main;
				};
				break;
		case 'development':
				module.exports = () => {
						return Object.assign(
								{},
								main
						);
				};
				break;
		default:
				break;
}

const main = {
		context: path.resolve(__dirname, 'Content/Service'),
		entry: {
            home: addresses.home.JS
		},
		output: {
				path: path.resolve(__dirname, ''),
                filename: 'Scripts/[name].js',
           
		},
		module: {
				rules: [
						{
								test: /\.css$/,
								use: ExtractTextPlugin.extract(
										{
												fallback: 'style-loader',
												use: [{
														loader: 'css-loader',
														options: { importLoaders: 1 }
												},
														'postcss-loader']
										}
								)
						},
				
						{
                            test: /\.(png|jpg|gif)$/i,
                            loaders: [
                                'file-loader?name =i/[hash].[ext]',
                                {
                                    loader: 'image-webpack-loader',
                                    query: {
                                        progressive: true,
                                        optimizationLevel: 3,                                    
                                        pngquant: {
                                            quality: '65-90',
                                            speed: 4
                                        },
                                        svgo: {},

                                    }
                                }
                            ]

                        }
                        
                                   

				]
		},
		watch: true,
		watchOptions: {
				aggregateTimeout: 300
		},

		plugins: [
				new BrowserSync({
						host: '192.168.1.177',
						port: 8082,
						proxy: 'http://192.168.1.177:8082/'
				}),
				new ExtractTextPlugin({
						filename: (getPath) => {
								return getPath('Styles/[name].css');
						},
						allChunks: true
				}),
	 
				new CopyWebpackPlugin([
                    {
                        from: path.resolve(__dirname, 'Content/img/jpg/*.jpg'),
                        to: path.resolve(__dirname, 'Images/jpg/[name].jpg'),
                      
                    },
                    {
                        from: path.resolve(__dirname, 'Content/img/png/*.png'),
                        to: path.resolve(__dirname, 'Images/png/[name].png'),
                     
                    }
						
				]),
				new SpritesmithPlugin({
						src: {
								cwd: path.resolve(__dirname, 'Content/img/png/sprite'),
								glob: '**/*.png'
						},
						target: {
								image: path.resolve(__dirname, 'Images/png/sprite/sprite.png'),
                                css: path.resolve(__dirname, 'Images/png/sprite/sprite.css')
						},
						apiOptions: {
								cssImageRef: "~sprite.png"
						}
				})
        ]

};