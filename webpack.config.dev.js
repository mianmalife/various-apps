const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        overlay: {
            // 把编译的错误显示在浏览器上
            errors: true,
            warnings: true
        },
        hot: true
    }
})
