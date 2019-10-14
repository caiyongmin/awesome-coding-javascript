import { unique1, unique2, unique3, unique4 } from './../unique';

describe('remove duplicate', () => {
  it('unique, not a array', () => {
    const arr = '';
    expect(unique1(arr)).toBe('');
    expect(unique1(arr)).toBe(unique2(arr));
    expect(unique1(arr)).toBe(unique3(arr));
    expect(unique1(arr)).toBe(unique4(arr));
  });

  it('unique, array is empty', () => {
    const arr = [];
    expect(unique1(arr)).toEqual([]);
    expect(unique1(arr)).toEqual(unique2(arr));
    expect(unique1(arr)).toEqual(unique3(arr));
    expect(unique1(arr)).toEqual(unique4(arr));
  });

  it('unique', () => {
    const arr = [1, 2, 3, 3];
    expect(unique1(arr)).toEqual([1, 2, 3]);
    expect(unique1(arr)).toEqual(unique2(arr));
    expect(unique1(arr)).toEqual(unique3(arr));
    expect(unique1(arr)).toEqual(unique4(arr));
  });
});
