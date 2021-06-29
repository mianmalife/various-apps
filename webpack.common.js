const path = require('path')
const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const setMpa = require('./setMpa.js')
const { entry, htmlWebpackPlugins } = setMpa()
module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]/[name][hash:12].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.less', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [process.env.NODE_ENV === 'development' ? 'style-loader' : {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 'css-loader', 'postcss-loader', 'cache-loader', 'thread-loader', 'less-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    process.env.NODE_ENV === 'development' ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    'cache-loader',
                    'thread-loader',
                    // 将 Sass 编译成 CSS
                    'sass-loader'
                ]
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
    plugins: [
        new WebpackBar(),
        ...htmlWebpackPlugins,
        new CleanWebpackPlugin()
    ]
}