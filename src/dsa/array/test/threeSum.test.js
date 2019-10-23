import { threeSum } from '../threeSum';

describe('three sum', () => {
  it('no result', () => {
    const nums = [1, 2, 3];
    const result = [];
    expect(threeSum(nums)).toEqual(result);
  });

  it('has result', () => {
    const nums = [1, 2, 3, 0 , -1, -2];
    const target = 1;
    const result = [ [ -1, 3, -2 ], [ 0, 2, -2 ], [ 0, 1, -1 ] ];
    expect(threeSum(nums, target)).toEqual(result);
  });
});

describe('three sum, throw error', () => {
  it('threeSum, throw error', () => {
    const err1 = 'nums must be an array';
    expect(() => threeSum()).toThrow(err1);
  });
});
