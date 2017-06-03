/* Configuration of lite-server that is using browserSync */

module.exports = {
  server: {
    baseDir: './build',
    middleWare: {
      1: require('connect-history-api-fallback')({ index: '/index.html' })
    }
  }
}