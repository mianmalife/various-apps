const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name][hash:6].js'
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        disable: true,
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
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            template: 'src/index.html',
            inject: true,
            chunks: ['main']
        }),
        new MiniCssExtractPlugin({
            filename: 'css/index-[hash:6].css'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}