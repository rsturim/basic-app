const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const DIST = 'dist';
const DIST_PATH = path.join(__dirname, DIST);

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        stats: {
            colors: true,
        },
        host: 'localhost',
        hot: true,
        port: 3000,
        open: true,
        contentBase: DIST_PATH,
        historyApiFallback: true,
    },
    devtool: 'eval',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
});
