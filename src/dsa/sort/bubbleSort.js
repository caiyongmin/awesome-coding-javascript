/**
 * 元素两两就近进行比较，发现次序相反则交换排序，直到没有这种次序相反情况出现
 * 最好情况下，数组已经有序，只需要遍历一遍，O(n)
 * 最坏情况下，需要 O(n^2)
 * @param {Array} arr sorted array
 */
export default function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an array.`);
  }

  if (!arr.length || arr.length === 1) {
    return arr;
  }

  const len =  arr.length;
  let temp;
  let complete = false;
  for (let i = 0; i < len; i++) {
    complete = true;
    for (let j = 1; j < len - i; j++) {
      if (arr[j - 1] > arr[j]) {
        complete = false;
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
    // 检查 complete 的值，如果此次遍历数没有发生交互顺序，则提前跳出循环，排序结束
    if (complete) {
      break;
    }
  }

  return arr;
}
