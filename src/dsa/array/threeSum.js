function threeEqualZero(nums, third, results) {
  if (nums.length < 2) {
    return;
  }

  const record = new Set();
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    const first = nums[i];
    const second = nums[j];

    if (first + second + third > 0) {
      j = j - 1;
    }
    else if (first + second + third < 0) {
      i = i + 1;
    }
    else {
      if (!record.has(first)) {
        record.add(first);
        results.push([first, second, third]);
      }
      i = i + 1;
    }
  }
}

export function threeSum(nums) {
  if (!Array.isArray(nums)) {
    throw new Error('nums must be an array');
  }

  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);
  const results = [];
  const record = new Set();

  for (let i = 0; i < nums.length; i++) {
    const third = nums[i];
    if (record.has(third)) {
      continue;
    }
    record.add(third);
    threeEqualZero(nums.slice(i + 1), third, results);
  }

  return results;
}
