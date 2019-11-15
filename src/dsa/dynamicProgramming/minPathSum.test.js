import { minPathSum } from './minPathSum';

describe('minPathSum', () => {
  it('min path sum, 1 * 1', () => {
    const grid = [
      [1],
    ];
    expect(minPathSum(grid)).toBe(1);
  });

  it('min path sum, 2 * 2', () => {
    const grid = [
      [1, 3],
      [1, 5],
    ];
    expect(minPathSum(grid)).toBe(7);
  });

  it('min path sum, 3 * 3', () => {
    const grid = [
      [1, 3, 2],
      [1, 5, 1],
      [4, 2, 2]
    ];
    expect(minPathSum(grid)).toBe(9);
  });
});
