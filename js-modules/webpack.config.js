const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/ // specify the files that this rule is applied to
      },
      {
        /* plugins are different from loaders
           - loaders are used to preprocess files before they are included in bundle.js
           - plugins work outside the webpack pipeline and make files not end up in bundle.js */
        loader: ExtractTextPlugin.extract({ // loader is used as webpack 1 relict
          loader: 'css-loader'
        }),
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')   // output from ExtractTextPlugin gets grabbed and put into style.css
  ]
};

module.exports = config;
