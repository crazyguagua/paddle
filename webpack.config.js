// var path = require("path");
// module.exports = {
//     entry: {
//         app: './app/main.js'
//     },
//     devtool: 'inline-source-map',
//     devServer:{
//         contentBase:'./'
//     },
//     output: {
//         path: path.resolve(__dirname, "build"),
//         // publicPath: "/assets/",
//         filename: "bundle.js"
//     }
// }
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './app/main.js'
  },
  devServer:{
    contentBase:'./',
    port:3003
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: '我的游戏',
      template: './index.html',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  }
};