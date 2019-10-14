/**
 * 元素两两就近进行比较，发现次序相反则交换排序，直到没有这种次序相反情况出现
 * 最好情况下，数组已经有序，只需要遍历一遍，O(n)
 * 最坏情况下，需要 O(n^2)
 * 冒泡排序是稳定的
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
    if (complete) {
      break;
    }
  }

  return arr;
}
