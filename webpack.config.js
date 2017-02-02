const path = require('path')

module.exports = {
  entry: './dev/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'webresources', 'js')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
