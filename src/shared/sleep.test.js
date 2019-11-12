import { getArrFlat } from './flat';

describe('sleep', () => {
  it('sleep resolve', () => {
    expect(getArrFlat([1, 2, [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
  });

  it('sleep reject', () => {
    expect(getArrFlat([1, 2, [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
  });
});
