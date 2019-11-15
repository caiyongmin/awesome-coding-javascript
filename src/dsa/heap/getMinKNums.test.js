import { getMinKNums } from './getMinKNums';

describe('getMinKNums', () => {
  it('get min k nums', () => {
    const nums = [1, 10, 5, 4, 3];
    const k = 3;
    expect(getMinKNums(nums, k)).toEqual([1, 3, 4]);
  });

  it('get min k nums, nums length less than k', () => {
    const nums = [1, 10, 3];
    const k = 5;
    expect(getMinKNums(nums, k)).toEqual(nums);
  });
});
