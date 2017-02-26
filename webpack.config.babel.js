import path from 'path';
import webpack from 'webpack';

export default {
	entry: './src/index.js',
	output: {
		path: path.resolve('./dist'),
		filename: 'index.js'
	},
	resolve: {
		extensions: ['.js', '.scss', '.css', '.json']
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader', options: {
							includePaths: ['./node_modules']
						}
					}
				]
			},
		]
	}
};