var webpack = require('webpack');
var path = require("path");
// var css = require('!raw!stylus!./file.styl'); // Just the CSS 
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');


module.exports = {

	// plugins: [commonsPlugin],
	entry: './src/js/main.js',
	output: {
		path: __dirname,
		filename: './dist/js/main.js' //打包后的名字
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}, {
			test: /\.png$/,
			loader: "url-loader?limit=100000"
		}, {
			test: /\.jpg$/,
			loader: "file-loader"
		}, {
			test: path.join(__dirname, 'es6'),
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}, {
			test: /\.styl$/,
			loader: 'style-loader!css-loader!stylus-loader'
		}]
	}
};