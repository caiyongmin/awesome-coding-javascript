/**
 * 给定一个包含非负整数的 m x n 网格
 * 请找出一条从左上角到右下角的路径
 * 使得路径上的数字总和为最小。
 */

import deepclone from './../../javascript/deepclone/deepclone';

/**
 * sum(0, n) = grid[m][n] + sum(m, n - 1)
 * sum(m, 0) = grid[m][n] + sum(m - 1, n)
 * sum(m, n) = grid[m][n] + Math.min(sum(m - 1, n), sum(m, n - 1))
 * @param {Array} grid 多维数组
 */
export function minPathSum(grid) {
  const result = deepclone(grid);
  const m = result.length - 1;
  const n = result[0].length - 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 && j !== 0) {
        result[i][j] = result[i][j] + result[i][j - 1];
      }
      else if (i !== 0 && j === 0) {
        result[i][j] = result[i][j] + result[i - 1][j];
      }
      else if (i !== 0 && j !== 0) {
        result[i][j] = result[i][j] + Math.min(result[i - 1][j], result[i][j - 1]);
      }
    }
  }

  return result[m][n];
}
