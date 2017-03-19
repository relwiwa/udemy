const path = require('path');

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
        use: ['style-loader', 'css-loader'], // order is important and is applied FROM RIGHT TO LEFT
        test: /\.css$/
      }
    ]
  }
};

module.exports = config;
