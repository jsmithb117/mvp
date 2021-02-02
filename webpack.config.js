var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.html$/, use: [{ loader: "html-loader" }] }
        ],

    },
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            filename: "./index.html"
        })
    ],
    devServer: {
        port: 9100
    }
}