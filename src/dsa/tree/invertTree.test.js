import BinaryTree from './binaryTree';
import { invertTree, invertTreeNR } from './invertTree';
import { getArrFlat } from './../../shared/flat';

describe('invert tree', () => {
  /**
   * 假定已知二叉树如下：
            1
          /   \
        2      3
      /  \   /  \
    4    5  6   10
    将会得到：
            1
          /   \
        3      2
      /  \   /  \
    10   6  5    4
   */
  let tree;
  const treeNodes = [1, 2, 3, 4, 5, 6, 10];
  const invertTreeTreeNodes = [1, 3, 2, 10, 6, 5, 4];

  beforeEach(() => {
    tree = BinaryTree.from(treeNodes);
  });

  it('invert tree recursion', () => {
    const newTree = invertTree(tree);
    expect(getArrFlat(newTree.toLevelArray())).toEqual(invertTreeTreeNodes);
  });

  it('invert tree non-recursion', () => {
    const newTree = invertTreeNR(tree);
    expect(getArrFlat(newTree.toLevelArray())).toEqual(invertTreeTreeNodes);
  });
});

