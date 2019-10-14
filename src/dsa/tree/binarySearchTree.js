import BinaryTree from './binaryTree';

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
