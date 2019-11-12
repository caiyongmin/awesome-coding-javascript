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
