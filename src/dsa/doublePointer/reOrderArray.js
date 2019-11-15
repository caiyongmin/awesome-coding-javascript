/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序
 * 使得所有的奇数位于数组的前半部分
 * 所有的偶数位于数组的后半部分
 */

export function reOrderArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an array');
  }

  if (!arr.length || arr.length === 1) {
    return arr;
  }

  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    // 碰到偶数 start 前进一位
    while (arr[start] % 2 === 1) {
      start++;
    }
    // 碰到奇数 end 前进一位
    while(arr[end] % 2 === 0) {
      end--;
    }
    if (start < end) {
      [arr[end], arr[start]] = [arr[start], arr[end]];
    }
  }

  return arr;
}
