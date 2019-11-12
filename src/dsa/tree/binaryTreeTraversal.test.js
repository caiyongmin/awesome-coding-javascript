import { BinaryTreeTraversalNR } from './treeTraversal';

describe('BinaryTreeTraversalNR', () => {
  const tree = BinaryTreeTraversalNR.from([1, 2, 3, 4, 5]);

  it('BinaryTreeTraversalNR.preOrderTraverseNR', () => {
    const result1 = [];
    const result2 = [];
    const visitor1 = value => result1.push(value);
    const visitor2 = value => result2.push(value);
    tree.preOrderTraverse(visitor1);
    tree.preOrderTraverseNR(visitor2);
    expect(result1).toEqual(result2);
  });

  it('BinaryTreeTraversalNR.inOrderTraverseNR', () => {
    const result1 = [];
    const result2 = [];
    const visitor1 = value => result1.push(value);
    const visitor2 = value => result2.push(value);
    tree.inOrderTraverse(visitor1);
    tree.inOrderTraverseNR(visitor2);
    expect(result1).toEqual(result2);
  });

  it('BinaryTreeTraversalNR.postOrderTraverseNR', () => {
    const result1 = [];
    const result2 = [];
    const visitor1 = value => result1.push(value);
    const visitor2 = value => result2.push(value);
    tree.postOrderTraverse(visitor1);
    tree.postOrderTraverseNR(visitor2);
    expect(result1).toEqual(result2);
  });
});
