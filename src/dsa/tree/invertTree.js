/**
 * 翻转二叉树
 * 递归解法
 */
export function invertTree(root) {
  if (!root) {
    return null;
  }

  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);

  return root;
}

/**
 * 翻转二叉树
 * 非递归解法
 */
export function invertTreeNR(root) {
  if (!root) {
    return null;
  }

  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    const temp = node.right;
    node.right = node.left;
    node.left = temp;
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }

  return root;
}
