var webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractCSS = new ExtractTextPlugin('/[name]-css.css');
var extractLESS = new ExtractTextPlugin('/[name]-less.css');
var extractSCSS = new ExtractTextPlugin('/[name]-scss.css');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: './assets/',
        plublicPath: './static/',
        filename: '[name].js',
        chunkFilename: 'chunk[id].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: extractCSS.extract(['css', 'postcss'])
            }, {
                test: /\.less$/,
                loader: extractLESS.extract(['css', 'less', 'postcss'])
            }, {
                test: /\.scss$/,
                loader: extractSCSS.extract(['css', 'sass', 'postcss'])
            }

        ]
    },
    plugins: [
        extractCSS,
        extractLESS,
        extractSCSS
    ]
};