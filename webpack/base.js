/* eslint-disable global-require */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const eslint = {
	test: /\.(js|jsx)$/i,
	enforce: 'pre',
	exclude: /node_modules/,
	use: 'eslint-loader',
};

const babel = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: { loader: 'babel-loader' },
};

const raw = {
	test: [/\.vert$/, /\.frag$/],
	use: 'raw-loader',
};

const file = {
	test: /\.(gif|png|jpe?g|svg|xml)$/i,
	use: 'file-loader',
};

const music = {
	test: /\.(mp3|wav|ogg)$/i,
	use: 'file-loader',
};

const scss = {
	test: /\.s[ac]ss$/i,
	use: [
		{ loader: 'style-loader' },
		{ loader: 'css-loader' },
		{ loader: 'sass-loader' },
		{ loader: 'postcss-loader', options: { plugins() { return [require('autoprefixer')]; } } },
	],
};

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	module: { rules: [eslint, babel, raw, file, music, scss] },
	plugins: [
		new CleanWebpackPlugin({
			root: path.resolve(__dirname, '../'),
		}),
		new webpack.DefinePlugin({
			CANVAS_RENDERER: JSON.stringify(true),
			WEBGL_RENDERER: JSON.stringify(true),
		}),
		new HtmlWebpackPlugin({
			template: './src/dom/index.html',
		}),
	],
};
