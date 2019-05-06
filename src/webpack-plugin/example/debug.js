const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

compiler.watch({}, function (err) {
  // eslint-disable-next-line no-console
  console.info(err);
});
// compiler.run(function (err) {
//   // eslint-disable-next-line no-console
//   console.info(err);
// });
