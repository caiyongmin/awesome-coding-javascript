import { ExpressionStatement, Literal } from './specs';
import deepclone from './../../../javascript/deepclone/deepclone';

/**
 * 定义 traverse 函数，传入 ast 和 visitor 参数，遍历 ast 上的所有结点
 * 当遇到某个类型的结点时，会调用 visitor 中对应类型的处理函数
 *   traverse(ast, {
 *     Program(node, parent) {
 *       // ...
 *     },
 *
 *     VariableDeclaration(node, parent) {
 *       // ...
 *     },
 *
 *     ReturnStatement(node, parent) {
 *       // ...
 *     }
 *   });
 */
export function traverse(ast, visitor) {
  function traverseArray(arr, parent) {
    if (!Array.isArray(arr)) {
      throw new Error('traverseArray arr must be an array.');
    }

    arr.forEach(node => {
      // eslint-disable-next-line no-use-before-define
      traverseNode(node, parent);
    });
  }

  function traverseNode(node, parent) {
    if (!node) {
      return;
    }

    // 调用 visitor 中定义的类型处理函数
    const method = visitor[node.type];
    if (method) {
      method(node, parent);
    }

    // 递归调用
    switch (node.type) {
    case 'Program':
      traverseArray(node.body, node);
      break;
    case 'VariableDeclaration':
      traverseArray(node.declarations, node);
      break;
    case 'VariableDeclarator':
      traverseNode(node.id, node);
      traverseNode(node.init, node);
      break;
    case 'Identifier':
      break;
    case 'Literal':
      break;
    case 'ArrowFunctionExpression':
    case 'FunctionExpression':
      traverseNode(node.id, node);
      traverseArray(node.params, node);
      traverseNode(node.body, node);
      break;
    case 'BlockStatement':
      traverseArray(node.body, node);
      break;
    case 'ReturnStatement':
      traverseNode(node.argument, node);
      break;
    case 'BinaryExpression':
      traverseNode(node.left, node);
      traverseNode(node.right, node);
      break;
    default:
      break;
    }
  }

  traverseNode(ast, null);
}

/**
 * 定义 transformer 函数，接收我们在之前构建好的 AST
 * 在 visitor 对象上，简单定义一些类型访问函数，最后得到一个新的 AST
 */
function transformer(ast) {
  const newAST = deepclone(ast);

  // ES6 默认开启了严格模式，所以最开始需要加上 'use strict' 标识
  newAST.body.unshift(new ExpressionStatement({
    expression: new Literal({
      value: 'use strict',
    }),
    directive: 'use strict',
  }));

  traverse(newAST, {
    VariableDeclaration: function (node) {
      node.kind = 'var';
    },
    ArrowFunctionExpression: function (node, parent) {
      node.type = 'FunctionExpression';
      node.id = parent.id;
    }
  });

  return newAST;
}

export default transformer;
