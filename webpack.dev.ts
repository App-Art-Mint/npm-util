import webpack from 'webpack';

const dev: webpack.Configuration = {
    mode: 'development',
    output: {
        filename: 'js/[lc-name].js',
        chunkFilename: 'js/[lc-name].[chunkhash].chunk.js'
    }
};

export default dev;