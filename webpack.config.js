'use strict';
const webpack = require('webpack');
const path = require('path');

const config = {
    context: path.resolve(__dirname, 'js'),
    entry: ['whatwg-fetch', './main.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'js'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', { modules: false }]
                    ]
                }
            }]
        }]
    }
};

module.exports = config;