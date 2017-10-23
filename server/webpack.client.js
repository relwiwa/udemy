const path = require('path');

module.exports = {
  // entry point for client application
  entry: './src/client/client.js',

  // where to put the generated (client) output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  // babel config is supposed to be the same for client and server
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] }}],
          ],
        },
      },
    ],
  },
};
