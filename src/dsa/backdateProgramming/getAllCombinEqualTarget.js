/**
 * 给定无序、不重复的一个数组，从中取出 n 个数，使其相加和为 target
 */

export function getAllCombinEqualTarget(arr, n, target, results = []) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an array');
  }

  if (typeof n !== 'number') {
    throw new Error('n must be a number');
  }

  if (typeof target !== 'number') {
    throw new Error('target must be a number');
  }

  if (arr.length === n) {
    const arrSum = arr.reduce((t, i) => t + i, 0);
    if (arrSum === target) {
      return arr;
    }
  }

  console.info(results);
}
