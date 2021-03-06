const path = require('path');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.assetsPath = (_path) => {
    const assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory;

    return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = (options) => {
    options = options || {};

    const cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: process.env.NODE_ENV === 'production',
            sourceMap: options.sourceMap,
        },
    };

    function generateLoaders(loader, loaderOptions) {
        const loaders = [cssLoader];
        if (loader) {
            loaders.push({
                loader: 'postcss-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap,
                }),
            });
            loaders.push({
                loader: `${loader}-loader`,
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap,
                }),
            });
        }

        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: '',
            });
        }
        // console.log(['style-loader'].concat(loaders));
        return ['style-loader'].concat(loaders);
    }

    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus'),
    };
};

exports.styleLoaders = (options) => {
    const output = [];
    const loaders = exports.cssLoaders(options);
    for (const extension in loaders) {
        if (Object.hasOwnProperty.call(loaders, extension)) {
            const loader = loaders[extension];
            output.push({
                test: new RegExp(`\\.${extension}$`),
                use: loader,
            });
        }
    }
    // output.push({
    //   test: /\.styl$/,use: ['style-loader','css-loader?modules&localIdentName=[local]-[hash:base64:5]','stylus-loader']
    // })
    // console.log(output);
    return output;
};
