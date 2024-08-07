const path = require('path');
const rules = require('./webpack.rules');

module.exports = {
  entry: './src/renderer.js',
  output: {
    filename: 'renderer.bundle.js',
    path: path.resolve(__dirname, '.webpack/renderer'),
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: 'electron-renderer',
  mode: 'development', // or 'production'
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
