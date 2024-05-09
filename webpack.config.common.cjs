/* eslint-disable no-undef */
// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const configCommon = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "public"),
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: "react",
            _: "lodash"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
            {
                test: /\.(?:js|jsx|tsx|ts)$/i,
                exclude: ['/node_modules/'],
                use: {
                    loader: "babel-loader"
                }
            }
        ],
    },
    resolve:{
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
};

module.exports = configCommon

