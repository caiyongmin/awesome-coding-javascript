import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
  it('binary search, not found', () => {
    expect(binarySearch()).toBe(-1);
    expect(binarySearch([], 2)).toBe(-1);
    expect(binarySearch([1, 3], 2)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 8)).toBe(-1);
  });

  it('binary search, current found', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 5)).toBe(4);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 6)).toBe(5);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 2)).toBe(1);
  });
});
