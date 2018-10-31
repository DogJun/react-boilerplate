const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
// const os = require('os');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  output: {
    filename: 'assets/scripts/[name].[hash:5].js',
    publicPath: './'
  },
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css\.*(?!.*map)/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    }),
    new ProgressBarPlugin(),
    new WebpackBuildNotifierPlugin({
      title: "My Project Webpack Build",
      suppressSuccess: true
    }),
    new ParallelUglifyPlugin({
      // 开启多核编译不一定能加快编译
      exclude: /\.min\.js$/,
      // workerCount: os.cpus().length,
      uglifyJS: {
        output: {
          beautify: false, //不需要格式化
          comments: false //不保留注释
        },
        compress: {
          warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
          drop_console: true, // 删除所有的 `console` 语句，可以兼容ie浏览器
          collapse_vars: true, // 内嵌定义了但是只用到一次的变量
          reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
        }
      }
    }),
    // new BundleAnalyzerPlugin()
  ],
  // optimization: {
  //   minimizer: [new UglifyJsPlugin({
  //     // parallel: true
  //     parallel: os.cpus().length
  //   })]
  // }
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM',
  //   'antd': 'antd'
  // },
  performance: {
    hints: false
  }
}