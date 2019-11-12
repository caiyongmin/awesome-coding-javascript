const path = require('path');
const minipack = require('./minipack');

minipack({
  entry: path.join(__dirname, './example/entry.js'),
  output: path.join(__dirname, 'output/index.js')
});
