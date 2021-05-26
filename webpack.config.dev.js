const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        test1: './src/page/test1/index.js',
        test2: './src/page/test2/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name][hash:6].js'
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
                    name: '[name][hash:6].[ext]',
                    outputPath: 'image'
                }
            },
            {
                test: /\.m?(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            template: 'public/index.html',
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