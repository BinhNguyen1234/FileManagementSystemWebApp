// Generated using webpack-cli https://github.com/webpack/webpack-cli

const mergeResolver = require("webpack-merge")
const configCommon = require("./webpack.config.common.cjs")
const configDevelopment = {
    mode: "production"
};

const config = mergeResolver.merge(configCommon,configDevelopment);
module.exports = config;