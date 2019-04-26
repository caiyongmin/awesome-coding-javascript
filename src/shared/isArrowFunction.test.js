import isArrowFunction from './isArrowFunction';

describe('is arrow function', () => {
  it('function () {} is not a arrow function', () => {
    const f = function () {}
    expect(isArrowFunction(f)).toBe(false);
  });

  it('() => {} is a arrow function', () => {
    const b = () => {};
    expect(isArrowFunction(b)).toBe(true);
  });
});
