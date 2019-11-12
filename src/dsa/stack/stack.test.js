import Stack from './stack';

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('exposes the public API', () => {
    expect(stack).toHaveProperty('push');
    expect(stack).toHaveProperty('pop');
    expect(stack).toHaveProperty('peek');
    expect(stack).toHaveProperty('isEmpty');
    expect(stack).toHaveProperty('clear');
    expect(stack).toHaveProperty('size');
    expect(stack).toHaveProperty('toString');
  });

  it('stack.push', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.toString()).toBe('1,2,3');
  });

  it('stack.push', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    expect(stack.toString()).toBe('1');
  });

  it('stack.peek', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  it('stack.size', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
  });

  it('stack.isEmpty', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.isEmpty()).toBe(false);
  });

  it('stack.clear', () => {
    stack.push(1);
    stack.push(2);
    stack.clear();
    expect(stack.toString()).toBe('');
  });
});
