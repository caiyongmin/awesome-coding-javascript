# awesome-coding-javascript

📌 持续构建个人的源码库，更多信息请看[这篇文章](https://juejin.im/post/5dccb516f265da79650cd136)。

[![codecov](https://codecov.io/gh/caiyongmin/codes/branch/master/graph/badge.svg)](https://codecov.io/gh/caiyongmin/codes) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](README.md)

---

## 一、JavaScript 原生和常用方法的代码实现

- [x] [call](./src/javascript/call) / [apply](./src/javascript/apply) / [bind](./src/javascript/bind) 实现
- [x] [new](./src/javascript/new) 实现
- [x] [deepclone](./src/javascript/deepclone) 深拷贝实现
- [x] [throttle](./src/javascript/throttle) / [debounce](./src/javascript/debounce) 防抖/节流实现
- [x] [URL 参数解析](./src/javascript/searchParams) 实现
- [x] [Promise](./src/javascript/promise) 实现
- [x] [async/await](./src/javascript/async) 实现
- [x] [订阅/发布](./src/javascript/event-emitter) 实现
- [x] [柯里化](./src/javascript/currify/currify.js) 实现
- [x] [模板字符串](./src/javascript/template-string) 实现

## 二、常用的库和插件的代码实现

- [x] [Webpack](./src/bundler/webpack) 的模拟实现
- [x] [Webpack-Plugin](./src/bundler/webpack-plugin) 的实现
- [x] [Babel](./src/bundler/babel) 的模拟实现
  - input  => [tokenizer](./src/bundler/babel/lib/tokenizer.js)  => tokens
  - tokens => [parser](./src/bundler/babel/lib/parser.js)  => AST
  - AST    => [transformer](./src/bundler/babel/lib/transformer.js)  => newAST
  - newAST => [codeGenerator](./src/bundler/babel/lib/codeGenerator.js)  => output
- [x] [Babel-Plugin](./src/bundler/babel-plugin) 的实现
- [x] [Redux](./src/bundler/redux) 的模拟实现
- [x] [Router](./src/bundler/router) 的模拟实现
  - [hashRouter](./src/bundler/router/hashRouter.js)
  - [historyRouter](./src/bundler/router/historyRouter.js)
- [x] [React](https://github.com/caiyongmin/creact) 的模拟实现（在另外一个仓库，使用 TypeScript 实现）
- [x] [Egg.js](https://github.com/caiyongmin/tiny-egg) 的模拟实现（在另外一个仓库，暂无单元测试）

## 三、JavaScript 实现的数据结构和常用算法

### 数据结构

- [Linked List](./src/dsa/linked-list) 链表
  - [x] [linked list](./src/dsa/linked-list/linkedList.js) 双链表实现
  - [x] [merge linked list](./src/dsa/linked-list/mergeList.js) 合并两个链表
  - [x] [reverse linked list](./src/dsa/linked-list/reverseList.js) 反转链表
- [Array](./src/dsa/array) 数组
  - [x] [remove duplicate](./src/dsa/array/unique.js) 数组去重
  - [x] [two sum](./src/dsa/array/twoSum.js) 两个数之和
  - [x] [three sum](./src/dsa/array/threeSum.js) 三个数之和
- [x] [Heap](./src/dsa/heap) 堆
  - [x] [get min K nums](./src/dsa/heap/getMinKNums.js) 获取一段数组里面最小的 k 个数
- [x] [Stack](./src/dsa/stack) 栈
- [x] [Queue](./src/dsa/queue) 队列
- [ ] [Set](./src/dsa/set) 集合
- [ ] [Hash Table](./src/dsa/hash) 散列表
- [Tree](./src/dsa/tree) 树
  - [x] [binary tree](./src/dsa/tree/binaryTree.js) 二叉树
  - [x] [tree traversal](./src/dsa/tree/treeTraversal.js) 二叉树的先序/中序/后序非递归遍历
  - [x] [rebuild tree](./src/dsa/tree/rebuildTree.js) 重建二叉树
  - [x] [invert tree](./src/dsa/tree/invertTree.js) 翻转二叉树
  - [x] [tree symmetry](./src/dsa/tree/treeSymmetry.js) 是否是镜像二叉树

### 算法

- [Sort](./src/dsa/sort) 排序
  - [x] [bubble sort](./src/dsa/sort/bubbleSort.js)  冒泡排序
  - [x] [selection sort](./src/dsa/sort/selectionSort.js) 选择排序
  - [x] [insert sort](./src/dsa/sort/insertSort.js) 插入排序
  - [x] [merge sort](./src/dsa/sort/mergeSort.js) 归并排序
  - [x] [quick sort](./src/dsa/sort/quickSort.js) 快速排序
- [Divide and conquer]() 分治
  - [x] [binary search tree](./src/dsa/tree/binarySearchTree.js) 二叉搜索树
- [Recursion](./src/dsa/recursion) 递归
  - [x] [jump floor](./src/dsa/recursion/jumpFloor.js) 跳台阶
  - [x] [find all node path in tree](./src/dsa/recursion/findAllNodePath.js) 找出二叉树中结点值的和为输入整数的所有路径
- [Traversal]() 遍历
  - [x] [DFS](./src/dsa/dfs/dfs.js) 深度优先遍历
  - [x] [BFS](./src/dsa/bfs/bfs.js) 广度优先遍历
- [Double Pointer](./src/dsa/doublePointer) 双指针
  - [x] [find Kth to tail](./src/dsa/doublePointer/findKthToTail.js) 求链表中倒数第 k 个结点
  - [x] [reOrder array](./src/dsa/doublePointer/reOrderArray.js) 数组重排序，奇数在前半部分，偶数在后半部分
- [Dynamic Programming](./src/dsa/dynamicProgramming) 动态规划
  - [x] [min edit distance](./src/dsa/dynamicProgramming/minEditDistance.js) 最小编辑距离
  - [x] [min path sum](./src/dsa/dynamicProgramming/minPathSum.js) 最少路径问题
- [Backdate Programming](./src/dsa/backTracking) 回溯算法
  - [ ] [solve N queens](./src/dsa/backTracking/solveNQueens.js) N 皇后问题
- [Greedy Programming](./src/dsa/greedyProgramming) 贪心算法
  - [ ] [best time to buy and sell stock](./src/dsa/greedyProgramming/bestTimeBuyAndSellStock.js) 买股票
  - [ ] [distribution cookie](./src/dsa/greedyProgramming/distributionCookie.js) 分发饼干

### 其他

- [String](./src/dsa/string) 字符串
  - [x] [longest common substring](./src/dsa/string/longestCommonSub.js) 最长公共子串
  - [x] [KMP](./src/dsa/string/kmp.js) KMP 算法求子串的索引位置
- [Number](./src/dsa/number) 数字
  - [x] [thousands format](./src/dsa/number/thousands.js) 千分位

---

Welcome to commit [issue](https://github.com/caiyongmin/awesome-coding-javascript/issues) & [pull request](https://github.com/caiyongmin/awesome-coding-javascript/pulls) !
