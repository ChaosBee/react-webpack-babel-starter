const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpakck = require('webpack')
const path = require('path')
const resolve = function resolve(rel) {
    return path.resolve(__dirname, rel)
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: 'css-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src'), resolve('test')],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}