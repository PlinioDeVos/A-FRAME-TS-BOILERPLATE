const path = require('path');
const main_dir = 'docs';

module.exports = {
    mode: 'development',
    entry: `./${main_dir}/main.ts`,
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, `${main_dir}/scripts`),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, main_dir),
        },
        compress: true,
        port: 'auto',
    },
};