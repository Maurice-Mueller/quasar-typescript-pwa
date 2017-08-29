var
  path = require('path'),
  config = require('../config'),
  webpack = require('webpack'),
  cssUtils = require('./css-utils'),
  merge = require('webpack-merge'),
  baseWebpackConfig = require('./webpack.base.conf')

baseWebpackConfig.entry = undefined

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseWebpackConfig, {
  target: 'web',
  devtool: 'inline-source-map',
  entry: {
    test: resolve('config/karma/index.js')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [resolve('src/test')],
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  },
  plugins: [
  ],
  node: {
    fs: 'empty'
  }

})
