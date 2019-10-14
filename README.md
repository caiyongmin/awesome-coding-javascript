# Codes

📌 some codes, verify code logic with unit test.

[![codecov](https://codecov.io/gh/caiyongmin/codes/branch/master/graph/badge.svg)](https://codecov.io/gh/caiyongmin/codes)

## JavaScript

- [x] [bind](./src/javascript/bind/bind.test.js)
- [x] [call](./src/javascript/call/call.js)
- [x] [apply](./src/javascript/apply/apply.js)
- [x] [new](./src/javascript/new/new.test.js)
- [x] [deepclone](./src/javascript/deepclone/deepclone.js)
- [x] [throttle](./src/javascript/throttle/throttle.js)
- [x] [debounce](./src/javascript/debounce/debounce.js)
- [x] [event-emitter](./src/javascript/event-emitter/event-emitter.js)
- [x] [Promise](./src/javascript/promise/promise.html)

## Framework & Library & Plugin

- [x] [Babel](./src/bundler/babel/babel.js)
  - input  => [tokenizer](./src/bundler/babel/lib/tokenizer.js)   => tokens
  - tokens => [parser](./src/bundler/babel/lib/parser.js)      => ast
  - ast    => [transformer](./src/bundler/babel/lib/transformer.js) => newAst
  - newAst => [codeGenerator](./src/bundler/babel/lib/codeGenerator.js)   => output
- [x] [Webpack](./src/bundler/webpack/minipack.js)
- [x] [Webpack-Plugin](./src/bundler/webpack-plugin/OpenBrowserPlugin.js)
- [x] [Babel-Plugin](./src/bundler/babel-plugin/babel-plugin-simple-import.js)
- [x] [Redux](./src/bundler/redux/redux.js)
- [x] [Router](./src/bundler/router/hashRouter.js)
  - [hashRouter](./src/bundler/router/hashRouter.js)
  - [historyRouter](./src/bundler/router/historyRouter.js)

## DSA

- array
  - [] two sum
  - [] three sum
  - [] [remove duplicate](./src/dsa/array/unique.js)
- sort
  - [] [bubble sort](./src/dsa/sort/bubbleSort.js)
  - [] [selection sort](./src/dsa/sort/selectionSort.js)
  - [] [insert sort](./src/dsa/sort/insertSort.js)
  - [] [merge sort](./src/dsa/sort/mergeSort.js)
  - [] [quick sort](./src/dsa/sort/quickSort.js)
- backdate programming
  - [] find path
  - [] get all combin
  - [] solve N queens
- BFS
  - [] bfs implementation
  - [] print from top to buttom
- binary search
  - [] binary search
- DFS
  - [] dfs implementation
- dynamic programming
  - [] min distance
  - [] min path sum
  - [] regexp match
- greedy programming
  - [] find content children
- hash
  - [] not repeat string
- heap
  - [] heap implementation
  - [] median number
- link list
  - [] link list implementation
  - [] merge list
- number
  - [] thousands format
- queue
  - [] queue implementation
- recursion
  - [] jump floor
  - [] rect cover
- stack
  - [] stack implementation
- string
  - [] KMP
  - [] longest common subsquence
  - [] palindrome sub string
  - [] permutate string
  - [] reverse string
- tree
  - [] binary tree
  - [] binary search tree
  - [] tree symmetry
  - [] tree traversal
  - [] tree balanced
