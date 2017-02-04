module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { cacheDirectory: true }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    port: 9000,
  }
};
