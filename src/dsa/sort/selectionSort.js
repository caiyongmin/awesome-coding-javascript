/**
 * 每次将一个待排序的记录，按其关键字大小插入到前面已经排好序的子文件中的适当位置，直到全部记录插入完成为止
 * 把数组分为有序（开始为空）和无序两部分，遍历无序数组选择最小值，插入到有序数组尾部。
 * 时间复杂度 O(n^2)
 * 选择排序是不稳定的，假设 [A, B, C] --->  [2, 2, 1] ，即 （A=B=2, C=1）;
 * 第一趟比较完成后： [C, B, A] ---> [1, 2, 2]，所以选择排序时不稳定的
 * @param {Array} arr sorted array
 */
export default function selectionSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an array.`);
  }

  if (!arr.length || arr.length === 1) {
    return arr;
  }

  const len = arr.length;
  let sortedLen = 0;
  let min;
  let minIndex;
  while (sortedLen < len) {
    min = arr[sortedLen];
    minIndex = sortedLen;
    for (let i = sortedLen + 1; i < len; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }
    arr[minIndex] = arr[sortedLen];
    arr[sortedLen] = min;
    sortedLen++;
  }
  return arr;
}
