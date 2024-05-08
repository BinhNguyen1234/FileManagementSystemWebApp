// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const mergeResolver = require("webpack-merge")
const configCommon = require("./webpack.config.common.cjs")
const configDevelopment = {
    mode: "development"
};

const config = mergeResolver.merge(configCommon,configDevelopment);
module.exports = config;