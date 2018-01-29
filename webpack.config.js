const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './frontend/index'
    ],
    module: {
        rules: [
            { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/frontend/assets/icons/[name].[ext]"}
        ],
    },
    resolve: {
        extensions: ['.js', '.scss']
    },
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: './public',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
