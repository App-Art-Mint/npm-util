import merge from 'webpack-merge';
import config from './webpack.config';

const devConfig = merge(config, {
    mode: 'development',
    output: {
        filename: 'js/[lc-name].js',
        chunkFilename: 'js/[lc-name].[chunkhash].chunk.js'
    }
});

export default devConfig;