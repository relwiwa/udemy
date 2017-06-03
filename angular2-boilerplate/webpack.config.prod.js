var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common');
var path = require('path');

/*  webpackMerge.smart doesn't overwrite complete content of a key, but
    just the respective key */
module.exports = webpackMerge.smart(commonConfig, {
  entry: {
    'app': './src/app/main.aot.ts'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js' // for lazy loading
  },  
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          // configure angular-router-loader to use aot-compilation
          'angular-router-loader?aot=true&genDir=build/src/app'          
        ]
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
    })
  ]
});
