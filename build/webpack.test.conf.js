var
  config = require('../config'),
  webpack = require('webpack'),
  cssUtils = require('./css-utils'),
  merge = require('webpack-merge'),
  baseWebpackConfig = require('./webpack.base.conf'),
  commons = require('./commons')

baseWebpackConfig.entry = undefined
baseWebpackConfig.output = undefined

module.exports = merge(baseWebpackConfig, {
  target: 'web',
  devtool: '#inline-source-map',
  entry: {
    test: commons.resolve('config/karma/index.js')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [commons.resolve('src/test')],
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
