import { LinkedList } from './linkedList';

describe('LinkedList', () => {
  const sourceArr = [1, 2, 3, 4, 5];

  it('LinkedList.from', () => {
    const linkedList = LinkedList.from(sourceArr);
    expect(linkedList.toArray()).toEqual(sourceArr);
    expect(linkedList.toString()).toEqual(sourceArr.join());
    expect(linkedList.size).toEqual(sourceArr.length);
  });

  it('linkedList.append', () => {
    const linkedList = LinkedList.from(sourceArr);
    linkedList.append(6);
    linkedList.append(10);
    expect(linkedList.toArray()).toEqual(sourceArr.concat([6, 10]));
    expect(linkedList.size).toEqual(sourceArr.length + 2);
  });

  it('linkedList.getNode', () => {
    const linkedList = LinkedList.from(sourceArr);
    const node = linkedList.getNode(2);
    expect(node.val).toEqual(3);
  });

  it('linkedList.insert', () => {
    const linkedList = LinkedList.from(sourceArr);
    linkedList.insert(0, 2);
    linkedList.insert(1, 3);
    expect(linkedList.toArray()).toEqual([2, 3, 1, 2, 3, 4, 5]);
  });

  it('linkedList.removeAt', () => {
    const linkedList = LinkedList.from(sourceArr);
    linkedList.removeAt(0);
    linkedList.removeAt(1);
    expect(linkedList.toArray()).toEqual([2, 4, 5]);
  });

  it('linkedList.indexOf', () => {
    const linkedList = LinkedList.from(sourceArr);
    expect(linkedList.indexOf(1)).toEqual(0);
    expect(linkedList.indexOf(3)).toEqual(2);
  });

  it('linkedList.remove', () => {
    const linkedList = LinkedList.from(sourceArr);
    linkedList.remove(1);
    linkedList.remove(3);
    expect(linkedList.toArray()).toEqual([2, 4, 5]);
  });
});
