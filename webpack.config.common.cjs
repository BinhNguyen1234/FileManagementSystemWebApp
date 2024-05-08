// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const configCommon = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = configCommon

