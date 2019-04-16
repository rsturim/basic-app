const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const path = require('path');
const DIST = 'dist';
const DIST_PATH = path.join(__dirname, DIST);

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].[hash:8].js',
        path: DIST_PATH,
        publicPath: '/',
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|tests|dist)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { babelrc: true },
                    },
                ],
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'index.html',
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['dist'],
        }),
        new WebpackNotifierPlugin(),
    ],
};
