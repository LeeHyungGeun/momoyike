const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const path = require('path');
module.exports = {
    context: path.resolve(__dirname, '../app'),
    entry: ['./main'],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /.tsx?/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader',
                    'ts-loader'
                ]
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, '../node_modules')
        ],
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css'],
        alias: {

        }
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 200000,
        maxEntrypointSize: 400000,
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js') || assetFilename.endsWith('.ts');
        }
    },
    devtool: 'eval',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            minimize: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    profile: true,
    bail: true,
    cache: false,
    watch: true,
    watchOptions: {
        aggregateTimeout: 1000,
        poll: true,
        poll: 500
    },
    recordsPath: path.resolve(__dirname, '../records/records.json'),
    recordsInputPath: path.resolve(__dirname, '../records/records.json'),
    recordsOutputPath: path.resolve(__dirname, '../records/records.json')
};