var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    context: __dirname + '/src',
    entry: {
      js: "./index.js",
    },
    output: {
      filename: "./dist/bundle.js",
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }]
    }
  },
  {
    context: __dirname + '/src/scss',
    entry: {
      style: "./style.scss",
    },
    output: {
      filename: "./dist/style.js",
    },
    module: {
      loaders: [{
        test: /\.scss/,
        loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader?minimize!sass-loader"})
      }]
    },
    plugins: [
      new ExtractTextPlugin(
        {
          filename: "./dist/style.css",
          disable: false,
          allChunks: true
        })
    ],
    devtool: 'source-map'
  }
];