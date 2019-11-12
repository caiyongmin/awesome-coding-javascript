import { getArrFlat } from './flat';

describe('get array flat', () => {
  it('multi-dimensional array', () => {
    expect(getArrFlat([1, 2, [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
  });
});
