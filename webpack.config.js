const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const path = require('path');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const PATHS = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
    assets: 'assets/'
};

PATHS.imgFolder = PATHS.assets + 'img';
PATHS.fontFolder = PATHS.assets + 'fonts';

module.exports = {
    entry: './src/fly.js',
    output: {
        filename: '[name].[contenthash].js',
        path: PATHS.dist,
        assetModuleFilename: `${PATHS.imgFolder}/[hash][ext][query]`
    },
    devServer: {
        contentBase: PATHS.dist,
        port: 3333,
        watchContentBase: true,
    },
    experiments: {
        asset: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${PATHS.src}/index.html`,
            inject: 'body',
            minify: {
                collapseWhitespace: isProd,
                removeComments: isProd
            },
            cache: true,
            favicon: `${PATHS.src}/fly.svg`,
            publicPath: '',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [{
                test: /\.less$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        },
                    },
                    'css-loader',
                    'less-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, "postcss.config.js"),
                            },
                        },
                    },
                ]
            },
            {
                test: /\.(s[ac]|c)ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        },
                    },
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, "postcss.config.js"),
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(js|ts|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true,
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: `${PATHS.imgFolder}/[name][ext]`
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: `${PATHS.fontFolder}/[name][ext]`
                }
            },
        ]
    },
    optimization: {
        minimize: isProd,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.css', '.less', '.scss', '.sass']
    }
}