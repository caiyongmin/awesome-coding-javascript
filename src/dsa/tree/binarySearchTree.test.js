import { BinarySearchTree } from './binarySearchTree';

describe('BinaryTree', () => {
  it('BinaryTree.from', () => {
    const tree = BinarySearchTree.from([3, 2, 4, 1, 5]);
    const levelArray = tree.toLevelArray();
    expect(levelArray).toEqual([[3], [2, 4], [1, 5]]);
  });

  it('binaryTree.search', () => {
    const tree = BinarySearchTree.from([3, 2, 4, 1, 5]);
    const findNode = tree.search(1);
    expect(findNode.value).toEqual(1);
    expect(findNode.level).toEqual(3);
  });

  it('binaryTree.search when not found', () => {
    const tree = BinarySearchTree.from([3, 2, 4, 1, 5]);
    const findNode = tree.search(0);
    expect(findNode).toEqual(null);
  });
});
