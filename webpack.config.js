const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
        // detail: './src/detail.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name][chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                    },
                }, 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'image'
                }
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'test'
                    }
                ]
            }
        ]
    },
    resolveLoader: {
        modules: ['node_modules', 'test-loaders']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            template: 'src/index.html',
            inject: true,
            chunks: ['main'],
            // chunksSortMode: 'manual',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/index-[contenthash].css'
        }),
        new CleanWebpackPlugin()
        // new HtmlWebpackPlugin({
        //     title: '详情',
        //     filename: 'detail.html',
        //     template: 'src/detail.html',
        //     inject: true,
        //     chunks: ['detail']
        // })
    ]
}