'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 9527 // dev port

module.exports = {
    publicPath: '/', //公共路径
    outputDir: 'dist', //输出文件夹
    assetsDir: 'static',  //静态资源文件夹
    lintOnSave: process.env.NODE_ENV === 'development', //是否在保存时执行lint
    productionSourceMap: false, //生产环境是否需要source map
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: `http://127.0.0.1:${port}`,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: '管理平台',
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    chainWebpack(config) {
        config.entry.app = ['@babel/polyfil', './src/main.js']
    }
}