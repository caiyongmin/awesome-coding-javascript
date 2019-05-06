const path = require('path');
const OpenBrowserPlugin = require('./../OpenBrowserPlugin');

module.exports = {
  entry: path.resolve(__dirname, 'entry.js'),
  output: {
    path: __dirname,
    filename: 'app.js',
  },
  plugins: [
    new OpenBrowserPlugin(),
  ],
};
