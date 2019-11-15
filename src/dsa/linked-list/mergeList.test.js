import { LinkedList, linkedListTraverse } from './linkedList';
import { mergeList, mergeListNR } from './mergeList';

describe('merge linked list', () => {
  let list1;
  let list2;
  const list1Arr = [1, 2, 5];
  const list2Arr = [3, 4, 10];
  const results = [1, 2, 3, 4, 5, 10];

  beforeEach(() => {
    list1 = LinkedList.from(list1Arr);
    list2 = LinkedList.from(list2Arr);
  });

  it('merge linked list recursion', () => {
    const nodes = [];
    const merge = mergeList(list1.head, list2.head);
    linkedListTraverse(merge, current => {
      nodes.push(current.val);
    });
    expect(nodes).toEqual(results);
  });

  it('merge linked list recursion, when l1 is empty', () => {
    const list1Empty = LinkedList.from([]);
    const nodes = [];
    const merge = mergeList(list1Empty.head, list2.head);
    linkedListTraverse(merge, current => {
      nodes.push(current.val);
    });
    expect(nodes).toEqual(list2Arr);
  });

  it('merge linked list recursion, when l2 is empty', () => {
    const list2Empty = LinkedList.from([]);
    const nodes = [];
    const merge = mergeList(list1.head, list2Empty.head);
    linkedListTraverse(merge, current => {
      nodes.push(current.val);
    });
    expect(nodes).toEqual(list1Arr);
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
