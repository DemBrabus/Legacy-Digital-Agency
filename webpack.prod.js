//
// Webpack Production
//

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");


module.exports = {

    entry: './src/index.js',

    output: {
        filename: '[name].[hash:20].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            },
        ]
    },

    plugins: [

        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                }
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css'
        })
    ],

    optimization: {
        minimizer: [

            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                extractComments: true,
            }),

            new OptimizeCssAssetsPlugin({})
        ]
    }
    
}