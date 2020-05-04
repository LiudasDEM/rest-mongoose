const dev = process.env.NODE_ENV !== 'production'
const path = require('path')
const nodeExternals = require('webpack-node-externals')


module.exports = {
	target: 'async-node',
	mode: dev ? 'development' : 'production',
	devtool: 'inline-source-map',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.ts'],
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'ts-loader',
			},
		],
	},
	externals: [
		nodeExternals(),
	],
}
