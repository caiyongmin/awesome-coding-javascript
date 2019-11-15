import currify from './currify';

describe('currify', () => {
  it('take a function as an argument', () => {
    const err = 'fn must be a function';
    expect(() => currify()).toThrow(err);
    expect(() => currify(() => {})).not.toThrow(err);
  });

  it('when fn arguments length is zero', () => {
    const sum = () => 1;
    const currySum = currify(sum);
    expect(currySum()).toBe(1);
    expect(() => currySum()(1)).toThrow('not a function');
  });

  it('when fn arguments length greate than zero', () => {
    const sum = (a, b, c) => a + b + c;
    const currySum = currify(sum);
    expect(currySum()(1)(2)(3)).toBe(6);
    expect(currySum(1)(2)(3)).toBe(6);
    expect(currySum(1, 2)(3)).toBe(6);
    expect(currySum(1, 2, 3)).toBe(6);
    expect(currySum(1, 2, 3, 4)).toBe(6);
    expect(() => currySum(1, 2, 3)(4)).toThrow('not a function');
  });
});
