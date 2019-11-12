export function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

export function isSet(obj) {
  return Object.prototype.toString.call(obj) === '[object Set]';
}

export function isMap(obj) {
  return Object.prototype.toString.call(obj) === '[object Map]';
}

export function isArray(arr) {
  return Array.isArray(arr);
}

export function isIterator(val) {
  return val && typeof val[Symbol.iterator] === 'function';
}

export function isArrayLike(obj) {
  const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

  // 先排除 window 对象
  if (obj === window) {
    return false;
  }

  if (
    !!obj  // 非负值
    && typeof obj === 'object'  // 类型是对象
    && typeof obj.length === 'number'  // 有 length 属性，且 length 是数字
    && obj.length >= 0  // length 大于等于 0
    && obj.length === Math.floor(obj.length) // length 是整数
    && obj.length <= MAX_ARRAY_INDEX  // length 最大值小于等于数组最大的索引号
  ) {
    // 当 length 大于 0 时，length - 1 属性值需要存在
    if (obj.length > 0) {
      const lastAttr = obj.length - 1;
      return Object.prototype.hasOwnProperty.call(obj, lastAttr);
    }

    return true;
  }

  return false;
}

export function isArrowFunction(func) {
  if (typeof func !== 'function') {
    return false;
  }

  const descriptors = Object.getOwnPropertyDescriptors(func);
  /**
   * function () {}
   * descriptors { length: {...}, name: {...}, prototype: {...} }
   *
   * () => {}
   * descriptors { length: {...}, name: {...} }
   */
  if (!descriptors['prototype']) {
    return true;
  }

  return false;
}
