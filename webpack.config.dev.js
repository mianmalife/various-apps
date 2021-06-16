const path = require('path')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
const setMpa = require('./setMpa.js')
const { entry, htmlWebpackPlugins } = setMpa()
const smp = new SpeedMeasurePlugin()
module.exports = smp.wrap({
    mode: 'development',
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][hash:12].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.less', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src/assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'thread-loader', 'less-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name][hash:6].[ext]',
                        outputPath: 'image',
                        publicPath: "../image"
                    }
                }]
            },
            {
                test: /\.m?(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader?cacheDirectory=true',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ['@babel/plugin-transform-runtime']
                        }
                    }]
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true
    },
    plugins: [
        new WebpackBar(),
        ...htmlWebpackPlugins,
        new MiniCssExtractPlugin({
            filename: '[name]/[name]-[hash:12].css'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})