import merge from 'webpack-merge';
import config from './webpack.config';

const devConfig = merge(config, {
    mode: 'development',
    output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[chunkhash].chunk.js'
    }
});

export default devConfig;