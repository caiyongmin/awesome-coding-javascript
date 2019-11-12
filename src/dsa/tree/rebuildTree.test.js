import { rebuildFromPreAndInOrder, rebuildFromInAndPostOrder } from './rebuildTree';

describe('rebuild tree', () => {
  /**
   * 假定已知二叉树如下：
            1
          /   \
        2      3
      /   \   /  \
    4    5  6    10
   */
  const preoder = [1, 2, 4, 5, 3, 6, 10];
  const inorder = [4, 2, 5, 1, 6, 3, 10];
  const postorder = [4, 5, 2, 6, 10, 3, 1];
  // eslint-disable-next-line max-len
  const stringTree = '{"val":1,"right":{"val":3,"right":{"val":10},"left":{"val":6}},"left":{"val":2,"right":{"val":5},"left":{"val":4}}}';

  it('rebuild tree from preorder and inorder array', () => {
    const tree = rebuildFromPreAndInOrder(preoder, inorder);
    expect(JSON.stringify(tree)).toBe(stringTree);
  });

  it('rebuild tree from inorder and postorder array', () => {
    const tree = rebuildFromInAndPostOrder(inorder, postorder);
    expect(JSON.stringify(tree)).toBe(stringTree);
  });
});
