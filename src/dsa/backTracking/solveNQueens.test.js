import { solveNQueens } from './solveNQueens';

describe('solveNQueens', () => {
  it('solve n queens,  n < 4', () => {
    expect(solveNQueens(1)).toEqual([]);
    expect(solveNQueens(2)).toEqual([]);
    expect(solveNQueens(3)).toEqual([]);
  });

  it('solve n queens,  n = 4', () => {
    const result = [
      [
        '.Q..',
        '...Q',
        'Q...',
        '..Q.'
      ],
      [
        '..Q.',
        'Q...',
        '...Q',
        '.Q..'
      ]
    ];
    expect(solveNQueens(4)).toEqual(result);
  });

  it('solve n queens, n = 8', () => {
    const total = 92;
    expect(solveNQueens(8).length).toEqual(total);
  });
});
