/**
 * 使用数组来模拟实现队列。
 * 栈也是一种特殊的线性表，只允许在表单的前端（front）进行删除操作，而在表的后端（rear）进行插入操作。
 * 进行插入操作的端称为队尾，进行删除操作的端称为队头。
 * 遵从先进先出（FILO，First In Last Out）的原则。
 * 一般有以下方法：
 * - enqueue(el)，从队尾插入元素
 * - dequeue()，从队头删除元素
 * - front()，返回队头元素
 * - rear()，返回队尾元素
 * - size()，返回元素的个数
 */
export default class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(el) {
    this.items.push(el);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  rear() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  toString(connector) {
    return this.items.join(connector);
  }
}
