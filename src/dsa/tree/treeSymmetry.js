function isSymmetry(node1, node2) {
  if (!node1 && !node2) {
    return true;
  }

  if (!node1 || !node2) {
    return false;
  }

  if (node1.value !== node2.value) {
    return false;
  }

  return isSymmetry(node1.left, node2.right) && isSymmetry(node1.right, node2.left);
}

export function isSymmetryTree (tree) {
  return isSymmetry(tree, tree);
}
