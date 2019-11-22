import { distributionCookie } from './distributionCookie';

describe('distributionCookie', () => {
  it('distribution cookie: [1, 2, 3], [1, 1], result is 1', () => {
    const g = [1, 2, 3];
    const s = [1, 1];
    const result = 1;
    expect(distributionCookie(g, s)).toBe(result);
  });

  it('distribution cookie: [1, 2], [1, 2, 3], result is 2', () => {
    const g = [1, 2];
    const s = [1, 2, 3];
    const result = 2;
    expect(distributionCookie(g, s)).toBe(result);
  });
});
