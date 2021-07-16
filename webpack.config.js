const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: {
    main: './index.js',
    detail: './detail.js'
  },
  mode: 'development',
  output: {
    filename: '[name]_bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new CleanWebpackPlugin()]
}