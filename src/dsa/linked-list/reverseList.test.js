import { LinkedList, linkedListTraverse } from './linkedList';
import { reverseList } from './reverseList';

describe('reverseList', () => {
  const sourceArr = [1, 2, 3, 4, 5];
  const result = [5, 4, 3, 2, 1];

  it('reverse linked list', () => {
    const linkedList = LinkedList.from(sourceArr);
    const newList = reverseList(linkedList.head);
    const nodes = [];
    linkedListTraverse(newList, current => {
      nodes.push(current.val);
    });

    expect(nodes).toEqual(result);
  });
});
