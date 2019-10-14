function merge(left, right) {
  const record = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      record.push(left.shift());
    }
    else {
      record.push(right.shift());
    }
  }

  return left.length ? [...record, ...left] : [...record, ...right];
}

/**
 * 归并排序，也采用了一种分治的策略。
 * 归并排序首先把数组对半分，直到分成多个长度为1的原子数组（长度为1，必然有序）
 * 再把这些数组向上合并，保证每次合并后的数组都是有序的。
 * 时间复杂度 O(nlgn)
 * 插入排序是稳定的
 * @param {Array} arr sorted array
 */
export default function mergeSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an array.`);
  }

  if (!arr.length || arr.length === 1) {
    return arr;
  }

  const len = arr.length;
  const mid = Math.floor(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
