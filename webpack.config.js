const path = require('path');
const {TsconfigPathsPlugin} = require("tsconfig-paths-webpack-plugin");

module.exports = {
    entry: './src/index.ts',
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
        plugins: [new TsconfigPathsPlugin()]
    },
    output: {
        filename: 'EchoBattleSystem.temp.js',
        path: path.resolve(__dirname, 'dist'),
    },
};