import BinaryTree from '../tree/binaryTree';
import { findAllNodePath } from '../recursion/findAllNodePath';

describe('find all node path in tree', () => {
  it('find all node path in tree', () => {
    const binaryTree = BinaryTree.from([1, 2, 3, 5, 6, 4, 10]);
    const target = 8;
    const results = [[1, 2, 5], [1, 3, 4]];
    expect(findAllNodePath(binaryTree, target)).toEqual(results);
  });
});
