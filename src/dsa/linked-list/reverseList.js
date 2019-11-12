export function reverseList(headNode) {
  let current;
  let result = headNode;

  while (headNode && headNode.next) {
    current = headNode.next;
    headNode.next = current.next;
    current.next = result;
    result = current;
  }

  return result;
}
