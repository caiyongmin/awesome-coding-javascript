/**
 * 广度优先算法
 * 广度优先算法是一种遍历或搜索树或图的方法，沿着树的宽度遍历树的节点。
 */
export function BFSTraverseNR(rootNode, visitor) {
  if (!rootNode || typeof visitor !== 'function') {
    console.warn('rootNode is empty or visitor is not function');
    return;
  }

  let stack = Array.isArray(rootNode) ? rootNode : [rootNode];
  while (stack.length) {
    const node = stack.shift();
    visitor(node);
    if (node.children && node.children.length) {
      stack = [...stack, ...node.children];
    }
  }
}
