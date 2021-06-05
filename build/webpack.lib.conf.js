/**
 * 代码千万行 注释第一行
 * 编码不规范 阅读两行泪
 *
 * @Author       : wenhao.huang
 * @Date         : 2020-06-08 14:58:33
 * @LastEditors  : wenhao.huang
 * @LastEditTime : 2020-06-08 15:13:42
 */

'use strict'

const path = require('path')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')

const prodWebpackConfig = require('./webpack.prod.conf')

const webpackConfig = merge(prodWebpackConfig,  {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './../lib')
  },
  externals: [nodeExternals()]
})

module.exports = webpackConfig
