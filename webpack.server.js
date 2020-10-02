const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.resolve(__dirname, '/server.js'),
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve('ssr'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}
