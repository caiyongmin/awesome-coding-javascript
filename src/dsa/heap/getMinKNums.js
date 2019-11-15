import Heap from './heap';

/**
 * 获取一段数组里面最小的 k 个数
 * @param {Array} nums 输入的数组
 * @param {Number} k 个数
 */
export function getMinKNums(nums, k) {
  if (nums.length <= k) {
    return nums;
  }

  // 构造最小堆
  const heap = new Heap('min', nums);

  const results = [];
  let i = 0;
  while (i < k) {
    // 从堆顶获取元素，即可保证是数组中最小的数
    results.push(heap.extract());
    i++;
  }

  return results;
}
