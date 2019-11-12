import { reOrderArray } from './reOrderArray';

describe('reOrder array', () => {
  it('odd numbers come before even numbers', () => {
    const arr = [ 1, 2, 3, 4, 5 ];
    const result = [ 1, 5, 3, 4, 2 ];
    expect(reOrderArray(arr)).toEqual(result);
  });
});
