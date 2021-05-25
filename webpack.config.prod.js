const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: ['@babel/polyfill', './src/index.js'],
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
        new OptimizeCssAssetsPlugin({
            // assetNameRegExp: /\.optimize\.css$/g,
            // cssProcessor: require('cssnano'),
            // cssProcessorPluginOptions: {
            //     preset: ['default', { discardComments: { removeAll: true } }],
            // },
            // canPrint: true
        }),
        new CleanWebpackPlugin()
    ]
}