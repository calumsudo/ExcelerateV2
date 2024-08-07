const path = require('path');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: require('./webpack.rules'),
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '.webpack/main'),
  },
  target: 'electron-main',
  mode: 'development', // or 'production'
};
