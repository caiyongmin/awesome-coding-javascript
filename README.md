# awesome-coding-javascript

📌 coding about JavaScript basic principles and data structures and algorithms, verify logic with unit test.

[![codecov](https://codecov.io/gh/caiyongmin/codes/branch/master/graph/badge.svg)](https://codecov.io/gh/caiyongmin/codes) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](README.md)

## JavaScript

- [x] [bind](./src/javascript/bind)
- [x] [call](./src/javascript/call)
- [x] [apply](./src/javascript/apply)
- [x] [new](./src/javascript/new)
- [x] [deepclone](./src/javascript/deepclone)
- [x] [throttle](./src/javascript/throttle)
- [x] [debounce](./src/javascript/debounce)
- [x] [EventEmitter](./src/javascript/event-emitter)
- [x] [Promise](./src/javascript/promise)

## Framework & Library & Plugin

- [x] [Babel](./src/bundler/babel)
  - input  => [tokenizer](./src/bundler/babel/lib/tokenizer.js)   => tokens
  - tokens => [parser](./src/bundler/babel/lib/parser.js)      => AST
  - AST    => [transformer](./src/bundler/babel/lib/transformer.js) => newAST
  - newAST => [codeGenerator](./src/bundler/babel/lib/codeGenerator.js)   => output
- [x] [Webpack](./src/bundler/webpack)
- [x] [Webpack-Plugin](./src/bundler/webpack-plugin)
- [x] [Babel-Plugin](./src/bundler/babel-plugin)
- [x] [Redux](./src/bundler/redux)
- [x] [Router](./src/bundler/router)
  - [hashRouter](./src/bundler/router/hashRouter.js)
  - [historyRouter](./src/bundler/router/historyRouter.js)

## DSA

- [Array](./src/dsa/array)
  - [x] [two sum](./src/dsa/array/twoSum.js)
  - [x] [three sum](./src/dsa/array/threeSum.js)
  - [x] [remove duplicate](./src/dsa/array/unique.js)
- [Sort](./src/dsa/sort)
  - [x] [bubble sort](./src/dsa/sort/bubbleSort.js)
  - [x] [selection sort](./src/dsa/sort/selectionSort.js)
  - [x] [insert sort](./src/dsa/sort/insertSort.js)
  - [x] [merge sort](./src/dsa/sort/mergeSort.js)
  - [x] [quick sort](./src/dsa/sort/quickSort.js)
- [Tree](./src/dsa/tree)
  - [x] [binary tree](./src/dsa/tree/binaryTree.js)
  - [x] [binary search tree](./src/dsa/tree/binarySearchTree.js)
  - [x] [tree symmetry](./src/dsa/tree/treeSymmetry.js)
  - [x] [tree traversal](./src/dsa/tree/treeTraversal.js)
- [Dynamic Programming](./src/dsa/dynamicProgramming)
  - [x] [min edit distance](./src/dsa/dynamicProgramming/minEditDistance.js)
- [Number](./src/dsa/number)
  - [x] [thousands format](./src/dsa/number/thousands.js)
- [String](./src/dsa/string)
  - [x] [longest common subsquence](./src/dsa/string/longestCommonSub.js)
  - [x] [KMP](./src/dsa/string/kmp.js)
