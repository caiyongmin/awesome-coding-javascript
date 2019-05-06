const open = require('open');

const defaultOptions = {
  url: 'http://localhost:8080',
};

class OpenBrowserPlugin {
  constructor(options) {
    options = options || {};
    options = Object.assign({}, defaultOptions, options);
    this.url = options.url;
  }

  apply(compiler) {
    let isWatching = false;  // 监听模式下才会在第一次编译完成时打开默认浏览器
    let isOpened = false;

    compiler.hooks.watchRun.tapAsync('OpenBrowserPlugin', (compiler, callback) => {
      isWatching = true;
      callback();
    });

    compiler.hooks.done.tap('OpenBrowserPlugin', stats => {
      if (isWatching && !isOpened && !stats.hasErrors()) {
        isOpened = true;  // 只在第一次完成编译时打开浏览器
        (async () => {
          await open(this.url);
        })();
      }
    });
  }
}

module.exports = OpenBrowserPlugin;
