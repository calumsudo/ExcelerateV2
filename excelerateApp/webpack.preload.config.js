const path = require('path');

module.exports = {
  entry: './src/preload.js',
  output: {
    filename: 'preload.js',
    path: path.resolve(__dirname, '.webpack/renderer/main_window'), // Ensure this matches where you want it to be
  },
  target: 'electron-preload',
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    extensions: ['.js'],
  },
  mode: 'development', // or 'production'
};
