import path from 'path';
import webpack from 'webpack';

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
    entry: {
        main: './src/main.ts',
    },
    output: {
        filename: 'js/[name].min.js',
        chunkFilename: 'js/[name].[chunkhash].chunk.min.js',
        path: path.resolve(__dirname, './dist'),
        library: {
            name: 'sunUtil',
            type: 'var',
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
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    }
}

export default config;