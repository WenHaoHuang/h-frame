/**
 * 代码千万行 注释第一行
 * 编码不规范 阅读两行泪
 *
 * @Author       : wenhao.huang
 * @Date         : 2020-06-08 14:58:33
 * @LastEditors  : wenhao.huang
 * @LastEditTime : 2020-06-08 15:13:05
 */

'use strict'

const path = require('path')
const config = require('./webpack.config')

const isProd = process.env.NODE_ENV !== 'development'

exports.resolve = (dir) => path.join(__dirname, '..', dir)

exports.assetsPath = (dir) => {
  const assetsSubDirectory = isProd ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, dir)
}

exports.cssLoaders = (options) => {
  options = options || []

  const cssLoader = {
    loader: 'css-loader',
    options: { sourceMap: options.sourceMap },
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: { sourceMap: options.sourceMap },
  }

  const generateLoaders = (loader, loaderOptions) => {
    const loaders = []

    loaders.push('vue-style-loader')

    loaders.push(cssLoader)

    if (options.usePostCSS) {
      loaders.push(postcssLoader)
    }

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, { sourceMap: options.sourceMap }),
      })
    }

    return loaders
  }

  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus'),
  }
}

exports.styleLoaders = (options) => {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader,
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')
  return (severity, errors) => {
    if (severity !== 'error') return
    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()
    notifier.notify({
      title: 'Enquiry',
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'favicon.ico'),
    })
  }
}
