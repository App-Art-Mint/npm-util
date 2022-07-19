import path from 'path';
import webpack from 'webpack';
const LowerCaseNamePlugin = require('webpack-lowercase-name');

const babelConfig = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: 'defaults'
            }
        ]
    ]
};

const config: webpack.Configuration = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        Util: './src/ts/util.ts',
        Selectors: './src/ts/selectors.ts',
        Settings: './src/ts/settings.ts'
    },
    output: {
        filename: 'js/[lc-name].min.js',
        chunkFilename: 'js/[lc-name].[chunkhash].chunk.min.js',
        path: path.resolve(__dirname, './dist'),
        library: {
            name: 'sun[name]',
            type: 'umd',
            export: 'default'
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelConfig
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new LowerCaseNamePlugin()
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    }
}

export default config;