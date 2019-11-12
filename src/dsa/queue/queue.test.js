import Queue from './queue';

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('exposes the public API', () => {
    expect(queue).toHaveProperty('enqueue');
    expect(queue).toHaveProperty('dequeue');
    expect(queue).toHaveProperty('front');
    expect(queue).toHaveProperty('rear');
    expect(queue).toHaveProperty('size');
    expect(queue).toHaveProperty('toString');
  });

  it('queue.enqueue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.toString()).toBe('1,2,3');
  });

  it('queue.dequeue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    expect(queue.toString()).toBe('3');
  });

  it('queue.front', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.front()).toBe(1);
  });

  it('queue.rear', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.rear()).toBe(2);
  });

  it('queue.size', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
  });
});
