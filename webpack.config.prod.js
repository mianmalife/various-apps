const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = merge(common, {
    mode: 'production',
    performance: {
        hints: false
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
    //                 name: 'vendor',
    //                 chunks: 'all',
    //             }
    //         }
    //     }
    // },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]/[name]-[hash:12].css'
        }),
        new OptimizeCssAssetsPlugin(),
        new AntdDayjsWebpackPlugin(),
        // new BundleAnalyzerPlugin()
    ]
})