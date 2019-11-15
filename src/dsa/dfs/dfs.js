/**
 * 深度优先算法
 * 深度优先算法是一种用于遍历或搜索树或图的算法。沿着树的深度遍历树的节点，尽可能深的搜索树的分支。
 */
export function DFSTraverse(rootNode, visitor) {
  if (!rootNode || typeof visitor !== 'function') {
    console.warn('rootNode is empty or visitor is not function');
    return;
  }

  const roots = Array.isArray(rootNode) ? rootNode : [rootNode];
  while (roots.length) {
    const root = roots.shift();
    visitor(root);
    if (root.children && root.children.length) {
      DFSTraverse(root.children, visitor);
    }
  }
}

/**
 * 深度优先非递归解法
 * 使用栈来解决
 */
export function DFSTraverseNR(rootNode, visitor) {
  if (!rootNode || typeof visitor !== 'function') {
    console.warn('rootNode is empty or visitor is not function');
    return;
  }

  const stack = Array.isArray(rootNode) ? rootNode : [rootNode];
  while (stack.length) {
    const node = stack.pop();
    visitor(node);
    if (node.children && node.children.length) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i]);
      }
    }
  }
}
