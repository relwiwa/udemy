var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: './build',
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js' // for lazy loading
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
