﻿'use strict';
const
    path = require('path'),
    webpack = require('webpack'),
    BrowserSync = require('browser-sync-webpack-plugin'),
    merge = require('webpack-merge'),
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
        }
        break;
    default:
        break;
}

const main = {
    context: path.resolve(__dirname, 'Content/blocks'),
    entry: {
        home: addresses.home.JS
    },
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'Scripts/[name].js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader', 
                        use: ['css-loader', 'postcss-loader']
                    }
                )
            }
        ]
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
        })
    ]
};

