// use object record item and filter
export const unique1 = arr => {
  if (!Array.isArray(arr) || !arr.length) {
    return arr;
  }

  const record = {};
  return arr.filter(item => record[item] ? false : (record[item] = true));
};

// use indexOf and filter
export const unique2 = arr => {
  if (!Array.isArray(arr) || !arr.length) {
    return arr;
  }

  return arr.filter((item, index) => arr.indexOf(item) === index);
};

// use Set
export const unique3 = arr => {
  if (!Array.isArray(arr) || !arr.length) {
    return arr;
  }

  return [...new Set(arr)];
};

// use for..of and object record item
export const unique4 = arr => {
  if (!Array.isArray(arr) || !arr.length) {
    return arr;
  }

  const record = {};
  const result = [];
  for (let item of arr) {  // eslint-disable-line no-unused-vars
    if (!record[item]) {
      record[item] = item;
      result.push(item);
    }
  }
  return result;
};
