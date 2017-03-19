const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [

      // JAVASCRIPT TRANSPILING

      {
        use: 'babel-loader',
        test: /\.js$/ // specify the files that this rule is applied to
      },

      // CSS PROCESSING

      {
        /* plugins are different from loaders
           - loaders are used to preprocess files before they are included in bundle.js
           - plugins work outside the webpack pipeline and make files not end up in bundle.js */
        loader: ExtractTextPlugin.extract({ // loader is used as webpack 1 relict
          loader: 'css-loader'
        }),
        test: /\.css$/
      }, {

        // IMAGE PROCESSING

        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 } // images with size <= 40000 get added raw to bundle.js
          },
          'image-webpack-loader'
        ],
          test: /\.(jpe?g|png|gif|svg)$/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')   // output from ExtractTextPlugin gets grabbed and put into style.css
  ]
};

module.exports = config;
