/**
 * 一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级
 * 求该青蛙跳上一个 n 级的台阶总共有多少种跳法
 * 先后次序不同算不同的结果
 */

export function jumpFloor(n) {
  if (n <= 2) {
    return n;
  }

  return jumpFloor(n - 1) + jumpFloor(n - 2);
}

export function jumpFloorNR(n) {
  if (n <= 2) {
    return n;
  }

  let result = 0;
  let pre = 1;
  let current = 2;
  let i = 2;

  while (i < n) {
    result = pre + current;
    pre = current;
    current = result;
    i++;
  }

  return result;
}
