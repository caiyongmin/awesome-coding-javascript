import BinaryTree from './binaryTree';

/**
 * 二分查找树
 *
 * 采用分治的思想：
 * 把一个复杂的问题分成两个或者多个相似的子问题，再把子问题分成更小的子问题
 * 直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并
 *
 * 相对于动态规划：
 * 分治法中对于每次出现的子问题均求解，导致同样的子问题被反复求解，故产生指数增长的时间复杂度，效率较低。
 * 而动态规划法用表保存已求解过的子问题的解，再次碰到同样的子问题时不必重新求解
 * 而只需查询答案，故可获得多项式级时间复杂度，效率较高；
 */
export class BinarySearchTree extends BinaryTree {
  static from(array) {
    const root = new BinarySearchTree();
    root.level = 1;
    if (Array.isArray(array)) {
      array.forEach(key => root.insert(key));
    }
    else {
      root.value = array;
    }
    return root;
  }

  constructor(value, left, right) {
    super(value, left, right);
  }

  insert = key => {
    // first insert
    if (this.value == null) {
      this.value = key;
      this.level = 1;
      return;
    }
    // same insert
    else if (key === this.value) {
      return;
    }

    const node = new BinarySearchTree(key);
    if (key < this.value) {
      if (!this.left) {
        this.left = node;
        node.level = this.level + 1;
      }
      else {
        this.left.insert(key);
      }
    }
    else {
      if (!this.right) {
        this.right = node;
        node.level = this.level + 1;
      }
      else {
        this.right.insert(key);
      }
    }
  }

  search = key => {
    if (this.value == null) {
      return null;
    }

    if (key === this.value) {
      return this;
    }
    else if (key > this.value) {
      return this.right ? this.right.search(key) : null;
    }
    else if (key < this.value) {
      return this.left ? this.left.search(key) : null;
    }
  }
}
