import Heap from './heap';

describe('Heap', () => {
  let heap;

  beforeEach(() => {
    heap = new Heap();
  });

  it('exposes the public API', () => {
    expect(heap).toHaveProperty('add');
    expect(heap).toHaveProperty('extract');
    expect(heap).toHaveProperty('toString');
  });
});

describe('Max Heap', () => {
  let heap;

  beforeEach(() => {
    heap = new Heap();
  });

  it('maxHeap.add', () => {
    // 乱序加入
    heap.add(3);
    heap.add(1);
    heap.add(5);
    heap.add(2);
    heap.add(4);
    heap.add(6);
    expect(heap.toString()).toBe('6,4,5,1,2,3');
  });

  it('maxHeap.extract', () => {
    // 乱序加入
    heap.add(1);
    heap.add(4);
    heap.add(2);
    heap.add(5);
    heap.add(3);
    heap.add(6);
    expect(heap.extract()).toBe(6);
    expect(heap.toString()).toBe('5,4,2,1,3');
  });
});

describe('Min Heap', () => {
  let heap;

  beforeEach(() => {
    heap = new Heap('min');
  });

  it('minHeap.add', () => {
    // 乱序加入
    heap.add(3);
    heap.add(1);
    heap.add(5);
    heap.add(2);
    heap.add(4);
    heap.add(6);
    expect(heap.toString()).toBe('1,2,5,3,4,6');
  });

  it('minHeap.extract', () => {
    // 乱序加入
    heap.add(1);
    heap.add(4);
    heap.add(2);
    heap.add(5);
    heap.add(3);
    heap.add(6);
    expect(heap.extract()).toBe(1);
    expect(heap.toString()).toBe('2,3,6,5,4');
  });
});
