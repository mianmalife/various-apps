const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = merge(common, {
    mode: 'production',
    performance: {
        hints: false
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]/[name]-[hash:12].css'
        }),
        new OptimizeCssAssetsPlugin()
    ]
})