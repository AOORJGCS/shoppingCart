module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/mock': {
        target: 'http://locahost:8080'
      }
    }
  }
}