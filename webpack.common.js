const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: ['@babel/polyfill', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][hash:12].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.less', '.scss', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [process.env.NODE_ENV === 'development' ? 'style-loader' : {
          loader: MiniCssExtractPlugin.loader
        }, 'css-loader', 'postcss-loader', 'cache-loader', 'thread-loader', {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          process.env.NODE_ENV === 'development' ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader
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
        test: /\.(png|jpe?g|gif)$/i,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name][hash:6].[ext]',
            outputPath: 'image'
          }
        }]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true,
            },
          },
          {
            loader: 'file-loader',
            options: {
              name: '[name][hash:6].[ext]',
              outputPath: 'image'
            }
          }
        ],
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
      },
      {
        test: /\.m?(ts|tsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader?cacheDirectory=true',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }]
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
    new WebpackBar(),
    new CleanWebpackPlugin()
  ]
}
