export function twoSum1(arr, target) {
  if (typeof target !== 'number') {
    throw new Error('target must be a number');
  }

  if (!Array.isArray(arr)) {
    throw new Error('arr must be an array');
  }

  if (arr.length < 2) {
    throw new Error('arr length must max or equal two');
  }

  const set = new Set(arr);
  let index1;
  let index2;

  for (let i = 0; i < arr.length; i++) {
    const number1 = arr[i];
    const number2 = target - number1;

    if (set.has(number2)) {
      const index = arr.indexOf(number2);
      if (i === index) {
        continue;
      }
      index1 = i;
      index2 = index;
      break;
    }
  }

  if (index1 === undefined) {
    return [];
  }

  return [index1, index2];
}

export function twoSum2(arr, target) {
  if (typeof target !== 'number') {
    throw new Error('target must be a number');
  }

  if (!Array.isArray(arr)) {
    throw new Error('arr must be an array');
  }

  if (arr.length < 2) {
    throw new Error('arr length must max or equal two');
  }

  const data = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (data[target - num] !== undefined) {
      return [data[target - num], i];
    }
    else {
      data[num] = i;
    }
  }
  return [];
}

