/**
 * N 皇后问题
 * 要在 n * n 的国际象棋棋盘中放 n 个皇后，使任意两个皇后都不能互相吃掉。
 * 规则：皇后能吃掉同一行、同一列、同一对角线的任意棋子。
 * 求所有的解。n = 8 是就是著名的八皇后问题了。
 */
export function solveNQueens(n) {
  // 当 n < 4 时，是没有有效解的
  if (n < 4) {
    return [];
  }

  const res = [];
  const curr = [];

  for (let i = 0; i < n; i++) {
    curr[i] = [];
    for (let j = 0; j < n; j++) {
      curr[i][j] = '.';
    }
  }

  backtrack(curr,res,0);
  return res;
}

function backtrack(curr,res,row) {
  if (curr.length === row) {
    const c = [];
    for (let i = 0; i < curr.length; i++) {
      c.push(curr[i].join(''));
    }
    res.push(c);
    return;
  }

  // 遍历每一行所有元素
  for (var col = 0; col < curr.length; col++) {
    // 检查该位置是否有效
    if(checkValid(row, col, curr)){
      curr[row][col] = 'Q';
      backtrack(curr, res, row + 1);
      curr[row][col] = '.';
    }
  }
}

function checkValid(row,col,curr) {
  // 检查列
  for (let i = 0; i < row; i++) {
    if(curr[i][col] === 'Q') return false;
  }
  // 检查对角线
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if(curr[i][j] === 'Q') return false;
  }
  // 检查斜对角线
  for (let i = row - 1, j = col + 1; i >= 0 && j < curr.length; i--, j++) {
    if (curr[i][j] === 'Q') {
      return false;
    }
  }

  return true;
}
