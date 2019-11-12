# awesome-coding-javascript

📌 coding about JavaScript basic principles and data structures and algorithms, verify logic with unit test.

[![codecov](https://codecov.io/gh/caiyongmin/codes/branch/master/graph/badge.svg)](https://codecov.io/gh/caiyongmin/codes) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](README.md)

**这里得有一个目录**

## JavaScript

- [x] [bind](./src/javascript/bind)
- [x] [call](./src/javascript/call)
- [x] [apply](./src/javascript/apply)
- [x] [new](./src/javascript/new)
- [x] [deepclone](./src/javascript/deepclone)
- [x] [throttle](./src/javascript/throttle)
- [x] [debounce](./src/javascript/debounce)
- [x] [URL SearchParams](./src/javascript/searchParams)
- [x] [Promise](./src/javascript/promise)
- [x] [async/await](./src/javascript/async)
- [x] [event-emitter](./src/javascript/event-emitter)
- [x] [currify](./src/javascript/currify/currify.js)
- [x] [template string](./src/javascript/template-string)

## Library & Plugin

- [x] [Babel](./src/bundler/babel)
  - input  => [tokenizer](./src/bundler/babel/lib/tokenizer.js)  => tokens
  - tokens => [parser](./src/bundler/babel/lib/parser.js)  => AST
  - AST    => [transformer](./src/bundler/babel/lib/transformer.js)  => newAST
  - newAST => [codeGenerator](./src/bundler/babel/lib/codeGenerator.js)  => output
- [x] [Webpack](./src/bundler/webpack)
- [x] [Webpack-Plugin](./src/bundler/webpack-plugin)
- [x] [Babel-Plugin](./src/bundler/babel-plugin)
- [x] [Redux](./src/bundler/redux)
- [x] [Router](./src/bundler/router)
  - [hashRouter](./src/bundler/router/hashRouter.js)
  - [historyRouter](./src/bundler/router/historyRouter.js)

## DSA

- [String](./src/dsa/string)
  - [x] [longest common substring](./src/dsa/string/longestCommonSub.js)
  - [x] [KMP](./src/dsa/string/kmp.js)
- [Number](./src/dsa/number)
  - [x] [thousands format](./src/dsa/number/thousands.js)
- [Array](./src/dsa/array)
  - [x] [remove duplicate](./src/dsa/array/unique.js)
  - [x] [two sum](./src/dsa/array/twoSum.js)
  - [x] [three sum](./src/dsa/array/threeSum.js)
- [Traversal]()
  - [x] [DFS](./src/dsa/dfs/dfs.js)
  - [x] [BFS](./src/dsa/bfs/bfs.js)
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
  - [x] [rebuild tree](./src/dsa/tree/rebuildTree.js)
  - [x] [invert tree](./src/dsa/tree/invertTree.js)
- [Linked List](./src/dsa/linked-list)
  - [x] [linked list](./src/dsa/link-list/linkedList.js)
  - [x] [merge linked list](./src/dsa/link-list/mergeList.js)
  - [x] [reverse linked list](./src/dsa/link-list/reverseList.js)
- [Recursion & Loop](./src/dsa/recursion)
  - [x] [jump floor](./src/dsa/recursion/jumpFloor.js)
- [Double Pointer](./src/dsa/doublePointer)
  - [x] [find Kth to tail](./src/dsa/doublePointer/findKthToTail.js)
  - [x] [reOrder array](./src/dsa/doublePointer/reOrderArray.js)
- [Backdate Programming](./src/dsa/backdateProgramming)
  - [x] [find all node path in tree](./src/dsa/backdateProgramming/findAllNodePath.js)
  - [x] [get all combination equal to target](./src/dsa/backdateProgramming/getAllCombinEqualTarget.js)
- [Dynamic Programming](./src/dsa/dynamicProgramming)
  - [x] [min edit distance](./src/dsa/dynamicProgramming/minEditDistance.js)
  - [x] [min path sum](./src/dsa/dynamicProgramming/minPathSum.js)
- [Greedy Programming](./src/dsa/greedyProgramming)
  - [x] [best time to buy and sell stock](./src/dsa/greedyProgramming/bestTimeBuyAndSellStock.js)
  - [x] [distribution cookie](./src/dsa/greedyProgramming/distributionCookie.js)
