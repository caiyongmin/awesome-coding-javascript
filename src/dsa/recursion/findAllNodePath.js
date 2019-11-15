/**
 * 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径
 */
function recursionFind(node, target, stack, sum, results) {
  stack.push(node.value);
  sum += node.value;
  if (!node.left && !node.right && sum === target) {
    results.push([...stack]);
  }
  if (node.left) {
    recursionFind(node.left, target, stack, sum, results);
  }
  if (node.right) {
    recursionFind(node.right, target, stack, sum, results);
  }
  stack.pop();
}

export function findAllNodePath(tree, target) {
  const results = [];

  if (tree == null || target == null) {
    return results;
  }

  recursionFind(tree, target, [], 0, results);
  return results;
}
