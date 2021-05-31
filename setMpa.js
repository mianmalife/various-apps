const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require("glob")
const setMpa = () => {
    const entry = {}
    const htmlWebpackPlugins = []
    const entries = glob.sync(path.resolve('./src/page/*/index.js'))
    entries.map(item => {
        const math = item.match(/src\/page\/(.*)\/index\.js$/)
        const entryName = math?.[1]
        entry[entryName] = ['@babel/polyfill', item]
        htmlWebpackPlugins.push(new HtmlWebpackPlugin({
            title: entryName,
            filename: `${entryName}/${entryName}.html`,
            template: path.join(__dirname, `src/page/${entryName}/index.html`),
            chunks: [entryName]
        }))
    })
    return { entry, htmlWebpackPlugins }
}
module.exports = setMpa