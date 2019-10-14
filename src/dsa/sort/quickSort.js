/**
 * 快速排序，它采用了一种分治的策略。
 * 时间复杂度 O(nlgn)
 * 快速排序是不稳定的
 * @param {Array} arr sorted array
 */
export default function quickSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an array.`);
  }

  if (!arr.length || arr.length === 1) {
    return arr;
  }

  const len = arr.length;
  const base = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < len; i++) {
    if (arr[i] < base) {
      left.push(arr[i]);
    }
    else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), base, ...quickSort(right)];
}
