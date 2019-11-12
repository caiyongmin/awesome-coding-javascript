import { ListNode } from './linkedList';

export function mergeList(l1, l2) {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeList(l1.next, l2);
    return l1;
  }

  l2.next = mergeList(l1, l2.next);
  return l2;
}

export function mergeListNR(l1, l2) {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  const root = new ListNode();
  let current = root;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    }
    else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1) {
    current.next = l1;
  }
  else if (l2) {
    current.next = l2;
  }

  return root.next;
}
