const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const getPlugins = function () {
    var plugins = [];

    var noErrorsPlugin = new webpack.NoEmitOnErrorsPlugin();

    var clearDist = new CleanWebpackPlugin(['dist', 'distImage'], {
        root: __dirname,
        verbose: true,
        dry: false
    });

    var node_env = new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('development')
        }
    });

    plugins.push(node_env);
    plugins.push(clearDist);
    plugins.push(noErrorsPlugin);

    return plugins;
};

const webpackConfig = {
    entry: {
        app: [
            __dirname + '/client/src/scripts/app.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'public'),
        sourceMapFilename: "debugging/[file].map",
        // filename: '[name].js'
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: getPlugins(),
    externals: {
         jquery: 'jQuery',
         jquery: '$'
    },
    devtool: 'eval',
    // devtool: 'cheap-inline-module-source-map',
    // devtool: 'cheap-module-eval-source-map',
    // devtool: 'source-map',
    // devtool: 'cheap-eval-source-map',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: [/client/],
            loader: 'babel-loader',
            exclude: [/node_modules/]
        }, {
            test: /\.js$/,
            include: [/client/],
            exclude: [/node_modules/],
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader: 'file-loader'
        }],
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    watchOptions: {
        poll: true
    }
};

module.exports = webpackConfig;