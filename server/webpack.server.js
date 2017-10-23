const merge = require('webpack-merge');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base.js');

const config = {
  // inform webpack that we're building a bundle for
  // Node.js, rather than for the browser
  target: 'node',

  // entry point for server application
  entry: './src/server.js',

  // where to put the generated output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  /*  prevents webpack from packing imported libraries into
      the bundle on the server */
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
