const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'heart.min.js'
  },
  plugins:[new webpack.ProvidePlugin({
    Sizzle: 'sizzle'
  }), new UglifyJsPlugin()
],
 watch:true,
 watchOptions: {
  aggregateTimeout: 300,
  poll: 1000,
  ignored: /node_modules/
},
  module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
       }
};
