const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		home: './Content/Service/Home/home.js',
		additional: './Content/Service/Additional/additional.js'
	},
	output: {
		path: path.resolve(__dirname, 'Scripts'),
		filename: 'home.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: 'css-loader'
			}
		]
	}
	//plugins: [
	//	new webpack.optimize.UglifyJsPlugin()
	//]
}


///// <binding ProjectOpened='Run - Production' />

//'use strict';
//const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin');


//const
//		path = require('path'),
//		webpack = require('webpack'),
//		BrowserSync = require('browser-sync-webpack-plugin'),
//		merge = require('webpack-merge'),
//		PostCss = require('postcss-loader'),
//		SvgSpritePlugin = require('webpack-svg-sprite-plugin'),
//		//ImageminPlugin = require('imagemin-webpack-plugin'),
//		ImageLoader = require('image-webpack-loader'),
//		CopyWebpackPlugin = require('copy-webpack-plugin'),
//		SpritesmithPlugin = require('webpack-spritesmith'),
//		ExtractTextPlugin = require('extract-text-webpack-plugin'),
//		environment = process.env.NODE_ENV,
//		HtmlWebpackPlugin = require('html-webpack-plugin'),
//		addresses = {
//				libraries: {
//						JS: [
//								'./common/libraries/forms/forms.js',
//								'./common/libraries/hints/hints.js',
//								'./common/libraries/lists/lists.js',
//								'./common/libraries/popups/popups.js',
//								'./common/libraries/utils/utils.js'
//						],
//						CSS: [
//								'./common/libraries/forms/forms.css',
//								'./common/libraries/hints/hints.css',
//								'./common/libraries/lists/lists.css',
//								'./common/libraries/popups/popups.css'
//						]
//				},
//				header: {
//						JS: './common/header/header.js',
//						CSS: './common/header/header.css'
//				},
//				home: {
//						JS: './home/home.js',
//						CSS: './home/home.css'
//				},
//				additional: {
//					JS: './additional/additional.js',
//					CSS: './additional/additional.css'
//				}
//		};

//let pathsToClean = [
//	path.resolve(__dirname, 'Images/*.*'),
//	path.resolve(__dirname, 'Scripts/*.*'),
//	path.resolve(__dirname, 'Styles/*.*')
//]


//switch (environment) {
//		case 'production':
//				module.exports = () => {
//						return main;
//				};
//				break;
//		case 'development':
//				module.exports = () => {
//						return Object.assign(
//								{},
//								main
//						);
//				};
//				break;
//		default:
//				break;
//}

//const main = {
//		devtool: 'source-map',
//		context: path.resolve(__dirname, 'Content/Service'),
//		entry: {
//			home: ['whatwg-fetch','babel-polyfill', addresses.home.JS],
//			additional: ['whatwg-fetch', 'babel-polyfill', addresses.additional.JS]
//		},
//		output: {
//				path: path.resolve(__dirname, ''),
//				filename: 'Scripts/[name].js',
//				publicPath: '/static/'
//		},
//		plugins: [
//			new BrowserSync({
//				host: '192.168.1.177',
//				port: 8082,
//				proxy: 'http://192.168.1.177:8082/',
//				files: [path.resolve(__dirname, 'Views/Home/Index.cshtml')]
//			}),
//			new ExtractTextPlugin({
//				filename: (getPath) => {
//					return getPath('Styles/[name].css');
//				},
//				allChunks: true
//			}),
//			new CopyWebpackPlugin([
//				{
//					from: '/Content/img/jpg/*.jpg',
//					to: '/Images/jpg/*.jpg',
//					toType: 'dir'
//				}

//			]),
//			new SpritesmithPlugin({
//				src: {
//					cwd: path.resolve(__dirname, 'Content/img/png'),
//					glob: '**/*.png'
//				},
//				target: {
//					image: path.resolve(__dirname, 'Images/png/sprite.png'),
//					css: path.resolve(__dirname, 'Images/png/sprite.css')
//				},
//				apiOptions: {
//					cssImageRef: "~sprite.png"
//				}
//			}),
//			new CleanWebpackPlugin(pathsToClean),
//			new webpack.optimize.OccurrenceOrderPlugin(),
//			new webpack.DefinePlugin({
//				'process.env': {
//					'NODE_ENV': JSON.stringify('production')
//				}
//			}),
//			new webpack.optimize.UglifyJsPlugin({
//				compressor: {
//					warnings: false
//				}
//			})
//		],
//		module: {
//			rules: [
//				{
//					test: /\.js$/,
//					exclude: /(node_modules|bower_components)/,
//					use: {
//						loader: 'babel-loader',
//						options: {
//							presets: ['react', 'env'],
//							plugins: [require('babel-plugin-transform-object-rest-spread')]
//						}
//					}
//				},
//				{
//					test: /\.(htm|html|cshtml)$/,
//					loader: "htmllint-loader",
//					include: path.resolve(__dirname, 'Views'),
//					query: {
//						config: path.resolve(__dirname, '.htmllintrc'),
//						failOnError: false,
//						failOnWarning: false
//					}
//				},
//				{
//						test: /\.css$/,
//						use: ExtractTextPlugin.extract(
//								{
//										fallback: 'style-loader',
//										use: [{
//												loader: 'css-loader',
//												options: {
//													importLoaders: true
//												}
//										},
//												'postcss-loader']
//								}
//						)
//				},
//				{
//						test: /\.(gif|png|jpe?g|svg)$/i,
//						loaders: [
//								'file-loader',
//								{
//										loader: 'image-webpack-loader',
//										query: {
//												progressive: true,
//												optimizationLevel: 3,
//												pngquant: {
//														quality: '65-90',
//														speed: 4
//												}
//										}

//								}
//						]

//				},
//				{
//						test: /\.png$/, loaders: [
//								'file-loader?name=i/[hash].[ext]'
//						]
//				},
//				{
//					test: /\.svg$/,
//					loader: 'svg-sprite-loader',
//					include: path.resolve(__dirname, 'Content/img/svg'),
//					options: {
//						extract: true,
//						spriteFilename: 'sprite.svg'
//					}
//				}
//			]
//		},
//		watch: true,
//		watchOptions: {
//				aggregateTimeout: 300
//		}
//};