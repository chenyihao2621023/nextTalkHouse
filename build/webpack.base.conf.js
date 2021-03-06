const path = require('path');
const utils = require('./utils');
const config = require('../config');
const pages = require('../config/pages');
const autoprefixer = require('autoprefixer');

const entry = {};
pages.forEach((page) => {
    entry[page.entry.key] = page.entry.file;
});

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}


module.exports = {
    entry: {
        app: ["babel-polyfill",'./src/main.js']
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': resolve('src'),
        },
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                enforce: 'post',
                loader: 'es3ify-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('utils')],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 100,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]'),
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 100,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
                },
            },
        ],
    },
};
