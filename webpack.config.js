//const path = require('path');

const config = {
  entry: './app/assets/frontend/main.jsx',
  output: {
    path: __dirname + '/app/assets/javascripts',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.jsx$/, loader: 'babel-loader' }
    ]
  }
};

module.exports = config;