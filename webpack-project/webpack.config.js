var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'faker', 'lodash', 'react', 'redux', 'react-redux', 'react-dom',
  'react-input-range', 'redux-form', 'redux-thunk'
]

module.exports = {
  entry: {
    bundle: './src/index.js', // creates bundle.js
    vendor: VENDOR_LIBS // creates vendor.js
  },
  output: {
    path: path.join(__dirname, 'dist'),
    /* - name gets replaced with entry point file name
       - chunkhash gets created to produce different filenames, so that
         browsers replace their cached version with new version when bundle
         has changed */
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    /* CommonsChunkPlugin:
       - Goes through all output files and makes sure
         that vendor modules that are in more than one bundle only get
         included in vendor bundle */
    new webpack.optimize.CommonsChunkPlugin({
      /* manifest file is necessary to keep track of the effects of output bundles
         to actual changes to vendor bundle due to chunkhash addition */
      names: ['vendor', 'manifest']
    }),
    /* HtmlWebpackPlugin:
       - Will add generated files into HTML document automatically
       - It creates new index.html file or uses the file specified via template */
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // - Define window scope variables with DefinePlugin
    // - process.env.NODE_ENV:
    //   * React and other modules check if production mode is set
    //   * Add NODE_ENV=production to build script in package.json
    new webpack.DefinePlugin({
      'process.env.NODE_NEV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
