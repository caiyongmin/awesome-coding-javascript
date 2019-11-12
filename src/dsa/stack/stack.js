/**
 * 使用数组来模拟实现栈。
 * 栈是只能在某一端插入和删除的特殊线性表。遵从后进先出（LIFO，Last In First Out）的原则。
 * 一般有以下方法：
 * - push(el)，添加元素到栈顶
 * - pop()，移除并返回栈顶元素
 * - peek()，返回栈顶元素
 * - isEmpty()，检查栈是否为空，为空则返回 true
 * - clear()，移除栈中所有元素
 * - size()，返回栈中元素个数
 */
export default class Stack {
  constructor(array) {
    this.items = Array.isArray(array) ? array : [];
  }

  push(el) {
    this.items.push(el);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toString(connector) {
    return this.items.join(connector);
  }
}
