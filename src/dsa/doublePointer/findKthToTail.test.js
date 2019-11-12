import { LinkedList } from './../linked-list/linkedList';
import findKthToTail from './findKthToTail';

describe('find Kth to tail', () => {
  it('when k is less or equal than linked list size', () => {
    const sourceArr = [1, 2, 3, 4, 5];
    const linkedList = LinkedList.from(sourceArr);
    expect(findKthToTail(linkedList.head, 3).val).toEqual(3);
    expect(findKthToTail(linkedList.head, 2).val).toEqual(4);
  });

  it('when k is greate than linked list size', () => {
    const sourceArr = [1, 2, 3, 4, 5];
    const linkedList = LinkedList.from(sourceArr);
    expect(findKthToTail(linkedList.head, 6)).toEqual(null);
  });
});
