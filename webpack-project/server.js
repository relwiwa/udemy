const express = require('express');
const path = require('path');

const app = express();

// Place routes here

/*  proper call on command line:
    set "NODE_ENV=production" && node server.js */
if (process.env.NODE_ENV !== 'production') {
  const webpackMIddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackMIddleware(webpack(webpackConfig)));
}
else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(process.env.PORT || 3050, () => console.log('Listening'));
