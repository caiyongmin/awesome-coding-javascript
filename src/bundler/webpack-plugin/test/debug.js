const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

// 监听模式下
compiler.watch({}, function (err) {
  console.info(err);
});

// 一次性编译
// compiler.run(function (err) {
//   console.info(err);
// });
