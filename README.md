# using webpack bundle css width postcss & autoprefixer

----

# official sites

+   [webpack](https://github.com/webpack/webpack)
+   [less-loader](https://github.com/webpack/less-loader)
+   [sass-loader](https://github.com/jtangelder/sass-loader)
+   [postcss-loader](https://github.com/postcss/postcss-loader)
+   [browserslist](https://github.com/ai/browserslist)
+   [extract-text-webpack-plugin#webpack-1](https://github.com/webpack/extract-text-webpack-plugin/blob/webpack-1/README.md)

# readings

+   [diamont1001__webpack-summary](https://diamont1001.github.io/webpack-summary/)


# webpack config

使用`postcss-loader`&&`autoprefixer`

```js
var webpack = require('webpack'),
    autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: './assets/',
        plublicPath: './static/',
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            }, {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            }

        ]
    }
};
```

使用`postcss-loader`&&`autoprefixer`，然后搭配`extract-text-webpack-plugin`

```js
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
                // loader: 'style-loader!css-loader!postcss-loader'
                loader: extractCSS.extract(['css', 'postcss'])
            }, {
                test: /\.less$/,
                // loader: 'style-loader!css-loader!postcss-loader!less-loader'
                loader: extractLESS.extract(['css', 'less', 'postcss'])
            }, {
                test: /\.scss$/,
                // loader: 'style-loader!css-loader!postcss-loader!sass-loader'
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
```
