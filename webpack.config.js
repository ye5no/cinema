const webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname + '/public/js',
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }, {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: [/node_modules/]
      }, {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: [/node_modules/]
      }
    ]
  }
};
