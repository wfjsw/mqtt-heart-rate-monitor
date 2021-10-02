const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: ['process']

        })
    ],
    resolve: {
        fallback: {
            'buffer': require.resolve('buffer'),
            'process': require.resolve('process/browser'),
        }
    }
};
