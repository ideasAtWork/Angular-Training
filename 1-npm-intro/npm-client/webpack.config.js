var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env']
      }
    }]
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    contentBase: path.join(__dirname, "dist")
  },
};
