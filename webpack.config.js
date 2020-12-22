const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        detail: './src/detail.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'image'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            template: 'src/index.html',
            inject: true,
            chunks: ['detail', 'main'],
            // chunksSortMode: 'manual',
        }),
        new HtmlWebpackPlugin({
            title: '详情',
            filename: 'detail.html',
            template: 'src/detail.html',
            inject: true,
            chunks: ['detail']
        })
    ]
}