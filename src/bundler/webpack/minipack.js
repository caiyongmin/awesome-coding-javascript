const babylon = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');

let ID = 0;  // 文件 ID

/**
 * 解析文件，返回结果对象
 * @param {String} filename 文件路径
 * @returns {Object} 解析结果 { id: 0, filename: '...', dependencies: [], code: '...' }
 */
function readModule(filename) {
  // 读取文件内容
  const content = fs.readFileSync(filename, 'utf-8');
  // 解析得到文件的 AST，方便后面获得文件的依赖数组
  const ast = babylon.parse(content, {
    sourceType: 'module',
  });
  // 遍历文件 AST，获得文件依赖数组
  const dependencies = [];
  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencies.push(node.source.value);
    }
  });
  // 根据文件 AST 转化得到 babel 编译后的代码，options 中配置了 '@babel/preset-env' presets
  const { code } = babel.transformFromAstSync(ast, null, {
    presets: ['@babel/preset-env'],
  });

  return {
    id: ID++,
    filename,
    dependencies,
    code,
  };
}

/**
 * 根据入口文件，采取广度优先遍历的方式，获取入口文件的依赖关系图
 * @param {String} entry 入口文件路径，例如 `./example/entry.js`
 * @returns {Array} [{ id, filename, dependencies, code }...]
 */
function createGraph(entry) {
  // 解析入口文件对象
  const entryModule = readModule(entry);
  // 把它放到一个数组里面，遍历这个数组，解析每个对象的依赖关系
  const queue = [entryModule];

  for (const mod of queue) {  // eslint-disable-line no-unused-vars
    // 添加一个 mapping 属性，保存文件依赖关系的一个 Map 对象，结构: { 'relativePath': id }
    mod.mapping = {};
    const dirname = path.dirname(mod.filename);
    mod.dependencies.forEach(relativePath => {
      const absolutePath = path.join(dirname, relativePath);
      const childAsset = readModule(absolutePath);
      mod.mapping[relativePath] = childAsset.id;
      // push 到遍历数组里面，继续遍历数组，解析文件依赖关系
      queue.push(childAsset);
    });
  }

  return queue;
}

module.exports = function minipack(config) {
  const { entry, output } = config;

  const graph = createGraph(entry);
  let modules = '';
  graph.forEach(mod => {
    modules += `${mod.id}: [
      function (require, module, exports) {
        ${mod.code}
      },
      ${JSON.stringify(mod.mapping)},
    ],`;
  });

  const result = `
    (function (modules) {
      function require(id) {
        const [requireFn, mapping] = modules[id];
        function localRequire(relativePath) {
          return require(mapping[relativePath]);
        }
        const module = {exports: {}};
        requireFn(localRequire, module, module.exports);
        return module.exports;
      }
      require(0);
    })({${modules}})
  `;

  // 结果写入到指定文件
  fs.writeFileSync(output, result);
};
