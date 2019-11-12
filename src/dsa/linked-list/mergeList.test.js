import { LinkedList, linkedListTraverse } from './linkedList';
import { mergeList, mergeListNR } from './mergeList';

describe('merge linked list', () => {
  let list1;
  let list2;
  const results = [1, 2, 3, 4, 5, 10];

  beforeEach(() => {
    list1 = LinkedList.from([1, 2, 5]);
    list2 = LinkedList.from([3, 4, 10]);
  });

  it('merge linked list recursion', () => {
    const nodes = [];
    const merge = mergeList(list1.head, list2.head);
    linkedListTraverse(merge, current => {
      nodes.push(current.val);
    });
    expect(nodes).toEqual(results);
  });

  it('merge linked list non-recursion', () => {
    const nodes = [];
    const merge = mergeListNR(list1.head, list2.head);
    linkedListTraverse(merge, current => {
      nodes.push(current.val);
    });
    expect(nodes).toEqual(results);
  });
});
