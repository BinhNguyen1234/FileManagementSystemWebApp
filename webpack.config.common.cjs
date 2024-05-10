
// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin'); // auto sync tsconfig to webpackconfig 
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
                use: ["babel-loader", "ts-loader"]
                
            }
        ],
    },
    resolve:{
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        plugins: [new TsconfigPathsPlugin()]
    }
};

module.exports = configCommon

