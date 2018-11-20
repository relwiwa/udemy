module.exports = {
  entry: './scripts/app.ts',
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.ts$/,
        loader: 'ts-loader',
      },
    ],
  }
};
