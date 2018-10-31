module.exports = {
  output: {
    filename: "assets/scripts/[name].js",
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    // host: '0.0.0.0'
  }
}