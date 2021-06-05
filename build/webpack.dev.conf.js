/**
 * 代码千万行 注释第一行
 * 编码不规范 阅读两行泪
 *
 * @Author       : wenhao.huang
 * @Date         : 2020-06-08 14:58:33
 * @LastEditors  : wenhao.huang
 * @LastEditTime : 2020-06-08 15:13:34
 */

'use strict'

process.env.NODE_ENV = 'development'

const utils = require('./utils')
const config = require('./webpack.config')
const baseWebpackConfig = require('./webpack.base.conf')
const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const chalk = require('chalk')
const portfinder = require('portfinder')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  entry: './preview/main.js',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      usePostCSS: true,
    }),
  },
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    contentBase: false,
    compress: true,
    host: config.dev.host,
    port: config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
    publicPath: config.dev.assetsPublicPath,
    quiet: true,
    watchOptions: {
      poll: config.dev.poll,
    },
    disableHostCheck: config.dev.disableHostCheck,
    proxy: {},
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './preview/tpl.html',
      inject: true,
    }),
  ],
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = config.dev.port
  console.log('> Starting dev server...')
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      devWebpackConfig.devServer.port = port
      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [
              chalk.gray('------------------------------------'),
              'Running: ' + chalk.magenta(`http://${devWebpackConfig.devServer.host}:${port}`),
              chalk.gray('------------------------------------'),
            ],
          },
          onErrors: utils.createNotifierCallback(),
        })
      )
      resolve(devWebpackConfig)
    }
  })
})
