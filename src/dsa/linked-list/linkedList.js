/**
 * 链表是一种物理存储单元上非连续、非顺序的存储结构，它既可以表示线性结构，也可以用于表示非线性结构。
 * 数据元素的逻辑顺序是根据链表中的指针链接次序来实现。
 * 使用链表结构可以克服数组链表需要预先知道数据大小的缺点，链表结构可以充分利用计算机内存空间实现灵活的内存动态管理。
 * 链表又分为单向链表和双向链表：
 * - 单向链表，它的每个阶段包含两部分：数据 + 指向下一节点的指针。最后一个节点指向 null。
 * - 双向链表，双向链表相比单向链表，每个节点多一个指针指向前一节点。
 * 下面是双向链表的实现：
 */

export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = this.previous = null;
  }
}

/**
 * 双链表
 */
export class LinkedList {
  static from(sourceArr) {
    const linkedList = new LinkedList();
    sourceArr.forEach(item => {
      linkedList.append(item);
    });
    return linkedList;
  }

  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  append = val => {
    const node = new ListNode(val);
    if (!this.head) {
      this.head = this.tail = node;
    }
    else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.length += 1;
  }

  getNode = index => {
    if (index < 0 || index >= this.length) {
      return null;
    }
    else if (index === 0) {
      return this.head;
    }
    else if (index === this.length - 1) {
      return this.tail;
    }
    else {
      let current = this.head.next;
      let start = 1;
      while (start < index) {
        current = current.next;
        start += 1;
      }
      return current;
    }
  }

  insert = (index, val) => {
    const node = this.getNode(index);
    if (!node) {
      return false;
    }

    const insertNode = new ListNode(val);
    const previous = node.previous;
    if (previous) {
      previous.next = insertNode;
      insertNode.previous = previous;
    }
    else {
      this.head = insertNode;
    }
    insertNode.next = node;
    node.previous = insertNode;
    this.length += 1;
    return true;
  }

  removeAt = index => {
    const node = this.getNode(index);
    if (!node) {
      return false;
    }
    const previous = node.previous;
    if (previous) {
      previous.next = node.next;
    }
    else {
      this.head = node.next;
    }
    node.previous = node.next = null;
    this.length -= 1;
    return true;
  }

  indexOf = val => {
    let index = 0;
    let current = this.head;
    while (index < this.length) {
      if (current.val === val) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    return -1;
  }

  remove = val => {
    this.removeAt(this.indexOf(val));
  }

  toArray = () => {
    const results = [];
    let current = this.head;
    while (current) {
      results.push(current.val);
      current = current.next;
    }
    return results;
  }

  toString = connector => {
    return this.toArray().join(connector);
  }
}

export function linkedListTraverse(linkedList, visitor) {
  let current = linkedList;

  while (current) {
    visitor(current);
    current = current.next;
  }
}
