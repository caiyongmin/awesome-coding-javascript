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
