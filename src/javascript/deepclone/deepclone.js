import { isObject, isSet, isMap } from './../../shared/is';

/**
 * 深拷贝
 * @param {Object} target 待拷贝的对象
 */
export default function deepclone(target, map = new WeakMap()) {
  // 复制函数
  if (typeof target === 'function') {
    return target;
  }
  // 复制原始类型
  if (!isObject(target)) {
    return target;
  }

  const cloneTarget = getInit(target);
  // 检查循环引用
  if (map.has(target)) {
    return map.get(target);
  }
  map.set(target, cloneTarget);

  // 复制 Set
  if (isSet(target)) {
    return cloneSet(target, cloneTarget, map);
  }
  // 复制 Map
  if (isMap(target)) {
    return cloneMap(target, cloneTarget, map);
  }
  // 复制对象
  return cloneArrAndObj(target, cloneTarget, map);
}

/**
 * 获取初始的 cloneTarget
 * 比如数组是 new Array()，对象是 new Object，集合是 new Set()
 * @param {Object} target 待拷贝的对象
 */
function getInit(target) {
  const Constructor = target.constructor;
  return new Constructor();
}

function cloneSet(target, cloneTarget, map) {
  target.forEach(val => {
    cloneTarget.add(deepclone(val, map));
  });
  return cloneTarget;
}

function cloneMap(target, cloneTarget, map) {
  target.forEach((val, key) => {
    cloneTarget.set(key, deepclone(val, map));
  });
  return cloneTarget;
}

function cloneArrAndObj(target, cloneTarget, map) {
  // 遍历 target 复制属性
  // Reflect.ownKeys 是 Object.getOwnPropertyNames 与 Object.getOwnPropertySymbols 之和
  Reflect.ownKeys(target).forEach(key => {
    if (isObject(target[key])) {
      cloneTarget[key] = deepclone(target[key], map);
    }
    else {
      Object.defineProperty(cloneTarget, key, Object.getOwnPropertyDescriptor(target, key));
    }
  });

  return cloneTarget;
}
