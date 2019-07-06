import { isObject, isArray } from './../shared/is';

/**
 * 深拷贝
 * @param {Object} obj 带拷贝的对象
 */
export default function deepclone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const newObj = isArray(obj) ? [] : {};
  Object.keys(obj).forEach(key => {
    newObj[key] = isObject(obj[key]) ? deepclone(obj[key]) : obj[key];
  });

  return newObj;
}
