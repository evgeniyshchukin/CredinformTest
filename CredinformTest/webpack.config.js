/// <binding ProjectOpened='Watch - Development, Run - Production, Run - Development' /> 

'use strict';
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const
		path = require('path'),
		webpack = require('webpack'),
		BrowserSync = require('browser-sync-webpack-plugin'),
		merge = require('webpack-merge'),
		PostCss = require('postcss-loader'),
		SvgSpritePlugin = require('webpack-svg-sprite-plugin'),
		//ImageminPlugin = require('imagemin-webpack-plugin'),
		ImageLoader = require('image-webpack-loader'),
		CopyWebpackPlugin = require('copy-webpack-plugin'),
		SpritesmithPlugin = require('webpack-spritesmith'),
		ExtractTextPlugin = require('extract-text-webpack-plugin'),
		environment = process.env.NODE_ENV,
		HtmlWebpackPlugin = require('html-webpack-plugin'),
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
				},
				additional: {
					JS: './additional/additional.js',
					CSS: './additional/additional.css'
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
			home: addresses.home.JS,
			additional: addresses.additional.JS
		},
		output: {
				path: path.resolve(__dirname, ''),
				filename: 'Scripts/[name].js',
				publicPath: ''
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
														options: {importLoaders: 1}
												},
														'postcss-loader']
										}
								)
						},
						{
								test: /\.(gif|png|jpe?g|svg)$/i,
								loaders: [
										'file-loader',
										{
												loader: 'image-webpack-loader',
												query: {
														progressive: true,           
														optimizationLevel: 3,
														pngquant: {
																quality: '65-90',
																speed: 4
														}
												}

										}
								]

						},
						{
								test: /\.png$/, loaders: [
										'file-loader?name=i/[hash].[ext]'
								]
						},
						{
							test: /\.svg$/,
							loader: 'svg-sprite-loader',
							include: path.resolve(__dirname, 'Content/img/svg'),
							options: {
								extract: true,
								spriteFilename: 'sprite.svg'
							}
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
								from: '/Content/img/jpg/*.jpg',
								to: '/Images/jpg/*.jpg',
								toType: 'dir'
						}
						
				]),
				new SpritesmithPlugin({
						src: {
								cwd: path.resolve(__dirname, 'Content/img/png'),
								glob: '**/*.png'
						},
						target: {
								image: path.resolve(__dirname, 'Images/png/sprite.png'),
								css: path.resolve(__dirname, 'Images/png/sprite.css')
						},
						apiOptions: {
								cssImageRef: "~sprite.png"
						}
				}),
				new HtmlWebpackPlugin({
					filename: 'Index.html',
					template: path.resolve(__dirname, 'Views/Home/Index.cshtml'),
					chunks: ['Home'],
					inject: false
				}),
				new HtmlWebpackPlugin({
					filename: 'Index.html',
					template: path.resolve(__dirname, 'Views/Additional/Index.cshtml'),
					chunks: ['Additional'],
					inject: false
				})
		]
};