/* eslint-disable no-unused-vars */
const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const base = require('./base');

module.exports = merge(base, {
	mode: 'production',
	devtool: false,
	output: {
		filename: 'bundle.min.js',
	},
	performance: {
		maxEntrypointSize: 900000,
		maxAssetSize: 900000,
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					output: {
						comments: false,
					},
				},
			}),
		],
	},
});
