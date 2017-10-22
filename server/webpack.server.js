const path = require('path');

module.exports = {
  // Inform webpack that we're building a bundle for
  // Node.js, rather than for the browser
  target: 'node',

  // entry point for server application
  entry: './src/index.js',

  // where to put the generated output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // tell webpack to run babel on every file it runs through
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
