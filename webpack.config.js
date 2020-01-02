const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {

    entry: './src/js/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    mode: 'development',
    plugins: [new MiniCssExtractPlugin(), new MomentLocalesPlugin()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    externals: {
        jquery: 'jQuery'
    }
};




