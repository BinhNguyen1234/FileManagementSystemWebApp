// Generated using webpack-cli https://github.com/webpack/webpack-cli
const TerserPlugin = require("terser-webpack-plugin")
const mergeResolver = require("webpack-merge")
const configCommon = require("./webpack.config.common.cjs")
const configDevelopment = {
    mode: "production",
    devtool: false,
    optimization: {
        nodeEnv: 'production',
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        dead_code: true,
                        drop_console: true,
                        drop_debugger: true
                    }
                }
            })
        ]
    },
};

const config = mergeResolver.merge(configCommon,configDevelopment);
module.exports = config;