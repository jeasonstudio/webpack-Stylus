const path = require("path");

const option = {
	webpack: require(path.join(__dirname, 'node_modules', 'webpack')),
}

const commonsPlugin = new option.webpack.ProvidePlugin({
	$: "jquery",
	jQuery: "jquery",
	"window.jQuery": "jquery"
});

module.exports = {

	plugins: [commonsPlugin],
	entry: './src/js/main.js',
	output: {
		path: __dirname,
		filename: './dist/js/main.js'
	},
	devtool: 'eval-source-map',
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