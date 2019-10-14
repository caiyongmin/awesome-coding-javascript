import BinaryTree from './binaryTree';

export class BinaryTreeTraversalNR extends BinaryTree {
  constructor(value, left, right) {
    super(value, left, right);
  }

  /**
   * middle -> left -> right
   */
  preOrderTraverseNR = visitor => {
    const stack = [];
    let current = this;
    while (current || stack.length) {
      while (current) {
        visitor(current.value, current.level, current);
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      current = current.right;
    }
  }

  /**
   * left -> middle -> right
   */
  inOrderTraverseNR = visitor => {
    const stack = [];
    let current = this;
    while (current || stack.length) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      visitor(current.value, current.level, current);
      current = current.right;
    }
  }

  /**
   * left -> right -> middle
   */
  postOrderTraverseNR = visitor => {
    const stack = [];
    stack.push([this, 0]);
    while (stack.length) {
      const [ node, num ] = stack.pop();
      switch (num) {
      case 0:
        stack.push([node, 1]);
        if (node.left) {
          stack.push([node.left, 0]);
        }
        break;
      case 1:
        stack.push([node, 2]);
        if (node.right) {
          stack.push([node.right, 0]);
        }
        break;
      case 2:
        visitor(node.value, node.level, node);
        break;
      default:
        break;
      }
    }
  }
}
