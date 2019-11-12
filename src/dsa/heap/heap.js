/**
 * 堆（Heap）是计算机科学中的一种特别的树状数据结构，若是满足一下特性，即可成为堆：给定堆中任意节点 P 和 C，
 * 若 P 是 C 的母节点，那么 P 的值会小于等于（或大于等于）C 的值。若母节点的值恒小于等于子节点的值，此堆成为最小堆。
 * 若母节点恒小于等于子节点的值，此堆成为最小堆（min heap）
 * 若母节点恒大于等于子节点的值，此堆成为堆大堆（max heap）
 * 在堆中最顶端的那一个节点，称作根节点（root node），根节点本身没有母节点（parent node）
 *
 * 在队列中，调度程序反复提取队列中第一个作业并运行，因为实际情况中某些事件较短的任务将等待很长事件才能结束。
 * 或者某些不短小，但具有重要性的作业，同样应当具有优先权。堆即为解决此类问题设计的一种数据结构。
 * 也就是优先队列：一种特殊的队列，队列中元素出栈的顺序是按照元素的优先权大小，而不是元素入队的先后顺序。
 *
 * 堆的特性：
 * - 堆是一棵完全二叉树。即除了最底层，其他层的节点都被元素填满，且最底层尽可能地从左到右填入。
 * - 任意节点小于（或大于）它的所有子节点。
 * - 可以用数组来存储二叉堆。
 */

/**
 * 实现堆
 */
export default class Heap {
  constructor(type, nums) {
    this.type = type || 'max';  // 默认为最大堆
    this.items = [];

    if (Array.isArray(nums) && nums.length) {
      nums.forEach(n => this.add(n));
    }
  }

  isMaxHeap = () => {
    return this.type === 'max';
  }

  isMinHeap = () => {
    return this.type === 'min';
  }

  size = () => {
    return this.items.length;
  }

  getParentIndex = i => {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex = i => {
    return i * 2 + 1;
  }

  getRightChildIndex = i => {
    return i * 2 + 2;
  }

  swap = (i, j) => {
    const temp = this.items[i];
    this.items[i] = this.items[j];
    this.items[j] = temp;
  }

  // 向堆底插入元素
  add = el => {
    this.items.push(el);
    this.siftUP(this.size() - 1);
  }

  siftUP = index => {
    // 递归终止条件
    if (index <= 0) {
      return;
    }

    // 找到父元素的索引和值
    const item = this.items[index];
    const parentIndex = this.getParentIndex(index);
    const parent = this.items[parentIndex];

    // 如果是最大堆
    if (this.isMaxHeap()) {
      // 如果母节点的值小于子节点，则该节点需要上浮，即需要交换位置
      if (item > parent) {
        this.swap(index, parentIndex);
        // 再递归对 parent 做上浮操作
        this.siftUP(parentIndex);
      }
    }
    else if (this.isMinHeap()) {
      // 如果母节点的值大于子节点，则该节点需要上浮，即需要交换位置
      if (item < parent) {
        this.swap(index, parentIndex);
        // 再递归对 parent 做上浮操作
        this.siftUP(parentIndex);
      }
    }
  }

  // 取出栈顶元素，并重新构建完全二叉树
  extract = () => {
    // 获取堆顶元素
    const item = this.items.shift();

    // 如果当前堆的元素个数小于 2 时，可以直接返回，不需要重新构建完全二叉树
    if (this.size() < 2) {
      return item;
    }

    // 现在分离成了两个完全二叉树，需要重新构建成一颗完全二叉树
    // 获取最后一个元素，并把它放到堆顶
    this.items.unshift(this.items.pop());
    // 进行 siftDown 操作，重新构建一颗完全二叉树
    this.siftDown(0);

    // 返回堆顶元素
    return item;
  }

  siftDown = index => {
    const leftChildIndex = this.getLeftChildIndex(index);

    // 当没有左子树（也就没有右子树）时，递归终止
    if (leftChildIndex >= this.size()) {
      return;
    }

    const leftChild = this.items[leftChildIndex];
    const rightChildIndex = this.getRightChildIndex(index);
    const rightChild = this.items[rightChildIndex];
    let nextIndex = leftChildIndex;

    if (this.isMaxHeap()) {
      // 找到左右子树的最大值
      if (typeof rightChild !== undefined && rightChild > leftChild) {
        nextIndex = rightChildIndex;
      }
    }
    else if (this.isMinHeap()) {
      // 找到左右子树的最小值
      if (typeof rightChild !== undefined && rightChild < leftChild) {
        nextIndex = rightChildIndex;
      }
    }

    const parent = this.items[index];
    const next = this.items[nextIndex];

    if (this.isMaxHeap()) {
      // 如果左右子树的最大值大于母节点的值，则母节点需要下沉，即需要交换位置
      if (next > parent) {
        this.swap(index, nextIndex);
        // 再递归对母节点进行下沉
        this.siftDown(nextIndex);
      }
    }
    else if (this.isMinHeap()) {
      // 如果左右子树的最小值小于母节点的值，则母节点需要下沉，即需要交换位置
      if (next < parent) {
        this.swap(index, nextIndex);
        // 再递归对母节点进行下沉
        this.siftDown(nextIndex);
      }
    }
  }

  toString = connector => {
    return this.items.join(connector);
  }
}
