export default class BinaryTree {
  static from(array) {
    const Tree = this;
    const root = new Tree();
    if (!Array.isArray(array)) {
      root.level = 1;
      root.value = array;
      return root;
    }
    const preOrderTraverse = (node, index, visitor, level) => {
      visitor(node, array[index], level);
      if (array[2 * index + 1] != null) {
        node.left = new Tree();
        preOrderTraverse(node.left, 2 * index + 1, visitor, node.level + 1);
      }
      if (array[2 * index + 2] != null) {
        node.right = new Tree();
        preOrderTraverse(node.right, 2 * index + 2, visitor, node.level + 1);
      }
    };
    preOrderTraverse(root, 0, (node, value, level) => {
      node.value = value;
      node.level = level;
    }, 1);
    return root;
  }

  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  /**
   * middle -> left -> right
   */
  preOrderTraverse = visitor => {
    visitor(this.value, this.level, this);
    if (this.left) {
      this.left.preOrderTraverse(visitor);
    }
    if (this.right) {
      this.right.preOrderTraverse(visitor);
    }
  }

  /**
   * left -> middle -> right
   */
  inOrderTraverse = visitor => {
    if (this.left) {
      this.left.inOrderTraverse(visitor);
    }
    visitor(this.value, this.level, this);
    if (this.right) {
      this.right.inOrderTraverse(visitor);
    }
  }

  /**
   * left -> right -> middle
   */
  postOrderTraverse = visitor => {
    if (this.left) {
      this.left.postOrderTraverse(visitor);
    }
    if (this.right) {
      this.right.postOrderTraverse(visitor);
    }
    visitor(this.value, this.level, this);
  }

  toLevelArray = () => {
    const result = [];
    this.preOrderTraverse((value, level) => {
      result[level - 1] ? result[level - 1].push(value) : (result[level - 1] = [value]);
    });
    return result;
  }

  getDepth = () => {
    let level = 0;
    this.preOrderTraverse((v, l) => {
      if (l > level) {
        level = l;
      }
    });
    return level;
  }
}
