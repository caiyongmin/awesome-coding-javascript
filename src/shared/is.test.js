import { isArrayLike, isArrowFunction } from './is';

describe('judge array like', () => {
  it('arguments is array like object', () => {
    (function (x) {
      x === 1;
      expect(isArrayLike(arguments)).toBe(true);
    })(1);
  });

  it('window is not array like object', () => {
    expect(isArrayLike(window)).toBe(false);
  });
});

describe('is arrow function', () => {
  it('function () {} is not a arrow function', () => {
    const f = function () {};
    expect(isArrowFunction(f)).toBe(false);
  });

  it('() => {} is a arrow function', () => {
    const b = () => {};
    expect(isArrowFunction(b)).toBe(true);
  });
});
