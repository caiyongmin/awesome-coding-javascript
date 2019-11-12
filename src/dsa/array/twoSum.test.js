import { twoSum1, twoSum2 } from './twoSum';

describe('two sum', () => {
  it('has result', () => {
    const arr = [1, 2, 3];
    const target = 5;
    const result = [1, 2];
    expect(twoSum1(arr, target)).toEqual(result);
    expect(twoSum2(arr, target)).toEqual(result);
  });

  it('no result', () => {
    const arr = [1, 2, 3];
    const target = 1;
    const result = [];
    expect(twoSum1(arr, target)).toEqual(result);
    expect(twoSum2(arr, target)).toEqual(result);
  });
});

describe('two sum, throw error', () => {
  it('twoSum1 and twoSum2, throw error', () => {
    const err1 = 'target must be a number';
    const err2 = 'arr must be an array';
    const err3 = 'arr length must max or equal two';
    expect(() => twoSum1()).toThrow(err1);
    expect(() => twoSum1(1, 1)).toThrow(err2);
    expect(() => twoSum1([], 1)).toThrow(err3);

    expect(() => twoSum2()).toThrow(err1);
    expect(() => twoSum2(1, 1)).toThrow(err2);
    expect(() => twoSum2([], 1)).toThrow(err3);
  });
});
