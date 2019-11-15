class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * 由先序遍历和中序遍历重建二叉树
 */
export function rebuildFromPreAndInOrder(preorder, inorder) {
  if (!Array.isArray(preorder) || !Array.isArray(inorder)) {
    return;
  }

  if (!preorder.length || !inorder.length) {
    return;
  }

  const rootValue = preorder[0];
  const rootIndex = inorder.indexOf(rootValue);
  const root = new TreeNode(rootValue);

  const inLeft = inorder.slice(0, rootIndex);
  const inRight = inorder.slice(rootIndex + 1);
  const preLeft = preorder.slice(1, inLeft.length + 1);
  const preRight = preorder.slice(inLeft.length + 1);
  root.left = rebuildFromPreAndInOrder(preLeft, inLeft);
  root.right = rebuildFromPreAndInOrder(preRight, inRight);

  return root;
}

/**
 * 由中序遍历和后序遍历重建二叉树
 */
export function rebuildFromInAndPostOrder(inorder, postorder) {
  if (!Array.isArray(inorder) || !Array.isArray(postorder)) {
    return;
  }

  if (!inorder.length || !postorder.length) {
    return;
  }

  const rootValue = postorder[postorder.length - 1];
  const rootIndex = inorder.indexOf(rootValue);
  const root = new TreeNode(rootValue);

  const inLeft = inorder.slice(0, rootIndex);
  const inRight = inorder.slice(rootIndex + 1);
  const postLeft = postorder.slice(0, inLeft.length);
  const postRight = postorder.slice(inLeft.length, -1);
  root.left = rebuildFromInAndPostOrder(inLeft, postLeft);
  root.right = rebuildFromInAndPostOrder(inRight, postRight);
  return root;
}

