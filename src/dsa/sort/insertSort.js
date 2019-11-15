/**
 * 插入排序把数组分为有序（开始为空）和无序两部分，遍历无序数组的每个元素，插入到有序数组的合适位置（也需要遍历有序数组）。
 * 时间复杂度 O(n^2)
 * @param {Array} arr sorted array
 */
export default function insertSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an array.`);
  }

  if (!arr.length || arr.length === 1) {
    return arr;
  }

  const len = arr.length;
  let minIndex;
  let min;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        minIndex = i;
        min = arr[i];
        while (minIndex > j) {
          arr[minIndex] = arr[minIndex - 1];
          minIndex--;
        }
        arr[j] = min;
        break;
      }
    }
  }

  return arr;
}
