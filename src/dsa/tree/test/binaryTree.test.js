import BinaryTree from './../binaryTree';

describe('BinaryTree', () => {
  it('BinaryTree.from', () => {
    const binaryTree = BinaryTree.from([1, 2, 3, null, 5]);
    expect(binaryTree.value).toEqual(1);
    expect(binaryTree.left.value).toEqual(2);
    expect(binaryTree.right.value).toEqual(3);
    expect(binaryTree.left.right.value).toEqual(5);
  });

  it('binaryTree.toLevelArray', () => {
    const binaryTree = BinaryTree.from([1, 2, 3, 4, 5]);
    expect(binaryTree.toLevelArray()).toEqual([ [ 1 ], [ 2, 3 ], [ 4, 5 ] ]);
  });

  it('binaryTree.getDepth', () => {
    const binaryTree = BinaryTree.from([1, 2, 3, 4, 5]);
    expect(binaryTree.getDepth()).toEqual(3);
  });
});
