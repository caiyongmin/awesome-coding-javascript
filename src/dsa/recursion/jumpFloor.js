/**
 * 递归算法：
 * 递归算法将问题分类成同类的子问题，然后调用自身解决
 * 递归算法的重点是需要分析出递归结束条件以及继续递归调用的条件
 * 递归算法的优点是算法结构清晰，可读性强；
 * 缺点是它的运行需要较多次数的函数调用，如果调用层数比较深，对执行效率有一定影响。
 */

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

/**
 * 跳台阶
 * 非递归解法
 */
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
