var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
    entry: './src/app/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                // test: /\.js$/,
                test: path.join(__dirname, 'src/app'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin('dist', {}),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: './index.html'
        }),
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle if not production
    devtool: argv.mode === 'production' ? false : 'source-map',
    devServer: {
        contentBase: 'dist',
        watchContentBase: true,
        port: 3000
    }
});
