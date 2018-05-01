// 一个常见的`webpack`配置文件
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: __dirname+"/src/app.js",
    output: {
        path: __dirname+"/dist/",
        filename: "bundle-[hash].js"
    },
    devtool: 'none',
    devServer: {
        contentBase: __dirname+"/dist", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            }
        ]
},
    plugins: [
        new HtmlWebpackPlugin({
            template:__dirname+"/src/index.html"
        }),
        new ExtractTextPlugin("style.css")
    ]
};