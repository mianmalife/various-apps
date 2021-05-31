const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const setMpa = require('./setMpa.js')
const { entry, htmlWebpackPlugins } = setMpa()
module.exports = {
    mode: 'production',
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]/[name][hash:6].js'
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
    plugins: [...htmlWebpackPlugins,
    new MiniCssExtractPlugin({
        filename: '[name]/[name]-[hash:6].css'
    }),
    new OptimizeCssAssetsPlugin(),
    new CleanWebpackPlugin()
    ]
}