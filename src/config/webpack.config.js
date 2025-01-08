/**
 * Imports
 */

// Node
import path from 'path';


/**
 * Constants
 */
const isProduction = process.env.NODE_ENV?.toLowerCase() === 'production';


/**
 * Webpack Configuration
 */
export const mintWebpackConfig = {
	mode: isProduction ? 'production' : 'development',
	devtool: 'source-map',
	entry: {
		index: './src/ts/index.ts'
	},
	experiments: {
		outputModule: true
	},
	output: {
		filename: isProduction ? 'js/[name].min.js' : 'js/[name].js',
		chunkFilename: isProduction ? 'js/[name].[chunkhash].min.js' : 'js/[name].[chunkhash].js',
		path: path.resolve('dist'),
		library: {
			type: 'module'
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/i,
				exclude: '/node_modules/',
				use: ['ts-loader']
			}
		]
	},
	resolve: {
		extensions: ['.ts', '...']
	}
};
export default mintWebpackConfig;
