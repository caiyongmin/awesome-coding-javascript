/**
 * 输入一个链表，输出该链表中倒数第 k 个结点。
 */
export default function findKthToTail(head, k) {
  if (!head || !k) {
    return null;
  }

  // 双指针
  let first = head;
  let second = head;
  let index = 1;

  while (first.next) {
    first = first.next;
    // 当 first 和 second 相距 k 时，second 开始逐渐前进
    if (index >= k) {
      second = second.next;
    }
    index++;
  }

  // 循环结束后， k 如果大于 index 则说明倒数第 k 个节点不存在
  if (k > index) {
    return null;
  }
  return second;
}
