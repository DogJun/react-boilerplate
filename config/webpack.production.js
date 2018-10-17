const CleanWebpackPlugin = require('clean-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
module.exports = {
  plugins: [
    new CleanWebpackPlugin('dist'),
    new ProgressBarPlugin(),
    new WebpackBuildNotifierPlugin({
      title: "My Project Webpack Build",
      suppressSuccess: true
    })
  ]
}