const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js', // The entry point of your application, change this to the path of your main file.
  devServer: {
    open: true
  },
  
  output: {
    filename: 'bundle.js', // The name of the output bundle file.
    path: path.resolve(__dirname, 'dist'), // The destination folder for the bundled files.
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: 'src/index.html',
    })
  ]
};
