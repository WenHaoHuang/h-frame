/**
 * 代码千万行 注释第一行
 * 编码不规范 阅读两行泪
 *
 * @Author       : wenhao.huang
 * @Date         : 2020-06-08 14:58:33
 * @LastEditors  : wenhao.huang
 * @LastEditTime : 2020-06-08 15:13:21
 */

'use strict'

const HOST = 'localhost'
const PORT = 8080

const config = {
  dev: {
    NODE_ENV: '"development"',
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    host: HOST,
    port: PORT,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true,
    useEslint: true,
    disableHostCheck: true,
  },
  build: {
    NODE_ENV: '"production"',
    productionSourceMap: false,
    assetsSubDirectory: '/',
    devtool: 'source-map',
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyZerReport: false,
  },
}

module.exports = config
