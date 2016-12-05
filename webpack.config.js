module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  },
  module: {
  	preloaders: [
  		{
  			test: /\.js$/,
  			exculde: /node_modules/,
  			loader: 'jshit-loader'
  		}
  	],
  	loaders: [
  		{
  			test: /\.css$/, loader: 'style!css',
  			exclude: /node_modules/
  		},
  		{
  			test: /\.es6$/,
  			exclude: /node_modules/,
       		loader: 'babel-loader',
  			query: {
  				presets: ['react', 'es2015']
  			}
  		}
  	]
  },
  resolve: {
  	extensions: ['','.js','.es6']
  },
  watch: true
}