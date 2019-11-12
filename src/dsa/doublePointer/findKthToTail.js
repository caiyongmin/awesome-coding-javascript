/**
 * 输入一个链表，输出该链表中倒数第 k 个结点。
 */
export default function findKthToTail(head, k) {
  if (!head || !k) {
    return null;
  }

  let first = head;
  let second = head;
  let index = 1;

  while (first.next) {
    first = first.next;
    if (index >= k) {
      second = second.next;
    }
    index++;
  }

  if (k > index) {
    return null;
  }
  return second;
}
