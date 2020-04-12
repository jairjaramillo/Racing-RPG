'use strict';

const path = require('path');

module.exports = {
  entry: './src/index.js',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
    ]
  },
  resolve: {
  },
  devtool: 'source-map',
  plugins: [
  ]
};
