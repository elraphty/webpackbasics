const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {test: /\.css$/, use: ["style-loader", "css-loader"]}
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};