# codes

📌 some codes, verify code logic with unit test.

[![codecov](https://codecov.io/gh/caiyongmin/codes/branch/master/graph/badge.svg)](https://codecov.io/gh/caiyongmin/codes)

## JavaScript

- [x] [bind](./src/javascript/bind/bind.test.js)
- [x] [call](./src/javascript/call/call.js)
- [x] [apply](./src/javascript/apply/apply.js)
- [x] [new](./src/javascript/new/new.test.js)
- [x] [promise](./src/javascript/promise/promise.html)
- [x] [throttle](./src/javascript/throttle/throttle.js)
- [x] [debounce](./src/javascript/debounce/debounce.js)
- [x] [deepclone](./src/javascript/deepclone/deepclone.js)

## Bundler

- [x] [babel](./src/bundler/babel/babel.js)
  - input  => [tokenizer](./src/bundler/babel/lib/tokenizer.js)   => tokens
  - tokens => [parser](./src/bundler/babel/lib/parser.js)      => ast
  - ast    => [transformer](./src/bundler/babel/lib/transformer.js) => newAst
  - newAst => [codeGenerator](./src/bundler/babel/lib/codeGenerator.js)   => output
- [x] [webpack](./src/bundler/webpack/minipack.js)
- [x] [webpack-plugin](./src/bundler/webpack-plugin/OpenBrowserPlugin.js)
- [x] [babel-plugin](./src/bundler/babel-plugin/babel-plugin-simple-import.js)
