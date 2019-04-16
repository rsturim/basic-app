const common = require('./webpack.common.js');

const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,

    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css',
            chunkFilename: '[id].[hash:8].css',
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
        ],
    },
});
