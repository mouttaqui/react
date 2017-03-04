var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/dist');
var APP_DIR = path.resolve(__dirname, 'src/dev');

var config = {
    context: BUILD_DIR,
    entry: APP_DIR + '/main.jsx',
    output: {
        path: APP_DIR_DIR,
        filename: 'bundle.js'
    },

    resolve: {
        modulesDirectories: ['./node_modules', 'src/dev'],
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [{
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader',
                exclude: 'node_modules'
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            }

        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]

};
module.exports = config;