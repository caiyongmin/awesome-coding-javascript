# codes

📌 some codes, verify code logic with unit test.

[![codecov](https://codecov.io/gh/caiyongmin/codes/branch/master/graph/badge.svg)](https://codecov.io/gh/caiyongmin/codes)

## JavaScript

- [x] [bind](./src/bind/bind.test.js)
- [x] [call](./src/call/call.js)
- [x] [apply](./src/apply/apply.js)
- [x] [new](./src/new/new.test.js)
- [x] [promise](./src/promise/promise.html)
- [x] [throttle](./src/throttle/throttle.js)
- [x] [debounce](./src/debounce/debounce.js)
- [x] [deepclone](./src/deepclone/deepclone.js)

## Bundler

- [x] [babel](./src/babel/babel.js)
  - input  => [tokenizer](./src/babel/lib/tokenizer.js)   => tokens
  - tokens => [parser](./src/babel/lib/parser.js)      => ast
  - ast    => [transformer](./src/babel/lib/transformer.js) => newAst
  - newAst => [codeGenerator](./src/babel/lib/codeGenerator.js)   => output
- [x] [webpack](./src/webpack/minipack.js)
- [x] [webpack-plugin](./src/webpack-plugin/OpenBrowserPlugin.js)
- [x] [babel-plugin](./src/babel-plugin/babel-plugin-simple-import.js)
