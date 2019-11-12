import BinaryTree from './binaryTree';
import { isSymmetryTree } from './treeSymmetry';

describe('isSymmetryTree', () => {
  it('isSymmetryTree true', () => {
    const tree = BinaryTree.from([8, 6, 6, 5, 7, 7, 5]);
    expect(isSymmetryTree(tree)).toBe(true);
  });

  it('isSymmetryTree true', () => {
    const tree = BinaryTree.from([8, 6, 6, 5, 7, 7, 5, 9, 2, 2, 9, 9, 2, 2, 9]);
    expect(isSymmetryTree(tree)).toBe(true);
  });

  it('isSymmetryTree false', () => {
    const tree = BinaryTree.from([8, 6, 6, 5, 7, 7, 5, 9, 2, 2, 9, 2, 9, 9, 2]);
    expect(isSymmetryTree(tree)).toBe(false);
  });
});
