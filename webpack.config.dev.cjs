// Generated using webpack-cli https://github.com/webpack/webpack-cli

const mergeResolver = require("webpack-merge")
const configCommon = require("./webpack.config.common.cjs")
const configDevelopment = {
    mode: "development",
    devtool: 'eval-source-map'
};

const config = mergeResolver.merge(configCommon,configDevelopment);
module.exports = config;